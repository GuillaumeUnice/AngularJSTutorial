(function () {
    'use strict';
    const URL = 'http://localhost:3000/series';

    // Recherche des series les plus populaires
    // https://api.themoviedb.org/3/discover/tv?sort_by=vote_average.desc&api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr

    // Rechercher une serie passer la query en param
    // https://api.themoviedb.org/3/search/tv?api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr&query=22.11.63

    // URL des images

    
    function getMySeries(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', URL, true);
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status === 200) {
                    callback(null, JSON.parse(xhr.responseText));
                } else {
                    callback('Error request status: ' + xhr.status);
                }
            }
        });
        xhr.send(null);
    }

    function addSerie(serie) {
        var newSerie = document.createElement("article");
        newSerie.className += 'serie';
        newSerie.innerHTML = '<div class="content">' +  
              '<header><h1>' + serie.title + '</h1></header>' +
              '<figure><img src="http://placehold.it/300x430" alt="poster serie"></figure>' +
              '<p>Saison: <span>' + serie.season + '</span></p>' +
              '<p>Episode: <span>' + serie.number_episode + '</span></p>';
        if(serie.added) {
            newSerie.innerHTML += '<progress max="' + serie.number_episode + '" value="' + serie.current_episode + '"></progress>'; 
        } else {
            newSerie.innerHTML += '<progress max="100" value="0"></progress>';
        }
        newSerie.innerHTML += '</div>' +
            '<aside class="action-container">' +
              '<div class="action"><i class="icon-minus"></i></div>' + 
              '<div class="action"><i class="icon-plus"></i></div>' + 
              '<div class="action"><i class="icon-close"></i></div>' +
            '</aside>'; 

        // add the newly created element and its content into the DOM 
        console.log(document.getElementsByClassName("serie-container"));
        var currentSerieContainer = document.getElementsByClassName("serie-container")[0]; 

        currentSerieContainer.appendChild(newSerie);
    }

    getMySeries(function(err, res) {
        if(err) {
            console.error(err);
        } else {
            res.forEach(function(serie) {
                addSerie(serie);
            })
        }
    })

    

}) ();