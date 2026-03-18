// Funkcija koja se poziva kada korisnik klikne na dugme za login


function login(email, password) {
  
   

    // Proveravamo da li su oba polja tačna (case-sensitive)
    if (email.trim() === "admin" && password.trim() === "admin") {
        alert("Uspesno ulogovani!");
        return true; // Prijavljivanje je uspešno
    } else {
        alert("Nisu validni kredencijali.");
        return false; // Neuspešno logovanje
    }
}

// Dodavanje event listenera na dugme login
document.querySelector('.loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Sprečavamo podrazumevani submit forme
	
	  // Dobijamo vrednosti iz polja za email i lozinku
	var email = document.querySelector('.emailButton').value;
	var password = document.querySelector('.passwordButton').value;
	
    login(email, password); // Pozivamo funkciju login
});


console.log("Test 1 (admin, admin):", login("admin", "admin")); // true

console.log("Test 2 ( admin , admin):", login(" admin ", "admin")); // true

console.log("Test 3 (Admin, admin):", login("Admin", "admin")); // false 

