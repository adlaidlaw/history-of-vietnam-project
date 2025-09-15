/*
function showBoth() {
  document.getElementById("vn").classList.remove("hidden");
  document.getElementById("en").classList.remove("hidden");
}
function showVN() {
  document.getElementById("vn").classList.remove("hidden");
  document.getElementById("en").classList.add("hidden");
}
function showEN() {
  document.getElementById("vn").classList.add("hidden");
  document.getElementById("en").classList.remove("hidden");
}
*/
function showBoth() {
  document.getElementById("vn").style.display = "block";
  document.getElementById("en").style.display = "block";
}

function showVN() {
  document.getElementById("vn").style.display = "block";
  document.getElementById("en").style.display = "none";
}

function showEN() {
  document.getElementById("vn").style.display = "none";
  document.getElementById("en").style.display = "block";
}

window.addEventListener("load", function() {
  if (window.innerWidth <= 768) {
    showVN(); // show Vietnamese first
  } else {
    showBoth(); // desktop shows both
  }
});

// Load the header into the placeholder
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Attach hamburger toggle AFTER header is loaded
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
