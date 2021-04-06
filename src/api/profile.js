// import axios from 'axios'
import request from './request'
export default {
  getprofile: () => request.get(`${process.env.VUE_APP_USER_BASE}/profile`),
  signout: () => request.delete(`${process.env.VUE_APP_USER_BASE}/signout`)
}