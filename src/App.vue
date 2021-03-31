<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="120"
        src="./assets/yum.png"
        width="100"
      />
      <v-tabs v-model="selectedItem" fixed-tabs slider-color="white">
        <v-tab v-for="(item, i) in items" :key="i" @click="navigateTo(item)">
          {{ item.text }}
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href=""
        target="_blank"
        text="Login"
      >
        <span class="mr-2">LOGIN</span>
        <v-icon></v-icon>
      </v-btn> -->

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/jjub.png"
          transition="scale-transition"
          width="90"
          @click="helloWorld()"
          style="cursor: pointer"
        />
      </div>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
  data: () => ({
    drawer: false, // drawer의 기본 값
    selectedItem: 0,
    items: [
      /* https://cdn.materialdesignicons.com/5.4.55/ */
      { text: "Home", path: "/" },
      { text: "SEARCH", path: "/Search" },
      { text: "Market", path: "/Shopping" },
      { text: "Lecture", path: "/Lecture" },
      { text: "MYPAGE", path: "/Mypage" },
    ],
  }),

  methods: {
    helloWorld() {
      console.log("Hello World!");
    },
    navigateTo(item) {
      /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
      // 현재 경로와 다르면
      if (this.$route.path != item.path) {
        // 라우터에 경로 추가
        this.$router.push(item.path);
      }
    },
  },
};
</script>
