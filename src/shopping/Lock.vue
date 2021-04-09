<template>
  <div>
    <v-container>
      <v-text-field
        :type="show1 ? 'text' : 'password'"
        label="비밀번호"
        :style="{ width: '800px' }"
        outlined
        rounded
        clear-icon="red"
        color="red"
        v-model="password"
        @keyup.enter="check()"
      ></v-text-field>
      <v-btn @click="check()" text icon color="red" dark>
        <v-icon size="65">mdi-lock-open</v-icon>
      </v-btn>
      <br />
      <br />
      <h1>{{ hint }}</h1>
    </v-container>
  </div>
</template>
<script>
//import api from "@/api/Market";
export default {
  data: () => ({
    password: "",
    hint: "",
  }),

  methods: {
    moveToProductManagement() {
      this.$router.push("/Shopping/ProductManagement");
    },
    moveToOrderList() {
      this.$router.push("/Shopping/OrderList");
    },
    moveToManager() {
      this.$router.push("/Shopping/Manager");
    },
    check() {
      const ans = this.password;
      if (ans == 1111) {
        this.moveToManager();
      } else {
        this.hint = "❌비밀번호가 일치하지 않습니다.❌";
        // console.log("비밀번호 불일치");
      }
    },
  },
};
</script>