<template>
  <div>
    <v-container v-bind="item">
      <!-- 버튼 공간 -->
      <v-row>
        <v-card flat height="40px">
          <v-card-actions>
            <v-btn depressed color="grey" @click="navigateTo(item)"
              >시청 종료</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="9">
          <!-- 동영상 플레이어 공간 -->
          <v-card
            color="#eeeeee"
            height="780px"
            class="d-flex align-center justify-center"
          >
            <!-- justify center https://vuetifyjs.com/en/styles/flex/#flex-justify -->
            <iframe
              height="98%"
              width="99%"
              :src="item.videoSRC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              :alt="item.title + ' 동영상 플레이어'"
            />
          </v-card>
        </v-col>

        <!-- 강의정보 공간 -->
        <v-col cols="12" md="3">
          <!-- 강의정보 Card -->
          <v-card class="mx-auto" min-height="780px" color="#eeeeee">
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
              {{ item.category }}
            </v-card-text>

            <v-card-text>
              재료(공란)
              {{ item.stuffs }}
            </v-card-text>
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
    isSubscribed: false,
    dialog: false,
    item: {},
    lectureList: [],
  }),
  mounted() {
    this.getItem();
  },
  methods: {
    async getItem() {
      const results = await api.list();
      if (results.status == 200) {
        this.lectureList = results.data;
      }
      const id = this.$route.params.id;
      this.item = this.lectureList[id - 1];
    },
    navigateTo(item) {
      console.log("돌아간다 " + item.id);
      this.$router.push(`/Lecture/Detail/${item.id}`);
    },
  },
};
</script>
