<template>
  <v-container color="primary">
    <v-row>
      <v-col cols="10" md="8" lg="5">
        <template>
          <v-card style="height: 700px" class="overflow-y-auto" elevation="10">
             <v-img
              class="white--text align-end"
              height="150px"
              src="https://image.freepik.com/free-vector/healthy-recipe-illustration-concept_23-2148576281.jpg"
            />
            <v-data-table
              :headers="recipyHeaders"
              :items="userRecipeList"
              :items-per-page="9"
            >
              <template v-slot:item.image="{ item }">
                <div>
                  <v-img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.recipeName"
                    height="40px"
                    width="50px"
                  />
                  <v-img
                    v-else
                    :src="item.recipefile[0].dataUrl"
                    :alt="item.recipeName"
                    height="40px"
                    width="50px"
                  />
                </div>
              </template>
            </v-data-table>
          </v-card>
          <v-row cols="12" justify="end">
            <v-btn @click="navigate()" class="mx-2" fab dark color="cyan">
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-col>

      <v-col cols="10" md="8" lg="5">
        <template>
          <v-card class="overflow-y-auto" elevation="10">
            <v-img
              class="white--text align-end"
              height="90px"
              src="https://cdn.crowdpic.net/list-thumb/thumb_l_756C27E1062B73D39C8E3E51165172E2.jpg"
            >
            </v-img>
            <v-data-table
              style="height: 250px"
              :headers="ClassHeaders"
              :items="userRecipeList"
              :items-per-page="3"
            >
              <template v-slot:item.image="{ item }">
                <div>
                  <v-img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.recipeName"
                    height="40px"
                    width="50px"
                  />
                  <v-img
                    v-else
                    :src="item.recipefile[0].dataUrl"
                    :alt="item.recipeName"
                    height="40px"
                    width="50px"
                  />
                </div>
              </template>
            </v-data-table>
          </v-card>
        </template>
        <template>
          <v-card class="overflow-y-auto" elevation="10">
            <v-img
              class="white--text align-end"
              height="100px"
              src="https://en.pimg.jp/001/710/411/1/1710411.jpg"
            >
            </v-img>
            <v-data-table
              style="height: 250px"
              :headers="MarketHeaders"
              :items="userRecipeList"
              :items-per-page="3"
            >
              <template v-slot:item.image="{ item }">
                <div>
                  <v-img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.recipeName"
                    height="40px"
                    width="50px"
                  />
                  <v-img
                    v-else
                    :src="item.recipefile[0].dataUrl"
                    :alt="item.recipeName"
                    height="40px"
                    width="50px"
                  />
                </div>
              </template>
            </v-data-table>
          </v-card>
        </template>
      </v-col>
      <v-col cols="2" md="2" lg="2">
        <template>
          <v-card>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">
                      <v-img
                        src="../assets/jjub.png"
                        height="40px"
                        width="40px"
                      ></v-img>
                    </th>
                    <th class="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="text-center">
                      유저ID
                    </th>
                    <th class="text-center">
                      쩝쩝박사
                    </th>
                  </tr>
                  <tr>
                    <th class="text-center">
                      이름
                    </th>
                    <th class="text-center">
                      오지해
                    </th>
                  </tr>
                  <tr>
                    <th class="text-center">
                      E-mail
                    </th>
                    <th class="text-center">
                      쩝쩝박사@gmail.com
                    </th>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api/Mypage";
export default {
  data: () => ({
    recipyHeaders: [
      { text: "레시피넘버", align: "start", value: "recipeId" },
      {
        text: "레시피사진",
        value: "image",
        sortable: false
      },
      { text: "레시피이름", value: "recipeName", sortable: false }
    ],
    ClassHeaders: [
      { text: "no", align: "start", value: "recipeId" },
      { text: "강의사진", value: "image", sortable: false },
      { text: "구독내역", value: "recipeName", sortable: false }
    ],
    MarketHeaders: [
      { text: "no", align: "start", value: "recipeId" },
      { text: "구매사진", value: "image", sortable: false },
      { text: "구매내역", value: "recipeName", sortable: false }
    ],
    userRecipeList: [],
    userLectureList: [],
    userPerchaseList: []
  }),
  mounted() {
    // 목록 조회 함수
    this.getRecipeList();
  },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 10;
    }
  },
  methods: {
    async getRecipeList() {
      const result = await api.recipelist();
      this.userRecipeList = result.data;
      console.log(result.data);
    },

    // navigateTo(item) {
    //   /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
    //   // 현재 경로와 다르면
    //   if(this.$route.path != item.path){
    //     // 라우터에 경로 추가
    //     this.$router.push(item.path);
    //   }
    // },
    navigate() {
      this.$router.push("/MypageRecipy");
    },
    navigateTo(item) {
      this.$router.push({ name: "MypageRecipyDetail", params: { recipeId: item.recipeId } });
    },
  }
};
</script>
