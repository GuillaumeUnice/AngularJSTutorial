var SerieComponent = (function () {
  'use strict';

  function SerieComponent (serie) {
    this.mySerie = serie;
    this.mySerieApi = new Serie();
  }

  // How about building a string and then assigning it to innerHTML when it's completely built (so you never inject broken html).
  // Firing broken html into the browser bit by bit is bound to cause problems, because the browser cannot store a broken dom tree.
  Serie.prototype.appendSerie = function (serie) {
    var that = this;
    var newSerie = document.createElement("article");
    newSerie.className += 'serie';
    var contentHTML = '<div class="content">' +
          '<header><h1>' + serie.title + '</h1></header>' +
          '<figure><img src="' + serie.img + '" alt="poster serie"></figure>' +
          '<p>Saison: <span>' + serie.season + '</span></p>' +
          '<p>Episode: <span>' + serie.number_episode + '</span></p>';
    if(serie.added) {
        contentHTML += '<progress max="' + serie.number_episode + '" value="' + serie.current_episode + '"></progress>';
    } else {
        contentHTML += '<progress max="100" value="0"></progress>';
    }

    contentHTML += '</div>';
    newSerie.innerHTML = contentHTML;

    var actionsHTML = document.createElement("aside");
    actionsHTML.className = 'action-container';


    if(!serie.added) {
        var addActionHTML = document.createElement("div");
        addActionHTML.style.width = '100%';
        addActionHTML.className = 'action';
        addActionHTML.innerHTML = '<i class="icon-plus"></i>Add serie';
        addActionHTML.addEventListener('click', function(){ that.addSerie(serie); }, false);
        actionsHTML.appendChild(addActionHTML);
    } else {
        var decActionHTML = document.createElement("div");
        decActionHTML.className = 'action';
        decActionHTML.innerHTML = '<i class="icon-minus"></i>';
        decActionHTML.addEventListener('click', function(){ that.decSerie(serie, newSerie); --newSerie.querySelector("progress").value; }, false);
        actionsHTML.appendChild(decActionHTML);

        var incActionHTML = document.createElement("div");
        incActionHTML.className = 'action';
        incActionHTML.innerHTML = '<i class="icon-plus"></i>';
        incActionHTML.addEventListener('click', function(){ that.incSerie(serie, newSerie); ++newSerie.querySelector("progress").value; }, false);
        actionsHTML.appendChild(incActionHTML);

        var delActionHTML = document.createElement("div");
        delActionHTML.className = 'action';
        delActionHTML.innerHTML = '<i class="icon-close"></i>';
        delActionHTML.addEventListener('click', function(){ that.deleteSerie(serie, newSerie); }, false);
        actionsHTML.appendChild(delActionHTML);
    }

    newSerie.appendChild(actionsHTML);
    return newSerie;
  };


  return SerieComponent;
}());
