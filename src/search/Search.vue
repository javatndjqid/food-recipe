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
          @click:close="chip.view = false"
        >
          {{ chip.text }}
        </v-chip>
      </div>
      <v-container>
        <v-row :style="{ marginTop: '20px', marginBottom: '-50px' }">
          <v-expansion-panels popout>
            <v-expansion-panel>
              <v-expansion-panel-header v-slot="{ open }">
                <v-row no-gutters>
                  <v-col cols="4"> 카테고리 </v-col>
                  <v-col cols="8" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" key="0" />
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card-actions>
                  <v-btn
                    text
                    color="secondary"
                    v-for="(item, i) in category"
                    :key="i"
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
    // recipeImage:
    category: [
      { name: "국", status: false },
      { name: "탕", status: false },
      { name: "찌개", status: false },
      { name: "구이", status: false },
      { name: "볶음", status: false },
    ],
    chips: [],
    // chip2: true,
    // chip3: true,
    // chip4: true,
    page: 1,
    move: [{ text: "SearchDetail", path: "/SearchDetail" }],
    recipe: [],
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  mounted() {
    this.getItem();
    this.getState();
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
      this.chips.push({ text: this.select, view: true });

      console.log(this.chips);
    },
    delChip() {
      this.chips.pop();
    },
    navigateTo(item) {
      console.log(item);
      this.$router.push("/SearchDetail");
    },
    async getItem() {
      const results = await api.list();
      if (results.status == 200) {
        this.recipe = results.data;
        console.log(this.recipe);
      }
    },
    async getState() {
      const results = await api.stuff();
      if (results.status == 200) {
        this.states = results.data;
        console.log(this.states);
      }
    },
  },
};
</script>

