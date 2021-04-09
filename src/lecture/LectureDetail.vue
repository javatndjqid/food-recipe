<style scoped>
@import "./textstyle.css";
</style>

<template>
  <div class="lecture">
    <v-container>
      <v-row justify="center" v-bind="item">
        <!-- UI -->
        <!-- 뒤로가기/구독취소/이미지/강의시청/연관카테고리(재료) 강의 위젯 -->
        <v-col cols="12" md="8">
          <v-card
            color="#eeeeee"
            class="mx-auto"
            width="100%"
            style="margin-bottom: 10px;"
          >
            <!-- Vuetify 카드 컴포넌트 설명 페이지 https://vuetifyjs.com/en/components/cards/ -->
            <!-- Vuetify 색상 설명 페이지 https://vuetifyjs.com/en/styles/colors/#material-colors -->
            <v-card-actions>
              <v-btn depressed color="grey" @click="navigateToBack()"
                >뒤로 가기</v-btn
              >
              <!-- Vuetify 버튼 컴포넌트 설명 페이지 https://vuetifyjs.com/en/components/buttons/#caveats -->

              <v-spacer />

              <v-btn
                depressed
                color="red"
                class="white--text"
                v-if="!needSubscribe"
                @click="dialog = true"
                >구독 취소</v-btn
              >
              <v-dialog persistent v-model="dialog" width="400px">
                <v-card>
                  <v-card-title
                    class="justify-center align-content-center headline grey lighten-2"
                  >
                    구독 취소 확인
                  </v-card-title>
                  <v-card-text> </v-card-text>
                  <v-card-text class="text-center">
                    "{{ item.title }}" 강의의 구독을 취소합니다.<br />
                    취소하시겠습니까?
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">
                      취소하지 않는다
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      @click="
                        unSubscribe();
                        dialog = false;
                      "
                    >
                      구독을 취소한다
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              
              <v-dialog persistent v-model="requireAuth" width="400px">
                <v-card>
                  <v-card-title
                    class="justify-center align-content-center headline grey lighten-2"
                  >
                    로그인 확인
                  </v-card-title>
                  <v-card-text> </v-card-text>
                  <v-card-text class="text-center" style="font-size:1.1rem">
                    "{{ item.title }}" 강의를 구독하기 위해서는 로그인이 필요합니다.<br />
                    로그인 하시겠습니까?
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-btn color="primary" text @click="requireAuth = false;">
                      로그인하지 않는다
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="navigateToLogin()">
                      로그인 창으로
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <!-- 조건부 렌더링 설명 https://kr.vuejs.org/v2/guide/conditional.html -->

              <!-- 구독 취소 버튼 클릭시 팝업 추가 -->
              <!-- https://vuetifyjs.com/en/components/dialogs -->
            </v-card-actions>

            <v-card-actions>
              <v-img
                v-if="item.imageSrc"
                :src="
                  `http://i.ytimg.com/vi/${item.imageSrc}/maxresdefault.jpg`
                "
                :alt="item.title"
                width="100%"
              />
            </v-card-actions>
            <v-card-actions>
              
              <v-btn
                depressed
                block
                color="#666666"
                v-if="needLogin"
                @click="loginCheck()"
              >
                로그인이 필요합니다
              </v-btn>

              <v-btn
                depressed
                block
                color="green lighten-1"
                v-else-if="!needLogin && needSubscribe"
                @click="subscribe()"
              >
                강의 구독
              </v-btn>
              
              <v-btn
                depressed
                block
                class="white--text"
                color="pink"
                v-else-if="!needLogin && !needSubscribe"
                @click="navigateToViewer(item)"
              >
                강의 시청
              </v-btn>
            
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- 강의정보 Card -->
        <v-col cols="12" md="4">
          <v-card class="mx-auto" width="100%" color="#eeeeee">
            <v-card-actions>
              <v-container>
                <v-card
                  class="mx-auto"
                  width="100%"
                  min-height="300px"
                  style="margin-bottom:20px;"
                >
                  <v-card-title
                    style="font-size:30px; margin-bottom:20px"
                    class="boldtext eclipse"
                  >
                    {{ item.title }}
                  </v-card-title>

                  <v-card-subtitle class="description eclipse">
                    {{ item.summary }}
                  </v-card-subtitle>
                  <v-container>
                    <table class="meta">
                      <tr>
                        <th scope="row">강의 시간 (초)</th>
                        <td>{{ item.length }}</td>
                      </tr>
                      <tr>
                        <th scope="row">주요 조리방법</th>
                        <td>{{ item.category }}</td>
                      </tr>
                      <tr>
                        <th scope="row">재료</th>
                        <td>
                          <span v-for="(item, i) in stuffList" :key="i">
                            {{ item.name }},
                          </span>
                        </td>
                      </tr>
                    </table>
                  </v-container>
                </v-card>

                <!-- https://stackoverflow.com/questions/55574599/how-to-align-the-contents-to-the-center-of-the-v-card-component-in-vuetify -->
                <v-card v-if="relatedLectureList.length > 0">
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        md="6"
                        v-for="(item, i) in relatedLectureList"
                        :key="i"
                      >
                        <v-card
                          class="mx-auto"
                          width="100%"
                          min-height="200px"
                          color="#eeeeee"
                          v-if="item"
                        >
                          <v-card-actions>
                            <v-img
                              style="cursor: pointer"
                              v-if="item.imageSrc"
                              :src="
                                `http://i.ytimg.com/vi/${item.imageSrc}/maxresdefault.jpg`
                              "
                              :alt="item.title"
                              width="100%"
                              @click="navigateTo(item)"
                            />
                          </v-card-actions>
                          <v-card-title
                            class="boldtext"
                            style="margin-top:-6px; display: inline-block; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                          >
                            {{ item.title }}
                          </v-card-title>
                          <v-card-subtitle class="description eclipse">
                            {{ item.summary }}
                          </v-card-subtitle>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from "@/api/Lecture";
