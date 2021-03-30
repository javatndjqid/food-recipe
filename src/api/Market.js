
import axios from 'axios'

export default {


  productList: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/product`),
  productDetail: (id) =>
    axios.get(`${process.env.VUE_APP_API_BASE}/product/${id}`),
  addCart: (product) =>
    axios.post(`${process.env.VUE_APP_API_BASE}/cart`, product),
  cartList: () =>
    axios.get(`${process.env.VUE_APP_API_BASE}/cart`),
  removeCart: (id) =>
    axios.delete(`${process.env.VUE_APP_API_BASE}/cart/${id}`),
  purchase: () =>
    axios.post(`${process.env.VUE_APP_API_BASE}/purchase`),

}