// Recherche des series les plus populaires
// https://api.themoviedb.org/3/discover/tv?sort_by=vote_average.desc&api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr

// Rechercher une serie passer la query en param
// https://api.themoviedb.org/3/search/tv?api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr&query=22.11.63

// URL des images
// http://image.tmdb.org/t/p/w300/{{ serie.poster_path }} "

// Detail serie
// http://api.themoviedb.org/3/tv/" + id + "?api_key=61f7950a0c9e1089cf27fbcc524ec7db&language=fr

var Http = (function () {
    'use strict';

    function Http () {
        this.DEFAULT_OPTIONS = {
          "Accept": "application/json",
          "Content-Type": "application/json; charset=utf-8",
        }
    }

    function creatyQuery(parameters) {
      if(!parameters) {
        return "";
      }

      return "?" + Object.keys(parameters)
        .map(function(key) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(parameters[key]);
          return encodedKey + '=' + encodedValue;
        }).join('&');
    }

    Http.prototype.get = function (path, queries, callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', path + creatyQuery.call(this, queries), true);
        var that = this;
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


    Http.prototype.delete = function (path, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', path, true);
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


    Http.prototype.patch = function (path, body, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('PATCH', path, true);
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status === 200) {
                  callback(null, JSON.parse(xhr.responseText));
                } else {
                  callback('Error request status: ' + xhr.status);
                }
            }
        });
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send(JSON.stringify(body));
	};

  Http.prototype.put = function (path, body, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', path, true);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
              callback(null, JSON.parse(xhr.responseText));
            } else {
              callback('Error request status: ' + xhr.status);
            }
        }
    });
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(JSON.stringify(body));
	};

  Http.prototype.post = function (path, body, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', path, true);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200 && callback) {
              callback(null, JSON.parse(xhr.responseText));
            } else if(callback) {
                callback('Error request status: ' + xhr.status);
            }
        }
    });
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(JSON.stringify(body));
	};

    return Http;
}());
