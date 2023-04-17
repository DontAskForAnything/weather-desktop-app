<template>
  <div id="main-part" :style="{ backgroundImage: backgroundImageUrl }">
    <CityInput @update-city="updateCity" />
    <!-- Render CurrentWeatherInfo component with dynamic cityName prop -->
    <CurrentWeatherInfo :cityName="cityName" />
    
    <!-- Render ForecastDaysContainer component with dynamic cityName prop -->
    <ForecastDaysContainer :cityName="cityName" />
  </div>
</template>

<script>
// Import backgroundImageUrl function from background.js module
import { backgroundImageUrl } from './background.js'

// Import CurrentWeatherInfo and ForecastDaysContainer components
import CurrentWeatherInfo from './components/CurrentWeatherInfo.vue'
import ForecastDaysContainer from './components/ForecastDaysContainer.vue'
import CityInput from './components/CityInput.vue'

export default {
  // Register CurrentWeatherInfo and ForecastDaysContainer components
  components: { CurrentWeatherInfo, ForecastDaysContainer, CityInput },
  
  // Define data function to return cityName from environment variables
  data () {
    return {
      cityName: localStorage.getItem('city') ? localStorage.getItem('city') : 'Warsaw'
    }
  },
  methods: {
    updateCity(newCity) {
      this.cityName = newCity
      localStorage.setItem('city',  this.cityName)
    }
  },
  // Define computed property to calculate background image URL
  computed: {
    backgroundImageUrl
  }
}
</script>
