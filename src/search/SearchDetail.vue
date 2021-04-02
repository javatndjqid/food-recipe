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
</style>
<template>
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
                  <tr v-for="(item, i) in stuff1" :key="i">
                    <td>{{ item.stuffName }}</td>
                    <td>{{ item.quantity }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-list-item-action>
          <v-list-item-action
            style="width: 50%"
            class="Aligner-item Aligner-item--top"
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
                  <tr v-for="(item, i) in stuff2" :key="i">
                    <td>{{ item.stuffName }}</td>
                    <td>{{ item.quantity }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-list-item-action>
          <v-list-item-action
            style="width: 50%"
            class="Aligner-item Aligner-item--top"
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
                  <tr v-for="(item, i) in stuff3" :key="i">
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

    <v-card style="margin-top: 30px">
      <v-list>
        <v-list-item v-for="(item, i) in recipe.recipeProcedure" :key="i">
          <!-- <v-list-item-action>{{ i + 1 }}</v-list-item-action> -->
          <v-list-item-action-text style="font-size: 15px"
            >{{ item.recipeProcedure }}
          </v-list-item-action-text>
          <div style="margin-left: auto">
            <v-list-item-action
              ><v-img
                :src="item.recipeProcedureImage"
                min-width="200px"
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
        <v-list-item-title v-for="(item, i) in product" :key="i">
          <v-img
            :src="item.image"
            style="margin: 20px"
            max-width="150px"
            alt="Market Stuff Image"
          />
          <v-list-item-title
            style="text-align: center; margin: 10px; font-weight: bold"
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item-title>
      </v-list-item>
    </v-card>
    <v-card style="margin-top: 30px">
      <v-card-title>추천 강의</v-card-title>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title v-for="(item, i) in lecture" :key="i">
          <v-img
            :src="item.image"
            style="margin: 20px"
            max-width="150px"
            alt="Lecture Image"
          />
          <v-list-item-title
            style="text-align: center; margin: 10px; font-weight: bold"
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item-title>
      </v-list-item>
    </v-card>
  </v-col>
</template>
<script>
import api from "@/api/Search";
export default {
  data: () => ({
    show: false,
    recipe: [],
    stuff1: [],
    stuff2: [],
    stuff3: [],
    product: [],
    lecture: [],
  }),
  mounted() {
    this.getRecipeData();
  },
  methods: {
    async getRecipeData() {
      console.log("===== this.$rouute.query.id =====");
      console.log(this.$route.query.id);
      const id = this.$route.query.id;
      const result = await api.detail(id);
      if (result.status == 200) {
        this.recipe = result.data[0];
        console.log(this.recipe);
        this.sliceList();
      }
    },
    sliceList() {
      this.stuff1 = this.recipe.stuffRecipe.slice(
        0,
        this.recipe.stuffRecipe.length / 3 + 1
      );
      console.log("===== stuff1 =====");
      console.log(this.stuff1);

      this.stuff2 = this.recipe.stuffRecipe.slice(
        this.recipe.stuffRecipe.length / 3 + 1,
        (this.recipe.stuffRecipe.length / 3) * 2 + 1
      );

      this.stuff3 = this.recipe.stuffRecipe.slice(
        (this.recipe.stuffRecipe.length / 3) * 2 + 1
      );
    },
  },
};
</script>