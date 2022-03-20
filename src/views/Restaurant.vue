<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <restaurant-detail :initial-restaurant="restaurant"/>
    <hr>
    <restaurant-comments :restaurant-comments="restaurantComments" @after-delete-comment="afterDeleteComment"/>
    <create-comment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment"/>
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
import restaurantsAPI from '../apis/restaurants'
import commentsAPI from '../apis/comments'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex' 

export default {
  name: 'restaurant-show',
  components: {
    'restaurant-detail': RestaurantDetail,
    'restaurant-comments': RestaurantComments,
    'create-comment': CreateComment
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
      },
      restaurantComments: []
    }
  },
  beforeRouteUpdate(to, from ,next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })

        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked,
        }
        this.restaurantComments = data.restaurant.Comments
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
        console.log(err)
      }
    },
    async afterCreateComment(payload) {
      try {
        const { restaurantId, text } = payload

        const { data } = await commentsAPI.addComments({ restaurantId, text })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurantComments.push({
          id: data.commentId,
          RestaurantId: data.restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name
          },
          text,
          createdAt: new Date()
        })
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳評論，請稍後再試'
        })
        console.log(err)
      }
    },
    async afterDeleteComment(commentId) {
      try {
        const { data } = await commentsAPI.deleteComments({ commentId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurantComments = this.restaurantComments.filter(
          comment => comment.id !== commentId
        )
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳評論，請稍後再試'
        })
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>