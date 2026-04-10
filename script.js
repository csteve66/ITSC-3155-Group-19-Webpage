/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    const card = bio.parentElement;
    const photos = card.querySelector(".extra-photos");
    const links = card.querySelector(".bio-links");
    // Toggle between showing and hiding the bio section
    const isVisible = bio.style.display === "block";
    bio.style.display = isVisible ? "none" : "block";
    photos.style.display = isVisible ? "none" : "flex";
    links.style.display = isVisible ? "none" : "block";
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    // Display the bios section and hide the vision section
    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    }
    // Display the vision section and hide the bios section
    else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}
