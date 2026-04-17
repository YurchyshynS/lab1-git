import { addTask } from './app.js';

const input = document.getElementById('task-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
ффффффффф
let tasks = [];

btn.addEventListener('click', () => {
  const name = input.value.trim();
  if (!name) return;

  tasks = addTask(tasks, name);

  const li = document.createElement('li');
  li.textContent = name;
  list.appendChild(li);

  input.value = '';
});