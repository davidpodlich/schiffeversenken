var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;

var hits = 0;

var guesses = 0;

var isSunk = false;


while (isSunk == false) {
    guess = prompt("Anlegen, Zielen, Feuer! (Geben sie eine Zahl zwischen 0 und 6 ein) :");
    if (guess < 0 || guess > 6) {
        alert("Diese Zahl liegt nicht auf diesem Raster!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Treffer")
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
            }
        } else {
            alert("DANEBEN");
        }
    }
};




















