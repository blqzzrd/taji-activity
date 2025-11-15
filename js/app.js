/* app.js
  Shared JavaScript for the easyActivity Dashboard
  VERSION 2.0 - Now with sub-tab logic
*/

document.addEventListener("DOMContentLoaded", function() {
    
    // --- Main Navigation Handler ---
    try {
        const currentPath = window.location.pathname.split('/').pop();
        let activeLink = currentPath;

        if (currentPath === "" || currentPath === "index.html") {
            activeLink = "home.html";
        }

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === activeLink) {
                link.classList.add('active');
            }
        });
    } catch (e) {
        console.error("Error in main navigation handling:", e);
    }

    // --- Sub-Tabbed Content Handler ---
    // This will find any element with 'data-tab-toggle' and make it work
    try {
        const tabToggles = document.querySelectorAll('[data-tab-toggle]');

        tabToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const targetId = toggle.getAttribute('data-tab-toggle');
                const targetContent = document.getElementById(targetId);

                if (!targetContent) {
                    console.warn(`No tab content found with ID: ${targetId}`);
                    return;
                }

                // Find the parent 'sub-nav' or other container to de-activate siblings
                const toggleContainer = toggle.closest('.sub-nav-links');
                if (toggleContainer) {
                    toggleContainer.querySelectorAll('.sub-nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                }
                
                // Find the parent content container to de-activate sibling content
                const contentContainer = targetContent.parentElement;
                if (contentContainer) {
                    contentContainer.querySelectorAll('.sub-tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                }

                // Activate the clicked tab and its content
                toggle.classList.add('active');
                targetContent.classList.add('active');
            });
        });

        // Activate the first tab by default if it exists
        const firstTab = document.querySelector('.sub-nav-link[data-tab-toggle]');
        if (firstTab) {
            firstTab.click();
        }

    } catch (e) {
        console.error("Error in sub-tab handling:", e);
    }

});
