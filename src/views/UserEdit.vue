<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">{{ user.name }}</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">{{ isProcessing ? '處理中...' : 'Submit'}}</button>
    </form>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'user-edit',
  data() {
    return {
      user: {
        id: -1,
        name: '',
        image: '',
      },
      isProcessing: false
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
        if (this.currentUser.id !== Number(userId)) {
          Toast.fire({
            icon: 'warning',
            title: '存取被拒'
          })
          return this.$router.push({ name: 'root' })
        }

        const { data } = await usersAPI.get({ userId })

        this.user.id = data.profile.id
        this.user.name = data.profile.name
        this.user.image = data.profile.image
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得用戶資料，請稍後再試'
        })
        console.log(err)
      }
    },
    handleFileChange(e) {
      const { files } = e.target

      if (files.length === 0) {
        return this.user.image = ''
      }
      const imgURL = window.URL.createObjectURL(files[0])
      this.user.image = imgURL
    },
    async handleSubmit(e) {
      try {
        if (this.currentUser.id !== this.user.id) {
          Toast.fire({
            icon: 'warning',
            title: '存取被拒'
          })
          return this.$router.push({ name: 'root' })
        }
        if (!this.user.name.trim()) {
          Toast.fire({
            icon: 'warning',
            title: '名稱不得為空'
          })
          return
        }

        this.isProcessing = true

        const form = e.target
        const formData = new FormData(form)
        const { data } = await usersAPI.update({ userId: this.user.id, formData })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'user', params: { id: this.user.id } })
      } catch (err) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新用戶資料，請稍後再試'
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