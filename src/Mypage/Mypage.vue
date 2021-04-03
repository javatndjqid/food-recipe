
<template>
  <v-img src="./tablecloth.jpg" alt="배경" height="”bgHeight”">
    <v-container color="primary">
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="5
        "
          xs="12"
        >
          <template>
            <v-card
              style="height: 700px"
              class="overflow-y-auto"
              elevation="10"
              img="https://pgnqdrjultom1827145.cdn.ntruss.com/img/bf/43/bf43dc0fd6c604082f713030601b9bc5d9d8d26047ab1eeb7efff8e31cf65e5c_v1.jpg"
              alt="카드이미지"
            >
              <v-card-subtitle>나의 레시피</v-card-subtitle>
              <v-img
                class="white--text align-end"
                height="150px"
                src="https://image.freepik.com/free-vector/healthy-recipe-illustration-concept_23-2148576281.jpg"
                alt="카드상단이미지"
              />

              <v-data-table
                style="height: 430px"
                :headers="recipyHeaders"
                :items="itemsWithSno"
                :page.sync="page"
                :items-per-page="6"
                hide-default-footer
                class="elevation-1"
                @page-count="pageCount = $event"
              >
                <template v-slot:item.recipeId:="props">
                  {{ props.item.recipe.length }}
                </template>
                <template v-slot:item.image="{ item }">
                  <div v-if="item.recipefile[0]">
                    <v-img
                      :src="item.recipefile[0].dataUrl"
                      :alt="item.recipeName"
                      height="60px"
                      width="60px"
                    />
                  </div>
                  <div v-else>
                    <v-img
                      :src="item.image"
                      :alt="item.recipeName"
                      height="60px"
                      width="60px"
                    />
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
              <div class="text-xs-center pt-2">
                <v-pagination
                  :total-visible="5"
                  v-model="page"
                  :length="pageCount"
                  circle
                ></v-pagination>
              </div>
            </v-card>
            <v-row cols="12" justify="end">
              <v-btn @click="navigate()" class="mx-2" fab dark color="cyan">
                <v-icon> mdi-playlist-plus </v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <template>
            <v-card
              class="overflow-y-auto"
              elevation="10"
              style="height: 700px"
            >
              <v-card-subtitle>쇼핑 리스트</v-card-subtitle>
              <v-img
                class="white--text align-end"
                height="100px"
                src="https://en.pimg.jp/001/710/411/1/1710411.jpg"
                alt="카드상단이미지"
              >
              </v-img>
              <v-data-table
                style="height: 480px"
                :headers="MarketHeaders"
                :items="userPurchaseList"
                :page.sync="page2"
                :items-per-page="9"
                hide-default-footer
                class="elevation-1"
                @page-count="pageCount2 = $event"
              >
                <template v-slot:item.orderDate="{ item }">
                  {{ $moment(item.orderDate).format("YYYY-MM-DD-HH-MM") }}
                </template>
                <template v-slot:item.image="{ item }">
                  <v-img
                    :src="item.orderProduct[0].productTitleImage"
                    :alt="item.orderProduct[0].productName"
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
                  <v-dialog max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on">
                        mdi-format-list-bulleted
                      </v-icon>
                    </template>
                    <v-card
                      ><v-card-text />
                      <v-card-text
                        v-for="(input, i) in item.orderProduct"
                        :key="i"
                      >
                        {{ input.productName }}
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </template>
              </v-data-table>
              <div class="text-xs-center pt-2">
                <v-pagination
                  circle
                  :total-visible="5"
                  v-model="page2"
                  :length="pageCount2"
                ></v-pagination>
              </div>
              <div class="text-xs-center pt-2"></div>
            </v-card>
          </template>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <template>
            <v-card>
              <template>
                <v-card
                  class="overflow-y-auto"
                  elevation="10"
                  style="height: 700px"
                >
                  <v-card-subtitle>나의 강의</v-card-subtitle>
                  <v-img
                    class="white--text align-end"
                    height="100px"
                    src="https://cdn.crowdpic.net/list-thumb/thumb_l_756C27E1062B73D39C8E3E51165172E2.jpg"
                    alt="카드상단이미지"
                  >
                  </v-img>
                  <v-data-table
                    style="height: 480px"
                    :headers="ClassHeaders"
                    :items="userlectureList"
                    :page.sync="page3"
                    :items-per-page="9"
                    hide-default-footer
                    class="elevation-1"
                    @page-count="pageCount3 = $event"
                  >
                    <template v-slot:item.lectureName="{ item }">
                      {{ item.lectureTitle }}
                    </template>
                    <template v-slot:item.image="{ item }">
                      <div>
                        <v-img
                          :src="`http://i.ytimg.com/vi/${item.lectureImageSRC}/default.jpg`"
                          :alt="item.lectureTitle"
                          height="40px"
                          width="50px"
                        />
                      </div>
                    </template>
                  </v-data-table>
                  <div class="text-xs-center pt-2">
                    <v-pagination
                      circle
                      :total-visible="5"
                      v-model="page3"
                      :length="pageCount3"
                    ></v-pagination>
                  </div>
                </v-card>
              </template>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>
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
        width: 10,
      },
      {
        text: "레시피 사진",
        value: "image",
        sortable: false,
        align: "center",
      },
      {
        text: "레시피 이름",
        value: "recipeName",
        sortable: false,
        align: "center",
      },
      {
        text: "상세정보",
        value: "details",
        sortable: false,
        width: 80,
        align: "center",
      },
      {
        text: "삭제",
        value: "del",
        sortable: false,
        width: 10,
        align: "center",
      },
    ],
    ClassHeaders: [
      { text: "썸네일", value: "image", sortable: false, align: "center" },
      {
        text: "구독내역",
        value: "lectureName",
        sortable: false,
      },
    ],
    MarketHeaders: [
      { text: "구매시간", align: "start", value: "orderDate" },
      { text: "구매사진", value: "image", sortable: false, align: "center" },
      {
        text: "구매내역",
        value: "productName",
        sortable: false,
      },
      {
        text: "상세내역",
        value: "productNames",
        sortable: false,
        align: "center",
      },
    ],
    userRecipeList: [],
    userlectureList: [],
    userPurchaseList: [],
    page: 1,
    pageCount: 0,
    page2: 1,
    pageCount2: 0,
    page3: 1,
    pageCount3: 0,
  }),
  mounted() {
    this.getlecturelist();
    this.getRecipeList();
    this.getpurchaselist();
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
    },
  },
  methods: {
    //구매리스트호출
    async getpurchaselist() {
      const result = await api.purchaselist();

      if (result.status == 200) {
        this.userPurchaseList = result.data;
      }
      console.log(this.userPurchaseList);
    },
    //레시피리스트호출
    async getRecipeList() {
      const result = await api.recipelist(2);

      if (result.status == 200) {
        this.userRecipeList = result.data;
        console.log(result.data);
      }
    },
    //구독리스트호출
    async getlecturelist() {
      const result = await api.lecturelist();
      if (result.status == 200) {
        this.userlectureList = result.data;
      }
      console.log(this.userlectureList);
    },
    //레시피등록페이지로 이동
    navigate() {
      this.$router.push("/MypageRecipy");
    },
    //레시피 상세 화면으로 이동
    navigateTo(item) {
      this.$router.push({
        name: "MypageRecipyDetail",
        params: { recipeId: item.recipeId },
      });
      //    console.log(item.recipeId);
    },
    //레시피 삭제
    async deleteitem(item) {
      const result = await api.delrecipe(item);
      if (result.status == 200) {
        const result = await api.recipelist();
        this.userRecipeList = result.data;
        // this.userRecipeList.splice(this.userRecipeList.indexOf(item), 1);
      }
    },
  },
};
</script>
