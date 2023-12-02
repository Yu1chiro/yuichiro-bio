document.addEventListener("DOMContentLoaded", function () {
    // Check if dark mode preference is stored in localStorage
    const darkMode = localStorage.getItem("darkMode");
  
    // Function to enable dark mode
    function enableDarkMode() {
      document.body.classList.add("dark-mode");
      // Save dark mode preference to localStorage
      localStorage.setItem( "enabled");
    }
  
    // Function to disable dark mode
    function disableDarkMode() {
      document.body.classList.remove("dark-mode");
      // Save dark mode preference to localStorage
      localStorage.setItem("darkMode", null);
    }
  
    // Toggle dark mode on button click
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
      if (document.body.classList.contains("dark-mode")) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  
    // Set initial dark mode based on user preference
    if (darkMode === "enabled") {
      enableDarkMode();
    }
  });