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
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : {},
    privat : false
};




function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Последний фильм?', ''),
              b = prompt('На сколько оцените его', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');    
        }  else{
            console.log('error');
            i--;
        }    
    }
}

rememberMyFilms();




function detectPersonalLvl(){
    if (numberOfFilms < 10){
        alert('Просмотрено мало фильмов');
    }
    if (numberOfFilms >= 10 && numberOfFilms < 30){
        alert('Вы типичный зритель');
    }
    if (numberOfFilms >= 30){
        alert('Вы киноман');
    }
}

detectPersonalLvl();


function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres(){
    for(let i = 1 ; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр по номеру ${i}?`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

