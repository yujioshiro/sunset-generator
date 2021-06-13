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
