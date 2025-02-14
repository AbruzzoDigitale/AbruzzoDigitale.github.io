document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".scroll-content");

    let isDragging = false;
    let startY, scrollStart;

    // 🖱️ Drag Scroll con il mouse e il touch
    scrollContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startY = e.clientY;
        scrollStart = scrollContainer.scrollTop;
        scrollContainer.style.cursor = "grabbing";
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isDragging = false;
        scrollContainer.style.cursor = "grab";
    });

    scrollContainer.addEventListener("mouseup", () => {
        isDragging = false;
        scrollContainer.style.cursor = "grab";
    });

    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        let moveY = e.clientY - startY;
        scrollContainer.scrollTop = scrollStart - moveY;
    });

    // ✅ Abilita lo scroll con il mouse (rotella)
    scrollContainer.addEventListener("wheel", (e) => {
        scrollContainer.scrollTop += e.deltaY * 0.8; // Rende lo scroll più fluido
    });

    // 📱 Supporto al Drag Scroll su dispositivi mobili (Touch Scroll)
    scrollContainer.addEventListener("touchstart", (e) => {
        isDragging = true;
        startY = e.touches[0].clientY;
        scrollStart = scrollContainer.scrollTop;
    });

    scrollContainer.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        let moveY = e.touches[0].clientY - startY;
        scrollContainer.scrollTop = scrollStart - moveY;
    });

    scrollContainer.addEventListener("touchend", () => {
        isDragging = false;
    });
});
