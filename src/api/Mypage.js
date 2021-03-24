
import axios from 'axios'

export default {
  postrecipelist: (data) =>
  axios.post(`${process.env.VUE_APP_API_BASE}/recipe`,data),

  categorylist: () =>
  axios.get(`${process.env.VUE_APP_API_BASE}/category`),
  recipelist: () =>
  axios.get(`${process.env.VUE_APP_API_BASE}/recipe`),
  stufflist: () =>
  axios.get(`${process.env.VUE_APP_API_BASE}/stuff`),
}