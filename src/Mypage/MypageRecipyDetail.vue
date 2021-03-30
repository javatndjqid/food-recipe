<template>
  <v-container>
    <v-row>
      <v-col cols="8" style="margin-left: auto; margin-right: auto">
        <v-card class="mx-auto" style="padding: 20px">
          <v-img
            v-if="recipe[0].recipefile[0]"
            :src="recipe[0].recipefile[0].dataUrl"
            :alt="recipe[0].recipeName"
            max-height="500px"
          />

          <v-img
            v-else
            :src="recipe[0].image"
            :alt="recipe[0].recipeName"
            max-height="500px"
          />
          <!-- <v-img
            v-if="recipe[0].image"
            :src="recipe[0].image"
            :alt="recipe[0].recipeName"
            max-height="500px"
          />
          <v-img
            v-else
            :src="recipe[0].recipefile[0].dataUrl"
            :alt="recipe[0].recipeName"
            max-height="500px"
          /> -->
          <v-card-title>
            {{ recipe[0].name }}
          </v-card-title>

          <v-expand-transition>
            <div>
              <v-divider></v-divider>
              <v-card-text>
                {{ recipe[0].explanation }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
        <v-card style="margintop: 30px">
          <v-card-title>재료</v-card-title>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title
              v-for="(item, i) in recipe[0].stuffRecipe"
              :key="i"
            >
              재료: {{ item.stuffName }} 양: {{ item.quantity }}
            </v-list-item-title>
          </v-list-item>
        </v-card>
        <v-card style="margintop: 30px">
          <v-list>
            <v-list-item
              v-for="(item, i) in recipe[0].recipeProcedure"
              :key="i"
            >
              <v-list-item-action>{{ i + 1 }}</v-list-item-action>
              <v-list-item-action-text style="font-size: 15px"
                >{{ item.recipeProcedure }}
              </v-list-item-action-text>
            </v-list-item>
          </v-list>
          <v-expand-transition>
            <div>
              <v-divider></v-divider>
              <v-card-text>
                {{ recipe[0].tip }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
        <v-card> <v-btn
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
</template>
<script>
import api from "@/api/Mypage";
export default {
  data: () => ({
    recipe: []
  }),
  mounted() {
    this.getRecipeData();
  },
  methods: {
     navigate() {
      this.$router.push("/Mypage");
    },
    async getRecipeData() {
      console.log(this.$route.params.recipeId);
      const id = this.$route.params.recipeId;
      const result = await api.recipe(id);
      if (result.status == 200) {
        this.recipe = result.data;
        console.log(this.recipe);
      }
    },
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