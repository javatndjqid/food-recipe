<template>
  <div>
    <!-- 반응형 grid Layout 컨테이너 -->
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="3" v-for="(item, i) in lectureList" :key="i">
          <v-card>
            <!-- https://vuetifyjs.com/en/components/cards/#card-reveal -->

            <v-img
              width="100%"
              height="250px"
              :src="`${item.picture}/600`"
              :lazy-src="`${item.picture}/10`"
              @click="navigateTo(item)"
              style="cursor: pointer"
            >
              <!-- https://kr.vuejs.org/v2/api/#v-bind -->
              <!-- https://vuetifyjs.com/en/components/images/#grid -->

              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title>{{ item.id }} {{ item.title }}</v-card-title>
            <v-card-text>
              <div>{{ item.category }}</div>
              <div>{{ item.stuffs }}</div>
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
  // mounted(){
  //   this.getLectureList();
  // },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 5;
    },
  },
  methods: {
    // async getLectureList() {
    //   const result = await api.lectureListAll();
    //   this.lectureList = result.data;
    //   console.log(result.data);
    // },
    randomNumber() {
      return Math.floor(Math.random() * 1000) + 1;
    },
    navigateTo(item) {
      // console.log(item);
      this.$router.push({
        name: "LectureDetail",
        params: { id: item.id },
      });
    },
  },
};
</script>
