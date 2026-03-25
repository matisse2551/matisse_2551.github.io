// Mode sombre
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = "Désactiver le mode sombre";
    } else {
        darkModeToggle.textContent = "Activer le mode sombre";
    }
});

// Chronomètre
let time = 0;
let interval;

function formatTime(t) {
    let h = String(Math.floor(t / 3600)).padStart(2, '0');
    let m = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
    let s = String(t % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function start() {
    interval = setInterval(() => {
        time++;
        document.getElementById("time").textContent = formatTime(time);
    }, 1000);
}

function reset() {
    clearInterval(interval);
    time = 0;
    document.getElementById("time").textContent = formatTime(time);
    start();
}

start();

document.getElementById("resetChronometer").addEventListener("click", reset);

// Date et heure
function updateDate() {
    let now = new Date();
    document.getElementById("currentDate").textContent =
        "Nous sommes le " + now.toLocaleString("fr-FR");
}

updateDate();
setInterval(updateDate, 1000);