var SerieBestComponent = (function () {
  'use strict';

  function SerieBestComponent (serie) {
    this.mySerie = serie;
    this.mySerieApi = new Serie();
  }

  Serie.prototype.appendBestSerie = function (serie) {
    var that = this;
    var newBestSerie = document.createElement("div");
    newBestSerie.className += 'best-serie';
    var contentHTML = '<img src="' + serie.img + '" />' +
          '<p>' + serie.title + '</p>' +
          '<figure><img src="' + serie.img + '" alt="poster serie"></figure>' +
          '<span onclick="' + that.addSerie(serie) + ''">+</span>';

    newBestSerie.innerHTML = contentHTML;
    return newBestSerie;
  };


  return SerieBestComponent;
}());
