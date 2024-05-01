/**function myLangSelect() {
    var x = document.getElementById("lang-select");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}*/
document.addEventListener('DOMContentLoaded', function () {
    // Get the viewport width and height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Check if viewport height is greater than viewport width
    if (viewportHeight > viewportWidth) {
        const ulElement = document.createElement('ul');
        const footerList = document.getElementById('footer-list');
        footerList.appendChild(ulElement);
        ulElement.classList.add('empty-size');
    }
});