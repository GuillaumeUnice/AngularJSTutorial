
  'use strict';

  var serie = new Serie();
  var serieComponent = new SerieComponent();
  var serieBestComponent = new SerieBestComponent();

  function addSerie (err, res) {
    if(err) {
      console.error(err);
    } else {
      // console.warn(res)
      // <=> var currentSerieContainer = document.getElementsByClassName("serie-container")[0];
      var currentSerieContainer = document.querySelector(".serie-container");
      currentSerieContainer.innerHTML = '';

      if(res.length === 0) {
        currentSerieContainer.innerHTML = '<p style="font-size: 2em; color: rgb(33, 150, 243);">Aucune serie trouvé pour le moment</p>';
      }
      res.forEach(function(resSerie) {
        // console.warn(resSerie)
        // add the newly created element and its content into the DOM
        currentSerieContainer.appendChild(serieComponent.appendSerie(resSerie));
      })
    }
  }

  function addBestSerie (err, res) {
    if(err) {
      console.error(err);
    } else {
      var bestSerieContainer = document.querySelector("#best-serie");

      res.forEach(function(resSerie) {
        // add the newly created element and its content into the DOM
        bestSerieContainer.appendChild(serieBestComponent.appendBestSerie(resSerie));
      })
    }
  }

//////////////////////////////////////////////////////////////////
    serie.getMySeries(addSerie);
    serie.getBestSeries(5, addBestSerie);

    var searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', function(e) {
        // alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
        e.preventDefault();
        // console.log(e);
        var form = new FormData(this);
        // console.log(form);
        serie.searchSeries(searchForm.elements["query"].value, addSerie);
    });

    function index() {
      serie.getMySeries(addSerie);
      var searchForm = document.querySelector('#main-header button');
    }
