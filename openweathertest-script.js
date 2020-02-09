const api_url = 'https://api.openweathermap.org/data/2.5/weather?zip=11375,us&units=imperial&appid=56531c5a57c088ee0ba3d9c6933ef932'
      async function getWeather(){
        const response = await fetch(api_url);
        const data = await response.json();
        const weather = data.weather[0].description;
        const temp = data.main.temp;
        console.log(data);
        console.log(data.weather[0].description);
        console.log(data.main.temp);
        
        document.getElementById('weather').textContent = weather;
        document.getElementById('temp').textContent = temp;
      }
getWeather();