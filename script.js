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