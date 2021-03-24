import axios from 'axios'

export default {
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search`),
  categories: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/categories`),
  category: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/category`),
  stuff: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/all-stuffs`),
}
