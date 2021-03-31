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
              :items="itemsWithSno"
              :items-per-page="7"
              :loading="loading"
              loading-text="Loading... Please wait"
            >
              <template v-slot:item.recipeId:="props">
                {{ props.item.recipe.length }}
              </template>
              <template v-slot:item.image="{ item }">
                <div v-if="item.recipefile[0]">
                  <v-img
                    :src="item.recipefile[0].dataUrl"
                    height="60px"
                    width="150px"
                  />
                </div>
                <div v-else>
                  <v-img :src="item.image" height="60px" width="150px" />
                </div>
              </template>
              <template v-slot:item.details="{ item }">
                <v-icon @click="navigateTo(item)" fab dark color="black"
                  >mdi-view-list</v-icon
                >
              </template>
              <template v-slot:item.del="{ item }">
                <v-icon
                  @click="deleteitem(item.recipeId)"
                  fab
                  dark
                  color="black"
                  >mdi-window-close</v-icon
                >
              </template>
            </v-data-table>
          </v-card>
          <v-row cols="12" justify="end">
            <v-btn @click="navigate()" class="mx-2" fab dark color="cyan">
              <v-icon>
                mdi-playlist-plus
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
              :items="userLectureList"
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
              :items="userPerchaseList"
              :items-per-page="3"
            >
              <template v-slot:item.orderDate="{ item }">
                {{ $moment(item.orderDate).format("YYYY-MM-DD-HH-MM") }}
              </template>
              <template v-slot:item.image="{ item }">
                <v-img
                  :src="item.orderProduct[0].productTitleImage"
                  height="40px"
                  width="50px"
                />
              </template>
              <template v-slot:item.productName="{ item }">
                {{ item.orderProduct[0].productName }}
                {{ item.orderProduct.length != 1 ? "외" : null }}
                {{
                  item.orderProduct.length != 1
                    ? item.orderProduct.length - 1
                    : null
                }}
              </template>

              <template v-slot:item.productNames="{ item }">
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">
                      mdi-format-list-bulleted
                    </v-icon>
                  </template>
                  <v-card>
                    <v-card-title
                      v-for="(input, i) in item.orderProduct"
                      :key="i"
                    >
                      {{ input.productName }}
                    </v-card-title>
                  </v-card>
                </v-dialog>
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
                      {{user[0].userName}}
                    </th>
                  </tr>
                  <tr>
                    <th class="text-center">
                      이름
                    </th>
                    <th class="text-center">
                       {{user[0].name}}
                    </th>
                  </tr>
                  <tr>
                    <th class="text-center">
                      E-mail
                    </th>
                    <th class="text-center">
                      {{user[0].email}}
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
Vue.use(require('vue-moment'));
<script>
import api from "@/api/Mypage";

export default {
  data: () => ({
    recipyHeaders: [
      {
        text: "No.",
        align: "start",
        value: "sno",
        class: "elevation-1",
        width: 10
      },
      {
        text: "레시피 사진",
        value: "image",
        sortable: false,
        align: "center"
      },
      {
        text: "레시피 이름",
        value: "recipeName",
        sortable: false,
        align: "center"
      },
      {
        text: "상세정보",
        value: "details",
        sortable: false,
        width: 80,
        align: "center"
      },
      {
        text: "삭제",
        value: "del",
        sortable: false,
        width: 10,
        align: "center"
      }
    ],
    ClassHeaders: [
      { text: "no", align: "start", value: "recipeId" },
      { text: "강의사진", value: "image", sortable: false },
      { text: "구독내역", value: "recipeName", sortable: false }
    ],
    MarketHeaders: [
      { text: "구매시간", align: "start", value: "orderDate" },
      { text: "구매사진", value: "image", sortable: false },
      { text: "구매내역", value: "productName", sortable: false },
      { text: "상세내역", value: "productNames", sortable: false }
    ],
    userRecipeList: [],
    userLectureList: [],
    userPerchaseList: [],
    user: []

  }),
  mounted() {
    // 목록 조회 함수
    this.getRecipeList();
    this.getpurchaselist();
    this.getUsers();
  },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 10;
    },
    //데이터 리스트 넘버링
    itemsWithSno() {
      return this.userRecipeList.map((d, index) => ({ ...d, sno: index + 1 }));
    }
  },
  methods: {
     async getUsers() {
      const result = await api.getUser();

      if (result.status == 200) {
        this.user = result.data;
        console.log(result.data);
      
      }
    },
    async getpurchaselist() {
      const result = await api.purchaselist();

      if (result.status == 200) {
        this.userPerchaseList = result.data;
      }
      console.log(this.userPerchaseList);
    },
    async getRecipeList() {
      const result = await api.recipelist();

      if (result.status == 200) {
        this.userRecipeList = result.data;
        // console.log(result.data);
      }
    },
    navigate() {
      this.$router.push("/MypageRecipy");
    },
    navigateTo(item) {
      this.$router.push({
        name: "MypageRecipyDetail",
        params: { recipeId: item.recipeId }
      });
      console.log(item.recipeId);
    },
    async deleteitem(item) {
      const result = await api.delrecipe(item);
      if (result.status == 200) {
        const result = await api.recipelist();
        this.userRecipeList = result.data;
        // this.userRecipeList.splice(this.userRecipeList.indexOf(item), 1);
      }
    }
  }
};
</script>
