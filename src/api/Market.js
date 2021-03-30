
import axios from 'axios'

export default {


  productList: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/product`),
  productDetail: (id) =>
    axios.get(`${process.env.VUE_APP_API_BASE}/product/${id}`),

}