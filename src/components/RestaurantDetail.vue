<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">{{ restaurant.categoryName }}</p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image | emptyImage"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link class="btn btn-primary btn-border mr-2" :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id }}">
        Dashboard
      </router-link>

      <button type="button" class="btn btn-danger btn-border mr-2" v-if="restaurant.isFavorited"
              @click="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button type="button" class="btn btn-primary btn-border mr-2" v-else
              @click="addFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button type="button" class="btn btn-danger like mr-2" v-if="restaurant.isLiked" @click="deleteLike(restaurant.id)">
        Unlike
      </button>
      <button type="button" class="btn btn-primary like mr-2" v-else @click="addLike(restaurant.id)">
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from '../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    'initial-restaurant': {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      }
    }
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  created() {
    this.fetchRestaurant()
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        id: this.initialRestaurant.id,
        name: this.initialRestaurant.name,
        categoryName: this.initialRestaurant.categoryName,
        image: this.initialRestaurant.image,
        openingHours: this.initialRestaurant.opening_hours,
        tel: this.initialRestaurant.tel,
        address: this.initialRestaurant.address,
        description: this.initialRestaurant.description,
        isFavorited: this.initialRestaurant.isFavorited,
        isLiked: this.initialRestaurant.isLiked
      }
    },
    async addFavorite (restaurantId) {
      try {
        const { data }= await usersAPI.addFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
        console.log(err)
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }  
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
        console.log(err)
      }
    },
    async addLike (restaurantId) {
      try {
        const { data }= await usersAPI.addLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入Like，請稍後再試'
        })
        console.log(err)
      }
    },
    async deleteLike (restaurantId) {
      try {
        const { data } = await usersAPI.deleteLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }  
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除Like，請稍後再試'
        })
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>