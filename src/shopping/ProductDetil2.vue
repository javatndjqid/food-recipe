<template>
  <div>
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
      <v-row justify="center">
        <v-col cols="6" md="6">
          <v-card class="mx-auto" max-width="450px">
            <v-img
              src="http://img-cf.kurly.com/shop/data/goods/1571711809869l0.jpg"
              width="450px"
              height="600px"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" align-content="left">
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="item in productList" :key="item.name">
                  <td>{{ item.title }}</td>
                  <td>{{ item.name }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    // productList[0].id
    // productList[0].name

    productList: [
      {
        title: "제품명",
        name: "무농약 손질 잎몸 대파",
      },
      {
        title: "가격",
        name: "4800",
      },
      {
        title: "중량",
        name: "200g",
      },
      {
        title: "원산지",
        name: "국산",
      },
      {
        title: "유통기한",
        name:
          "농산물로 별도의 유통기한은 없으나 가급적 빠르게 드시기 바랍니다.",
      },
      {
        title: "원산지",
        name: "국산",
      },
    ],
  }),
  methods: {
    moveToCart() {
      this.$router.push("/Shopping/Cart");
    },
  },
};
</script>