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
          <v-icon
            size="65"
            :style="{
              marginBottom: '50px',
              marginTop: '60px',
              marginleft: '0px',
            }"
            >mdi-cart</v-icon
          >
        </v-btn>
      </div>
      <v-row justify="center">
        <v-col cols="6" md="6">
          <v-card class="mx-auto" max-width="450px">
            <v-img
              :src="productDetail.productTitleImage"
              width="450px"
              height="600px"
              :style="{ marginBottom: '50px', marginTop: '60px' }"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6" md="6" align-content="left">
          <v-simple-table :style="{ marginBottom: '50px', marginTop: '60px' }">
            <tbody :style="{ marginBottom: '50px' }">
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
        </v-col>
        <v-card class="mx-auto" max-width="450px"> </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import api from "@/api/Market";

export default {
  data: () => ({
    productDetail: [],
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
      console.log(result.data);
    },

    moveToCart() {
      this.$router.push("/Cart");
    },
  },
};
</script>