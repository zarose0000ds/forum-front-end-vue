<template>
  <div class="container py-5">
    <nav-tabs />
    <loading-spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>
      <hr />
      <restaurant-card v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
    </template>
  </div>
</template>

<script>
import Navtabs from '../components/NavTabs.vue'
import RestaurantsTopCard from '../components/RestaurantsTopCard.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  name: 'restaurants-home',
  components: {
    'nav-tabs': Navtabs,
    'restaurant-card': RestaurantsTopCard,
    'loading-spinner' : LoadingSpinner
  },
  data() {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  created() {
    this.fetchRestaurant()
  },
  methods: {
    async fetchRestaurant() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()
        this.restaurants = data.restaurants
        this.isLoading = false
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳，請稍後再試'
        })
        console.log(err)
      }
    }
  }
}
</script>