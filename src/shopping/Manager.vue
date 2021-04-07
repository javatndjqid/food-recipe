<template>
  <div>
    <v-container>
      <v-btn block @click="moveToProductManagement()"> 제품 관리 </v-btn>
      <br />
      <v-btn block @click="moveToOrderList()"> 주문 현황 보기 </v-btn>
      <br />
    </v-container>
  </div>
</template>
<script>
//import api from "@/api/Market";
export default {
  data: () => ({}),

  methods: {
    moveToProductManagement() {
      this.$router.push("/ProductManagement");
    },
    moveToOrderList() {
      this.$router.push("/OrderList");
    },
  },
};
</script>