
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
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="red"
        @click="toTop"
      >
        <v-icon>mdi-chevron-double-up</v-icon>
      </v-btn>
    </v-container>
    <v-container>
      <div>
      <v-row justify="start">
        <v-btn class="mt-6" text color="white" @click="moveToLock()">
          관리자
        </v-btn>
      </v-row>
      </div>
      <div>
      <v-row justify="center">
        <v-btn
          depressed
          color="red"
          dark
          small
          :style="{ marginLeft: '0px',marginTop: '10px'  }"
          @click="getProductList()"
        >
          전체보기
        </v-btn>
        <v-btn
          depressed
          color="red"
          dark
          small
          :style="{ marginLeft: '10px',marginTop: '10px'  }"
          @click="findByCategory(1)"
        >
          채소
        </v-btn>
        <v-btn
          depressed
          color="red"
          dark
          small
          :style="{ marginLeft: '10px',marginTop: '10px'  }"
          @click="findByCategory(2)"
        >
          과일·견과·쌀
        </v-btn>
        <v-btn
          depressed
          color="red"
          dark
          small
          :style="{ marginLeft: '10px' ,marginTop: '10px' }"
          @click="findByCategory(3)"
        >
          수산·해산·건어물
        </v-btn>
        <v-btn
          depressed
          color="red"
          dark
          small
          :style="{ marginLeft: '10px',marginTop: '10px'  }"
          @click="findByCategory(4)"
        >
          정육·계란
        </v-btn>
        <v-btn
          depressed
          color="red"
          dark
          small
          :style="{ marginLeft: '10px',marginTop: '10px', marginRight: '10px'}"
          @click="findByCategory(5)"
        >
          면·양념·오일
        </v-btn>
      </v-row>
      </div>
      <div>
      <v-row justify="end">
        <v-btn
          text
          icon
          color="red"
          dark
         :style="{ marginRight: '0px',marginBottom: '10px' }"
          @click="moveToCart()"
        >
          <v-icon size="65">mdi-cart</v-icon>
        </v-btn>
      </v-row>
      </div>
      <v-row justify="center" :style="{ marginTop: '10px' }">
        <v-col cols="6" lg="3" md="4" v-for="(item, i) in productList" :key="i">
          <v-card
            flat
            style="cursor: pointer"
            class="rounded-0"
            @click="moveToDetail(item)"
          >
            <v-img
              width="100%"
              height="300px"
              :alt="item.name"
              :src="item.productTitleImage"
            >
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
    <!--   <div class="scrollTop bg-primary" v-show="showTop" @click="toTop">
      ^
    </div> -->
  </div>
</template>


<script>
import api from "@/api/Market";

export default {
  data: () => ({
    stuff: "",
    productList: [],
    category: {
      a: "채소",
      b: "과일",
      c: "수산·해산·건어물",
      d: "정육·계란",
      e: "면·양념·오일",
    },
    fab: false,
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
      // console.log(this.stuff);
      const result = await api.findByStuff(this.stuff);
      if (result.status == 200) {
        this.productList = result.data;
        this.stuff = "";
      }
    },
    async findByName() {
      // console.log(this.stuff);
      const result = await api.findByName(this.stuff);
      if (result.status == 200) {
        this.productList = result.data;
        this.stuff = "";
      }
    },
    async findByCategory(cate) {
      if (cate == 1) {
        const result = await api.findByCategory(this.category.a);
        if (result.status == 200) {
          this.productList = result.data;
        }
      } else if (cate == 2) {
        const result = await api.findByCategory(this.category.b);
        if (result.status == 200) {
          this.productList = result.data;
        }
      } else if (cate == 3) {
        const result = await api.findByCategory(this.category.c);
        if (result.status == 200) {
          this.productList = result.data;
        }
      } else if (cate == 4) {
        const result = await api.findByCategory(this.category.d);
        if (result.status == 200) {
          this.productList = result.data;
        }
      } else if (cate == 5) {
        const result = await api.findByCategory(this.category.e);
        if (result.status == 200) {
          this.productList = result.data;
        }
      }
    },

    moveToCart() {
      this.$router.push("/Shopping/Cart");
    },
    moveToDetail(item) {
      this.$router.push({
        name: "ProductDetail",
        params: { id: item.id },
      });
    },
    moveToManager() {
      this.$router.push("/Shopping/Manager");
    },
    moveToLock() {
      this.$router.push("/Shopping/Lock");
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>