<template>
  <div>
    <v-container>
      <v-row justify="center" v-bind="item">
        <!-- UI -->
        <!-- 뒤로가기/구독취소/이미지/강의시청/연관카테고리(재료) 강의 위젯 -->
        <v-col cols="12" md="6">
          <v-card color="red lighten-3" class="mx-auto" width="100%">
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
                  <v-card-title class="justify-center align-content-center headline grey lighten-2">
                    구독 취소 확인
                  </v-card-title>

                  <v-card-text class="text-center">
                    {{ item.title }} 강의의 구독을 취소합니다.
                    <br/>
                    취소하시겠습니까?
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">
                      취소하지 않는다
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="unSubscribe();
                    dialog = false;">
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
              <v-img v-if="item.imageSRC"
                :src="`http://i.ytimg.com/vi/${item.imageSRC}/maxresdefault.jpg`"
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

          <v-card flat class="mx-auto" width="100%" height="20px"> </v-card>

          <!-- 연관강의 창 -->
          <v-card class="mx-auto" width="100%" color="red lighten-3">
            <v-card-actions>
              <v-container>
                <v-row>
                  <!-- 연관강의 slot 1 -->
                  <v-col cols="12" md="6">
                    <v-card class="mx-auto" width="400px">
                      <v-card-actions>
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                          style="cursor: pointer"
                        />
                      </v-card-actions>
                      <v-card-title class="justify-center">
                        <!-- https://stackoverflow.com/questions/55574599/how-to-align-the-contents-to-the-center-of-the-v-card-component-in-vuetify -->
                        {{ item.title }} 연관강의 Title
                      </v-card-title>
                      <v-card-subtitle class="text-center">
                        {{ item.title }} 연관강의 summary
                      </v-card-subtitle>
                    </v-card>
                  </v-col>

                  <!-- 연관강의 slot 2 -->
                  <v-col cols="12" md="6">
                    <v-card class="mx-auto" width="400px">
                      <v-card-actions>
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                          style="cursor: pointer"
                        />
                      </v-card-actions>
                      <v-card-title class="justify-center">
                        <!-- https://stackoverflow.com/questions/55574599/how-to-align-the-contents-to-the-center-of-the-v-card-component-in-vuetify -->
                        {{ item.title }} 연관강의 Title
                      </v-card-title>
                      <v-card-subtitle class="text-center">
                        {{ item.title }} 연관강의 summary
                      </v-card-subtitle>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- 강의정보 Card -->
        <v-col cols="12" md="6">
          <v-card class="mx-auto" width="100%" min-height="800px" color="red lighten-3">
            <v-card-title>
              강의 제목
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle>
              강의 요약
              {{ item.summary }}
            </v-card-subtitle>

            <v-card-text>
              강의 시간(초)
              {{ item.length }}
            </v-card-text>

            <v-card-text>
              조리방법 분류
              {{ item.category}}
            </v-card-text>

            <v-card-text>
              재료(공란)
              {{ item.stuffs }}
            </v-card-text>
          
          </v-card>
        </v-col>

        <!-- 연관강의 Card -->
        <!-- 연관강의 slot이 페이지 사이즈에 따라 반응하지 않음, 해결필요 -->
      </v-row>
    </v-container>
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
    lectureList: [],
  }),
  mounted() {
    this.getItem();
    this.getSubscribed();
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
      this.$router.push(`/LecturePlay/${item.id}`);
    },
    async getItem() {
      const id = this.$route.params.id;
      const results = await api.list();
      if (results.status == 200) {
        this.lectureList = results.data;
      }
      this.item = this.lectureList[id -1];
      console.log("display : "+this.item.title);
    },
    async getSubscribed() {
      const id = this.$route.params.id;
      const results = await api.information(id);
      if (results.status == 200) {
        this.isSubscribed = results.data;
        // console.log("isSubscribed? : " + this.isSubscribed);
      }
    },
  },
};
</script>