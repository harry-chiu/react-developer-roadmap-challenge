let collapse = false;

let dropdown = document.querySelector("#nav-dropdown");

let dropdownButton = document.querySelector("#nav-dropdown-button");
dropdownButton.addEventListener("click", () => {
    if (collapse) {
        dropdown.className = "nav-mobile__dropdown";
    } else {
        dropdown.className = "nav-mobile__dropdown nav-mobile__dropdown--active";
    };
    collapse = !collapse;
});