// import axios from 'axios'

// export default {
//   lectureListAll:()=>axios.get(`${process.env.VUE_APP_API_BASE}/lectures`),
  // lectureDetail:()=>axios.get(`${process.env.VUE_APP_API_BASE}/lectures/${lectureId}`),
  // subscribe:()=>axios.post(`${process.env.VUE_APP_API_BASE}/lecture-users/"lectureId":${lectureId},"userId":${userId}`),
  // unSubscribe:()=>axios.delete(`${process.env.VUE_APP_API_BASE}/lecture-users/${lectureUserId}`),

  
  // list:()=>axios.get(`${process.env.VUE_APP_API_BASE}/lectures/search/stuff-sort-paging`),
// }



// // 상품 리스트 배열
// // 고양이도 할수있는 Vue.js 299p
// const database = [
//   { "count":1, "title":"쩝쩝박사", "category":"구이", "stuffs":["당근","고춧가루"] },
//   { "count":2, "title":"쩝쩝석사", "category":"볶음", "stuffs":["고춧가루"] },
//   { "count":3, "title":"쩝쩝학사", "category":"구이", "stuffs":["소고기"] },
//   { "count":4, "title":"쩝쩝고딩", "category":"볶음", "stuffs":["당근","고춧가루"] },
//   { "count":5, "title":"쩝쩝중딩", "category":"구이", "stuffs":["당근","새송이버섯"] },
//   { "count":6, "title":"쩝쩝초딩", "category":"볶음", "stuffs":["당근","고춧가루"] },
//   { "count":7, "title":"쩝쩝박사", "category":"구이", "stuffs":["당근","고춧가루"] },
//   { "count":8, "title":"쩝쩝석사", "category":"볶음", "stuffs":["당근","고춧가루"] },
//   { "count":9, "title":"쩝쩝학사", "category":"구이", "stuffs":["당근","고춧가루"] },
//   { "count":10, "title":"쩝쩝고딩", "category":"볶음", "stuffs":["당근","고춧가루"] } 
// ]

// //임포트 대상에서 사용할 수 있는 함수를 객체로 정의하기
// export default {
//   fetch(id) { return database },
//   find(id) { return database.find(el => el.id === id) },
//   asyncFind(id, callback) {
//     setTimeout(()=>{
//       callback(database.find(el => el.id === id))
//     }, 1000)
//   }
// }