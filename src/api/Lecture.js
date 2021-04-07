import axios from 'axios'
import request from './request'

export default {
  list: () => axios.get(`${process.env.VUE_APP_API_LECTURE}/lectures`),
  detail: (id) => axios.get(`${process.env.VUE_APP_API_LECTURE}/lectures/${id}`),
  subscribe: (lectureId) => request.post(`${process.env.VUE_APP_API_LECTURE}/lecture-users/${lectureId}`),
  unSubscribe: (lectureId) => request.delete(`${process.env.VUE_APP_API_LECTURE}/lecture-users/${lectureId}`),
  information: (lectureId) => request.get(`${process.env.VUE_APP_API_LECTURE}/lecture-users/${lectureId}`),
  related: (category) => axios.get(`${process.env.VUE_APP_API_LECTURE}/lectures/search/category`, {params:{keyword: category}}),


}