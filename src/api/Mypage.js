
import axios from 'axios'

export default {
  // post: () =>
  // axios.post(`${process.env.VUE_APP_API_BASE}/recipe/${userId}`),

  // list: () =>
  // axios.get(`${process.env.VUE_APP_API_BASE}/recipe`),
  list: () =>
  axios.get("http://localhost:8080/recipe"),

}