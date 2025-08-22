function toggleMenu() {
    const menu = document.querySelector(".content-links");
    const icon = document.querySelector(".content-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function openPdf() {
    window.open(pdfPath, '_blank');
}