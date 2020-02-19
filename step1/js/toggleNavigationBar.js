

let collapse = false;

hideDropdown = () => {
    let dropdown = document.querySelector("#nav-dropdown");
    dropdown.className = "nav-mobile__dropdown";
    collapse = false;
};

showDropdown = () => {
    let dropdown = document.querySelector("#nav-dropdown");
    dropdown.className = "nav-mobile__dropdown nav-mobile__dropdown--active";
    collapse = true;
};

let dropdownButton = document.querySelector("#nav-dropdown-button");
dropdownButton.addEventListener("click", () => {
    if (collapse) {
        hideDropdown();
    } else {
        showDropdown();
    };
    collapse = !collapse;
});

let navMobileButtons = document.querySelectorAll(".nav-mobile__item");
navMobileButtons.forEach(button => button.addEventListener("click", hideDropdown));