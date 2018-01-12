// Recherche des series les plus populaires
// https://api.themoviedb.org/3/discover/tv?sort_by=vote_average.desc&api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr

// Rechercher une serie passer la query en param
// https://api.themoviedb.org/3/search/tv?api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr&query=22.11.63

// URL des images
// http://image.tmdb.org/t/p/w300/{{ serie.poster_path }} "

// Detail serie
// http://api.themoviedb.org/3/tv/" + id + "?api_key=61f7950a0c9e1089cf27fbcc524ec7db&language=fr

var Serie = (function () {
    'use strict';
    
    function Serie () {
        this.URL_SERVER = 'http://localhost:3000/series';
        this.URL_API = 'https://api.themoviedb.org/3';
        this.API_KEY =  'dabcd7d38547f175da6712fc2e6cb072';
        this.URL_IMG = 'http://image.tmdb.org/t/p/w300/';
    }

    Serie.prototype.getMySeries = function (callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.URL_SERVER, true);
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
	};

    function AlreadyAdded(serie, callback) {

    }

    Serie.prototype.getDetailSerie = function (serieId, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.URL_API + '/tv/' + serieId + '?api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr', true);
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status === 200) {
                   var serie = JSON.parse(xhr.responseText);
                   var result = {
                       id: serie.id,
                       title: serie.name,
                       number_episode: serie.number_of_episodes,
                       season: serie.number_of_seasons,
                       synopsis: serie.overview
                   }
                    callback(null, result);
                } else {
                    callback('Error request status: ' + xhr.status);
                }
            }
        });
        xhr.send(null);
	};

    Serie.prototype.getSeries = function (query, callback) {
        var that = this;
        var finalResult = [];
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.URL_API + '/search/tv?api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr&query=' + query, true);
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status === 200) {
                    var resultSearch = JSON.parse(xhr.responseText).results;
                    resultSearch.forEach(function(element, index, array) {
                        that.getDetailSerie(element.id, function(err, detailSerie) {                            
                            finalResult.push(detailSerie);
                            if (index === array.length - 1) {
                                callback(null, finalResult);
                            }
                        });
                    });

                        // .reduce(function(res, serieResult) {
                        //     var plop = that.getDetailSerie(serieResult.id, function(err, detailSerie) {
                        //     console.log('LOL', res);
                        //     //     // console.log(detailSerie);
                        //     //     // console.log(lol.res);
                        //         return detailSerie;
                        //     })
                        //     console.log('plop', plop);
                        //     return res.push(plop);
                        // }, []);

                    //  console.log('result', result);  
                    // callback(null, result);
                } else {
                    callback('Error request status: ' + xhr.status);
                }
            }
        });
        xhr.send(null);
	};
    // Serie.prototype.deleteMySeries = function (serie, callback) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('DELETE', this.URL_SERVER + '/' + serie.id, true);
    //     xhr.addEventListener('readystatechange', function() {
    //         if (xhr.readyState === XMLHttpRequest.DONE) {
    //             if(xhr.status === 200) {
    //                 callback(null, JSON.parse(xhr.responseText));
    //             } else {
    //                 callback('Error request status: ' + xhr.status);
    //             }
    //         }
    //     });
    //     xhr.send(null);
	// };


    // Serie.prototype.updateMySeries = function (serie, callback) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('PATCH', this.URL_SERVER + '/' + serie.id, true);
    //     xhr.addEventListener('readystatechange', function() {
    //         if (xhr.readyState === XMLHttpRequest.DONE) {
    //             if(xhr.status === 200) {
    //                 callback(null, JSON.parse(xhr.responseText));
    //             } else {
    //                 callback('Error request status: ' + xhr.status);
    //             }
    //         }
    //     });
    //     xhr.send(null);
	// };
//////////////////////////////////////////////////////////////////////////////////////


    Serie.prototype.addSerie = function (serie, callback) {
        serie.added = true;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.URL_SERVER + '/', true);
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status === 200) {
                    if(callback)
                        callback(null, JSON.parse(xhr.responseText));
                } else {
                    if(callback)
                        callback('Error request status: ' + xhr.status);
                }
            }
        });
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send(JSON.stringify(serie));
	};

//How about building a string and then assigning it to innerHTML when it's completely built (so you never inject broken html). Firing broken html into the browser bit by bit is bound to cause problems, because the browser cannot store a broken dom tree.
    Serie.prototype.appendSerie = function (serie) {
        console.log(this.registerSerie);
        var that = this;
        var newSerie = document.createElement("article");
        newSerie.className += 'serie';
        var contentHTML = '<div class="content">' +  
              '<header><h1>' + serie.title + '</h1></header>' +
              '<figure><img src="http://placehold.it/300x430" alt="poster serie"></figure>' +
              '<p>Saison: <span>' + serie.season + '</span></p>' +
              '<p>Episode: <span>' + serie.number_episode + '</span></p>';
        if(!serie.added) {
            contentHTML += '<progress max="' + serie.number_episode + '" value="' + serie.current_episode + '"></progress>'; 
        } else {
            contentHTML += '<progress max="100" value="0"></progress>';
        }

         contentHTML += '</div>' +
              '<aside class="action-container">';

        if(!serie.added) {
            contentHTML += '<div class="action" onclick="test()" style="width: 100%"><i class="icon-plus"></i>Add serie</div>';
        } else {
            contentHTML += '<div class="action"><i class="icon-minus"></i></div>' + 
              '<div class="action" onclick="alert()"><i class="icon-plus"></i></div>' + 
              '<div class="action"><i class="icon-close"></i></div>';
        }

         contentHTML += '</aside>';

        newSerie.innerHTML = contentHTML;
        newSerie.addEventListener('click', function(){ that.addSerie(serie); }, false);
        return newSerie;
	};


    return Serie;
}());
