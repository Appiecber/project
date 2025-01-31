let saldo = {
    bitcoin: 0,
    ethereum: 0,
    litecoin: 0
};

const prijzen = {
    bitcoin: 90000,
    ethereum: 4800,
    litecoin: 250
};

function koopCrypto() {
    let geselecteerd = document.getElementById("cryptoSelect").value;
    let bedrag = parseFloat(document.getElementById("bedrag").value);

    if (isNaN(bedrag) || bedrag <= 0) {
        toonMelding("Voer een geldig bedrag in.", "red");
        return;
    }

    let gekochteHoeveelheid = bedrag / prijzen[geselecteerd];
    saldo[geselecteerd] += gekochteHoeveelheid;

    updateSaldo();
    toonMelding(`Je hebt €${bedrag.toFixed(2)} in ${geselecteerd} geïnvesteerd.`, "green");
}

function verkoopCrypto() {
    let geselecteerd = document.getElementById("cryptoSelect").value;
    let bedrag = parseFloat(document.getElementById("bedrag").value);

    if (isNaN(bedrag) || bedrag <= 0) {
        toonMelding("Voer een geldig bedrag in.", "red");
        return;
    }

    let verkoopHoeveelheid = bedrag / prijzen[geselecteerd];

    if (saldo[geselecteerd] < verkoopHoeveelheid) {
        toonMelding("Onvoldoende crypto om te verkopen!", "red");
        return;
    }

    saldo[geselecteerd] -= verkoopHoeveelheid;

    updateSaldo();
    toonMelding(`Je hebt €${bedrag.toFixed(2)} aan ${geselecteerd} verkocht.`, "green");
}

function updateSaldo() {
    document.getElementById("bitcoinSaldo").innerText = (saldo.bitcoin * prijzen.bitcoin).toFixed(2);
    document.getElementById("ethereumSaldo").innerText = (saldo.ethereum * prijzen.ethereum).toFixed(2);
    document.getElementById("litecoinSaldo").innerText = (saldo.litecoin * prijzen.litecoin).toFixed(2);
}

function toonMelding(bericht, kleur) {
    let melding = document.getElementById("melding");
    melding.innerText = bericht;
    melding.style.color = kleur;
}
