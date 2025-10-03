// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dark mode toggle with persistence
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
if ((savedTheme === 'dark') || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Tiny toast helper
const toastEl = document.getElementById('toast');
function toast(msg = 'Hello! 👋', timeout = 1800){
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), timeout);
}

// Demo buttons
document.getElementById('helloBtn').addEventListener('click', () => toast('Welcome to the demo!'));

let count = 0;
const countEl = document.getElementById('count');
document.getElementById('incBtn').addEventListener('click', () => { count++; countEl.textContent = count; });
document.getElementById('decBtn').addEventListener('click', () => { count--; countEl.textContent = count; });
