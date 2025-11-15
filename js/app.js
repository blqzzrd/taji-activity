/* app.js
  Shared JavaScript for the easyActivity Dashboard
*/

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's path
    const currentPath = window.location.pathname.split('/').pop();

    // Determine the active link
    let activeLink = currentPath;
    if (currentPath === "" || currentPath === "index.html") {
        activeLink = "home.html";
    }

    // Find all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through them and add the 'active' class to the matching link
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === activeLink) {
            link.classList.add('active');
        }
    });
});
