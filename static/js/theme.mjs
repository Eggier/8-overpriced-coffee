const defaultState = root.classList.contains("dark");

themeSwitch.checked = defaultState;
root.classList.value = localStorage.getItem("theme");
themeSwitch.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("theme", root.classList.value);
});
