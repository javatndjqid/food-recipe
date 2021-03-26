<template>
  <div>
    <v-app>
      <v-container>
        <v-toolbar dark color="teal">
          <!-- <v-toolbar-title>State selection</v-toolbar-title> -->
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
            label="What state are you from?"
            solo-inverted
            @keyup.enter="addChip()"
          ></v-autocomplete>
          <v-btn icon @click="addChip()">
            <v-icon size="40" :style="{ marginRight: '10px' }"
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
                  <v-col cols="4"> 조리방법(카테고리) </v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" key="0" />
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content style="display: flex">
                <v-card-actions>
                  <v-btn
                    text
                    :color="item.id == radio.id ? 'blue accent-4' : 'secondary'"
                    v-for="(item, i) in category"
                    :key="i"
                    style="flex: 1"
                    v-model="radio"
                    @click="selectRadio(item)"
                  >
                    {{ item.name }}
                  </v-btn>
                </v-card-actions>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>

      <v-main>
        <v-container>
          <v-row>
            <v-col v-for="(item, n) in recipe" :key="n" cols="3">
              <v-card class="mx-auto" max-width="344" @click="navigateTo(item)">
                <v-img :src="item.image" height="200px"></v-img>

                <v-card-title>
                  {{ item.name }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="10"
        :total-visible="9"
      ></v-pagination>
    </div>
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
    move: [{ text: "SearchDetail", path: "/SearchDetail" }],
    recipe: [],
    searchRecipe: [],
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  mounted() {
    this.getItem();
    this.getState();
    this.getCategories();
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
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
      console.log(this.chips);
      // this.getSearchStuff(this.select, this.recipe);
      console.log(this.radio);

      this.recipeFilter(this.chips);
    },
    async recipeFilter(chips) {
      const results = await api.category(this.radio.id);
      if (results.status == 200) {
        this.searchRecipe = results.data;
        for (let i in chips) {
          console.log(chips[i]);
          this.searchRecipe = this.searchRecipe.filter((search) => {
            return search.stuff.indexOf(chips[i]) > -1;
          });
          console.log(this.searchRecipe);
        }
        this.recipe = this.searchRecipe;
      }
    },
    delChip(i) {
      this.chips.splice(i, 1);
      console.log(this.chips.length);
      console.log(this.radio.id);
      this.chips.length == 0
        ? this.selectRadio(this.radio)
        : this.recipeFilter(this.chips);
    },
    navigateTo(item) {
      this.$router.push({ name: "SearchDetail", params: { id: item.id } });
    },
    selectRadio(category) {
      this.radio = category;
      // this.radio.id == 0
      //   ? this.getItem()
      //   : this.getCategoryRecipe(this.radio.id);
      this.recipeFilter(this.chips);
    },
    async getItem() {
      const results = await api.list();
      if (results.status == 200) {
        this.recipe = results.data;
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
    async getCategoryRecipe(i) {
      console.log("getCategoryRecipe실행");
      const results = await api.category(i);
      if (results.status === 200) {
        this.recipe = results.data;
      }
    },
    async getSearchStuff(categoryId, stuff) {
      // const recipe = JSON.parse(recipeData);
      const results = await api.searchRecipe(categoryId, stuff);
      if (results.status == 200) {
        this.recipe = results.data;
        console.log(results.data);
      }
    },
  },
};
</script>