export default {
  data: () => ({
    needLogin: true,
    needSubscribe: true,
    requireAuth: false,
    dialog: false,
    item: {},
    lectureUser: {},
    stuffList: [],
    lectureList: [],
    relatedLectureList: []
  }),
  mounted() {
    this.getItem();
  },
  computed: {
    profile() {
      return this.$store.state.profile.data;
    },
  },

  methods: {
    navigateToLogin(){
      window.location.href = process.env.VUE_APP_LOGIN_URL;
    },
    subscribe() {
      const id = this.$route.params.id;
      // console.log("Subscribing! : " + id);
      api.subscribe(id);
      this.needSubscribe = !this.needSubscribe;
    },
    unSubscribe() {
      const id = this.$route.params.id;
      // console.log("unSubscribing! : " + id);
      api.unSubscribe(id);
      this.needSubscribe = !this.needSubscribe;
    },
    navigateTo(item) {
      this.$router.push(`/Lecture/Detail/${item.id}`);
    },
    navigateToBack() {
      this.$router.push("/Lecture");
    },
    navigateToViewer(item) {
      // console.log("진행한다 " + item.id);
      this.$router.push(`/Lecture/Play/${item.id}`);
    },
    loginCheck(){
      // console.log("check");
      this.requireAuth=true;
    },
    async getItem() {
      const id = this.$route.params.id;
      const results = await api.list();

      // item 리스트 및 객체
      if (results.status == 200) {
        this.lectureList = results.data;
      }
      this.item = this.lectureList[id - 1];
      const userId = this.profile.id
      // console.log("display : " + this.item.id);

      if(userId != null){
        // console.log("userId is not null");
        this.needLogin = !this.needLogin;
        this.getSubscribed();
      }

      // 재료정보
      this.stuffList = this.item.stuffs;
      // console.log(this.stuffList);

      // 카테고리 정보
      const category = this.item.category;
      // console.log(category);

      // 동일 카테고리 리스트
      const relatedResults = await api.related(category);
      if (relatedResults.status == 200) {
        const relatedList = relatedResults.data.filter(item => item.id != id);
        // console.log(relatedList.slice(0, 2));
        this.relatedLectureList = relatedList.slice(0, 2);
      }
    },
    async getSubscribed() {
      const id = this.$route.params.id;
      const results = await api.information(id);
      if (results.status == 200) {
        this.needSubscribe = !results.data;
        // console.log(!results.data)
        // console.log("needSubscribe? : " + this.needSubscribe);
      }
    }
  }
};
</script>
