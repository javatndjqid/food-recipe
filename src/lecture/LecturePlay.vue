<template>
  <div>
    <v-container>
      <!-- 버튼 공간 -->
      <v-row>
        <v-card flat height="40px">
          <v-card-actions>
            <v-btn depressed color="grey" @click="navigateToBack()">시청 종료</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="9">
          <!-- 동영상 플레이어 공간 -->
          <v-card
            color="blue"
            height="780px"
            class="d-flex align-center justify-center"
          >
            <!-- justify center https://vuetifyjs.com/en/styles/flex/#flex-justify -->
            <iframe
              v-html="html"
              height="98%"
              width="99%"
              src="https://www.youtube.com/embed/AlK2Gl6kHZI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </v-card>
        </v-col>

        <!-- 강의정보 공간 -->
        <v-col cols="12" md="3">
          <!-- 강의정보 Card -->
          <v-card class="mx-auto" min-height="780px" color="blue">
            <v-card-title>
              정말 '크리미'해요. 집에서 간단하게 색다른 오므라이스!!
            </v-card-title>

            <v-card-subtitle>
              오늘은 집에서 간단하게 해드실 수 있는 집밥 레시피를 알려드릴게요. 달걀이 소스랑 만나서 아~주 부드럽습니다!
            </v-card-subtitle>

            <!-- 접기 기능 추가해야 함 -->

            <v-card-text>
              오므라이스

              [재료]

              * 소스

              밀가루 1큰술(10g)
              식용유 2큰술(15g)
              케첩 2큰술(30g)
              간장 2큰술(20g)
              황설탕 1.5큰술(15g)
              식초 1큰술(10g)
              물 1컵(180g)
              소고기다시다 1/3큰술(3g)

              * 볶음밥

              양파 1/6개(30g)
              당근 ¼컵(20g)
              밥 1공기
              간장 1큰술
              미림 2큰술
              식용유 2큰술
              후추

              * 달걀옷

              달걀 3개
              식용유 적당량


              [만드는 법]

              * 소스

              1. 프라이팬에 식용유, 밀가루를 넣어 갈색빛 나게 볶는다.
              2. 색이 나면 물을 넣어가면서 루를 풀어준다.
              3. 덩어리가 다 풀리면 케첩, 간장, 황설탕, 후추를 넣어 농도 나게 끓인다.
              4. 식초를 넣고 섞어 마무리한다.

              * 볶음밥

              1. 양파, 당근은 잘게 다져 준비한다.
              2. 프라이팬에 식용유를 두르고 양파, 당근을 넣어 볶는다.
              3. 채소가 익으면 한쪽으로 밀어둔 후 간장, 미림을 넣어 눌어붙게 한다.
              4. 간장과 채소를 함께 볶아주고 밥을 넣어 볶은 후 후추를 뿌린다.
              5. 밥을 밥공기로 모양을 잡아 완성 접시에 담아둔다.

              * 달걀옷

              1. 달걀을 그릇에 담아 풀어둔다.
              2. 프라이팬에 기름을 두르고 예열이 되면 달걀물을 넣는다.
              3. 스크램블 치듯이 저어 반숙으로 익힌다.
              4. 완성 그릇에 담아 둔 밥 위에 덮어준다. 
            </v-card-text>
          </v-card>
        </v-col>
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
  methods: {
    navigateToBack() {
      this.$router.push("/LectureDetail");
    },
    navigateToViewer() {
      this.$router.push("/LecturePlay");
    },
  },
};
</script>
