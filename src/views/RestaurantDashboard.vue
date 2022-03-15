<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr/>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Judy Runte",
    "tel": "(918) 827-1962",
    "address": "98138 Elisa Road",
    "opening_hours": "08:00",
    "description": "dicta et cupiditate",
    "image": "https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",
    "createdAt": "2019-06-22T09:00:43.000Z",
    "updatedAt": "2019-06-22T09:00:43.000Z",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2019-06-22T09:00:43.000Z",
      "updatedAt": "2019-06-22T09:00:43.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
      {
        "id": 3,
        "text": "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2019-06-22T09:00:43.000Z",
        "updatedAt": "2019-06-22T09:00:43.000Z",
        "User": {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
          "image": "https://i.imgur.com/XooCt5K.png",
          "isAdmin": false,
          "createdAt": "2019-06-22T09:00:43.000Z",
          "updatedAt": "2019-06-23T01:16:31.000Z"
        }
      }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)

      const { id, name } = dummyData.restaurant
      this.restaurant.id = id
      this.restaurant.name = name
      this.restaurant.categoryName = dummyData.restaurant.Category.name
      this.restaurant.commentsLength = dummyData.restaurant.Comments.length
    }
  }
}
</script>