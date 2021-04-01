<template>
  <v-row>
    <v-col cols="8" style="margin-left: auto; margin-right: auto">
      <v-card class="mx-auto" style="padding: 20px">
        <v-img max-height="500px" :src="recipe.image"></v-img>

        <div style="marginTop: 5px; display: flex; float: right">
          <v-avatar style="flex: 1"
            ><v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          /></v-avatar>
          <v-card-text style="flex: 20">유저 아이디</v-card-text>
        </div>
        <v-card-title>
          {{ recipe.recipeName }}
        </v-card-title>

        <v-card-subtitle> {{ recipe.tip }} </v-card-subtitle>

        <v-expand-transition>
          <div>
            <v-divider></v-divider>

            <v-card-text>
              {{ recipe.explanation }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

      <v-card style="marginTop: 30px">
        <v-card-title>재료</v-card-title>
        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-title v-for="(item, i) in recipe.stuffRecipe" :key="i">{{
            item
          }}</v-list-item-title>
        </v-list-item>
      </v-card>

      <v-card style="marginTop: 30px">
        <v-list>
          <v-list-item v-for="(item, i) in recipes" :key="i">
            <v-list-item-action>{{ i + 1 }}</v-list-item-action>
            <v-list-item-action-text style="font-size: 15px"
              >{{ item.text }}
            </v-list-item-action-text>
            <div style="float: right; marginleft: 10px">
              <v-list-item-action
                ><v-img :src="item.image" min-width="200px" min-height="100px"
              /></v-list-item-action>
            </div>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card style="marginTop: 30px">
        <v-card-title>판매 재료</v-card-title>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title v-for="(item, i) in product" :key="i">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-card>
      <v-card style="marginTop: 30px">
        <v-card-title>강의</v-card-title>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title v-for="(item, i) in lecture" :key="i">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import api from "@/api/Search";
export default {
  data: () => ({
    show: false,
    recipe: [],
    recipes: [],
    product: [],
    lecture: [],
  }),
  mounted() {
    this.getRecipeData();
  },
  methods: {
    async getRecipeData() {
      console.log(this.$route.params.id);
      const id = this.$route.params.id;
      const result = await api.detail(id);
      if (result.status == 200) {
        this.recipe = result.data[0];
        console.log(this.recipe);
      }
    },
  },
};
</script>