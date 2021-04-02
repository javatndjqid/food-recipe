
import axios from 'axios'

export default {


  productList: () =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product`),
  productDetail: (id) =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product/${id}`),
  addCart: (product) =>
    axios.post(`${process.env.VUE_APP_API_MARKET}/cart`, product),
  cartList: () =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/cart`),
  removeCart: (id) =>
    axios.delete(`${process.env.VUE_APP_API_MARKET}/cart/${id}`),
  purchase: () =>
    axios.post(`${process.env.VUE_APP_API_MARKET}/purchase`),
  findByStuff: (keyword) =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product/search/stuff?keyword=${keyword}`),
  findByName: (keyword) =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product/search/name?keyword=${keyword}`),
  findByCategory: (keyword) =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product/search/category?keyword=${keyword}`),

}