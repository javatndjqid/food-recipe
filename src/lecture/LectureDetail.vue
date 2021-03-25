<template>
  <div>
    <v-container>
      <v-row justify="center">

        <!-- UI -->
        <!-- 뒤로가기/구독취소/이미지/강의시청/연관카테고리(재료) 강의 위젯 -->
        <v-col cols="12" md="6">
          <v-card color="blue" class="mx-auto" width="800px">
          <!-- Vuetify 카드 컴포넌트 설명 페이지 https://vuetifyjs.com/en/components/cards/ -->
          <!-- Vuetify 색상 설명 페이지 https://vuetifyjs.com/en/styles/colors/#material-colors -->
            <v-card-actions>
              <v-btn depressed color="grey" @click="navigateToBack()">뒤로 가기</v-btn>
              <!-- Vuetify 버튼 컴포넌트 설명 페이지 https://vuetifyjs.com/en/components/buttons/#caveats -->

              <v-spacer />

              <v-btn depressed color="red" v-if="isSubscribed" @click="isSubscribed = !isSubscribed">구독 취소</v-btn>
              <!-- 조건부 렌더링 설명 https://kr.vuejs.org/v2/guide/conditional.html -->
              
              <!-- 구독 취소 버튼 클릭시 팝업 추가 -->
              <!-- https://vuetifyjs.com/en/components/dialogs -->
            </v-card-actions>

            <v-card-actions>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                width="100%"
                height="300px"
              />
            </v-card-actions>
            <v-card-actions>
              <v-btn depressed block color="green lighten-1" v-if="!isSubscribed" @click="isSubscribed = !isSubscribed"> 강의 구독 </v-btn>
              <v-btn depressed block color="blue lighten-2" v-if="isSubscribed" @click="navigateToViewer()"> 강의 시청 </v-btn>
            </v-card-actions>
          </v-card>

          <v-card flat class="mx-auto" width="800px" height="30px">
          </v-card>

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
                        연관강의 Title
                      </v-card-title>
                      <v-card-subtitle class="text-center">
                        연관강의 summary
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
                        연관강의 Title
                      </v-card-title>
                      <v-card-subtitle class="text-center">
                        연관강의 summary
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
          <v-card
            class="mx-auto"
            width="800px"
            min-height="800px"
            color="blue"
          >
            <v-card-title>
              강의내용
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>
            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
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
    }),
    methods:{
      navigateToBack() {
        this.$router.push("/Lecture");
      },
      navigateToViewer(){
        this.$router.push("/LecturePlay");
      },
    }
  }
</script>