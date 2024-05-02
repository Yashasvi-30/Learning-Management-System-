document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to edit profile button
    document.getElementById('edit-profile-btn').addEventListener('click', function() {
        // Display modal overlay
        document.getElementById('profile-modal').style.display = 'block';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('profile-modal')) {
            document.getElementById('profile-modal').style.display = 'none';
        }
    });

    // Prevent modal from closing when clicking inside it
    document.getElementById('profile-form').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Handle form submission
    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data
        var formData = new FormData(this);
        // Update profile box content with form data
        updateProfile(formData);
        // Close modal
        document.getElementById('profile-modal').style.display = 'none';
    });
});

function updateProfile(formData) {
    // Update profile box content with form data
    var profileBox = document.querySelector('.profile-box');
    profileBox.innerHTML = ''; // Clear previous content
    formData.forEach(function(value, key) {
        profileBox.innerHTML += `<p>${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</p>`;
    });
}
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
    // Get the close button element
    var closeButton = document.querySelector('.close');

    // Add click event listener to the close button
    closeButton.addEventListener('click', function() {
        // Hide the modal when the close button is clicked
        document.getElementById('profile-modal').style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Menu" option
    document.querySelector('.left-menu span:first-child').addEventListener('click', function() {
        // Redirect to home page
        window.location.href = 'home.htm';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to classes  option
    document.getElementById('classes').addEventListener('click', function() {
        // Redirect to profile page
        window.location.href = 'classes.html';
    });
});