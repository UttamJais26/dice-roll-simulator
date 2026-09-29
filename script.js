// Select the button and body elements
const button = document.getElementById('changeBtn');
const body = document.body;
const title = document.getElementById('title');

// Add a click event listener

 button.addEventListener('click', () => {
// Toggle the dark-mode class defined in new.css
 body.classList.toggle('dark-mode');

  // Change the text dynamically based on current mode
  if (body.classList.contains('dark-mode')) {
    title.textContent = '🌙 Dark Mode Active!';
    button.textContent = 'Switch to Light Theme';
  } else {
    title.textContent = '☀️ Light Mode Active!';
    button.textContent = 'Switch to Dark Theme';
  }
});