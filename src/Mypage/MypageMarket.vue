<template>
  
  <div>
    <v-row>
    <div>
      <v-col cols="12" md="12">
      
    
      <template>
              <v-navigation-drawer  cols="2"> 
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
      </v-col>
    </div>

    <div>
      <v-col cols="12" md="12">
    
      <template>
         <v-card cols="10" width="800">
      
     
                  <v-simple-table >
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">
                           사진
                          </th>
                          <th class="text-center">
                            재료목록
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item,i) in list"
                          :key=i
                        >
                          <td class="text-center"><v-img :src='item.recipyImage'/></td>
                          <td class="text-center">{{ item.recipyName }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
               
          </v-card>
          
         </template>
      </v-col>
    </div>
    </v-row>
  </div> 
</template>

<script>
  export default {
    data: () => ({
      drawer: false, // drawer의 기본 값
      selectedItem: 0,
      items: [
        /* https://cdn.materialdesignicons.com/5.4.55/ */
        { text: '내정보', icon: 'mdi-account-search-outline', path: '/Mypage' },
        { text: '레시피등록', icon: 'mdi-book-open-page-variant', path: '/MypageRecipy' },
        { text: '구독내역', icon: 'mdi-filmstrip', path: '/MypageClass' },
        { text: '구매내역', icon: 'mdi-cart', path: '/MypageMarket' },
      ],  
      list: [
        {recipyName:'어쩌구 감자', recipyImage:'/recipy1.jpg' },
        {recipyName:'저쩌구 김치', recipyImage:'/recipy2.jpg' },
        {recipyName:'어쩌구 양파', recipyImage:'/recipy3.jpg' },

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
