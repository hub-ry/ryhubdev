const toggle = document.getElementById('themeToggle');
let themeIndex = 0;

const themes = [
  { bg: '#f0f0f0', text: '#222' ,chevron: '#732323ff'},
  { bg: '#7a2424ff', text: '#ebe0e0ff' , chevron: '#ecdcdcff'},
];

toggle.addEventListener('click', () => {
  themeIndex = (themeIndex + 1) % themes.length;
  const theme = themes[themeIndex];

  document.documentElement.style.setProperty('--bg-color', theme.bg);
  document.documentElement.style.setProperty('--text-color', theme.text);
  toggle.style.background = theme.chevron;

  // Add a little spin effect on click
  toggle.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    toggle.style.transform = '';
  }, 600);
});
