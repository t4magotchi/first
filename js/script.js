// "use strict";

// let number = 'hello world';
// // alert(number);
// // const result = confirm('are you here?');
// // console.log(result);
// // const answer = prompt('Вам есть 18?', '18');
// // console.log(typeof(answer));
// const answers = [];
// answers[0] = prompt('Как ваше имя?','');
// answers[1] = prompt('Как ваше фамилия?','');
// answers[2] = prompt('Возраст?','');
// document.write(answers);
const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : {},
    privat : false
};

const a = prompt('Последний фильм?', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Последний фильм?', ''),
      d = prompt('На сколько оцените его', ''); 

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);