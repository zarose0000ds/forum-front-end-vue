<template>
  <div class="container py-5">
    <nav-tabs />
    <loading-spinner v-if="isLoading"/>
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <newest-restaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <h3>最新評論</h3>
          <newest-comments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Navtabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue' 
import NewestComments from '../components/NewestComments.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  name: 'restaurants-home',
  components: {
    'nav-tabs': Navtabs,
    'newest-restaurants': NewestRestaurants,
    'newest-comments' : NewestComments,
    'loading-spinner' : LoadingSpinner
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds() {
      try {
        const res = await restaurantsAPI.getRestaurantsFeeds()

        this.restaurants = res.data.restaurants
        this.comments = res.data.comments
        this.isLoading = false
      } catch (err) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得資料，請稍後再試'
        })
        console.log(err)
      }
    }
  }
}
</script>