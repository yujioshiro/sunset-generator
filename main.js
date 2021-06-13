/*
  Stats
    weather - sunny, cloudy
    wind    - none, windy
    time    - sunset, sunrise, day, night
 */
let Stats = {
  weather: "sunny",
  wind: "none",
  time: "sunset"
}

let skyOutput = document.getElementById("sky-gradient");
let waveOutput = Array.from(document.getElementsByClassName("waves"));
let cloudOutput = Array.from(document.getElementsByClassName("cloud"));
let cloudContainer = document.getElementById("clouds-container");
let sandOutput = document.getElementById("sand");

let setWeather = function() {
  let randomNumber = Math.floor(Math.random() * 20);
  // If cloudy, show clouds
  if (Stats.weather === "cloudy") {
    for (let i = 0; i < 10; i++) {
      let singleCloud = document.createElement("IMG");
      singleCloud.src = "cloud_jon_phillips_01.svg";
      singleCloud.classList.add("cloud");
      singleCloud.style.animationDelay = `${i * 3}s`;
      singleCloud.style.top = `${i}%`;
      if (Stats.time === "night") {
        singleCloud.style.filter = `brightness(.1)`;
      } else if (Stats.time === "sunrise") {
        singleCloud.style.filter = `brightness(.4)`;
      } else if (Stats.time === "sunset") {
        singleCloud.style.filter = `brightness(.4)`;
      }
      cloudContainer.appendChild(singleCloud);
    }
  }
}

let setWind = function() {
  // If none, animation-duration is long
  if (Stats.wind === "none") {
    for (cloud in cloudOutput) {
      cloudOutput[cloud].style.animationDuration = "80s";
    }
  }
  // If windy, animation-duration is short
  else if (Stats.wind === "windy") {
    for (cloud in cloudOutput) {
      cloudOutput[cloud].style.animationDuration = "20s";
    }
    waveOutput[0].style.animationDuration = "2s";
    waveOutput[1].style.animationDuration = "2.3s";
    waveOutput[2].style.animationDuration = "2.6s";
  }
}

let setTime = function() {
  // If night, set all brightness to 10
  if (Stats.time === "night") {
    skyOutput.style.filter = `brightness(.05)`;
    waveOutput[0].style.filter = `brightness(.1)`;
    waveOutput[1].style.filter = `brightness(.1)`;
    waveOutput[2].style.filter = `brightness(.1)`;
    sandOutput.style.filter = `brightness(.2)`;
    document.getElementById("sky-gradient").style.background = "#001173";
  }
  // If day, set all brightness to 105
  else if (Stats.time === "day") {
    skyOutput.style.filter = `brightness(1.05)`;
    waveOutput[0].style.filter = `brightness(1.05)`;
    waveOutput[1].style.filter = `brightness(1.05)`;
    waveOutput[2].style.filter = `brightness(1.05)`;
    sandOutput.style.filter = `brightness(1.5)`;
    document.getElementById("sky-gradient").style.background = "#aeeef5";
  }
  // If sunrise, set all brightnesst to 40
  else if (Stats.time === "sunrise") {
    skyOutput.style.filter = `brightness(.4)`;
    waveOutput[0].style.filter = `brightness(.4)`;
    waveOutput[1].style.filter = `brightness(.4)`;
    waveOutput[2].style.filter = `brightness(.4)`;
    sandOutput.style.filter = `brightness(.7)`;
    document.getElementById("sky-gradient").style.background = "linear-gradient(27deg, rgba(230,128,0,1) 25%, rgba(0,26,179,1) 80%)";
  }
  // If sunset, set all brightness to 40
  else if (Stats.time === "sunset") {
    skyOutput.style.filter = `brightness(.4)`;
    waveOutput[0].style.filter = `brightness(.4)`;
    waveOutput[1].style.filter = `brightness(.4)`;
    waveOutput[2].style.filter = `brightness(.4)`;
    sandOutput.style.filter = `brightness(.7)`;
  }
}

// Get location
function getLocation() {

  // If - Geolocation is supported
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getStats)
  }

  // Else - Geolocation is not supported
  else {
    console.error("Location must be enabled for this application.")
  }
}

function getStats(position) {

  // Save coordinates
  let lat = position.coords.latitude
  let long = position.coords.longitude

  // Get current weather
  let url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_MAP_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // Process the weather response
      Stats.weather = data.clouds.all > 50 ? "cloudy" : "sunny"
      Stats.wind = data.wind.speed > 5 ? "windy" : "none"

      // Get the time
      let current_utc_seconds = data.dt
      let sunset = data.sys.sunset
      let sunrise = data.sys.sunrise

      // Check if the current time is within 1800 seconds before or after sunset or sunrise
      if (current_utc_seconds >= (sunset - 1800) && current_utc_seconds <= (sunset + 1800)) {
        Stats.time = 'sunset'
      } else if (current_utc_seconds >= sunrise - 1800 && current_utc_seconds <= sunrise + 1800) {
        Stats.time = 'sunrise'
      } else if (current_utc_seconds > sunrise && current_utc_seconds < sunset) {
        Stats.time = 'day'
      } else {
        Stats.time = 'night'
      }

      setWeather();
      setTime();
      setWind();

      // Test the Stats
      console.log(Stats)
    })

    // Error with request
    .catch(() => {
      console.error("Error with the weather request")
    })
}

// Get weather
getLocation();
