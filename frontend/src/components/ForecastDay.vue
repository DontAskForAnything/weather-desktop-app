<script setup>
  // Define a prop called "weatherData" with type Object that is required to be passed to this component
  defineProps({
    weatherData: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <!-- Define a div with a class of "day" -->
  <div class="day">
    <!-- Display the "day" property -->
    <h1>{{ weatherData.day }}</h1>
    <!-- Display an image with the source set to a dynamic path -->
    <img :src="'./icons/' + weatherData.weather[0].icon + '.png'" draggable="false">
    <!-- Display the rounded temperature and wind speed values, along with a Font Awesome icon that rotates based on the wind degree -->
    <p>{{ Math.round(weatherData.main.temp) }}° - {{ Math.round(weatherData.wind.speed) }} km/h<i :class="'fa-solid fa-location-arrow fa-rotate-' + Math.round(weatherData.wind.deg / 90) * 90 % 360"></i></p>
  </div>
</template>