
import axios from 'axios'

export default {


  categorylist: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/category`),
  recipelist: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/recipe`),
  stufflist: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/stuff`),
  recipe: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/recipes/${id}`),
  postrecipelist: (data) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/recipe`, data),
  uploadFile: (id, form) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/recipe/${id}/recipe-files`, form, { headers: { 'content-type': 'multipart/form-data' } }),

  delrecipe: (id) => axios.delete(`${process.env.VUE_APP_API_BASE}/recipe/${id}`),
}