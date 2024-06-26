document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var userId = document.getElementById('userId').value.trim();
    var password = document.getElementById('password').value.trim();
    
    if (!userId.endsWith('@stu.ac.in')) {
        alert('Enter your assigned student USER ID. User ID must end with @stu.ac.in');
        return; // Stop further execution
    }
    var userIdWithoutDomain = userId.split('@')[0];
    if (userId === '' || password === '') {
       alert('User ID and Password are required fields.');
    } else {
        localStorage.setItem('userId',  userIdWithoutDomain);
        // Redirect to home page (replace 'home.html' with the actual URL)
        window.location.href = 'home.htm';
    }
});

function forgotPassword() {
    // Implement your forgot password functionality here
    alert('Forgot Password functionality is not implemented yet.');
}
