<template>
  <v-container>
    <v-row>
      <v-col cols="10"  md="8"
            lg="5">
        <template>
          <v-card style="height: 700px" class="overflow-y-auto">
                <v-data-table :headers="recipyHeaders" :items="list" :items-per-page="12">
                  <template v-slot:item.recipyImage="{ item }">
                    <div>
                      <v-img :src="item.recipyImage" :alt="item.name" height="40px" width="50px"></v-img>
                    </div>
                  </template>
                </v-data-table>
          </v-card>   
            <v-row cols="12" justify="end">
              <v-btn color="secondary" @click="navigate()" >
                   <v-icon left> mdi-pencil</v-icon>레시피 추가
              </v-btn>  
            </v-row>     
        </template>
      </v-col>





      <v-col cols="10"  md="8" lg="5">
        <template>
          <v-card style="max-height: 350px" class="overflow-y-auto">         
                <v-data-table :headers="MarketHeaders" :items="list" :items-per-page="5">
                  <template v-slot:item.recipyImage="{ item }">
                    <div class="p-2">
                      <v-img :src="item.recipyImage" :alt="item.name" height="40px" width="50px"></v-img>
                    </div>
                  </template>
                </v-data-table>
          </v-card>      
        </template>
        <template>
          <v-card style="max-height: 350px" class="overflow-y-auto">
                <v-data-table :headers="ClassHeaders" :items="list" :items-per-page="5">
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
                        chul2153
                      </th>
                    </tr>
                    <tr>
                      <th class="text-center">
                          이름
                      </th>
                      <th class="text-center">
                          김철수
                      </th>
                    </tr>
                    <tr>
                      <th class="text-center">
                          E-mail
                      </th>
                      <th class="text-center">
                        chul2153@gmail.com
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
  export default {
    data: () => ({
      recipyHeaders: [
          {text: 'no', align: 'start',value: 'no'},
          { text: '레시피사진', value: 'recipyImage', sortable: false, },
          { text: '레시피목록', value: 'recipyName', sortable: false, }, 
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
      list: [
        {no:1,recipyName:'어쩌구 볶음', recipyImage: require('./recipy1.jpg') },
        {no:2,recipyName:'저쩌구 볶음', recipyImage: require('./recipy2.jpg') },
        {no:3,recipyName:'어쩌구 볶음', recipyImage: require('./recipy3.jpg') },
        {no:4,recipyName:'어쩌구 볶음', recipyImage: require('./recipy1.jpg') },
        {no:5,recipyName:'저쩌구 볶음', recipyImage: require('./recipy2.jpg') },
        {no:6,recipyName:'어쩌구 볶음', recipyImage: require('./recipy3.jpg') },
        {no:7,recipyName:'어쩌구 볶음', recipyImage: require('./recipy1.jpg') },
        {no:8,recipyName:'저쩌구 볶음', recipyImage: require('./recipy2.jpg') },
        {no:9,recipyName:'어쩌구 볶음', recipyImage: require('./recipy3.jpg') },
        {no:10,recipyName:'어쩌구 볶음', recipyImage: require('./recipy1.jpg') },
        {no:11,recipyName:'저쩌구 볶음', recipyImage: require('./recipy2.jpg') },
        {no:12,recipyName:'어쩌구 볶음', recipyImage: require('./recipy3.jpg') },
        {no:13,recipyName:'어쩌구 볶음', recipyImage: require('./recipy1.jpg') },
        {no:14,recipyName:'저쩌구 볶음', recipyImage: require('./recipy2.jpg') },
        {no:15,recipyName:'어쩌구 볶음', recipyImage: require('./recipy3.jpg') },
        {no:16,recipyName:'어쩌구 볶음', recipyImage: require('./recipy1.jpg') },
        {no:17,recipyName:'저쩌구 볶음', recipyImage: require('./recipy2.jpg') },
        {no:18,recipyName:'어쩌구 볶음', recipyImage: require('./recipy3.jpg') },
        {no:19,recipyName:'어쩌구 볶음', recipyImage: require('./recipy1.jpg') },
        {no:20,recipyName:'저쩌구 볶음', recipyImage: require('./recipy2.jpg') },
        {no:21,recipyName:'어쩌구 볶음', recipyImage: require('./recipy3.jpg') },



      ],   
      my:[
      ] 
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
      navigateTo(item) {
        /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
        // 현재 경로와 다르면
        if(this.$route.path != item.path){
          // 라우터에 경로 추가
          this.$router.push(item.path);
        }
      },
       navigate() {
          this.$router.push('/MypageRecipy');

      },

  }}
</script>
