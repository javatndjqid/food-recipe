<template>
  <div>
    <!-- 반응형 grid Layout 컨테이너 -->
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-card :loading="loading" max-width="374">
            <!-- https://vuetifyjs.com/en/components/cards/#card-reveal -->
            <template slot="progress">
              <v-progress-linear
                color="red"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>강의명</v-card-title>
            <v-card-text>
              <div>카테고리</div>
              <div>강의 설명</div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 이하 테스트 위한 공간. 실제 데이터는 목록에서 받아다 반복문 형태로 출력 -->

      </v-row>
    </v-container>
  </div>
</template>

<script>
// import { api } from '@/api/Lecture'
export default {
  data: () => ({    
  
  }),
  computed: {

  },
  methods: {
    async navigate(){
      
    }
  },
  navigate() {

  }
}
</script>
