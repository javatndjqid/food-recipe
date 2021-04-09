<style scoped>
  @import './textstyle.css';
</style>

<template>
  <div class="lecture">
    <!-- <v-toolbar dark color="red" height="40px">
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        @keyup.enter="addChip()"
      ></v-autocomplete>
      <v-btn icon @click="addChip()">
        <v-icon size="40" :style="{ marginRight: '10px' }"
          >mdi-card-search</v-icon
        >
      </v-btn>
    </v-toolbar> -->
    <div height="100%" class="d-flex align-content-start flex-wrap">
      <!-- 반응형 grid Layout 컨테이너 -->
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="3" v-for="(item, i) in calData" :key="i">
            <v-card min-height="360px" color="#eeeeee">
              <!-- https://vuetifyjs.com/en/components/cards/#card-reveal -->
              <v-card-actions>
                <v-img
                  width="90%"
                  :src="
                    `http://i.ytimg.com/vi/${item.imageSrc}/maxresdefault.jpg`
                  "
                  @click="navigateTo(item)"
                  style="cursor: pointer;"
                  :alt="item.title"
                >
                  <!-- https://kr.vuejs.org/v2/api/#v-bind -->
                  <!-- https://vuetifyjs.com/en/components/images/#grid -->

                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card-actions>
              <v-card-title class="boldtext eclipse" style="margin-top: -13px; margin-bottom: -13px;">
                {{ item.title }}
              </v-card-title>
              <v-card-text class="description eclipse">
                {{ item.summary }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <div class="d-flex justify-space-around mb-6">
        <v-pagination v-model="initialPage" :length="numOfPages"></v-pagination>
        <!-- https://gmground.tistory.com/entry/Vuejs%EB%A1%9C-List%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-CRUD-Pagination-Search-2-Pagination-%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80 -->
      </div>
    </v-container>
  </div>
</template>

<script>
import api from "@/api/Lecture";
export default {
  data: () => ({
    initialPage: 1,
    dataPerPage: 8,
    lectureList: [],
  }),
  mounted() {
    this.getItem();
  },
  computed: {
    startOffset() {
      return (this.initialPage - 1) * this.dataPerPage;
    },
    endOffset() {
      return this.startOffset + this.dataPerPage;
    },
    numOfPages() {
      return Math.ceil(this.lectureList.length / this.dataPerPage);
    },
    calData() {
      return this.lectureList.slice(this.startOffset, this.endOffset);
    },
  },
  methods: {
    // randomNumber() {
    //   return Math.floor(Math.random() * 1000) + 1;
    // },
    navigateTo(item) {
      this.$router.push(`/Lecture/Detail/${item.id}`);
    },
    async getItem() {
      const results = await api.list();
      // console.log("Welcome!");
      if (results.status == 200) {
        this.lectureList = results.data.reverse();
        // console.log(this.lectureList);
      }
    },
  },
};
</script>
