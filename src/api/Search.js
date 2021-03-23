import axios from 'axios'

export default {
  list:()=>axios.get(`${process.env.VUE_APP_API_BASE}/none-search`)
}
