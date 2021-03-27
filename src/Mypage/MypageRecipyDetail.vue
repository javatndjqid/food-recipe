<template>
  <v-row>
    <v-col cols="8" style="margin-left: auto; margin-right: auto">
      <v-card class="mx-auto" style="padding: 20px">
        <v-img
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
        />
        <div style="margintop: 5px; display: flex; float: right">
          <v-avatar style="flex: 1"
            ><v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          /></v-avatar>
          <v-card-text style="flex: 20">유저 아이디</v-card-text>
        </div>
        <v-card-title>
          {{ recipe[0].name }}
        </v-card-title>
        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
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
          <v-list-item-title v-for="(item, i) in recipe[0].stuff" :key="i">{{
            item
          }}</v-list-item-title>
        </v-list-item>
      </v-card>
      <v-card style="margintop: 30px">
        <v-list>
          <v-list-item v-for="(item, i) in recipe[0].recipeProcedure" :key="i">
            <v-list-item-action>{{ i + 1 }}</v-list-item-action>
            <v-list-item-action-text style="font-size: 15px"
              >{{ item.recipeProcedure }}
            </v-list-item-action-text>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
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
    async getRecipeData() {
      console.log(this.$route.params.id);
      const id = this.$route.params.id;
      const result = await api.recipe(id);
      if (result.status == 200) {
        this.recipe = result.data;
        console.log(this.recipe);
      }
    }
  }
};
</script>