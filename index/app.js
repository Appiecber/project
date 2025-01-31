let saldo = 760.00;
let prijs = 120.00;
let aantal = 2;

document.getElementById("saldo").innerText = `€${saldo.toFixed(2)}`;
document.getElementById("prijs").innerText = prijs.toFixed(2);
document.getElementById("aantal").innerText = aantal;

function koopAandelen() {
    let bedrag = parseFloat(document.getElementById("bedrag").value);
    let kosten = bedrag;
    
    if (kosten > saldo) {
        document.getElementById("melding").innerText = "Onvoldoende saldo!";
        document.getElementById("melding").style.color = "red";
    } else {
        saldo -= kosten;
        aantal += bedrag / prijs;
        document.getElementById("saldo").innerText = `€${saldo.toFixed(2)}`;
        document.getElementById("aantal").innerText = aantal.toFixed(2);
        document.getElementById("melding").innerText = `Je hebt €${kosten.toFixed(2)} geïnvesteerd.`;
        document.getElementById("melding").style.color = "green";
    }
}

function verkoopAandelen() {
    let bedrag = parseFloat(document.getElementById("bedrag").value);
    let opbrengst = bedrag;
    
    if (aantal < bedrag / prijs) {
        document.getElementById("melding").innerText = "Onvoldoende aandelen om te verkopen!";
        document.getElementById("melding").style.color = "red";
    } else {
        saldo += opbrengst;
        aantal -= bedrag / prijs;
        document.getElementById("saldo").innerText = `€${saldo.toFixed(2)}`;
        document.getElementById("aantal").innerText = aantal.toFixed(2);
        document.getElementById("melding").innerText = `Je hebt €${opbrengst.toFixed(2)} ontvangen.`;
        document.getElementById("melding").style.color = "green";
    }
}
