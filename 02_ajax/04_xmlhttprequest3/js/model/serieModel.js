var SerieModel = (function () {
    'use strict';
    var URL_IMG = '//image.tmdb.org/t/p/w300/';
    function SerieModel (data) {
        this.id = data.id;
        this.title = data.title || data.name;
        this.number_episode = data.number_episode || data.number_of_episodes;
        this.season = data.season || data.number_of_seasons;
        this.synopsis = data.synopsis || data.overview;

        this.current_episode = data.current_episode;
        this.added = data.added || false;

        this.img = (data.poster_path) ? URL_IMG + data.poster_path : "//placehold.it/300x430";
    }

    SerieModel.prototype.addSerie = function () {
      this.added = true;
      this.current_episode = 0;
    }

    SerieModel.prototype.inc = function () {
      if(this.number_episode == undefined) {
        return false;
      }
      return (this.current_episode >= this.number_episode) ? false : !!++this.current_episode;
    }

    SerieModel.prototype.dec = function () {
      if(this.number_episode == undefined) {
        return false;
      }
      return (this.current_episode === 0) ? false : !!this.current_episode--;
    }

    return SerieModel;
}());
