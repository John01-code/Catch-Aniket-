document.addEventListener("DOMContentLoaded", () => {
    const rabbit = document.getElementById("rabbit");
    const rabbitContainer = document.getElementById("rabbit-container");
    const messageContainer = document.getElementById("message-container");
    const backgroundMusic = document.getElementById("background-music");
 
    function randomPosition() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        return { x, y };
    }
 
    function moveRabbit() {
        const { x, y } = randomPosition();
rabbitContainer.style.transform = `translate(${x}px, ${y}px)`;
    }
 
    setInterval(moveRabbit, 2000);
 
    rabbitContainer.addEventListener("click", () => {
        clearInterval(moveRabbit);
        rabbit.src = "rabbit-with-rose.png";
        
        createEffects();
        
messageContainer.style.display = "block";
backgroundMusic.play();
    });
 
    function createEffects() {
        for (let i = 0; i < 20; i++) {
            createRose();
            createKiss();
        }
    }
 
    function createRose() {
        const rose = document.createElement("img");
        rose.src = "rose.png";
        rose.className = "rose";
        document.body.appendChild(rose);
 
rose.style.left = `${Math.random() * window.innerWidth}px`;
rose.style.top = `${window.innerHeight}px`;
 
        rose.animate([
            { transform: "translateY(0)", opacity: 1 },
            { transform: "translateY(-500px)", opacity: 0 }
        ], { duration: 3000, easing: "ease-in-out" });
 
        setTimeout(() => rose.remove(), 3000);
    }
 
    function createKiss() {
        const kiss = document.createElement("img");
        kiss.src = "kiss.png";
        kiss.className = "kiss";
        document.body.appendChild(kiss);
 
kiss.style.left = `${Math.random() * window.innerWidth}px`;
kiss.style.top = `${window.innerHeight}px`;
 
        kiss.animate([
            { transform: "translateY(0)", opacity: 1 },
            { transform: "translateY(-400px)", opacity: 0 }
        ], { duration: 3000, easing: "ease-in-out" });
 
        setTimeout(() => kiss.remove(), 3000);
    }
});
has context menu