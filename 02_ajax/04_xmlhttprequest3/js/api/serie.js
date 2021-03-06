// Fetch most popular series
// https://api.themoviedb.org/3/discover/tv?sort_by=vote_average.desc&api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr

// Search serie according to the query param: "query"
// https://api.themoviedb.org/3/search/tv?api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr&query=22.11.63

// image's URL
// http://image.tmdb.org/t/p/w300/{{ serie.poster_path }} "

// Detail serie
// http://api.themoviedb.org/3/tv/" + id + "?api_key=61f7950a0c9e1089cf27fbcc524ec7db&language=fr

var Serie = (function () {
    'use strict';
    var mySeries = [];
    function Serie () {
        this.URL_SERVER = 'http://localhost:3000/series';
        this.URL_API = 'https://api.themoviedb.org/3';
        this.API_KEY =  'dabcd7d38547f175da6712fc2e6cb072';

        this.http = new Http();
    }

    // Get my personal series
    Serie.prototype.getMySeries = function (callback) {
        var that = this;
        this.http.get(this.URL_SERVER, null, function(err, series) {
            if(err) {
                console.error(err)
            }
            for(var rang = 0; rang < series.length; rang++) {
                mySeries.push(new SerieModel(series[rang]));
            }
            callback(null, mySeries);
        })
	};

    // Know if I already follow this serie
    function isAlreadyAdded (serie) {

        console.log("isAlreadyAdded")
        console.warn(this)
        console.warn(mySeries)
        console.warn(serie.id)
        return (mySeries.map(function(mySerie) { return mySerie.id }).indexOf(serie.id) !== -1)
    }

    // Get detail of a specific serie: serieId {number}
    Serie.prototype.getDetailSerie = function (serieId, callback) {
        var that = this;
        this.http.get(this.URL_API + '/tv/' + serieId, {
            api_key: "dabcd7d38547f175da6712fc2e6cb072",
            language: "fr"
        }, function(err, serie) {
            if(err) {
                console.error(err)
            }
          callback(null, new SerieModel(serie));
        })
	};

    // Get the best series
    Serie.prototype.getBestSeries = function (serieCount, callback) {
        var that = this;
        var finalResult = [];
        this.http.get(this.URL_API + "/discover/tv", {
            api_key: "dabcd7d38547f175da6712fc2e6cb072",
            language: "fr",
            sort_by: "vote_average.desc"
        }, function(err, rawBestSeries) {
            if(err) {
                console.error(err)
            }
            var bestSeries = rawBestSeries.results.slice(0, serieCount);
            var cpt = 0;
            bestSeries.forEach(function(element, index, array) {
                that.getDetailSerie(element.id, function(err, detailSerie) {
                    finalResult.push(detailSerie);
                    if(++cpt === serieCount) {
                        callback(null, finalResult);
                    }
                });
            });
        })
	};

    // Get serie by search: query {string}
    Serie.prototype.searchSeries = function (query, callback) {
        var that = this;
        var finalResult = [];
        this.http.get(this.URL_API + '/search/tv', {
            api_key: "dabcd7d38547f175da6712fc2e6cb072",
            language: "fr",
            query: query,
        }, function(err, resultSearch) {
            resultSearch.results.forEach(function(element, index, array) {
                that.getDetailSerie(element.id, function(err, detailSerie) {
                    finalResult.push(detailSerie);
                    if (index === array.length - 1) {
                        callback(null, finalResult);
                    }
                });
            });
        })
	};

    // delete serie: serie {SerieModel}
    Serie.prototype.deleteSerie = function (serie, serieNode, callback) {
        var that = this
        this.http.delete(this.URL_SERVER + '/' + serie.id, function(err, res) {
            serieNode.remove();
            var elementPos = mySeries.map(function(x) {return x.id; }).indexOf(serie.id);
            if(elementPos !== -1) {
                mySeries.splice(elementPos, 1);
            }
        });
	};

    // update Serie: serie {SerieModel}
    Serie.prototype.updateSerie = function (serie, callback) {
        this.http.patch(this.URL_SERVER + '/' + serie.id, serie, function(err, res) {
             callback(null, res);
        });
	};

    // add a new Serie: serie {SerieModel}
    Serie.prototype.addSerie = function (serie) {
        var that = this;
             console.log("ADD OK")
             console.warn(mySeries)
        if(!isAlreadyAdded.call(this, serie)) {
            serie.addSerie();
            this.http.post(this.URL_SERVER + '/', serie, function() {
                mySeries.push(serie);
            });
        } else {
            alert("This Serie as already been added")
        }
    };

    // increment a Serie: serie {SerieModel}
    Serie.prototype.incSerie = function (serie, callback) {
        if(serie.inc()) {
            this.updateSerie(serie, function (res) {
                callback()
            });
        } else {
            alert('Serie finished!');
        }
    };

    // decrement a Serie: serie {SerieModel}
    Serie.prototype.decSerie = function (serie, callback) {
        if(serie.dec()) {
            this.updateSerie(serie, function (res) {
                callback()
            });
        } else {
            alert('Serie already unwatched!');
        }
    };


    return Serie;
}());
