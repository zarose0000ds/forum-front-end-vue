<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button type="button" class="btn btn-danger float-right" v-if="currentUser.isAdmin"
                @click="handleDeleteBtnClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">{{ comment.User.name }}</a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">{{ comment.createdAt | fromNow }}</footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins'
import { mapState } from 'vuex'

export default {
  mixins: [fromNowFilter],
  methods: {
    handleDeleteBtnClick(commentId) {
      console.log('handleDeleteBtnClick:', commentId)
      this.$emit('after-delete-comment', commentId)
    }
  },
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>