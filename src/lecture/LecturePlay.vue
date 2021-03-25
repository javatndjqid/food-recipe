<template>
  <div>
    <v-container v-bind="detail">
      <!-- 버튼 공간 -->
      <v-row>
        <v-card flat height="40px">
          <v-card-actions>
            <v-btn depressed color="grey" @click="navigateTo(detail)"
              >시청 종료</v-btn
            >
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
      console.log(id);
      this.detail = this.lectureList[id - 1];
      console.log(this.detail);
    },
    navigateTo(item) {
      console.log("돌아간다 " + item.id);
      this.$router.push({
        name: "LectureDetail",
        params: { id:item.id },
      });
    },
  },
};
</script>
