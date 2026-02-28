let nivel = 0;
let boas = 0;
let ruins = 0;

document.querySelectorAll(".palavra").forEach(p => {
    p.addEventListener("click", function() {

        if (this.classList.contains("positiva")) {
            nivel += 15;
            boas++;
            document.getElementById("interior").style.background = "rgba(46,125,50,0.6)";
        } else {
            nivel -= 10;
            ruins++;
            document.getElementById("interior").style.background = "rgba(178,58,58,0.6)";
        }

        if (nivel < 0) nivel = 0;
        if (nivel > 120) nivel = 120;

        document.getElementById("interior").style.height = nivel + "px";

        this.style.display = "none";

        atualizarStatus();
    });
});

function atualizarStatus() {
    let status = document.getElementById("status");

    if (boas === 0 && ruins === 0) {
        status.textContent = "Seu vaso está vazio.";
    } 
    else if (boas > ruins) {
        status.textContent = "🌿 Seu vaso está sendo fortalecido!";
    } 
    else if (ruins > boas) {
        status.textContent = "⚠️ Seu vaso está sendo influenciado negativamente.";
    } 
    else {
        status.textContent = "⚖️ Seu vaso está equilibrado.";
    }
}

function resetar() {
    nivel = 0;
    boas = 0;
    ruins = 0;

    document.getElementById("interior").style.height = "0px";

    document.querySelectorAll(".palavra").forEach(p => {
        p.style.display = "block";
    });

    atualizarStatus();
}