let bananaMode = false;
function enableBananaMode() {
  if (bananaMode) return;
  bananaMode = true;
  document.getElementById("bananamode").textContent =
    "Enable Chief Banana Mode (🐵)";

  // Simulate particle physics explosion with the banana emoji on click
  function expelBanana(e) {
    const x = e.clientX;
    const y = e.clientY + window.scrollY;

    const banana = document.createElement("span");
    banana.textContent = "🍌";
    banana.style.position = "absolute";
    banana.style.left = `${x}px`;
    banana.style.top = `${y}px`;
    banana.style.fontSize = `${1 + Number(Math.random().toFixed(2))}rem`;
    banana.style.zIndex = 9999;
    banana.style.pointerEvents = "none";
    document.body.appendChild(banana);

    const velocity = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 8,
    };

    const gravity = 0.1;
    const angularSpeed = Math.random() * 36;

    const update = () => {
      velocity.y += gravity;
      banana.style.left = `${banana.offsetLeft + velocity.x}px`;
      banana.style.top = `${banana.offsetTop + velocity.y}px`;
      const currentRotation = parseInt(banana.style.rotate) || 0;
      banana.style.rotate = `${currentRotation + angularSpeed}deg`;
    };

    const interval = setInterval(update, 10);

    setTimeout(() => {
      clearInterval(interval);
      document.body.removeChild(banana);
    }, 1000 + Math.random() * 1000);
  }

  document.body.addEventListener("click", (e) => {
    const bananaCount = Math.floor(Math.random() * 5) + 2;

    for (let i = 0; i < bananaCount; i++) {
      expelBanana(e);
    }
  });
}
