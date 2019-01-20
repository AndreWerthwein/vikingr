var Dropdown = document.querySelectorAll('#ThemenNavigation section:not(:first-child) ul');
var DropdownRechtliches = document.querySelectorAll('#ThemenNavigationRechtliches section ul');

function AlleDropdownReduzieren() {
  for (var x = 0; x < Dropdown.length; x = x + 1) {
    Dropdown[x].style.height = "35px";
  }

  for (var x = 0; x < DropdownRechtliches.length; x = x + 1) {
    DropdownRechtliches[x].style.height = "35px";
  }
}

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

var Sprachen = document.querySelectorAll('li .Titel');

function SprachenAuszeichnungAusblenden() {
  for (var x = 0; x < Sprachen.length; x = x + 1) {
      Sprachen[x].classList.remove('Fett');
  }
}

for (var x = 1; x < SprachenButton.length; x = x + 1) {
    SprachenButton[x].addEventListener('click', function(e) {
        e.preventDefault();

        SprachenAuszeichnungAusblenden();

        this.querySelector('.Titel').classList.add('Fett');

        var SprachWahl = this.dataset.sprache;

        if (SprachWahl === "Englisch") {
            EnglischeSprache();
        } else {
            DeutscheSprache();
        }

        AlleDropdownReduzieren();
    });
}
