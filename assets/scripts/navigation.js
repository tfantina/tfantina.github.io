function expandNavigation() {
  let headerWidth = document.getElementById("navStatus");
  let menuBar = document.getElementById("navigation");
  menuBar.className === "navigation"
    ? (menuBar.className += " responsive")
    : (menuBar.className = "navigation");
  headerWidth.className === "navStatus"
    ? (headerWidth.className += "-open")
    : (headerWidth.className = "navStatus");
}
