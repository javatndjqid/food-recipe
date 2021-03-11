<template>

 <v-navigation-drawer absolute> 
    <v-list>
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in items" :key="i" @click="navigateTo(item)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  

</template>


<script>
  export default {
    data: () => ({
      drawer: false, // drawer의 기본 값
      selectedItem: 0,
      items: [
        /* https://cdn.materialdesignicons.com/5.4.55/ */
        { text: '내정보', icon: 'mdi-account-search-outline', path: '/' },
        { text: '레시피등록', icon: 'mdi-book-open-page-variant', path: '/' },
        { text: '구독내역', icon: 'mdi-filmstrip', path: '/' },
        { text: '구매내역', icon: 'mdi-cart', path: '/' },
      ],      
    }),
    methods: {
      navigateTo(item) {
        /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
        // 현재 경로와 다르면
        if(this.$route.path != item.path){
          // 라우터에 경로 추가
          this.$router.push(item.path);
        }
      },

  }}
</script>
