var SerieBestComponent = (function () {
  'use strict';

  function SerieBestComponent (serie) {
    this.mySerie = serie;
    this.mySerieApi = new Serie();
  }

  SerieBestComponent.prototype.appendBestSerie = function (serie) {
    var that = this;
    var newBestSerie = document.createElement("div");
    newBestSerie.className += 'best-serie';
    var contentHTML = '<img src="' + serie.img + '" height="80" alt="poster serie" />' +
          '<p>' + serie.title + '</p>' +
          '<span>+</span>';

    newBestSerie.innerHTML = contentHTML;
    newBestSerie.querySelector("span").addEventListener('click', function(){ that.mySerieApi.addSerie(serie); }, false);

    return newBestSerie;
  };

  return SerieBestComponent;
}());
