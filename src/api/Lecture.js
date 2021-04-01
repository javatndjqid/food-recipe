import axios from 'axios'

export default {
  list: () => axios.get(`${process.env.VUE_APP_API_BASE_LECTURE}/lectures`),
  detail: (id) => axios.get(`${process.env.VUE_APP_API_BASE_LECTURE}/lectures/${id}`),
  subscribe: (lectureId) => axios.post(`${process.env.VUE_APP_API_BASE_LECTURE}/lecture-users/${lectureId}`),
  unSubscribe: (lectureId) => axios.delete(`${process.env.VUE_APP_API_BASE_LECTURE}/lecture-users/${lectureId}`),
  information: (lectureId) => axios.get(`${process.env.VUE_APP_API_BASE_LECTURE}/lecture-users/${lectureId}`)



}