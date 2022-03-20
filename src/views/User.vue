<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <profile-card :initial-profile="profile" :initial-is-followed="isFollowed"/>

      <div class="row">
        <div class="col-md-4">
          <followings-card :followings="profile.Followings"/>
          <br />
          <followers-card :followers="profile.Followers"/>
        </div>
        <div class="col-md-8">
          <comments-card :comments="profile.Comments"/>
          <br />
          <favorited-restaurants :favorited-restaurants="profile.FavoritedRestaurants"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingsCard from '../components/UserFollowingsCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import UserCommentsCard from '../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard.vue'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  name: 'user-profile',
  components:{
    'profile-card': UserProfileCard,
    'followings-card': UserFollowingsCard,
    'followers-card': UserFollowersCard,
    'comments-card': UserCommentsCard,
    'favorited-restaurants': UserFavoritedRestaurantsCard
  },
  data() {
    return {
      profile: {
        id: -1,
        name: '',
        email: '',
        isAdmin: false,
        image: '',
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
      },
      isFollowed: false
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId })

        this.profile.id = data.profile.id
        this.profile.name = data.profile.name
        this.profile.email = data.profile.email
        this.profile.isAdmin = data.profile.isAdmin
        this.profile.image = data.profile.image
        this.profile.Comments = data.profile.Comments
        this.profile.FavoritedRestaurants = data.profile.FavoritedRestaurants
        this.profile.Followers = data.profile.Followers
        this.profile.Followings = data.profile.Followings
        this.isFollowed = data.isFollowed
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得用戶資訊，請稍後再試'
        })
      }
    }
  }
}
</script>