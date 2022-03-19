<template>
  <div class="container py-5">
    <nav-tabs />
    <nav-pills :categories='categories' />

    <div class="row">
      <restaurant-card
        v-for='restaurant in restaurants'
        :key='restaurant.id'
        :initial-restaurant='restaurant'
      />
    </div>

    <restaurant-pag v-if="totalPage.length > 1"
                    :current-page="currentPage"
                    :total-page="totalPage"
                    :previous-page="previousPage"
                    :next-page="nextPage"
                    :category-id="categoryId"
    />
  </div>
</template>

<script>
import Navtabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantPagination from '../components/RestaurantsPagination.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  name: 'restaurants-home',
  components: {
    'nav-tabs': Navtabs,
    'restaurant-card': RestaurantCard,
    'nav-pills': RestaurantsNavPills,
    'restaurant-pag': RestaurantPagination
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created() {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate (to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const res = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = res.data

        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
        console.log(err)
      }
    }
  }
}
</script>