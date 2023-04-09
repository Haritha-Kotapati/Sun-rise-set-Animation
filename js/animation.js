
const sun = document.querySelector('.sun');
const sky = document.querySelector('.sky');
const playPauseBtn = document.getElementById("btn");

playPauseBtn.addEventListener('click',function playPause(){
    sun.classList.toggle('playPause');
    sky.classList.toggle('playPause');
});