<template>
  <div class="container py-5">
    <restaurant-form @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

export default {
  name: 'admin-restaurant-new',
  components: {
    'restaurant-form': AdminRestaurantForm
  },
  methods: {
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>