var app = angular.module('myApp', []);
app.controller('signupCtrl', function($scope) {
    // Initialize form data object
    $scope.formData = {
        name: '',
        sap: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: ''
    };

    // Regular expressions for pattern validation
    var sapPattern = /^[0-9]{10}$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   
    // Function to submit the form
    $scope.submitForm = function() {
        // Check if the form is invalid
        if ($scope.signupForm.$invalid) {
            // Display an alert with error message
            var errorMessage = 'Please fix the following errors:\n\n';
            if ($scope.signupForm.name.$error.required) {
                errorMessage += '- Name is required\n';
            }
            if ($scope.signupForm.sap.$error.required) {
                errorMessage += '- SAP is required\n';
            } else if ($scope.signupForm.sap.$error.pattern) {
                errorMessage += '- SAP should contain 10 digits\n';
            }
            if ($scope.signupForm.email.$error.required) {
                errorMessage += '- Email is required\n';
            } else if ($scope.signupForm.email.$error.pattern) {
                errorMessage += '- Email should be in valid format\n';
            }
            if ($scope.signupForm.password.$error.required) {
                errorMessage += '- Password is required\n';
            } 
            if ($scope.signupForm.confirmPassword.$error.required) {
                errorMessage += '- Confirm Password is required\n';
            } else if ($scope.signupForm.confirmPassword.$error.pattern) {
                errorMessage += '- Confirm Password must match Password\n';
            }
          
            alert(errorMessage);
        } 
        else{
        
            // Form is valid, submit the form
            alert('Form submitted successfully!');
            // You can add form submission logic here
        }
    };

    // Function to check SAP pattern
    $scope.checkSAPPattern = function(sap) {
        return sapPattern.test(sap);
    };

    // Function to check email pattern
    $scope.checkEmailPattern = function(email) {
        return emailPattern.test(email);
    };

    

    // Function to check if passwords match
    $scope.checkPasswordMatch = function(password, confirmPassword) {
        return password === confirmPassword;
    };
});
