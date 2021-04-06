
import axios from 'axios'
import request from './request'
export default {
  getUser: () =>
  request.get(`${process.env.VUE_APP_API_MYPAGE}/user`),
  purchaselist: () =>
  request.get(`${process.env.VUE_APP_API_MYPAGE}/purchase-order`),
  lecturelist: (userId) =>
  request.get(`${process.env.VUE_APP_API_MYPAGE}/user-lecture/${userId}`),
  categorylist: () =>
  request.get(`${process.env.VUE_APP_API_MYPAGE}/category`),
  recipelist: (userId) =>
  request.get(`${process.env.VUE_APP_API_MYPAGE}/recipe/${userId}`),
    
  stufflist: () =>
  axios.get(`${process.env.VUE_APP_API_MYPAGE}/stuff`),
  recipe: (id) => request.get(`${process.env.VUE_APP_API_MYPAGE}/recipes/${id}`),
  recipeProcedureFile: (id) => request.get(`${process.env.VUE_APP_API_MYPAGE}/RecipeProcedureFile/${id}`),

  postrecipelist: (data) =>
  request.post(`${process.env.VUE_APP_API_MYPAGE}/recipe`, data),
  uploadFile: (id, form) =>
  request.post(`${process.env.VUE_APP_API_MYPAGE}/recipe/${id}/recipe-files`, form, { headers: { 'content-type': 'multipart/form-data' } }),
  uploadFile2: (id, form) =>
  request.post(`${process.env.VUE_APP_API_MYPAGE}/procedure/${id}/files`, form, { headers: { 'content-type': 'multipart/form-data' } }),

  delrecipe: (id) => request.delete(`${process.env.VUE_APP_API_MYPAGE}/recipe/${id}`),
}