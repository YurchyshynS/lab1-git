import { describe, it, expect, vi } from 'vitest';
import {
  addTask, removeTask, toggleTask,
  getActiveTasks, getCompletedTasks
} from '../app.js';

describe('addTask', () => {
  it('додає нову задачу до списку', () => {
    const result = addTask([], 'Купити каву');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Купити каву');
  });

  it('не додає порожню задачу', () => {
    const result = addTask([], '');
    expect(result).toHaveLength(0);
  });

  it('не додає задачу з пробілів', () => {
    const result = addTask([], '   ');
    expect(result).toHaveLength(0);
  });

  it('обрізає пробіли з назви задачі', () => {
    const result = addTask([], '  Зробити лабу  ');
    expect(result[0].name).toBe('Зробити лабу');
  });
});

describe('removeTask', () => {
  it('видаляє задачу за id', () => {
    const tasks = [{ id: 1, name: 'Тест', done: false }];
    const result = removeTask(tasks, 1);
    expect(result).toHaveLength(0);
  });
});

describe('toggleTask', () => {
  it('змінює статус задачі з false на true', () => {
    const tasks = [{ id: 1, name: 'Тест', done: false }];
    const result = toggleTask(tasks, 1);
    expect(result[0].done).toBe(true);
  });
});

describe('getActiveTasks', () => {
  it('повертає тільки незавершені задачі', () => {
    const tasks = [
      { id: 1, name: 'A', done: false },
      { id: 2, name: 'B', done: true }
    ];
    expect(getActiveTasks(tasks)).toHaveLength(1);
  });
});

describe('getCompletedTasks', () => {
  it('повертає тільки завершені задачі', () => {
    const tasks = [
      { id: 1, name: 'A', done: true },
      { id: 2, name: 'B', done: false }
    ];
    expect(getCompletedTasks(tasks)).toHaveLength(1);
  });
});

// Mock приклад
describe('Mock приклад', () => {
  it('викликає колбек при додаванні задачі', () => {
    const mockCallback = vi.fn();
    const tasks = addTask([], 'Нова задача');
    mockCallback(tasks);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(tasks);
  });
});