import axios from 'axios'
import cookie from '../plugins/cookie'

// axios 인스턴스 만들기
const instance = axios.create({
  headers: {'Authorization': `Bearer ${cookie.getSession()}`}
});

// axios interceptors
// ajax 요청 후 응답이 왔을 때의 후처리
instance.interceptors.response.use(res => res, 
  // 2xx 이외 범위에 에러 상태코드가 왔을 때 처리
  error => {
    // 응답 상태코드가 401, 403 이면 로그인 페이지로 이동
    // 401: 인증이 안 됐음
    // 403: 권한이 없음
    if([401, 403].indexOf(error.response.status) > -1) {
      cookie.clearSession();
      window.location.href = process.env.VUE_APP_LOGIN_URL;
    }

    return Promise.reject(error);
});

export default instance;