let toggleNavStatus = false; // Sets variable to show that sidebar is closed

// Function that toggles nav open and closed
const toggleNav = function() {
  // set variables that get HTML items by class and store them
  let getSidebar = document.querySelector('.nav-sidebar');
  let getSidebarList = document.querySelector('.nav-sidebar ul');
  let getSidebarTitle = document.querySelector('.nav-sidebar span');
  let getSidebarLinks = document.querySelectorAll('.nav-sidebar a');

  // If navbar is closed, changes css sytling to open nav and show items
  if (toggleNavStatus === false) {
    // Updates the style of the navbar
    getSidebarList.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    // Sets the navbar status to open
    toggleNavStatus = true;
  }

  // If navbar is open, changes css styling to close nav and hide items
  else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarList.style.visibility = "hidden";
    // Sets the navbar status to closed
    toggleNavStatus = false;
  }
}
