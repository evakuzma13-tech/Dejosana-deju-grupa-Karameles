function palielinat(img) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("lielais").src = img.src;
}

function aizvert() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("forma").addEventListener("submit", function(e) {
    e.preventDefault();

    let vards = document.getElementById("vards").value;
    let epasts = document.getElementById("epasts").value;

    if(vards === "" || epasts === "") {
        alert("Lūdzu aizpildi visus laukus!");
        return;
    }

    document.getElementById("rezultats").innerText =
        "Paldies, " + vards + "! Forma nosūtīta.";
});