function setActive(buttonId) {
  // Remove 'active' from all buttons
  document.querySelectorAll(".controls button").forEach(btn => {
    btn.classList.remove("active");
  });

  // Add 'active' to the clicked button
  document.getElementById(buttonId).classList.add("active");
}

function showBoth() {
  document.getElementById("vn").style.display = "block";
  document.getElementById("en").style.display = "block";
  setActive("btnBoth");
}

function showVN() {
  document.getElementById("vn").style.display = "block";
  document.getElementById("en").style.display = "none";
  setActive("btnVN");
}

function showEN() {
  document.getElementById("vn").style.display = "none";
  document.getElementById("en").style.display = "block";
  setActive("btnEN");
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
