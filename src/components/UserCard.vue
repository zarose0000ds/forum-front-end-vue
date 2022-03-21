<template>
  <div class="col-3">
    <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img
        :src="user.image"
        width="140px"
        height="140px"
      />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
    <p class="mt-3">
      <button type="button" class="btn btn-danger" v-if="user.isFollowed" @click="deleteFollowing(user.id)">取消追蹤</button>
      <button type="button" class="btn btn-primary" v-else @click="addFollowing(user.id)">追蹤</button>
    </p>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user.FollowerCount += 1
        this.user.isFollowed = true
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
        this.user.FollowerCount -= 1
        this.user.isFollowed = false
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
        console.log(err)
      }
    }
  }
}
</script>