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

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$wUW5yEh4x45Xe7psfFf0AeQbuxDnP6lxKO31oUqYok6Lwq59PYH.e',
      isAdmin: true,
      image: null,
      createdAt: '2022-03-10T16:08:42.000Z',
      updatedAt: '2022-03-10T16:08:42.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$TO09I6KDA9E4TwsnOupRweUe0SUIJZaMaPBRQGAKQH5NxRgWOMfsa',
      isAdmin: false,
      image: null,
      createdAt: '2022-03-10T16:08:42.000Z',
      updatedAt: '2022-03-10T16:08:42.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$BgqvSHL1LbAop9gNxweJzum1jVNUKVuUnFRiLSS0zmNPlGT0aEjkC',
      isAdmin: false,
      image: null,
      createdAt: '2022-03-10T16:08:42.000Z',
      updatedAt: '2022-03-10T16:08:42.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    }
  ]
}

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
    fetchUsers() {
      const { users } = dummyData
      this.users = users
    }
  }
}
</script>