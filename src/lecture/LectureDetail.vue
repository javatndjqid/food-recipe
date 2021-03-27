<template>
  <div>
    <v-container>
      <v-row justify="center" v-bind="detail">
        <!-- UI -->
        <!-- 뒤로가기/구독취소/이미지/강의시청/연관카테고리(재료) 강의 위젯 -->
        <v-col cols="12" md="6">
          <v-card color="blue" class="mx-auto" width="800px">
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
                    {{ detail.title }} 강의의 구독을 취소합니다.
                    취소하시겠습니까?
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">
                      취소하지 않는다
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="unSubscribe();dialog = false;">
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
                :src="`${detail.picture}/600`"
                width="100%"
                height="320px"
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
                color="blue lighten-2"
                v-if="isSubscribed"
                @click="navigateToViewer(detail)"
              >
                강의 시청
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card flat class="mx-auto" width="800px" height="20px"> </v-card>

          <!-- 연관강의 창 -->
          <v-card class="mx-auto" width="800px" color="blue">
            <v-card-actions>
              <v-container>
                <v-row>
                  <!-- 연관강의 slot 1 -->
                  <v-col cols="12" md="6">
                    <v-card class="mx-auto" width="385px">
                      <v-card-actions>
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                          style="cursor: pointer"
                        />
                      </v-card-actions>
                      <v-card-title class="justify-center">
                        <!-- https://stackoverflow.com/questions/55574599/how-to-align-the-contents-to-the-center-of-the-v-card-component-in-vuetify -->
                        {{ detail.title }} 연관강의 Title
                      </v-card-title>
                      <v-card-subtitle class="text-center">
                        {{ detail.title }} 연관강의 summary
                      </v-card-subtitle>
                    </v-card>
                  </v-col>

                  <!-- 연관강의 slot 2 -->
                  <v-col cols="12" md="6">
                    <v-card class="mx-auto" width="385px">
                      <v-card-actions>
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                          style="cursor: pointer"
                        />
                      </v-card-actions>
                      <v-card-title class="justify-center">
                        <!-- https://stackoverflow.com/questions/55574599/how-to-align-the-contents-to-the-center-of-the-v-card-component-in-vuetify -->
                        {{ detail.title }} 연관강의 Title
                      </v-card-title>
                      <v-card-subtitle class="text-center">
                        {{ detail.title }} 연관강의 summary
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
          <v-card class="mx-auto" width="800px" min-height="800px" color="blue">
            <v-card-title>
              {{ detail.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ detail.category }}
            </v-card-subtitle>
            <v-card-text>
              {{ detail.stuffs }}
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
export default {
  data: () => ({
    isSubscribed: false,
    dialog: false,
    detail: {},
    lectureList: [
      {
        id: 1,
        picture: "https://picsum.photos/id/100",
        title: "쩝쩝박사",
        category: "구이",
        stuffs: ["당근", "고춧가루"],
      },
      {
        id: 2,
        picture: "https://picsum.photos/id/200",
        title: "쩝쩝석사",
        category: "볶음",
        stuffs: ["고춧가루"],
      },
      {
        id: 3,
        picture: "https://picsum.photos/id/301",
        title: "쩝쩝학사",
        category: "구이",
        stuffs: ["소고기"],
      },
      {
        id: 4,
        picture: "https://picsum.photos/id/400",
        title: "쩝쩝고딩",
        category: "볶음",
        stuffs: ["당근", "고춧가루"],
      },
      {
        id: 5,
        picture: "https://picsum.photos/id/502",
        title: "쩝쩝중딩",
        category: "구이",
        stuffs: ["당근", "새송이버섯"],
      },
      {
        id: 6,
        picture: "https://picsum.photos/id/603",
        title: "쩝쩝초딩",
        category: "볶음",
        stuffs: ["당근", "고춧가루"],
      },
      {
        id: 7,
        picture: "https://picsum.photos/id/700",
        title: "쩝쩝박사",
        category: "구이",
        stuffs: ["당근", "고춧가루"],
      },
      {
        id: 8,
        picture: "https://picsum.photos/id/800",
        title: "쩝쩝석사",
        category: "볶음",
        stuffs: ["당근", "고춧가루"],
      },
      {
        id: 9,
        picture: "https://picsum.photos/id/900",
        title: "쩝쩝학사",
        category: "구이",
        stuffs: ["당근", "고춧가루"],
      },
      {
        id: 10,
        picture: "https://picsum.photos/id/1000",
        title: "쩝쩝고딩",
        category: "볶음",
        stuffs: ["당근", "고춧가루"],
      },
    ],
  }),
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      const id = this.$route.params.id;
      // console.log(id);
      this.detail = this.lectureList[id - 1];
      // console.log(this.detail);
    },
    subscribe() {
      console.log("subscribing!");
      this.isSubscribed = !this.isSubscribed;
    },
    unSubscribe() {
      console.log("unSubscribing!");
      this.isSubscribed = !this.isSubscribed;
    },
    navigateToBack() {
      this.$router.push("/Lecture");
    },
    navigateToViewer(item) {
      console.log("진행한다 " + item.id);
      this.$router.push(`/LecturePlay/${item.id}`);
    },
  },
};
</script>
