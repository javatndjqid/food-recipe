<style>
@import "./textstyle.css";
</style>
<template>
  <div>
    <v-app>
      <v-container>
        <v-row justify="center" align="start">
          <v-col cols="12">
            <v-img src="../assets/yum.png" class="my-3" contain height="250" />
          </v-col>
        </v-row>
        <v-toolbar color="red" dark>
          <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="mx-4"
            flat
            hide-no-data
            hide-details
            solo-inverted
            @keyup.enter="addChip()"
          ></v-autocomplete>
          <v-btn icon @click="addChip()">
            <v-icon size="60" :style="{ marginRight: '10px' }"
              >mdi-card-search</v-icon
            >
          </v-btn>
        </v-toolbar>
      </v-container>
      <div class="text-center">
        <v-chip
          v-for="(chip, i) in chips"
          :key="i"
          class="ma-2"
          close
          @click:close="delChip(i)"
        >
          {{ chip }}
        </v-chip>
      </div>
      <v-container>
        <v-row :style="{ marginTop: '20px', marginBottom: '-50px' }">
          <v-expansion-panels popout>
            <v-expansion-panel>
              <v-expansion-panel-header v-slot="{ open }">
                <v-row no-gutters>
                  <v-col cols="5"> 조리방법(카테고리) </v-col>
                  <v-col cols="7" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" key="0" />
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12">
                    <v-card-actions>
                      <v-btn
                        width="16%"
                        text
                        :color="
                          item.id == radio.id ? 'blue accent-4' : 'secondary'
                        "
                        v-for="(item, i) in category"
                        :key="i"
                        v-model="radio"
                        @click="selectRadio(item)"
                      >
                        {{ item.name }}
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>

      <v-main>
        <v-container>
          <v-row>
            <v-col v-for="(item, n) in calData" :key="n" cols="6" md="3">
              <v-card
                class="mx-auto"
                max-width="344"
                @click="navigateTo(item)"
                style="font-family: ELAND_Nice_M"
              >
                <v-img
                  :src="item.image"
                  height="200px"
                  :alt="item.name"
                ></v-img>
                <v-card-title>
                  {{ item.name }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <div class="text-center">
          <v-pagination v-model="page" :length="numOfPages"></v-pagination>
        </div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import api from "@/api/Search";
export default {
  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null,
    states: [],
    category: [{ id: 0, name: "전체" }],
    radio: { id: 0, name: "전체" },
    chips: [],
    page: 1,
    dataPerPage: 12,
    pageLength: 0,
    move: [{ text: "SearchDetail", path: "/SearchDetail" }],
    recipe: [],
    searchRecipe: [],
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  computed: {
    startOffset() {
      return (this.page - 1) * this.dataPerPage;
    },
    endOffset() {
      return this.startOffset + this.dataPerPage;
    },
    numOfPages() {
      return Math.ceil(this.recipe.length / this.dataPerPage);
    },
    calData() {
      return this.recipe.slice(this.startOffset, this.endOffset);
    },
  },
  mounted() {
    this.getItem();
    this.getState();
    this.getCategories();
    this.getImage(13, 2);
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
    addChip() {
      if (this.select == null || this.chips.indexOf(this.select) > -1) return;
      this.chips.push(this.select);
      this.recipeFilter(this.chips);
      this.page = 1;
    },
    movePage() {
      this.recipeFilter(this.chips);
    },
    async recipeFilter(chips) {
      const results = await api.category(this.radio.id);
      if (results.status == 200) {
        this.searchRecipe = results.data;
        for (let i in chips) {
          this.searchRecipe = this.searchRecipe.filter((search) => {
            return search.stuff.indexOf(chips[i]) > -1;
          });
        }
        this.recipe = this.searchRecipe.reverse();
      }
    },
    delChip(i) {
      this.chips.splice(i, 1);
      this.chips.length == 0
        ? this.selectRadio(this.radio)
        : this.recipeFilter(this.chips);
    },
    navigateTo(item) {
      this.$router.push({
        path: "/SearchDetail",
        name: "SearchDetail",
        query: { id: item.recipeId },
      });
    },
    selectRadio(category) {
      this.radio = category;
      this.recipeFilter(this.chips);
      this.page = 1;
    },
    async getItem() {
      const results = await api.list();
      if (results.status == 200) {
        this.recipe = results.data;
        this.recipe.reverse();
      }
    },
    async getState() {
      const satateResults = await api.stuff();
      if (satateResults.status == 200) {
        this.states = satateResults.data;
      }
    },
    async getCategories() {
      const categoriesResults = await api.categories();
      if (categoriesResults.status === 200) {
        this.category.push(...categoriesResults.data);
      }
    },
    async getImage() {
      for (let i in this.recipe) {
        if (
          this.recipe[i].image == "" ||
          this.recipe[i].image ==
            "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
        ) {
          const result = await api.detail(this.recipe[i].recipeId);
          if (result.status == 200) {
            if (result.data[0].recipefile[0] == null) continue;
            this.recipe[i].image = result.data[0].recipefile[0].dataUrl;
          }
        }
      }
    },
  },
};
</script>

