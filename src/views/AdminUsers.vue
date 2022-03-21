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
            <button type="button" class="btn btn-link" v-if="user.isAdmin"
                    @click.prevent.stop="toggleIsAdmin(user.id, user.isAdmin)"
                    :disabled="user.id === 1"
            >
              set as user
            </button>
            <button type="button" class="btn btn-link" v-else
                    @click.prevent.stop="toggleIsAdmin(user.id, user.isAdmin)">
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue"
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

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
    async fetchUsers() {
      try {
        const { data, statusText } = await adminAPI.users.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.users = data.users
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得用戶列表，請稍後再試'
        })
        console.log(err)
      }
    },
    async toggleIsAdmin(userId, isAdmin) {
      try {
        const temp = !isAdmin
        const { data } = await adminAPI.users.toggleUserRole({ userId, isAdmin: temp.toString() })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin
            }
          }
          return user
        })
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法更新用戶權限，請稍後再試'
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