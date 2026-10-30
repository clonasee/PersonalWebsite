// shared theme toggle for every page
const toggleButton = document.getElementById("theme-toggle");

function setButtonLabel() {
  toggleButton.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
}

// apply saved theme on page load
try {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
} catch (e) {}
setButtonLabel();

toggleButton.onclick = function () {
  document.body.classList.toggle("dark");
  try {
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light",
    );
  } catch (e) {}
  setButtonLabel();
};
