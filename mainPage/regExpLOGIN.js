window.onload = function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();

        var usernameRegex = /^[a-zA-Z]+[a-zA-Z0-9_]*$/;
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$]).{8,}$/;

        if (!usernameRegex.test(username)) {
            alert('Invalid username');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Invalid password');
            return;
        }
        alert('Form submitted successfully');
        this.submit();
    });
};