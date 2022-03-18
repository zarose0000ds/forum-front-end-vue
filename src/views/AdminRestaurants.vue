<template>
  <div class="container py-5">
    <admin-nav />

    <a href="#" class="btn btn-primary mb-4">New Restaurant</a>

    <restaurants-table />
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import AdminRestaurantsTable from '../components/AdminRestaurantsTable.vue'

export default {
  name: 'admin-restaurants',
  components: {
    'admin-nav': AdminNav,
    'restaurants-table': AdminRestaurantsTable
  }
}
</script>