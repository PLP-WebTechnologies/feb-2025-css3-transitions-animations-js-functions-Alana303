// script.js

// Get elements
const box = document.getElementById('box');
const triggerButton = document.getElementById('triggerAnimation');
const saveButton = document.getElementById('saveData');
const loadButton = document.getElementById('loadData');

// Event listener to trigger animation on button click
triggerButton.addEventListener('click', () => {
  box.classList.add('animate'); // Add the class to start the animation
});

// Event listener to save color preference to localStorage
saveButton.addEventListener('click', () => {
  const colorPreference = box.style.backgroundColor; // Get the box color
  localStorage.setItem('colorPreference', colorPreference); // Save color to localStorage
  alert(`Color preference saved: ${colorPreference}`);
});

// Event listener to load color preference from localStorage
loadButton.addEventListener('click', () => {
  const savedColor = localStorage.getItem('colorPreference');
  if (savedColor) {
    box.style.backgroundColor = savedColor; // Apply saved color to the box
    alert(`Color loaded: ${savedColor}`);
  } else {
    alert('No color preference saved!');
  }
});
