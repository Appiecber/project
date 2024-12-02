// Selecteer de menu-items
const homeLink = document.getElementById("homeLink");
const rekeningLink = document.getElementById("rekeningLink");
const overschrijvingenLink = document.getElementById("overschrijvingenLink");
const content = document.getElementById("content");

// Functies om inhoud te wijzigen
function showHome() {
  content.innerHTML = `
    <h2>Home</h2>
    <p>Welkom bij onze bankapplicatie. Gebruik het menu om verder te navigeren.</p>
  `;
}

function showRekeningen() {
  content.innerHTML = `
    <h2>Rekeningen</h2>
    <p>Hier kunt u uw rekeningen bekijken.</p>
  `;
}

function showOverschrijvingen() {
  content.innerHTML = `
    <h2>Overschrijvingen</h2>
    <p>Hier kunt u overschrijvingen doen.</p>
  `;
}

// Eventlisteners voor menu-items
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  showHome();
});

rekeningLink.addEventListener("click", (e) => {
  e.preventDefault();
  showRekeningen();
});

overschrijvingenLink.addEventListener("click", (e) => {
  e.preventDefault();
  showOverschrijvingen();
});

// Laad standaard de homepagina
showHome();
