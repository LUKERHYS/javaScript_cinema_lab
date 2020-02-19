const assert = require('assert');
const Cinema = require('../models/cinema');
const Film = require('../models/film');

describe('Cinema', function(){

  let cinema;

  let film1;
  let film2;
  let film3;
  let film4;

  beforeEach(function(){
    cinema = new Cinema ();
    film1 = new Film ('Inception', 'thriller', 2010, 140);
    film2 = new Film ('Jaws', 'horror',1975, 130);
    film4 = new Film ('Halloween', 'horror',1980, 90);
    film3 = new Film ('Interstellar', 'sci-fi', 2015, 120);
  });

  it('should have a collection of films', function(){
    assert.deepStrictEqual(cinema.films, []);
  });

  it('should get the film titles', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);

  filmTitles = cinema.getFilmTitles();
    assert.deepStrictEqual(filmTitles, ['Inception', 'Jaws', 'Interstellar']);
  })

  it('should be able to find film by title', function() {
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);

    foundFilm = cinema.findByTitle(film2.title);
    assert.strictEqual(foundFilm, film2)
  })

  it('filter films by genre', function () {
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    cinema.addFilm(film4);

    foundFilms = cinema.filterByGenre('horror')
    assert.deepStrictEqual(foundFilms, [film2, film4])
  });

  it('check film by year__true ', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    cinema.addFilm(film4);

    isThereSomeFilmsByYear = cinema.checkFilmsByYear(2015);
    assert.equal(isThereSomeFilmsByYear, true);
  });

  it('check film by year__false', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    cinema.addFilm(film4);

    isThereSomeFilmsByYear = cinema.checkFilmsByYear(2020);
    assert.equal(isThereSomeFilmsByYear, false);
  });

  it('check film is longer than__true', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    cinema.addFilm(film4);

    areFilmsLongerThan = cinema.longerThan(80);
    assert.equal(areFilmsLongerThan, true);
  })

  it('check film is longer than__false', function(){
    cinema.addFilm(film1);
    cinema.addFilm(film2);
    cinema.addFilm(film3);
    cinema.addFilm(film4);

    areFilmsLongerThan = cinema.longerThan(100);
    assert.equal(areFilmsLongerThan, false);
  })
});
