<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="profile.image"
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
          <p>
            <a href="/users/2/edit" v-if="currentUserId === profile.id">
              <button type="submit" class="btn btn-primary">edit</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  props: {
    initialProfile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentUserId: dummyUser.currentUser.id,
      profile: this.initialProfile
    }
  }
}
</script>