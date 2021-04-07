
import axios from 'axios'
import request from './request'


export default {

  addProduct: (product) =>
    axios.post(`${process.env.VUE_APP_API_MARKET}/product`, product),
  removeProduct: (id) =>
    axios.delete(`${process.env.VUE_APP_API_MARKET}/product/${id}`),
  productList: () =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product`),
  productDetail: (id) =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product/${id}`),
  addCart: (product) =>
    request.post(`${process.env.VUE_APP_API_MARKET}/cart`, product),
  cartList: () =>
    request.get(`${process.env.VUE_APP_API_MARKET}/cart`),
  removeCart: (id) =>
    axios.delete(`${process.env.VUE_APP_API_MARKET}/cart/${id}`),
  purchase: () =>
    request.post(`${process.env.VUE_APP_API_MARKET}/purchase`),
  purchaseOrder: () =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/purchaseOrder`),
  findByStuff: (keyword) =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product/search/stuff?keyword=${keyword}`),
  findByName: (keyword) =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product/search/name?keyword=${keyword}`),
  findByCategory: (keyword) =>
    axios.get(`${process.env.VUE_APP_API_MARKET}/product/search/category?keyword=${keyword}`),

}