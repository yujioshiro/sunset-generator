

























//customization

let skySlider = document.getElementById("sky-slider");
let skyOutput = document.getElementById("sky-gradient");

skySlider.oninput = function() {
  skyOutput.style.filter = `brightness(${this.value / 100})`;
}


let waveSlider = document.getElementById("wave-slider");
let waveOutput = Array.from(document.getElementsByClassName("waves"));

waveSlider.oninput = function() {
  for (wave in waveOutput) {
    waveOutput[wave].style.filter = `brightness(${this.value / 100})`;
  }
}


let sandSlider = document.getElementById("sand-slider");
let sandOutput = document.getElementById("sand");

sandSlider.oninput = function() {
  sandOutput.style.filter = `brightness(${this.value / 100})`;
}


let cloudSlider = document.getElementById("cloud-slider");
let cloudOutput = Array.from(document.getElementsByClassName("cloud"));

cloudSlider.oninput = function() {
  for (cloud in cloudOutput) {
    cloudOutput[cloud].style.filter = `brightness(${this.value / 100})`;
  }
}
