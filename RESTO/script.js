function showDetails(restaurantId) {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mainMenuButton").style.display = "block"; // Show Main Menu button

    let details = document.getElementsByClassName("restaurant-details");
    for (let i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }

    document.getElementById(restaurantId).style.display = "block";
}

function showMainMenu() {
    document.getElementById("mainMenu").style.display = "flex";
    document.getElementById("mainMenuButton").style.display = "block"; // Keep Main Menu button visible

    let details = document.getElementsByClassName("restaurant-details");
    for (let i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
}
