var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }

};
view.displayMessage("Spielen sie Schiffe versenken");

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [{locations: ["06", "16", "26"], hits: ["", "", ""] },
            {locations: ["24", "34", "44"], hits: ["", "", ""] },
            {locations: ["10", "11", "12"], hits: ["", "", ""] }],

    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("Schiff versenkt!");
                if (this.isSunk(ship)) {
                this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("Leider daneben.");
        return false;
},
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits [i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    collision: function(locations) {
    for (var i = 0; i < this.numShips; i++) {
        var ship = model.ships[i];
        for (var j = 0; j < locations.length; j++) {
            if (ship.locations.indexOf(locations[j]) >= 0) {
                return true;
            }
        }
    }
        return false;
    },


    generateShip: function() {
    var direction = Math.floor(Math.random() * 2);

    var row;
    var col;

    if (direction === 1) {
        row = Math.floor(Math.random() * this.boardSize);
        col = Math.floor(Math.random() * (this.boardSize - model.shipLength));
    } else {
        row = Math.floor(Math.random() * (model.boardSize - model.shipLength));
        col = Math.floor(Math.random() * model.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
        if (direction === 1) {
            newShipLocations.push(row + "" + (col + i));

        } else {
            newShipLocations.push((row + i) + "" + col);
        }
    }
    return newShipLocations;
},
    generateShipLocations :function() {
    var locations;
    for (var i = 0; i < model.numShips; i++) {
        do {
            locations = this.generateShip();
        } while (this.collision(locations));
        model.ships[i].locations = locations;
    }
    }


};

var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("Sie haben mit " + this.guesses + " Versuchen alle Schiffe versenkt.");

            }
        }
    }
};


function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null) {
        alert("Hoppla, das ist nicht auf dem Spielfeld.");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);

        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Hoppla, das ist nicht auf dem Spielfeld.");
        } else if (row < 0 || row >= model.boardSize ||
            column < 0 || column >= model.boardSize) {
            alert("Hoppla, das ist nicht auf dem Spielfeld.");
        } else {
            return row + column;
        }
    }
    return null;
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}




function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}

window.onload = init;

























































