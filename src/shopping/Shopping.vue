<template>
  <div>
    <v-container>
      <v-toolbar color="red" dark>
        <!-- <v-toolbar-title>State selection</v-toolbar-title> -->
        <v-text-field
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          solo-inverted
          v-model="stuff"
          @keyup.enter="findByStuff(), findByName()"
        ></v-text-field>

        <v-btn icon @click="findByStuff(), findByName()">
          <v-icon size="60" :style="{ marginRight: '10px' }"
            >mdi-card-search</v-icon
          >
        </v-btn>
      </v-toolbar>
    </v-container>
    <v-container>
      <div>
        <v-btn
          text
          icon
          color="red"
          dark
          style="margin-left: 1100px"
          @click="moveToCart()"
        >
          <v-icon size="65" :style="{ marginBottom: '50px', marginTop: '40px' }"
            >mdi-cart</v-icon
          >
        </v-btn>
      </div>
      <v-row justify="center" :style="{ marginTop: '10px' }">
        <v-col cols="9" md="3" v-for="(item, i) in productList" :key="i">
          <v-card
            flat
            style="cursor: pointer"
            class="rounded-0"
            @click="moveToDetail(item)"
          >
            <v-img width="100%" height="300px" :src="item.productTitleImage">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title
              ><div>
                {{ item.name }}
              </div></v-card-title
            >
            <v-card-subtitle>
              <div>{{ item.price }}원</div>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-pagination v-model="page" :length="5" :total-visible="5"></v-pagination> -->
  </div>
</template>


<script>
import api from "@/api/Market";

export default {
  data: () => ({
    stuff: "",
    productList: [],
  }),
  mounted() {
    this.getProductList();
  },
  methods: {
    async getProductList() {
      const result = await api.productList();
      if (result.status == 200) {
        this.productList = result.data;
      }
    },
    async findByStuff() {
      console.log(this.stuff);
      const result = await api.findByStuff(this.stuff);
      if (result.status == 200) {
        this.productList = result.data;
        this.stuff = "";
      }
    },
    async findByName() {
      console.log(this.stuff);
      const result = await api.findByName(this.stuff);
      if (result.status == 200) {
        this.productList = result.data;
        this.stuff = "";
      }
    },

    moveToCart() {
      this.$router.push("/Cart");
    },
    moveToDetail(item) {
      this.$router.push({
        name: "ProductDetail",
        params: { id: item.id },
      });
    },
  },
};
</script>