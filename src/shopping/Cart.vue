<template >
  <div>
    <v-container>
      <v-col v-for="(item, i) in cartList" :key="i" :item="item">
        <v-card class="mx-auto" max-width="900" outlined>
          <v-btn rounded text @click="removeCart(item)"> X </v-btn>
          <v-list-item three-line @click="moveToDetail(item)">
            <v-list-item-content>
              <v-card-actions> </v-card-actions>
              <v-list-item-title class="headline mb-1">
                {{ item.product.name }}
                <v-list-item-title
                  >{{ item.product.price }}원</v-list-item-title
                >
              </v-list-item-title>
              <v-list-item-title>수량 : {{ item.quantity }}</v-list-item-title>
              <v-list-item-title
                >{{ item.product.price * item.quantity }}원</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="180"
              ><img
                :alt="item.product.name"
                :src="item.product.productTitleImage"
            /></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <h1>{{ nullCart }}</h1>
      <br />
      <h1>총 금액 : {{ price }}원</h1>
      <v-btn
        depressed
        elevation="2"
        color="red"
        class="rounded-0"
        dark
        x-large
        @click="moveToMarket()"
        >상품보기</v-btn
      >
      <br />
      <br />
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            elevation="2"
            color="red"
            class="rounded-0"
            dark
            x-large
            v-bind="attrs"
            v-on="on"
          >
            구매하기
          </v-btn>
        </template>
        <v-sheet class="text-center" height="140px">
          <v-btn class="mt-6" text color="red" @click="moveToMarket()">
            메인페이지로
          </v-btn>
          <v-btn
            class="mt-6"
            text
            color="red"
            @click="purchase(), (sheet = !sheet)"
          >
            구매하기
          </v-btn>
          <div class="my-3">구매하시겠습니까?</div>
        </v-sheet>
      </v-bottom-sheet>
    </v-container>
  </div>
</template>
<script>
import api from "@/api/Market";

export default {
  data: () => ({
    cartList: [],
    price: "",
    sheet: false,
    nullCart: "",
  }),
  mounted() {
    this.getCartList();
  },
  methods: {
    async getCartList() {
      const result = await api.cartList();

      if (result.status == 200) {
        this.cartList = result.data;
        var sumPrice = 0;
        for (var i = 0; i < result.data.length; i++) {
          sumPrice += result.data[i].product.price * result.data[i].quantity;
        }
        this.price = sumPrice;
        if (this.cartList.length == 0) {
          this.nullCart = "상품이 없습니다.";
        }
      }
      // console.log(sumPrice);
      // console.log(this.cartList);
    },
    async removeCart(item) {
      const result = await api.removeCart(item.id);
      if (result.status == 200) {
        this.cartList.splice(this.cartList.indexOf(item), 1);
        this.getCartList();
      }
    },
    async purchase() {
      // console.log(this.cartList);
      if (this.cartList.length != 0) {
        const result = await api.purchase();
        // console.log(result.data);
        if (result.status == 200) {
          this.cartList.splice(this.cartList);
          this.getCartList();
        }
        return;
      }
    },
    moveToDetail(item) {
      this.$router.push({
        name: "ProductDetail",
        params: { id: item.product.id },
      });
    },
    moveToMarket() {
      this.$router.push("/Shopping");
    },
  },
};
</script>
