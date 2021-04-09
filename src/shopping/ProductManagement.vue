<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6" md="4" lg="4">
          <v-container>
            <v-card flat align="center">
              <v-card-text>
                <p class="display-1 text--primary">제품 추가</p>
              </v-card-text>
              <v-text-field
                label="제품명"
                :style="{ width: '800px' }"
                outlined
                rounded
                clear-icon="red"
                color="red"
                v-model="newProduct.name"
              ></v-text-field>
              <v-text-field
                outlined
                rounded
                :style="{ width: '800px' }"
                color="red"
                label="가격"
                v-model="newProduct.price"
              ></v-text-field>
              <v-text-field
                outlined
                rounded
                :style="{ width: '800px' }"
                color="red"
                label="용량"
                v-model="newProduct.weight"
              ></v-text-field>
              <v-text-field
                outlined
                rounded
                :style="{ width: '800px' }"
                color="red"
                label="원산지"
                v-model="newProduct.origin"
              ></v-text-field>
              <v-select
                outlined
                rounded
                :style="{ width: '800px' }"
                color="red"
                :items="shelfLife"
                label="유통기한"
                v-model="newProduct.shelfLife"
              ></v-select>
              <v-text-field
                color="red"
                :style="{ width: '800px' }"
                outlined
                rounded
                label="사진"
                v-model="newProduct.productTitleImage"
              ></v-text-field>
              <v-text-field
                :style="{ width: '800px' }"
                color="red"
                outlined
                rounded
                label="상세 사진"
                v-model="newProduct.productDetailImage"
              ></v-text-field>
              <v-text-field
                :style="{ width: '800px' }"
                color="red"
                outlined
                rounded
                label="재료"
                v-model="newProduct.stuff"
              ></v-text-field>
              <v-select
                outlined
                rounded
                :style="{ width: '800px' }"
                color="red"
                :items="categorys"
                label="카테고리"
                v-model="newProduct.category"
              ></v-select>
              <br />
              <v-btn text icon color="red" dark>
                <v-icon size="65" @click="addProduct()"
                  >mdi-plus-circle-outline</v-icon
                >
              </v-btn>
            </v-card>
          </v-container>
        </v-col>
        <v-col cols="6" md="8" lg="8">
          <v-container
            ><v-toolbar color="red" dark>
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
            <v-row justify="center">
              <v-btn
                depressed
                color="red"
                dark
                small
                :style="{ marginLeft: '0px' }"
                @click="getProductList()"
              >
                전체보기
              </v-btn>
              <v-btn
                depressed
                color="red"
                dark
                small
                :style="{ marginLeft: '10px' }"
                @click="findByCategory(1)"
              >
                채소
              </v-btn>
              <v-btn
                depressed
                color="red"
                dark
                small
                :style="{ marginLeft: '10px' }"
                @click="findByCategory(2)"
              >
                과일·견과·쌀
              </v-btn>
              <v-btn
                depressed
                color="red"
                dark
                small
                :style="{ marginLeft: '10px' }"
                @click="findByCategory(3)"
              >
                수산·해산·건어물
              </v-btn>
              <v-btn
                depressed
                color="red"
                dark
                small
                :style="{ marginLeft: '10px' }"
                @click="findByCategory(4)"
              >
                정육·계란
              </v-btn>
              <v-btn
                depressed
                color="red"
                dark
                small
                :style="{ marginLeft: '10px' }"
                @click="findByCategory(5)"
              >
                면·양념·오일
              </v-btn>
            </v-row>
            <v-row justify="center" :style="{ marginTop: '10px' }">
              <v-col cols="6" md="2" v-for="(item, i) in productList" :key="i">
                <v-card flat style="cursor: pointer" class="rounded-0">
                  <v-btn rounded text @click="removeProduct(item)"> X </v-btn>
                  <v-img
                    width="150px"
                    height="200px"
                    :alt="item.name"
                    :src="item.productTitleImage"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <v-card-subtitle
                    ><div>
                      {{ item.name }}
                    </div></v-card-subtitle
                  >
                </v-card>
              </v-col>
            </v-row></v-container
          >
        </v-col>
      </v-row>
    </v-container>
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
    stuff: "",
    productList: [],
    category: {
      a: "채소",
      b: "과일",
      c: "수산·해산·건어물",
      d: "정육·계란",
      e: "면·양념·오일",
    },
    categorys: [
      "채소",
      "과일",
      "수산·해산·건어물",
      "정육·계란",
      "면·양념·오일",
    ],
    shelfLife: [
      "재료 별도 표기",
      "농산물로 별도의 유통기한은 없으나 가급적 빠르게 드시기 바랍니다.",
      "별도의 유통기한은 없으나 가급적 빠르게 드시기 바랍니다.",
      "상품의 특성상 빠른 시일 내에 섭취하기를 권장드리고, 수령 후 2일 후부터는 가열조리해 드시기를 바랍니다.",
    ],
  }),
  mounted() {
    this.getProductList();
  },

  methods: {
    async addProduct() {
      const product = this.newProduct;
      const result = await api.addProduct(product);
      if (result.status == 200) {
        // console.log("추가완료");
      }
      this.getProductList();
      this.newProduct = "";
    },
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
    async removeProduct(item) {
      const result = await api.removeProduct(item.id);
      if (result.status == 200) {
        this.productList.splice(this.productList.indexOf(item), 1);
        this.getProductList();
      }
    },
    moveToManager() {
      this.$router.push("/Shopping/Manager");
    },
  },
};
</script>