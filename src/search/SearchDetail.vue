<style>
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  max-width: 50%;
}

.Aligner-item--top {
  align-self: flex-start;
}
@font-face {
  font-family: "yg-jalnan";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
<template>
  <div style="color: gray">
    <v-col cols="8" style="margin-left: auto; margin-right: auto">
      <v-card class="mx-auto" style="padding: 20px">
        <v-img :src="recipe.image" max-height="400px" alt="Main Image"></v-img>
        <div style="margin-top: 5px; display: flex; float: right">
          <v-avatar style="flex: 1"
            ><v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              alt="Avatar Image"
          /></v-avatar>
          <v-card-text style="flex: 20">유저 아이디</v-card-text>
        </div>
        <v-card-title> {{ recipe.recipeName }} </v-card-title>
        <v-card-subtitle> {{ recipe.tip }} </v-card-subtitle>
        <v-expand-transition>
          <div>
            <v-divider></v-divider>
            <v-card-text> {{ recipe.explanation }} </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card style="margin-top: 30px">
        <v-card-title>재료</v-card-title>
        <v-divider></v-divider>
        <!-- <v-list-item>
          <v-list-item-title v-for="(item, i) in stuffs" :key="i"
            >{{ item.stuff }} {{ item.quentity }}</v-list-item-title
          >
        </v-list-item> -->
        <v-list>
          <v-list-item>
            <v-list-item-action
              style="width: 50%"
              class="Aligner-item Aligner-item--top"
              v-for="(items, i) in stuffs"
              :key="i"
            >
              <v-simple-table dense style="width: 100%">
                <template v-slot:default>
                  <thead style="background-color: blue">
                    <tr>
                      <th class="text-left white--text">Stuff</th>
                      <th class="text-left white--text">Quentity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, j) in items" :key="j">
                      <td>{{ item.stuffName }}</td>
                      <td>{{ item.quantity }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card
        style="margin-top: 30px; font-weight: bold; font-family: yg-jalnan"
        v-for="(item, i) in recipe.recipeProcedure"
        :key="i"
      >
        <v-list>
          <v-list-item>
            <!-- <v-list-item-action>{{ i + 1 }}</v-list-item-action> -->
            <v-list-item-action-text style="font-size: 15pt"
              >{{ item.recipeProcedure }}
            </v-list-item-action-text>
            <div style="margin-left: auto">
              <v-list-item-action
                ><v-img
                  :src="item.recipeProcedureImage"
                  min-width="300px"
                  min-height="100px"
                  style="float: right"
                  alt="Recipe Procedure Image"
              /></v-list-item-action>
            </div>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card style="margin-top: 30px">
        <v-card-title>판매 재료</v-card-title>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title
            v-for="(item, i) in products"
            :key="i"
            style="text-align: center; margin: 10px"
          >
            <v-img
              :src="item.productTitleImage"
              height="150px"
              min-width="200px"
              alt="Market Stuff Image"
            />
            <v-list-item-title style="margin: 10px; font-weight: bold">{{
              item.name
            }}</v-list-item-title>
          </v-list-item-title>
        </v-list-item>
      </v-card>
      <v-card style="margin-top: 30px">
        <v-card-title>추천 강의</v-card-title>
        <v-divider></v-divider>
        <v-list-item>
          <v-col v-for="(item, i) in lectures" :key="i" cols="3">
            <v-card style="text-align: center; margin: 10px" flat>
              <v-img
                :src="`https://img.youtube.com/vi/${item.imageSrc}/0.jpg`"
                height="150px"
                min-width="200px"
                alt="Lecture Image"
              />
              <v-list-item-title
                style="text-align: center; margin: 10px; font-weight: bold"
                >{{ item.title }}</v-list-item-title
              >
            </v-card>
          </v-col>
        </v-list-item>
      </v-card>
    </v-col>
  </div>
</template>
<script>
import api from "@/api/Search";
export default {
  data: () => ({
    show: false,
    recipe: [],
    stuffs: [],
    products: [],
    lectures: [],
  }),
  mounted() {
    this.getRecipeData();
    this.getLectureData();
    // this.getProductData();
  },
  methods: {
    async getRecipeData() {
      console.log("===== this.$rouute.query.id =====");
      console.log(this.$route.query.id);
      const id = this.$route.query.id;
      const result = await api.detail(id);
      if (result.status == 200) {
        this.recipe = result.data;
        console.log("===== this.recipe =====");
        console.log(this.recipe);

        this.sliceList();
        this.getProductData();
        this.getLectureData();
      }
    },
    sliceList() {
      this.stuffs[0] = this.recipe.stuffRecipe.slice(
        0,
        this.recipe.stuffRecipe.length / 3 + 1
      );

      this.stuffs[1] = this.recipe.stuffRecipe.slice(
        this.recipe.stuffRecipe.length / 3 + 1,
        (this.recipe.stuffRecipe.length / 3) * 2 + 1
      );

      this.stuffs[2] = this.recipe.stuffRecipe.slice(
        (this.recipe.stuffRecipe.length / 3) * 2 + 1
      );
    },
    async getLectureData() {
      const results = await api.lectureList(this.recipe.category);
      if (results.status == 200) {
        this.lectures = results.data;
        console.log("===== this.lectures =====");
        console.log(this.lectures);
      }
    },
    async getProductData() {
      const results = await api.productList(this.recipe.stuffRecipe);
      if (results.status == 200) {
        this.products = results.data;
        console.log("===== this.products =====");
        console.log(this.products);
      }
    },
  },
};
</script>