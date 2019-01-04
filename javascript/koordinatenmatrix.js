var Koordinaten = document.querySelectorAll('.KoordinatenMatrix td');

var Zeile = document.querySelector('#Zeile');
var KoordinatenMatrix = document.querySelector('.Popup[data-popup="Karte"]');

//Aktuelle Fenstergrößen erfassen
var FensterBreite = document.querySelector('html').clientWidth;
var FensterHoehe = document.querySelector('html').clientHeight;

for (var x = 0; x < Koordinaten.length; x = x + 1) {
  Koordinaten[x].addEventListener('click', function(e) {
    e.preventDefault();

    var KoordinatenXY = this.dataset.koordinate;
    var KoordinateX = KoordinatenXY.substr(0,1);
    var KoordinateY = KoordinatenXY.substr(2,4);
        KoordinateY = KoordinateY.replace(" ", "");

    var PositionX = (KoordinateX * FensterBreite) * (-1);
    var PositionY = KoordinateY * FensterHoehe;

    KoordinatenMatrix.classList.remove('Anzeige');
    
    Zeile.style.marginLeft = PositionX + "px";
    Zeile.style.marginTop = PositionY + "px";
  });
}
