const passwordInput = document.getElementById("password");
const eye = document.querySelector(".eye-icon");

function clickPassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eye.innerHTML = '<img src="eye-off.svg">'
    } else {
        passwordInput.type = 'password';
        eye.innerHTML = '<img src="eye-open.svg">'
    }
}