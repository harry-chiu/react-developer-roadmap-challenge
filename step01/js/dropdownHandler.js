class DropdownHandler {
    constructor() {
        this.collapse = false;
        this.dropdown = document.querySelector("#nav-dropdown");
        this.dropdownButton = document.querySelector("#nav-dropdown-button");
        this.navMobileButtons = document.querySelectorAll(".nav-mobile__item");
    };

    hideDropdown = () => {
        this.dropdown.className = "nav-mobile__dropdown";
        this.collapse = false;
    };

    showDropdown = () => {
        this.dropdown.className = "nav-mobile__dropdown nav-mobile__dropdown--active";
        this.collapse = true;
    };

    bindHideDropdown = () => {
        this.navMobileButtons.forEach(button => button.addEventListener("click", this.hideDropdown));
    };

    bindToggleCollapse = () => {
        this.dropdownButton.addEventListener("click", () => {
            if (this.collapse) {
                this.hideDropdown();
            } else {
                this.showDropdown();
            };
        });
    };
};

const dropdownHandler = new DropdownHandler();
dropdownHandler.bindHideDropdown();
dropdownHandler.bindToggleCollapse();