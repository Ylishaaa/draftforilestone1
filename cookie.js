// cookies.js

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + expires;
}

// Function to get a cookie value
function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length);
        }
    }
    return null;
}

// Function to check and display username from cookies
function checkUsername() {
    let username = getCookie("username");
    if (username) {
        document.getElementById("greeting").innerText = "Welcome back, " + username + "!";
    }
}

// Function to set username when user submits
function setUsername() {
    let username = document.getElementById("username").value;
    if (/^[a-zA-Z0-9]+$/.test(username)) {
        setCookie("username", username, 7); // Store for 7 days
        document.getElementById("greeting").innerText = "Welcome, " + username + "!";
    } else {
        alert("Username can only contain letters and numbers.");
    }
}
