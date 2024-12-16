document.getElementById("overschrijfForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const vanRekening = document.getElementById("vanRekening");
    const bedragInput = document.getElementById("bedrag");
    const feedback = document.getElementById("feedback");

    const saldo = parseFloat(vanRekening.options[0].dataset.saldo);
    const bedrag = parseFloat(bedragInput.value);

    // Valideer of bedrag is ingevoerd
    if (isNaN(bedrag) || bedrag <= 0) {
        feedback.style.color = "red";
        feedback.textContent = "Voer een geldig bedrag in.";
        return;
    }

    // Controleer of saldo voldoende is
    if (bedrag > saldo) {
        feedback.style.color = "red";
        feedback.textContent = "Onvoldoende saldo.";
        return;
    }

    // Succesvolle overschrijving
    feedback.style.color = "green";
    feedback.textContent = `€${bedrag} is succesvol overgeschreven van Betaalrekening naar Spaarrekening.`;
});
