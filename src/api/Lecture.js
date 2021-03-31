import axios from 'axios'

export default {
  list: () => axios.get(`${process.env.VUE_APP_API_BASE_LECTURE}/lectures`),
  // meta: () => axios.get(`${process.env.VUE_APP_API_BASE_LECTURE}/lectures/meta`),
  // pagedList: (page) => axios.get(`${process.env.VUE_APP_API_BASE_LECTURE}/lectures/paging?page=${page}`),
  detail: (id) => axios.get(`${process.env.VUE_APP_API_BASE_LECTURE}/lectures/${id}`),
  // addLecture: (item) => axios.post(`${process.env.VUE_APP_API_BASE_LECTURE}/lectures`, item),

  // LectureUser는 좀 더 고민해보자
  // subscribe:

  // subscribedList: (),
  subscribe: (id) => axios.post(`${process.env.VUE_APP_API_BASE_LECTURE}/lecture-users/${id}`),
  unSubscribe: (id) => axios.delete(`${process.env.VUE_APP_API_BASE_LECTURE}/lecture-users/${id}`)
}