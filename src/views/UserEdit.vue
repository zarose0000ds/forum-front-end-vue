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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  user: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  data() {
    return {
      user: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  methods: {
    fetchUser(userId) {
      console.log('fetchUser id:', userId)

      this.user = { ...dummyData.user }
      this.isAuthenticated = dummyData.isAuthenticated
    },
    handleFileChange(e) {
      const { files } = e.target

      if (files.length === 0) {
        return this.user.image = ''
      }
      const imgURL = window.URL.createObjectURL(files[0])
      this.user.image = imgURL
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)

      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>