<template>
  <div class="container py-5">
    <admin-nav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td style="width: 60%;">{{ user.email }}</td>
          <td style="width: 20%;">
            <template v-if="user.isAdmin">admin</template>
            <template v-else>user</template>
          </td>
          <td>
            <button type="button" class="btn btn-link" v-if="user.isAdmin" @click.prevent.stop="toggleIsAdmin(user.id)">
              set as user
            </button>
            <button type="button" class="btn btn-link" v-else @click.prevent.stop="toggleIsAdmin(user.id)">
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$wUW5yEh4x45Xe7psfFf0AeQbuxDnP6lxKO31oUqYok6Lwq59PYH.e",
      isAdmin: true,
      image: null,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$TO09I6KDA9E4TwsnOupRweUe0SUIJZaMaPBRQGAKQH5NxRgWOMfsa",
      isAdmin: false,
      image: null,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$BgqvSHL1LbAop9gNxweJzum1jVNUKVuUnFRiLSS0zmNPlGT0aEjkC",
      isAdmin: false,
      image: null,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    }
  ]
}

export default {
  name: "admin-users",
  components: {
    "admin-nav": AdminNav
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
      this.users = dummyData.users
    },
    toggleIsAdmin(userId) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>