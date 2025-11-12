const toggleSwitch = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem('theme');
if (savedTheme === "dark"){
  document.body.classList.add("dark");
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
  }else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme","light");
  }
});