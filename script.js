const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Add event listener for the "Register" button
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Add event listener for the "Login" button
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
