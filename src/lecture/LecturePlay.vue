<template>
  <div>
    <v-container>
      <!-- 버튼 공간 -->
      <v-card flat height="50px">
        <v-card-actions>
          <v-btn depressed color="grey" @click="navigateToBack()">시청 종료</v-btn>
        </v-card-actions>
      </v-card>
      <v-row>
        <v-col cols="12" md="9">
          <!-- 동영상 플레이어 공간 -->
          <v-card
            color="blue"
            height="800px"
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
          <v-card class="mx-auto" height="800px" color="blue">
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
