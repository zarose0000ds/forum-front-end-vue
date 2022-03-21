import { apiHelper } from '../utils/helpers'

export default {
  addComments({ restaurantId, text }) {
    return apiHelper.post('/comments', { restaurantId, text })
  },
  deleteComments({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}