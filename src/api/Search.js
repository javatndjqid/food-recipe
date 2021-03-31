import axios from 'axios'

export default {
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search`),
  categories: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/categories`),
  category: (categoryId) => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/category/${categoryId}`),
  stuff: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/all-stuffs`),
  recipe: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/${id}`),
  count: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/count`),
  // filter: (categoryId, page, stuffs) => axios.post(`${process.env.VUE_APP_API_BASE}/recipe/search/stuffs/${categoryId}?page=${page}`, stuffs),
}
