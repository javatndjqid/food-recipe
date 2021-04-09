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
  <v-img src="./vegetables.jpg" alt="배경이미지" height="”bgHeight”">
    <div style="color: gray">
      <v-row>
        <v-col cols="8" style="margin-left: auto; margin-right: auto">
          <v-card class="mx-auto" style="padding: 20px">
          <v-img
              v-if="recipe.recipefile[0]"
              :src="recipe.recipefile[0].dataUrl"
              :alt="recipe.recipeName"
              max-height="500px"
            />

            <v-img
              v-else
              :src="recipe.image"
              :alt="recipe.recipeName"
              max-height="500px"
            />

            <div style="margin-top: 5px; display: flex; float: right">
              <v-card-text style="flex: 20"
                >작성자: {{ recipe.userNickName }}</v-card-text
              >
            </div>
            <v-card-title
              style="
              font-family: ELAND_Nice_M;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            "
            >
              {{ recipe.recipeName }}
            </v-card-title>
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
            <!-- <v-list>
            <v-list-item class="Aligner"> -->
            <v-row align="start" justify="center">
              <v-col cols="12" md="4" v-for="(items, i) in stuffs" :key="i">
                <v-simple-table dense>
                  <!-- <template v-slot:default> -->
                  <thead style="background-color: blue">
                    <tr>
                      <th class="white--text">Stuff</th>
                      <th class="white--text">Quentity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, j) in items" :key="j">
                      <td>{{ item.stuffName }}</td>
                      <td>{{ item.quantity }}</td>
                    </tr>
                  </tbody>
                  <!-- </template> -->
                </v-simple-table>
              </v-col>
            </v-row>
            <!-- </v-list-item>
          </v-list> -->
          </v-card>

          <v-card
            style="margin-top: 30px; font-weight: bold; font-family: yg-jalnan"
            v-for="(item, i) in recipe.recipeProcedure"
            :key="i"
          >
            <!-- <v-list>
              <v-list-item> -->
            <!-- <v-list-item-action>{{ i + 1 }}</v-list-item-action> -->
            <v-row align="center" justify="center">
              <v-col cols="12" md="8">
                <v-card-text style="font-size: 15pt">
                  {{ item.recipeProcedure }}
                </v-card-text>
              </v-col>
              <v-col cols="12" md="4">
              
                <v-img
                      v-if="item.recipeProcedurefile[0]"
                      :src="item.recipeProcedurefile[0].dataUrl"
                      :alt="item.recipeProcedurefile[0].fileName"
                    width="350"
                    />
                    <v-img
                      v-else-if="item.recipeProcedureImage != null"
                      :src="item.recipeProcedureImage"
                      alt="빈이미지"
                      width="350"
                     />
                    <v-img
                      v-else
                      src="./1.png"
                      alt="빈이미지"
                     width="350"
                    
                  />
                
              </v-col>
            </v-row>
          </v-card>

          <v-card style="margin-top: 30px">
            <v-row>
              <v-col cols="12" md="3">
                <v-btn
                  justify="end"
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="ma-2 white--text"
                  @click="navigate()"
                >
                  뒤로가기
                </v-btn>

                <v-btn
                  justify="end"
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="ma-2 white--text"
                  @click="del(id)"
                >
                  레시피삭제
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-img>
</template>
<script>
import api from "@/api/Mypage";
export default {
  data: () => ({
    stuffs: [],
    recipe: []
  }),
  mounted() {
    this.getRecipeData();
  },
  methods: {
    navigate() {
      this.$router.push("/Mypage");
    },
    //레시피 id의 해당 정보호출
    async getRecipeData() {
      // console.log(this.$route.params.recipeId);
      const id = this.$route.params.recipeId;
      const result = await api.recipe(id);
      if (result.status == 200) {
        this.recipe = result.data[0];
        // console.log(this.recipe);
        this.sliceList();
      }
    },
    sliceList() {
      this.stuffs[0] = this.recipe.stuffRecipe.slice(
        0,
        this.recipe.stuffRecipe.length / 3 + 1
      );
      // console.log("===== stuff1 =====");
      // console.log(this.stuff1);

      this.stuffs[1] = this.recipe.stuffRecipe.slice(
        this.recipe.stuffRecipe.length / 3 + 1,
        (this.recipe.stuffRecipe.length / 3) * 2 + 1
      );

      this.stuffs[2] = this.recipe.stuffRecipe.slice(
        (this.recipe.stuffRecipe.length / 3) * 2 + 1
      );
    },
    //레시피삭제
    async del() {
      const id = this.$route.params.recipeId;
      const result = await api.delrecipe(id);
      if (result.status == 200) {
        this.$router.push("/Mypage");
      }
    }
  }
};
</script>