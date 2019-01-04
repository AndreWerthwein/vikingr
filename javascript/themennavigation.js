var Dropdown = document.querySelectorAll('#ThemenNavigation section:not(:first-child) ul');
var AktuellesDropdown = "";

function AlleDropdownReduzieren() {
  for (var x = 0; x < Dropdown.length; x = x + 1) {
    Dropdown[x].style.height = "35px";
  }
}

for (var x = 0; x < Dropdown.length; x = x + 1) {
  Dropdown[x].addEventListener('mouseover', function() {
      //Kein e.preventDefault(); da sonst die absolute Verlinkung unterdrückt wird

      AlleDropdownReduzieren();

      var AnzahlOptionen = this.children;
          AnzahlOptionen = AnzahlOptionen.length;

      var VolleHoehe = AnzahlOptionen * 35;

      var Navigation = this.dataset.navigation;

      var DropdownInhalt = document.querySelector('#ThemenNavigation section ul[data-navigation="' + Navigation + '"]');

      if (AktuellesDropdown === Navigation) {
          AlleDropdownReduzieren();
          AktuellesDropdown = "";
      } else {
          DropdownInhalt.style.height = VolleHoehe + "px";
          AktuellesDropdown = Navigation;
      }
  });
}
