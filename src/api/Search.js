import axios from 'axios'

export default {
  list: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search?page=${page}`),
  categories: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/categories`),
  category: (categoryId, page) => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/category/${categoryId}?page=${page}`),
  stuff: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/all-stuffs`),
  recipe: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/${id}`),
  count: () => axios.get(`${process.env.VUE_APP_API_BASE}/recipe/search/count`),
}
