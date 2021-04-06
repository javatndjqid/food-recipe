<template>
  <div>
    <v-container>
      <v-btn block @click="moveToProductManagement()"> 제품 관리 </v-btn>
      <br />
      <v-btn block> 구매 목록 관리 </v-btn>
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
  },
};
</script>