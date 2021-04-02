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
            <v-col v-for="(item, n) in calData" :key="n" cols="3">
              <v-card class="mx-auto" max-width="344" @click="navigateTo(item)">
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
    // this.getCount();
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
      console.log(this.radio);
      this.recipeFilter(this.chips);
      this.page = 1;
    },
    movePage() {
      console.log(this.page);
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
    // async searchfilter(id, page, stuffs) {
    //   const results = await api.filter(id, page - 1, stuffs);
    //   if (results.status == 200) {
    //     this.recipe = results.data;
    //   }
    // },
    delChip(i) {
      this.chips.splice(i, 1);
      console.log(this.chips.length);
      console.log(this.radio.id);
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
      console.log(item);
      // this.$router.push({ name: "SearchDetail", params: { id: 3 } });
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
    // async getCount() {
    //   const result = await api.count();
    //   if (result.status == 200) {
    //     this.pageLength = Math.ceil(result.data / 12);
    //     console.log(this.pageLength);
    //   }
    // },
  },
};
</script>

