// Vooraf ingestelde gebruikerslijst
const gebruikers = [
    { username: "admin", password: "1234" },
    { username: "user1", password: "wachtwoord" },
    { username: "test", password: "test123" },
  ];
  
  // Selecteer het formulier en het foutbericht
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");
  
  // Eventlistener voor het inlogformulier
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Voorkomt het standaard formulier verzenden
  
    // Haal de invoerwaarden op
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Controleer of de ingevoerde gegevens overeenkomen met een gebruiker
    const gebruiker = gebruikers.find(
      (gebruiker) => gebruiker.username === username && gebruiker.password === password
    );
  
    if (gebruiker) {
      // Verberg foutbericht en navigeer naar het dashboard
      errorMessage.style.display = "none";
      alert(`Welkom ${username}, je wordt doorgestuurd naar het dashboard.`);
      window.location.href = "dashboard.html"; // Dashboardpagina (maak een aparte pagina)
    } else {
      // Toon foutbericht
      errorMessage.textContent = "Onjuiste gebruikersnaam of wachtwoord.";
      errorMessage.style.display = "block";
    }
  });
  