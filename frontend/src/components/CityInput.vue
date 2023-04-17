<template>
    <form @submit.prevent="handleSubmit" id="search-form">
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        <input type="text" v-model="city" placeholder="Enter city name" />
    </form>
  </template>
  
  <script>
    export default {
      data() {
        return {
          city: ''
        }
      },
      methods: {
        handleSubmit() {
          this.$emit('update-city', this.city)
          this.city = ''
        }
      }
    }
  </script>
  