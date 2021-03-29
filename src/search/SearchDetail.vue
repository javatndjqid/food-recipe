<template>
  <v-row>
    <v-col cols="8" style="margin-left: auto; margin-right: auto">
      <v-card class="mx-auto" style="padding: 20px">
        <v-img max-height="500px" :src="recipe.image"></v-img>

        <div style="margintop: 5px; display: flex; float: right">
          <v-avatar style="flex: 1"
            ><v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          /></v-avatar>
          <v-card-text style="flex: 20">유저 아이디</v-card-text>
        </div>
        <v-card-title>
          {{ recipe.name }}
        </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

        <v-expand-transition>
          <div>
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

      <v-card style="margintop: 30px">
        <v-card-title>재료</v-card-title>
        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-title v-for="(item, i) in recipe.stuff" :key="i">{{
            item
          }}</v-list-item-title>
        </v-list-item>
      </v-card>

      <v-card style="margintop: 30px">
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
      <v-card style="margintop: 30px">
        <v-card-title>판매 재료</v-card-title>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title v-for="(item, i) in product" :key="i">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-card>
      <v-card style="margintop: 30px">
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
      const result = await api.recipe(id);
      if (result.status == 200) {
        this.recipe = result.data;
        console.log(this.recipe);
      }
    },
  },
};
</script>