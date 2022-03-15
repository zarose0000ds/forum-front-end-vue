<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>J{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">{{ restaurant.categoryName }}</p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
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
      <a class="btn btn-primary btn-border mr-2" href="#">Dashboard</a>

      <button type="button" class="btn btn-danger btn-border mr-2" v-if="restaurant.isFavorited" @click="deleteFavorite">
        移除最愛
      </button>
      <button type="button" class="btn btn-primary btn-border mr-2" v-else @click="addFavorite">
        加到最愛
      </button>
      <button type="button" class="btn btn-danger like mr-2" v-if="restaurant.isLiked" @click="deleteLike">Unlike</button>
      <button type="button" class="btn btn-primary like mr-2" v-else @click="addLike">Like</button>
    </div>
  </div>
</template>

<script>
export default {
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
    addFavorite() {
      this.restaurant.isFavorited = true
    },
    deleteFavorite() {
      this.restaurant.isFavorited = false
    },
    addLike() {
      this.restaurant.isLiked = true
    },
    deleteLike() {
      this.restaurant.isLiked = false
    }
  }
}
</script>