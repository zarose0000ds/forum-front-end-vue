<template>
  <div class="container py-5">
    <restaurant-form />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

export default {
  name: 'admin-restaurant-new',
  components: {
    'restaurant-form': AdminRestaurantForm
  }
}
</script>