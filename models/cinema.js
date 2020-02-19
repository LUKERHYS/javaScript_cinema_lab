const Cinema = function() {
  this.films = [];
};

Cinema.prototype.addFilm = function (film) {
  this.films.push(film);
};

Cinema.prototype.getFilmTitles = function() {
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.findByTitle = function(title) {
  return this.films.find((film) => {
    return film.title === title;
  });
};

Cinema.prototype.filterByGenre = function(genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};

Cinema.prototype.checkFilmsByYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  });
};

Cinema.prototype.longerThan = function (time) {
  return this.films.every((film) => {
    return film.length > time;
  });
};

Cinema.prototype.totalRunTime = function () {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
};

Cinema.prototype.filmsByProperty = function (property, value) {

  return this.films.filter((film) => {
    if (film[property]) {
     return film[property] === value;
     }
  });
};
module.exports = Cinema;
