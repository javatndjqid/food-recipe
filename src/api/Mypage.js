
import axios from 'axios'

export default {
  getUser: () =>
    axios.get(`${process.env.VUE_APP_API_MYPAGE}/user`),
  purchaselist: () =>
    axios.get(`${process.env.VUE_APP_API_MYPAGE}/purchase-order`),
  lecturelist: () =>
    axios.get(`${process.env.VUE_APP_API_MYPAGE}/user-lecture`),
  categorylist: () =>
    axios.get(`${process.env.VUE_APP_API_MYPAGE}/category`),
  recipelist: (userId) =>
    axios.get(`${process.env.VUE_APP_API_MYPAGE}/recipe/${userId}`),
    
  stufflist: () =>
    axios.get(`${process.env.VUE_APP_API_MYPAGE}/stuff`),
  recipe: (id) => axios.get(`${process.env.VUE_APP_API_MYPAGE}/recipes/${id}`),
  recipeProcedureFile: (id) => axios.get(`${process.env.VUE_APP_API_MYPAGE}/RecipeProcedureFile/${id}`),

  postrecipelist: (data) =>
    axios.post(`${process.env.VUE_APP_API_MYPAGE}/recipe`, data),
  uploadFile: (id, form) =>
    axios.post(`${process.env.VUE_APP_API_MYPAGE}/recipe/${id}/recipe-files`, form, { headers: { 'content-type': 'multipart/form-data' } }),
  uploadFile2: (id, form) =>
    axios.post(`${process.env.VUE_APP_API_MYPAGE}/procedure/${id}/files`, form, { headers: { 'content-type': 'multipart/form-data' } }),

  delrecipe: (id) => axios.delete(`${process.env.VUE_APP_API_MYPAGE}/recipe/${id}`),
}