<style scoped>
@import "./textstyle.css";
</style>

<template>
  <div>
    <!-- <v-img src="../mypage/tablecloth.jpg" alt="배경" height="”bgHeight”"> -->
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
                  v-if="isSubscribed"
                  @click="dialog = true"
                  >구독 취소</v-btn
                >
                <v-dialog v-model="dialog" width="400px">
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

                <!-- 조건부 렌더링 설명 https://kr.vuejs.org/v2/guide/conditional.html -->

                <!-- 구독 취소 버튼 클릭시 팝업 추가 -->
                <!-- https://vuetifyjs.com/en/components/dialogs -->
              </v-card-actions>

              <v-card-actions>
                <v-img
                  v-if="item.imageSRC"
                  :src="
                    `http://i.ytimg.com/vi/${item.imageSRC}/maxresdefault.jpg`
                  "
                  :alt="item.title"
                  width="100%"
                />
              </v-card-actions>
              <v-card-actions>
                <v-btn
                  depressed
                  block
                  color="green lighten-1"
                  v-if="!isSubscribed"
                  @click="subscribe()"
                >
                  강의 구독
                </v-btn>
                <v-btn
                  depressed
                  block
                  class="white--text"
                  color="pink"
                  v-if="isSubscribed"
                  @click="navigateToViewer(item)"
                >
                  강의 시청
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- 강의정보 Card -->
          <v-col cols="12" md="4">
            <!-- 연관강의 창 -->
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
                          <td>{{ item.stuffs }}</td>
                        </tr>
                      </table>
                    </v-container>
                  </v-card>

                  <!-- https://stackoverflow.com/questions/55574599/how-to-align-the-contents-to-the-center-of-the-v-card-component-in-vuetify -->

                  <!-- <v-row>
                    <v-col cols="12" md="6">
                      <v-card class="mx-auto" width="100%" color="grey">
                        <v-card-actions>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            style="cursor: pointer"
                            :alt="item.title + ' 의 연관강의 Title 1'"
                          />
                        </v-card-actions>
                        <v-card-title class="justify-center">
                          {{ item.title }} 연관강의 Title
                        </v-card-title>
                        <v-card-subtitle class="text-center">
                          {{ item.title }} 연관강의 summary
                        </v-card-subtitle>
                      </v-card>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card class="mx-auto" width="100%" color="grey">
                        <v-card-actions>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            style="cursor: pointer"
                            :alt="item.title + ' 의 연관강의 Title 2'"
                          />
                        </v-card-actions>
                        <v-card-title class="justify-center">
                          {{ item.title }} 연관강의 Title
                        </v-card-title>
                        <v-card-subtitle class="text-center">
                          {{ item.title }} 연관강의 summary
                        </v-card-subtitle>
                      </v-card>
                    </v-col>
                  </v-row> -->
                </v-container>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    <!-- </v-img> -->
  </div>
</template>

<script>
import api from "@/api/Lecture";
export default {
  data: () => ({
    isSubscribed: false,
    dialog: false,
    item: {},
    // lectureUser: {},
    stuffList: [],
    lectureList: [],
    relatedLectureList: [],
  }),
  mounted() {
    this.getItem();
    this.getSubscribed();
    // this.getRelatedLecture();
  },
  methods: {
    subscribe() {
      const id = this.$route.params.id;
      console.log("Subscribing! : " + id);
      api.subscribe(id);
      this.isSubscribed = !this.isSubscribed;
    },
    unSubscribe() {
      const id = this.$route.params.id;
      console.log("unSubscribing! : " + id);
      api.unSubscribe(id);
      this.isSubscribed = !this.isSubscribed;
    },
    navigateToBack() {
      this.$router.push("/Lecture");
    },
    navigateToViewer(item) {
      console.log("진행한다 " + item.id);
      this.$router.push(`/Lecture/Play/${item.id}`);
    },
    async getItem() {
      const id = this.$route.params.id;
      const results = await api.list();
      if (results.status == 200) {
        this.lectureList = results.data;
      }
      this.item = this.lectureList[id - 1];
      console.log("display : " + this.item.title);
    },
    async getSubscribed() {
      const id = this.$route.params.id;
      const results = await api.information(id);
      if (results.status == 200) {
        this.isSubscribed = results.data;
        // console.log("isSubscribed? : " + this.isSubscribed);
      }
    },
    async getRelatedLecture() {
      const id = this.$route.params.id;
      const results = await api.related(id);
      if (results.status == 200) {
        this.isSubscribed = results.data;
      }
    },
  },
};
</script>
