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
    <v-container>
      <v-row>
        <v-col cols="7" style="margin-left: auto; margin-right: auto">
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

            <v-card-title>
              {{ recipe.name }}
            </v-card-title>

            <v-expand-transition>
              <div>
                <v-divider></v-divider>
                <v-card-text>
                  {{ recipe.explanation }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>

          <v-card style="margin-top: 30px">
            <v-card-title>재료</v-card-title>
            <v-divider></v-divider>

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
                      v-if="item.recipeProcedurefile[0]"
                      :src="item.recipeProcedurefile[0].dataUrl"
                      :alt="item.recipeProcedurefile[0].fileName"
                      height="50px"
                      width="50px"/>
                    <v-img
                      v-else-if="item.recipeProcedureImage != null"
                      :src="item.recipeProcedureImage"
                      alt="빈이미지"
                      height="60px"
                      width="50px"/>
                    <v-img
                      v-else
                      src="./1.png"
                      alt="빈이미지"
                      height="60px"
                      width="50px"
                  /></v-list-item-action>
                </div>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card>
            <v-expand-transition>
              <div>
                <v-divider></v-divider>
                <v-card-text>
                  {{ recipe.tip }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>

          <v-card>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
      console.log(this.$route.params.recipeId);
      const id = this.$route.params.recipeId;
      const result = await api.recipe(id);
      if (result.status == 200) {
        this.recipe = result.data[0];
        console.log(this.recipe);
        this.sliceList();
      }
    },
    sliceList() {
      this.stuffs[0] = this.recipe.stuffRecipe.slice(
        0,
        this.recipe.stuffRecipe.length / 3 + 1
      );
      console.log("===== stuff1 =====");
      console.log(this.stuff1);

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