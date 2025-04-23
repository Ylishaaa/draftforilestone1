// Sets a cookie with name, value, and optional expiry in days (defaults to 365)
function setCookie(cookieName, cookieValue, daysToExpire = 365, path = "/") {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)}; ${expires}; path=${path}`;
}

// Gets the value of a specific cookie
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let cookie of cookieArray) {
        cookie = cookie.trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Checks if a username is stored in cookies and updates the greeting
function checkUsername() {
    const username = getCookie("username");
    if (username) {
        document.getElementById("greeting").innerText = "Welcome back, " + username + "!";
    }
}

// Saves the username as a cookie and updates the greeting
function setUsername() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    if (/^[a-zA-Z0-9]+$/.test(username)) {
        setCookie("username", username);
        document.getElementById("greeting").innerText = "Welcome, " + username + "!";
    } else {
        alert("Username can only contain letters and numbers.");
    }
}
