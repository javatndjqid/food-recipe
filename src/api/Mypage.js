
import axios from 'axios'

export default {
  postrecipelist: () =>
  axios.post(`${process.env.VUE_APP_API_BASE}/recipe`),

  // list: () =>
  // axios.get(`${process.env.VUE_APP_API_BASE}/recipe`),
  recipelist: () =>
  axios.get(`${process.env.VUE_APP_API_BASE}/recipe`),

}