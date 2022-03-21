<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="profile.image | emptyImage"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{ profile.Comments.length }}</strong> 已評論餐廳</li>
            <li><strong>{{ profile.FavoritedRestaurants.length }}</strong> 收藏的餐廳</li>
            <li><strong>{{ profile.Followings.length }}</strong> followings (追蹤者)</li>
            <li><strong>{{ profile.Followers.length }}</strong> followers (追隨者)</li>
          </ul>
          <p v-if="currentUser.id === profile.id">
            <router-link :to="{ name: 'user-edit', params: { id: profile.id } }">
              <button type="submit" class="btn btn-primary">edit</button>
            </router-link>
          </p>
          <p class="mt-3" v-else>
            <button type="button" class="btn btn-danger" v-if="isFollowed" @click="deleteFollowing(profile.id)">
              取消追蹤
            </button>
            <button type="button" class="btn btn-primary" v-else @click="addFollowing(profile.id)">
              追蹤
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'
import { emptyImageFilter } from '../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    initialProfile (newValue) {
      this.profile = {
        ...this.profile,
        ...newValue
      }
    },
    initialIsFollowed (newValue) {
      this.isFollowed = newValue
    }
  },
  data() {
    return {
      profile: this.initialProfile,
      isFollowed: this.initialIsFollowed
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        const temp = {
          ...this.currentUser,
          Followship: {
            followerId: this.currentUser.id,
            followingId: this.profile.id
          }
        }

        this.profile.Followers.push(temp)
        this.isFollowed = true
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
        console.log(err)
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.profile.Followers = this.profile.Followers.filter(follower => follower.id !== this.currentUser.id)
        this.isFollowed = false
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
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