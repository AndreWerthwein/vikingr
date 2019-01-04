var Deutsch = document.querySelectorAll('span[data-sprache="Deutsch"]');
var Englisch = document.querySelectorAll('span[data-sprache="Englisch"]');

function DeutscheSprache() {
    for (var x = 0; x < Englisch.length; x = x + 1) {
        Englisch[x].classList.remove('Eingliedern');
    }

    for (var x = 0; x < Deutsch.length; x = x + 1) {
        Deutsch[x].classList.add('Eingliedern');
    }
}

function EnglischeSprache() {
    for (var x = 0; x < Deutsch.length; x = x + 1) {
        Deutsch[x].classList.remove('Eingliedern');
    }

    for (var x = 0; x < Englisch.length; x = x + 1) {
        Englisch[x].classList.add('Eingliedern');
    }
}

var SprachenButton = document.querySelectorAll('ul[data-navigation="Sprache"] li');

for (var x = 0; x < SprachenButton.length; x = x + 1) {
    SprachenButton[x].addEventListener('click', function(e) {
        e.preventDefault();

        var SprachWahl = this.dataset.sprache;

        if (SprachWahl === "Englisch") {
            EnglischeSprache();
        } else {
            DeutscheSprache();
        }
    });
}
