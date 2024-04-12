 // Get the current page URL
 var currentPage = window.location.pathname;

 // Select all navigation links
 var navLinks = document.querySelectorAll('.navlink');
 
 // Loop through each navigation link
 navLinks.forEach(function(link) {
     // Check if the link's href matches the current page URL
     if (link.getAttribute('href') === currentPage) {
         // Add the 'active' class to the matching link
         link.classList.add('nav-active');
     }
 
     // Special case for Gallery link
     if (currentPage.includes("corporate-event.html") || currentPage.includes("fun-event.html")) {
         // Add the 'active' class to the Gallery link
         document.querySelector('.dropdown-toggle').classList.add('nav-active');
     }
 });
 