
import axios from 'axios'

export default {
  getUser: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/user`),
  purchaselist: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/purchase-order`),
  lecturelist: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/user-lecture`),
  categorylist: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/category`),
  recipelist: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/recipes`),
  stufflist: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/stuff`),
  recipe: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/recipes/${id}`),
  recipeProcedureFile: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/RecipeProcedureFile/${id}`),

  postrecipelist: (data) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/recipe`, data),
  uploadFile: (id, form) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/recipe/${id}/recipe-files`, form, { headers: { 'content-type': 'multipart/form-data' } }),
  uploadFile2: (id, form) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/procedure/${id}/files`, form, { headers: { 'content-type': 'multipart/form-data' } }),

  delrecipe: (id) => axios.delete(`${process.env.VUE_APP_API_BASE}/recipe/${id}`),
}