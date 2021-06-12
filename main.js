let skySlider = document.getElementById("sky-slider");
let skyOutput = document.getElementById("sky-gradient");

skySlider.oninput = function() {
  skyOutput.style.opacity = this.value / 100;
}


let waveSlider = document.getElementById("wave-slider");
let waveOutput = document.getElementById("waves");

waveSlider.oninput = function() {
  waveOutput.style.opacity = this.value / 100;
}


let sandSlider = document.getElementById("sand-slider");
let sandOutput = document.getElementById("sand");

sandSlider.oninput = function() {
  sandOutput.style.opacity = this.value / 100;
}
