// Main JavaScript file
// In a real-world scenario, this is where you would add dynamic functionality.

// Example: Add a last-modified date to the footer.
document.addEventListener('DOMContentLoaded', function() {
    const lastModified = new Date(document.lastModified);
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML += `<br>Last updated: ${lastModified.toLocaleDateString()}`;
    }
});