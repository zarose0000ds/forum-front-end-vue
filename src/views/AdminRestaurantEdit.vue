<template>
  <div class="container py-5">
    <restaurant-form @after-submit="handleAfterSubmit" :initial-restaurant="restaurant" :is-processing="isProcessing"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  name: 'admin-restaurant-new',
  components: {
    'restaurant-form': AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try{
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        const { restaurant } = data

        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryId: restaurant.CategoryId,
          tel: restaurant.tel,
          address: restaurant.address,
          description: restaurant.description,
          image: restaurant.image,
          openingHours: restaurant.opening_hours
        }
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
        console.log(err)
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({ restaurantId: this.restaurant.id, formData })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })
      } catch (err) {
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
        console.log(err)
      }
    }
  }
}
</script>