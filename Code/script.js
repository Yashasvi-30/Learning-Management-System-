document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var userId = document.getElementById('userId').value.trim();
    var password = document.getElementById('password').value.trim();
    if (userId === '' || password === '') {
       alert('User ID and Password are required fields.');
    } else {
        localStorage.setItem('userId', userId);
        // Redirect to home page (replace 'home.html' with the actual URL)
        window.location.href = 'home.htm';
    }
});

function forgotPassword() {
    // Implement your forgot password functionality here
    alert('Forgot Password functionality is not implemented yet.');
}
