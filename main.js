var myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let kunstler = document.querySelector('.kunstler');
let title = document.querySelector('.title');
let releaseYear = document.querySelector('.release-year');
let formate = document.querySelector('.formate');
let slideshow = document.querySelector('.slideshow-block');

kunstler.innerHTML = myMusic[0].kunstler;
title.innerHTML = myMusic[0].title;
releaseYear.innerHTML = myMusic[0].release_jahr;
formate.innerHTML = myMusic[0].formate;

let left = document.querySelector('.fa-arrow-left');
let right = document.querySelector('.fa-arrow-right');

let i = 0;

left.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = 3;
    }

    slideshow.innerHTML =
    `
    <div>
        <h2 class="heading">Künstler:</h2>
        <p class="same-line kunstler">${myMusic[i].kunstler}</p>
    </div>
    <div>
        <h2 class="heading">Title:</h2>
        <p class="same-line title">${myMusic[i].title}</p>
    </div>
    <div>
        <h2 class="heading">Release year:</h2>
        <p class="same-line release-year">${myMusic[i].release_jahr}</p>
    </div>
    <div>
        <h2 class="heading">Formate:</h2>
        <p class="same-line formate">${myMusic[i].formate}</p>
    </div> 
`


})

right.addEventListener('click', function () {
    i++
    if (i > 3) {
        i = 0
    }
    slideshow.innerHTML =
       
    `
    <div>
        <h2 class="heading">Künstler:</h2>
        <p class="same-line kunstler">${myMusic[i].kunstler}</p>
    </div>
    <div>
        <h2 class="heading">Title:</h2>
        <p class="same-line title">${myMusic[i].title}</p>
    </div>
    <div>
        <h2 class="heading">Release year:</h2>
        <p class="same-line release-year">${myMusic[i].release_jahr}</p>
    </div>
    <div>
        <h2 class="heading">Formate:</h2>
        <p class="same-line formate">${myMusic[i].formate}</p>
    </div>

   
`

})
