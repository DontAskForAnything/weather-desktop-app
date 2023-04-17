<script setup>
  // Define a prop for the component
  defineProps({
    cityName: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="current-info bolder" v-if="isLoading">Loading...</div>
  <div class="current-info" v-else-if="weatherData">
    <!-- Display temperature, location, wind speed and direction, and weather icon and description -->
    <h1>{{Math.round(weatherData.main.temp)}}°</h1>
    <h2>{{weatherData.name}}<p class="location-coords"><i class="fa-solid fa-location-dot fa-sm"></i>&nbsp;{{ weatherData.coord.lat.toFixed(3)}} {{weatherData.coord.lon.toFixed(3)}} - {{Math.round(weatherData.wind.speed)}} km/h <i :class="'fa-solid fa-location-arrow fa-rotate-' + Math.round(weatherData.wind.deg / 90) * 90 % 360"></i></p></h2>
    <div>
      <img :src="'./icons/' + weatherData.weather[0].icon + '.png'" draggable="false">
      <p>{{weatherData.weather[0].main}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        weatherData: null,
        isLoading: true,
      };
    },
    mounted() {
      this.fetchWeatherData();
    },
    watch: {
      cityName: {
        handler: 'fetchWeatherData',
        immediate: false
      }
    },
    methods: {
      fetchWeatherData() {
        // Clean weatherData
        this.isLoading = true
        this.weatherData= null;
        // Fetch weather data using OpenWeatherMap API with axios
        this.axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=${import.meta.env.VITE_UNITS}&appid=${import.meta.env.VITE_API_KEY}`)
          .then((response) => {
            // If response status is 200, set weatherData to response data
            if(response.status == 200){
              this.weatherData = response.data;
            }
          })
          .catch(() => {})
          .finally(() => {
            // Set isLoading state to false after API call is finished
            this.isLoading = false;
          });
      },
  }
};
</script>
