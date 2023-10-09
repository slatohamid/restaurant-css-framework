// Function to set a cookie for accepted cookies
function setAcceptedCookies() {
  Cookies.set("cookiesAccepted", "true", { expires: 365 }); // Expires in 365 days
  document.getElementById("cookieNotification").style.display = "none";
}

// Check if the 'cookiesAccepted' cookie is set
function checkCookiesAccepted() {
  return Cookies.get("cookiesAccepted") === "true";
}

// Show or hide the cookie notification based on the cookie
if (!checkCookiesAccepted()) {
  document.getElementById("cookieNotification").style.display = "block";
}

// Handle the 'Accept' button click
document.getElementById("acceptCookies").addEventListener("click", function () {
  setAcceptedCookies();
});
