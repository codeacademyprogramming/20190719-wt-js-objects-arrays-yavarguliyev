"use strict";

const firstNames  = [ "Noelle", "Meaghan", "Suzy ", "Rosalinda", "Lucy", "Fredrick", "Adrianna" ];
const surNames = [ "Davidson", "Vance", "Silva ", "Leonard", "Velazquez", "Mullen", "Nelson" ];

const getRandomNumber = (max) => Math.floor( Math.random() * max );

const getRandomName = () => `${ firstNames[getRandomNumber( firstNames.length )]} ${ surNames[getRandomNumber( surNames.length )]}`

const setRandomName = () => {
document.getElementById('random-name').innerText = getRandomName(); 
}


document.getElementById('generate')
.addEventListener('click', setRandomName);

setRandomName();