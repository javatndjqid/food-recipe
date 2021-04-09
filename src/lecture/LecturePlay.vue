<style scoped>
@import "./textstyle.css";
</style>

<template>
  <div class="lecture">
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
        <v-col cols="12" ex="9" lg="8" md="12" sm="12">
          <!-- 동영상 플레이어 공간 -->
          <v-card
            fluid
            color="#eeeeee"
            class="d-flex align-center justify-center"
          >
            <div>
              <div>
              </div>
            </div>

            <!-- justify center https://vuetifyjs.com/en/styles/flex/#flex-justify -->
              <iframe
                class="player"
                width=100%
                :src="item.videoSrc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                :alt="item.title + ' 동영상 플레이어'"
              />
          </v-card>
        </v-col>

        <!-- 강의정보 공간 -->
        <v-col cols="12" ex="3" lg="4" md="12" sm="12">
          <!-- 강의정보 Card -->
          <v-card class="mx-auto" color="#eeeeee">
            <v-container>
              <v-card>
                <v-card-title class="boldtext" >
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle class="description">
                  {{ item.summary }}
                </v-card-subtitle>

                <v-container style="margin-top:-20px;">
                  <table class="meta" style=" display: table; margin-left: auto; margin-right: auto;">
                    <tr v-for="(item, i) in stuffList" :key="i">
                      <th scope="row">재료 {{ i+1 }}</th>
                      <td>
                        <span>
                          {{ item.name }}
                        </span>
                        <span>
                          {{ item.quantity }}{{item.unit}}
                        </span>
                      </td>
                    </tr>
                  </table>
                </v-container>
              </v-card>
            </v-container>
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
    lectureUser: {},
    stuffList: [],
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
      // console.log("lectureplay: ");
      // console.log(this.$route.fullPath);
      this.item = this.lectureList[id - 1];

      this.stuffList = this.item.stuffs;
      // console.log(this.stuffList);
    },
    navigateTo(item) {
      // console.log("돌아간다 " + item.id);
      this.$router.push(`/Lecture/Detail/${item.id}`);
    },
  },
};
</script>
