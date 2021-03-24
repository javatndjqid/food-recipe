<template>
  <div>
    <v-container>
      <v-row>
        <!-- 동영상 플레이어 -->
        <v-col cols="12" md="9">
          <v-card color="blue" class="mx-auto">
            <div width="100%" height="90%">
            </div>
            <v-card-actions>
              <v-btn depressed color="grey" @click="navigateToBack()">뒤로 가기</v-btn>
            </v-card-actions>
          </v-card>

        </v-col>

        <!-- 강의정보 Card -->
        <v-col cols="12" md="3">
          <v-card
            class="mx-auto"
            min-height="400px"
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
        this.$router.push("/LectureDetail");
      },
      navigateToViewer(){
        this.$router.push("/LecturePlay");
      },
    }
  }
</script>