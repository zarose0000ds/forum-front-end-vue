import { apiHelper } from '../utils/helpers'

const getToken = () => localStorage.getItem('token')

export default {
  addComments({ restaurantId, text }) {
    return apiHelper.post('/comments', { restaurantId, text }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteComments({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}