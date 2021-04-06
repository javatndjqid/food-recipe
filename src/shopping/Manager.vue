<template>
  <div>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      label="제품명"
      hide-no-data
      hide-details
      solo-inverted
      v-model="newProduct.name"
    ></v-text-field>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      label="가격"
      v-model="newProduct.price"
    ></v-text-field>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      label="용량"
      v-model="newProduct.weight"
    ></v-text-field>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      label="원산지"
      v-model="newProduct.origin"
    ></v-text-field>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      label="유통기한"
      v-model="newProduct.shelfLife"
    ></v-text-field>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      label="사진"
      v-model="newProduct.productTitleImage"
    ></v-text-field>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      label="상세 사진"
      v-model="newProduct.productDetailImage"
    ></v-text-field>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      label="재료"
      v-model="newProduct.stuff"
    ></v-text-field>
    <v-text-field
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      solo-inverted
      label="카테고리"
      v-model="newProduct.category"
    ></v-text-field>
    <v-btn text icon color="red" dark style="margin-left: 900px">
      <v-icon
        size="65"
        :style="{ marginBottom: '0px', marginTop: '70px' }"
        @click="addProduct()"
        >mdi-shield-key</v-icon
      >
    </v-btn>
  </div>
</template>
<script>
import api from "@/api/Market";
export default {
  data: () => ({
    newProduct: {
      name: "",
      price: "",
      weight: "",
      origin: "",
      shelfLife: "",
      productTitleImage: "",
      productDetailImage: "",
      stuff: "",
      category: "",
    },
  }),

  methods: {
    async addProduct() {
      const product = this.newProduct;
      const result = await api.addProduct(product);
      if (result.status == 200) {
        console.log("추가완료");
      }
      this.newProduct = "";
    },
  },
};
</script>