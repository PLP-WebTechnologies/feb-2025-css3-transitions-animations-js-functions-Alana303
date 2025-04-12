// script.js

// Get elements
const box = document.getElementById('box');
const animateButton = document.getElementById('animateButton');
const saveButton = document.getElementById('savePreferences');
const loadButton = document.getElementById('loadPreferences');

// Function to trigger the animation
animateButton.addEventListener('click', () => {
  box.classList.add('animate'); // Add the class to start the animation
});

// Function to save user preferences (color) in localStorage
saveButton.addEventListener('click', () => {
  const colorPreference = box.style.backgroundColor; // Get the box color
  localStorage.setItem('colorPreference', colorPreference); // Save color to localStorage
  alert(`Color preference saved: ${colorPreference}`);
});

// Function to load color preference from localStorage
loadButton.addEventListener('click', () => {
  const savedColor = localStorage.getItem('colorPreference');
  if (savedColor) {
    box.style.backgroundColor = savedColor; // Apply saved color to the box
    alert(`Color loaded: ${savedColor}`);
  } else {
    alert('No color preference saved!');
  }
});
