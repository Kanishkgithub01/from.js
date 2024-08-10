document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form elements
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If everything is valid, submit the form or proceed with further logic
    alert('Form is valid and ready for submission!');
    // Optionally, you can manually submit the form here if needed:
    // event.target.submit();
});
