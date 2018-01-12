(function() {
    'use strict';

    var serie = new Serie();

    function addSerie (err, res) {
        
        if(err) {
            console.error(err);
        } else {

            // console.log(document.getElementsByClassName("serie-container"));
            var currentSerieContainer = document.getElementsByClassName("serie-container")[0];
            currentSerieContainer.innerHTML = '';

            console.log('RES', res);
            if(res.length === 0) {
                currentSerieContainer.innerHTML = '<p style="font-size: 2em; color: rgb(33, 150, 243);">Aucune serie trouvé pour le moment</p>';
            }
            res.forEach(function(resSerie) {
                // add the newly created element and its content into the DOM 
                currentSerieContainer.appendChild(serie.appendSerie(resSerie));
            })
        }
    }
    
//////////////////////////////////////////////////////////////////
    serie.getMySeries(addSerie);

    // var el = document.getElementsByClassName("serie-delete");
    // el.addEventListener("click", modifieTexte, false);

    function searchSerie() {
    } 


    var searchForm = document.getElementById('search-form');
  
    searchForm.addEventListener('submit', function(e) {
        // alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
        e.preventDefault();
        // console.log(e);
        // console.log(searchForm.elements["query"].value);
        var form = new FormData(this);
        // console.log(form);
        serie.getSeries(searchForm.elements["query"].value, addSerie);
    });
  
    // searchForm.addEventListener('reset', function(e) {
    //     alert('Vous avez réinitialisé le formulaire !');
    // });
})();