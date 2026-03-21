let nivel = 0;
let boas = 0;
let ruins = 0;

let dano = 0;
const danoMax = 4;

const vaso = document.getElementById("vaso");
const interior = document.getElementById("interior");

document.querySelectorAll(".palavra").forEach(p => {

    p.addEventListener("click", interagir);
    p.addEventListener("touchstart", interagir);

});

function interagir(e) {

    e.preventDefault();

    if (this.style.display === "none") return;

    if (this.classList.contains("positiva")) {
        nivel += 15;
        boas++;

        interior.style.background = "rgba(46,125,50,0.6)";

        if (dano > 0) dano--;

    } else {
        nivel -= 10;
        ruins++;

        interior.style.background = "rgba(178,58,58,0.6)";

        if (dano < danoMax) dano++;
    }

    nivel = Math.max(0, Math.min(120, nivel));

    interior.style.height = nivel + "px";

    this.style.display = "none";

    atualizarDano();
    atualizarStatus();
}

function atualizarDano() {
    vaso.className = "vaso";

    if (dano === 1) vaso.classList.add("dano1");
    if (dano === 2) vaso.classList.add("dano2");
    if (dano === 3) vaso.classList.add("dano3");
    if (dano >= 4) vaso.classList.add("quebrado");
}

function atualizarStatus() {
    let status = document.getElementById("status");

    if (boas === 0 && ruins === 0) {
        status.textContent = "Seu vaso está vazio.";
    } 
    else if (dano >= 4) {
        status.textContent = "💥 O vaso quebrou!";
    }
    else if (boas > ruins) {
        status.textContent = "🌿 Seu vaso está sendo fortalecido!";
    } 
    else if (ruins > boas) {
        status.textContent = "⚠️ Influência negativa.";
    } 
    else {
        status.textContent = "⚖️ Em equilíbrio.";
    }
}

function resetar() {
    nivel = 0;
    boas = 0;
    ruins = 0;
    dano = 0;

    interior.style.height = "0px";
    vaso.className = "vaso";

    document.querySelectorAll(".palavra").forEach(p => {
        p.style.display = "block";
    });

    atualizarStatus();
}