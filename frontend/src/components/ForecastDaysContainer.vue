<script setup>
// Import the ForecastDay component and define the required props
import ForecastDay from './ForecastDay.vue'
defineProps({
  cityName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- Show loading message while data is being fetched -->
  <div class="bolder" v-if="isLoading">Loading...</div>

  <!-- Show error message if there was an error fetching data -->
  <div class="bolder" v-else-if="error">{{ error }}</div>

  <!-- Render the ForecastDay component for each day's weather forecast if there is something to be shown-->
  <div id="forecast-container" v-else-if="forecastData && forecastData.length > 0" >
    <ForecastDay v-for="item in forecastData" :weatherData="item" :key="item.dt"/>
  </div>
</template>

<script>


export default {
  data() {
    return {
      forecastData: null,
      isLoading: false,
      error: null,
    };
  },
  mounted() {
      this.fetchForecastWeatherData();
    },
    watch: {
      // Watching is variable change and then execute function
      cityName: {
        handler: 'fetchForecastWeatherData',
        immediate: false
      }
    },
    methods: {
      async fetchForecastWeatherData() {
        this.forecastData = null;
        this.isLoading = true
        this.error = null;
        // Fetch weather forecast data using OpenWeatherMap API with axios
         this.axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&units=${import.meta.env.VITE_UNITS}&appid=${import.meta.env.VITE_API_KEY}`)
          .then((response) => {
            // If response status is 200, filter out the weather forecasts for each day at midday
            if (response.status === 200) {
              const timestampsByDay = {}

              response.data.list.forEach((item) => {
                const timestamp = item.dt * 1000
                const date = new Date(timestamp)
                const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

                if (timestamp > Date.now() && date.getHours() === 12 + response.data.city.timezone / 3600) {
                  if (!timestampsByDay[dateString]) {
                    timestampsByDay[dateString] = { ...item, day: date.toLocaleString('en-us', { weekday: 'long' }) }
                  }
                }
              })
              // Set the forecastData to an array of weather forecasts for each day
              this.forecastData = Object.values(timestampsByDay);
            }
          })
          .catch(({ response }) => {
            // Set the error message if tere was an error fetching data
            if (response?.data?.cod && response.data.cod !== 404) {
              this.error = response.data.message.charAt(0).toUpperCase() + response.data.message.slice(1) + "!";
            } else {
              this.error = "Something went wrong while fetching data!";
            }
          })
          .finally(() => {
              // Set isLoading state to false after API call is finished
              this.isLoading = false;
          });
      }
    }
};
</script>
