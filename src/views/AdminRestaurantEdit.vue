<template>
  <div class="container py-5">
    <restaurant-form @after-submit="handleAfterSubmit" :initial-restaurant="restaurant"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

const dummyData = {
  restaurant: {
    id: 1,
    name: "Bernard Smitham",
    tel: "251-335-3711 x04729",
    address: "026 Hermiston Course",
    opening_hours: "08:00",
    description:
      "Est qui praesentium nobis. Libero iste alias ut ex. Adipisci voluptate sunt exercitationem. Consequatur ratione omnis qui animi aut nesciunt enim quia et. Laudantium quo incidunt repellendus quis laboriosam voluptatem.\n \rAut enim voluptate aut aut dolorum debitis corporis et. Sit ea qui. Architecto magnam quibusdam quia voluptas recusandae labore. Provident ut sit eum sunt consectetur illum.\n \rEa placeat aliquid. Omnis magnam est possimus. Dignissimos quis omnis eius pariatur qui quas est odio. Sunt eius perspiciatis excepturi cum ullam nihil eligendi. Unde molestiae dolor cupiditate qui. Quis eveniet qui.",
    image: "https://loremflickr.com/320/240/restaurant,food/?random=47.99271535348719",
    viewCounts: 1,
    createdAt: "2022-03-10T16:08:42.000Z",
    updatedAt: "2022-03-14T16:07:54.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    }
  }
}

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
      }
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)

      const { restaurant } = dummyData
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
    },
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>