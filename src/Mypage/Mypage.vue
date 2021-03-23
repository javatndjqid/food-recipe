<template>
  <v-container color="primary">
    <v-row>
      <v-col cols="10"  md="8"
            lg="5">
        <template>
          <v-card style="height: 700px" class="overflow-y-auto">
                <v-data-table :headers="recipyHeaders" :items="userRecipeList" :items-per-page="12">
                  <template v-slot:item.imageSmall="{ item }">
                    <div>
                      <v-img :src="item.imageSmall" :alt="item.recipeName" height="40px" width="50px"></v-img>
                    </div>
                  </template>
                </v-data-table>
          </v-card>   
            <v-row cols="12" justify="end">
                  <v-btn @click="navigate()"
                    class="mx-2"
                    fab
                    dark
                    color="cyan"
                  >
                    <v-icon>
                      mdi-pencil
                    </v-icon>
                  <!-- </v-btn>
              <v-btn color="secondary" @click="navigate()" >
                   <v-icon left> mdi-pencil</v-icon>레시피 추가 -->
              </v-btn>  
            </v-row>     
        </template>
      </v-col>





      <v-col cols="10"  md="8" lg="5">
        <template>
          <v-card  class="overflow-y-auto">         
                <v-data-table :headers="MarketHeaders" :items="list" :items-per-page="5" style="height: 350px">
                  <template v-slot:item.recipyImage="{ item }">
                    <div class="p-2">
                      <v-img :src="item.recipyImage" :alt="item.recipeName" height="40px" width="50px"></v-img>
                    </div>
                  </template>
                </v-data-table>
          </v-card>      
        </template>
        <template>
          <v-card  class="overflow-y-auto">
                <v-data-table :headers="ClassHeaders" :items="list" :items-per-page="5" style="height: 350px">
                  <template v-slot:item.recipyImage="{ item }">
                    <div class="p-2">
                      <v-img :src="item.recipyImage" :alt="item.name" height="40px" width="50px"></v-img>
                    </div>
                  </template>
                </v-data-table>
          </v-card>   
        </template>
      </v-col>
      <v-col cols="2"  md="2" lg="2">
        <template>
          <v-card>
            <v-simple-table>
              <template v-slot:default>
                 <thead>
                    <tr>
                      <th class="text-center">
                          <v-img src='../assets/jjub.png' height="40px" width="40px"></v-img>
                      </th>
                      <th class="text-center">
                          
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="text-center">
                          유저ID
                      </th>
                      <th class="text-center">
                        쩝쩝박사
                      </th>
                    </tr>
                    <tr>
                      <th class="text-center">
                          이름
                      </th>
                      <th class="text-center">
                          오지해 찌끄래기
                      </th>
                    </tr>
                    <tr>
                      <th class="text-center">
                          E-mail
                      </th>
                      <th class="text-center">
                        쩝쩝박사@gmail.com
                      </th>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
          </v-card>      
        </template>
      </v-col> 
    </v-row>
  </v-container>
</template>

<script>
import api from '@/api/Mypage'
  export default {
    data: () => ({
      recipyHeaders: [
          {text: '레시피넘버', align: 'start', value: 'recipeId'},
          { text: '레시피사진', value: 'imageSmall', sortable: false, },
          { text: '레시피이름', value: 'recipeName', sortable: false, }, 
        ],
       ClassHeaders: [
          {text: 'no', align: 'start',value: 'no'},
          { text: '구매사진', value: 'recipyImage', sortable: false, },
          { text: '구매내역', value: 'recipyName', sortable: false, }, 
        ],  
       MarketHeaders: [
          {text: 'no', align: 'start',value: 'no'},
          { text: '강의사진', value: 'recipyImage', sortable: false, },
          { text: '구독내역', value: 'recipyName', sortable: false, }, 
        ],
      userRecipeList: [
  
      ],  
      userLectureList:[

      ],
      userPerchaseList:[

      ],
     
    }),
    computed: {
      items () {
        return Array.from({ length: this.length }, (k, v) => v + 1)
      },
      length () {
        return 10
      },
    },
    methods: {
       async navigateTo(){
      const result = await api.list();
         this.userRecipeList = result.data;
         console.log(result.data);
      }
    },
      // navigateTo(item) {
      //   /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
      //   // 현재 경로와 다르면
      //   if(this.$route.path != item.path){
      //     // 라우터에 경로 추가
      //     this.$router.push(item.path);
      //   }
      // },
       navigate() {
          this.$router.push('/MypageRecipy');

      },

  }
</script>
