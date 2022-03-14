<template>
  <div class="container py-5">
    <nav-tabs />
    <h1 class="mt-5">人氣餐廳</h1>
  </div>
</template>

<script>
import Navtabs from '../components/NavTabs.vue'

export default {
  name: 'restaurants-home',
  components: {
    'nav-tabs': Navtabs
  }
}
</script>