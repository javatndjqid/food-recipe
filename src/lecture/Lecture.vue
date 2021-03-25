

<template>
  <div>
    <!-- 반응형 grid Layout 컨테이너 -->
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-card max-width="374">
            <!-- https://vuetifyjs.com/en/components/cards/#card-reveal -->

            <v-img
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              @click="navigateTo()"
              style="cursor: pointer"
            ></v-img>
            <v-card-title v-model="lectureList">타이틀</v-card-title>
            <v-card-text>
              <div>카테고리</div>
              <div>요약정보</div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 이하 테스트 위한 공간. 실제 데이터는 목록에서 받아다 반복문 형태로 출력 -->
      </v-row>
    </v-container>
    <v-pagination v-model="page" :length="5" :total-visible="5"></v-pagination>
  </div>
</template>

<script>
// import api from '@/api/Lecture'
export default {
  data: () => ({
    page: 1,
    lecture: [],
    lectureList:[],
  }),
  // mounted(){
  //   this.getLectureList();
  // },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length(){
      return 5
    }
  },
  methods: {
    // async getLectureList() {
    //   const result = await api.lectureListAll();
    //   this.lectureList = result.data;
    //   console.log(result.data);
    // },
    navigateTo() {
      this.$router.push("/LectureDetail");
    }
  }
};
</script>
