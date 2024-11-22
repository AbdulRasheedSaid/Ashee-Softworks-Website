// Function to detect and apply the system's theme preference
function applySystemTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }
  
  // Detect theme preference on page load
  document.addEventListener('DOMContentLoaded', applySystemTheme);
  
  // Listen for system theme changes and update the theme accordingly
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);
  
 

 // JavaScript to dynamically update the copyright year
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear(); // Get the current year
    const companyName = "Ashee Softworks"; // Ashee Softworks name
    const copyrightText = `© ${currentYear} ${companyName}. All Rights Reserved.`; // Constructing the copyright text
  
    // Insert into the HTML
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
      copyrightElement.textContent = copyrightText;
    }
  });
  
