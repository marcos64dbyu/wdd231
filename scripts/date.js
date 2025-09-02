document.addEventListener('DOMContentLoaded', () => {
    // Current year
    const spanyear = document.getElementById('currentyear');

    if (spanyear) {
        const currentyear = new Date().getFullYear();
        spanyear.textContent = currentyear;
    }

    // last modified date
    const lastModified = document.getElementById('lastModified');
    if (lastModified) {
        lastModified.textContent = `Last modified: ${formatDate(document.lastModified)}`;
    }
});

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
