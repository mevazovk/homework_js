document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    let valid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name) {
        document.getElementById("nameError").textContent = "Name cannot be empty.";
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Email must contain '@' and '.'.";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
});
