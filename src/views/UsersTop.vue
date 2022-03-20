<template>
  <div class="container py-5">
    <nav-tabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <user-card v-for="user in users" :key="user.id" :initial-user="user"/>
    </div>
  </div>
</template>

<script>
import Navtabs from '../components/NavTabs.vue'
import UserCard from '../components/UserCard.vue'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  name: 'restaurants-home',
  components: {
    'nav-tabs': Navtabs,
    'user-card': UserCard
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()
        this.users = data.users
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
        console.log(err)
      }
    }
  }
}
</script>