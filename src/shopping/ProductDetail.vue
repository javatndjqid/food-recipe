<template>
  <div>
    <v-container>
      <div>
        <v-btn
          text
          icon
          color="red"
          style="margin-left: 1100px"
          @click="moveToCart()"
        >
          <v-icon
            size="65"
            :style="{
              marginBottom: '50px',
              marginTop: '60px',
              marginLeft: '0px',
            }"
            >mdi-cart</v-icon
          >
        </v-btn>
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
      </div>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card
            class="rounded-0"
            max-width="100%"
            :style="{ marginRight: '0px' }"
          >
            <v-img
              :src="productDetail.productTitleImage"
              height="600px"
              :alt="productDetail.name"
              :style="{ marginBottom: '50px', marginTop: '60px' }"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" align-content="left">
          <v-simple-table
            :style="{
              marginBottom: '50px',
              marginTop: '60px',
              marginLeft: '0px',
            }"
          >
            <tbody :style="{ marginBottom: '70px' }">
              <tr>
                <td>
                  <h1>{{ productDetail.name }}</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>{{ productDetail.price }}원</h2>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>중량</td>
                  <td>{{ productDetail.weight }}</td>
                </tr>
                <tr>
                  <td>원산지</td>
                  <td>{{ productDetail.origin }}</td>
                </tr>
                <tr>
                  <td>유통기한</td>
                  <td>{{ productDetail.shelfLife }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <br />
          <br /><br />
          <v-btn
            depressed
            elevation="2"
            color="red"
            class="rounded-0"
            dark
            x-large
            @click="moveToMarket()"
            :style="{ marginRight: '30px' }"
            >상품보기</v-btn
          >
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                elevation="2"
                color="red"
                class="rounded-0"
                dark
                x-large
                @click="addCart()"
                v-bind="attrs"
                v-on="on"
              >
                장바구니 담기
              </v-btn>
            </template>
            <v-sheet class="text-center" height="140px">
              <v-btn class="mt-6" text color="red" @click="moveToMarket()">
                쇼핑계속하기
              </v-btn>
              <v-btn class="mt-6" text color="red" @click="moveToCart()">
                장바구니로 이동
              </v-btn>
              <div class="my-3">
                장바구니로 추가되었습니다.<br />
                장바구니로 이동하시겠습니까?
              </div>
            </v-sheet>
          </v-bottom-sheet>
        </v-col>
        <v-card class="mx-auto" max-width="100%" max-height="100%">
          <v-img
            :alt="productDetail.name"
            :src="productDetail.productDetailImage"
          ></v-img>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import api from "@/api/Market";

export default {
  data: () => ({
    productDetail: [],
    sheet: false,
    fab: false,
  }),
  mounted() {
    this.getProductDetail();
  },
  methods: {
    async getProductDetail() {
      const id = this.$route.params.id;
      const result = await api.productDetail(id);
      if (result.status == 200) {
        this.productDetail = result.data;
      }
      // console.log(result.data);
    },
    async addCart() {
      const result = await api.addCart({ product: { ...this.productDetail } });
      if (result.status == 200) {
        // console.log(result.data);
      }
    },
    moveToMarket() {
      this.$router.push("/Shopping");
    },
    moveToCart() {
      this.$router.push("/Cart");
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