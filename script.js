/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    const card = bio.parentElement;
    const photos = card.querySelector(".extra-photos");
    const links = card.querySelector(".member-links");
    const isVisible = bio.style.display === "block";

    bio.style.display = isVisible ? "none" : "block";

    if (photos) {
        photos.style.display = isVisible ? "none" : "grid";
    }
    if (links) {
        links.style.display = isVisible ? "none" : "flex";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    } else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}