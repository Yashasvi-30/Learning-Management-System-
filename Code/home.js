document.addEventListener('DOMContentLoaded', function() {
    var userId = localStorage.getItem('userId');
    if (userId) {
        document.getElementById('username').textContent = userId;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to logout option
    document.getElementById('logout').addEventListener('click', function() {
        // Display confirmation dialog box
        var confirmed = confirm('Are you sure you want to logout?');
        // If user confirms, redirect to login page
        if (confirmed) {
            // Remove user ID from localStorage
            localStorage.removeItem('userId');
            // Redirect to login page
            window.location.href = 'index.html';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to profile option
    document.getElementById('profile').addEventListener('click', function() {
        // Redirect to profile page
        window.location.href = 'profile.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Menu" option
    document.querySelector('.left-menu span:first-child').addEventListener('click', function() {
        // Redirect to home page
        window.location.href = 'home.htm';
    });
});

var slideIndex = 1;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);


document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to classes  option
    document.getElementById('classes').addEventListener('click', function() {
        // Redirect to profile page
        window.location.href = 'classes.html';
    });
});
function openModal(school) {
    var modal = document.getElementById(school + 'Modal');
    modal.style.display = "block";
}

function closeModal(school) {
    var modal = document.getElementById(school + 'Modal');
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}