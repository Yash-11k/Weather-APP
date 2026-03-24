//  Function to get weather
function getWeather() {

  // Step 1: input se city lena
  let city = document.getElementById("searchBox").value;

  // Step 2: API URL
  let apiKey = "37e06f6d8339ff25823e83322a2c39f2"; 
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Step 3: fetch call
  fetch(url)
    .then(response => response.json()) // data convert
    .then(data => {

      // Step 4: console check
      console.log(data);

      // Step 5: UI update (DOM manipulation)
      document.getElementById("city").innerText = data.name;
      document.getElementById("temp").innerText = data.main.temp + "°C";
      document.getElementById("condition").innerText = data.weather[0].main;
      document.getElementById("humidity").innerText = data.main.humidity + "%";
      document.getElementById("wind").innerText = data.wind.speed + " km/h";

    })
    .catch(error => {
      alert("City not found ");
    });
}
