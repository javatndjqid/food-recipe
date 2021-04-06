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
      <!-- <template>
          <v-card class="overflow-y-auto" elevation="10">
            <v-img
              class="white--text align-end"
              height="90px"
              src="https://cdn.crowdpic.net/list-thumb/thumb_l_756C27E1062B73D39C8E3E51165172E2.jpg"
            >
            </v-img>
            <v-data-table
              style="height: 250px"
              :headers="ClassHeaders"
              :items="userLectureList"
              :items-per-page="3"
            >
              <template v-slot:item.image="{ item }">
                <div>
                  <v-img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.recipeName"
                    height="40px"
                    width="50px"
                  />
                  <v-img
                    v-else
                    :src="item.recipefile[0].dataUrl"
                    :alt="item.recipeName"
                    height="40px"
                    width="50px"
                  />
                </div>
              </template>
            </v-data-table>
          </v-card>
        </template> -->

      <div style="width: 100%; text-align: right">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="80" class="mr-3" v-bind="attrs" v-on="on">
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="./assets/jjub.png"
                transition="scale-transition"
                width="90"
                style="cursor: pointer"
              />
            </v-avatar>
          </template>

          <v-card>
            <v-card-actions>
              <div class="text-center" v-if="profile.id">
                <router-link to="/profile" style="text-decoration:none;">
                  <v-btn text>
                    Profile
                  </v-btn>
                </router-link>

                <v-btn color="primary" text @click="signOut()">
                  Sign Out
                </v-btn>
              </div>
              <div class="text-center" v-else>
                <v-btn color="primary" text @click="signIn()">
                  Sign In
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view :key="$route.fullPath"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import cookie from "@/plugins/cookie";
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
      { text: "Home", path: "/", count: 0 },
      { text: "SEARCH", path: "/Search", count: 1 },
      { text: "Market", path: "/Shopping", count: 2 },
      { text: "Lecture", path: "/Lecture", count: 3 },
      { text: "MYPAGE", path: "/Mypage", count: 4 }
    ]
  }),

  mounted() {
    if (cookie.getSession()) {
      this.$store.dispatch("profile/setProfile");
    }

    this.selectItem();
    //   this.$store.dispatch("profile/setProfile");
  },
  computed: {
    profile() {
      console.log(this.$store.state.profile.data);
      return this.$store.state.profile.data;
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch("profile/signout");
      console.log(this.profile);
    },

    signIn() {
      this.$store.dispatch("profile/setProfile");
    },
    selectItem() {
      //console.log("==== route.path ====");
      // console.log(this.$route);
      this.items.forEach(item => {
        if (this.$route.path == item.path) this.selectedItem = item.count;
      });
    },

    navigateTo(item) {
      /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
      // 현재 경로와 다르면
      if (this.$route.path != item.path) {
        // 라우터에 경로 추가
        //.log(this.$route.path);
        this.$router.push(item.path);
      }
    }
  }
};
</script>
