
/*
  Stats
    weather - sunny, cloudy
    wind    - none, windy
    time    - sunset, sunrise, day, night
 */

let skyOutput = document.getElementById("sky-gradient");
let waveOutput = Array.from(document.getElementsByClassName("waves"));
let cloudOutput = Array.from(document.getElementsByClassName("cloud"));
let sandOutput = document.getElementById("sand");

let setWeather = function() {
  // If cloudy, show clouds

}


//customization
//
// let skySlider = document.getElementById("sky-slider");
// let skyOutput = document.getElementById("sky-gradient");
//
// skySlider.oninput = function() {
//   skyOutput.style.filter = `brightness(${this.value / 100})`;
// }
//
// // Wave slider
// let waveSlider = document.getElementById("wave-slider");
// let waveOutput = Array.from(document.getElementsByClassName("waves"));
//
// waveSlider.oninput = function() {
//   for (wave in waveOutput) {
//     waveOutput[wave].style.filter = `brightness(${this.value / 100})`;
//   }
// }
//
// // Sand slider
// let sandSlider = document.getElementById("sand-slider");
// let sandOutput = document.getElementById("sand");
//
// sandSlider.oninput = function() {
//   sandOutput.style.filter = `brightness(${this.value / 100})`;
// }
//
// // Cloud slider
// let cloudSlider = document.getElementById("cloud-slider");
// let cloudOutput = Array.from(document.getElementsByClassName("cloud"));
//
// cloudSlider.oninput = function() {
//   for (cloud in cloudOutput) {
//     cloudOutput[cloud].style.filter = `brightness(${this.value / 100})`;
//   }
// }
