const noBtn = document.querySelector(".no-btn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100); // Random X position
    const y = Math.random() * (window.innerHeight - 50); // Random Y position

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});