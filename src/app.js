// Task Manager — бізнес-логіка

export function addTask(tasks, taskName) {
  if (!taskName || taskName.trim() === "") return tasks;
  return [...tasks, { id: Date.now(), name: taskName.trim(), done: false }];
}

export function removeTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

export function toggleTask(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
}

export function getActiveTasks(tasks) {
  return tasks.filter(task => !task.done);
}

export function getCompletedTasks(tasks) {
  return tasks.filter(task => task.done);
}

// Відображення змінної оточення
const badge = document.getElementById('env-badge');
if (badge) {
  badge.textContent = 'Режим: ' + import.meta.env.VITE_APP_STATUS;
  badge.style.cssText = 'padding:4px 10px;background:#e0f0ff;font-size:12px;text-align:center;';
}
