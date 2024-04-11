window.onload = function () {
    document.getElementById('changepass-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();
        var emailm = document.getElementById('email').value.trim();
        var confirmPass = document.getElementById('confirmedpassword').value.trim();

        var usernameRegex = /^[a-zA-Z]+[a-zA-Z0-9_]*$/;
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$]).{8,}$/;
        var emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        

        if (!usernameRegex.test(username)) {
            alert('Invalid username');
            return;
        }
        if (!emailRegex.test(emailm)) {
            alert('Invalid email');
            return;
        }

        if (!passwordRegex.test(password)) {
            alert('Invalid password');
            return;
        }
        if (confirmPass != password) {
            alert('Confirmed Password is not matching the initial password');
            return;
        }
        alert('Form submitted successfully');
        this.submit();
    });
};