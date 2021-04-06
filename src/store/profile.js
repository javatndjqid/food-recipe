
import api from '@/api/profile'
import cookie from '../plugins/cookie'

export default {
  namespaced: true,
  // 프로필 저장소의 스테이트
  state: () => ({ 
    //실제 state data
    data: {},
    // 초기 state 객체
    init: {
      id: 0,
      userId: "",
      userType: "",
      name: "",
      email: "",
      image: "",
    }
  }),
  // 스테이트를 변경할 메소드 (동기적인)
  mutations: {
    // state: 현재 스테이트 
    // payload: 메소드로 호출한 매개변수
    // this.$store.commit("setProfile", {name:'kdk'....})
    setProfile(state, payload){
      // payload의 값으로 state를 업데이트 코드
      console.log(state);
      console.log(payload);

      state.data = {...payload};
    }
  },
  // 스테이트를 변경할 메소드 (비동기적인,, ex) ajax로 서버 데이터 호출)
  actions: {
    // context 함수가 실행되는 객체 범위
    // this.$store('profile/')
    async setProfile (context){
      if(cookie.getSession()){
        // state data 객체 초기화
        context.commit('setProfile', context.state.init);
        // api로 데이터 호출
        const res = await api.getprofile();
        // mutation 메소드를 호출해서 state 변경
        context.commit('setProfile', res.data);
        console.log(res)
        // window.location.href = process.env
      } 
      else {
        // 로그인 페이지로 이동
        window.location.href = process.env.VUE_APP_LOGIN_URL;
      }
     // window.location.href = process.env
    },
    async signout (context) {
      // 서버 세션 삭제
      const res = await api.signout();
      console.log(res);

      // state data를 초기화
      context.commit('setProfile', context.state.init);

      // 쿠키 삭제
      cookie.clearSession();

      // 로그인 페이지로 이동
      // this.$router.push({
      //   path: "/SearchDetail",
      //   name: "SearchDetail",
      //    }
      // );
      window.location.href = process.env.SEARCH_URL
      //this.$router.push(item.path);
    }
  }
}