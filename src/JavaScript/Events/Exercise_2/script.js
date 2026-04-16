const ship = document.getElementById("ship");

document.addEventListener("mousemove", (event) => {
    const shipRect = ship.getBoundingClientRect();
    
    let newX = event.clientX - shipRect.width / 2;
    
    const maxX = window.innerWidth - shipRect.width;

    if (newX < 0) newX = 0;
    if (newX > maxX) newX = maxX;

    ship.style.left = `${newX}px`;
});
