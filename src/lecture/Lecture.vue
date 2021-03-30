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
              :src="`${item.imageSRC}/600`"
              :lazy-src="`${item.imageSRC}/10`"
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
import api from "@/api/Lecture";
export default {
  data: () => ({
    page: 1,
    lectureList: [],
  }),
  mounted(){
    this.getItem();
  },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 5;
    },
  },
  methods: {
    // randomNumber() {
    //   return Math.floor(Math.random() * 1000) + 1;
    // },
    navigateTo(item) {
      // console.log(item);
      this.$router.push(`/LectureDetail/${item.id}`);
    },
    async getItem() {
      const results = await api.list();
      if (results.status == 200) {
        this.lectureList = results.data;
      }
    },
  },
};
</script>
