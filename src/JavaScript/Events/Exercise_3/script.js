const ship = document.getElementById("ship");

document.addEventListener("mousemove", (event) => {
    const shipRect = ship.getBoundingClientRect();
    
    let newX = event.clientX - shipRect.width / 2;
    
    const maxX = window.innerWidth - shipRect.width;

    if (newX < 0) newX = 0;
    if (newX > maxX) newX = maxX;

    ship.style.left = `${newX}px`;
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        shoot();
    }
});

function shoot() {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");

    const shipEl = ship.getBoundingClientRect();
    
    bullet.style.left = `${shipEl.left + shipEl.width / 2 - 3}px`;
    bullet.style.top = `${shipEl.top}px`;

    document.body.appendChild(bullet);
    
    const interval = setInterval(() => {
        const bulletEl = bullet.getBoundingClientRect();

        if (bulletEl.bottom < 0) {
            bullet.remove();
            clearInterval(interval);
        } else {
            bullet.style.top = `${bulletEl.top - 8}px`;
        }
    }, 16.667);
}