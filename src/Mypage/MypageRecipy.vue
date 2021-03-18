<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <material-card
          color="primary"
          icon="mdi-account-outline"
        >
          <template #title>
            Edit Profile — <small class="text-body-1">레시피를 등록하세요</small>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="8"
                >
                  <v-text-field

                    disabled
                    label="당신의 레시피를 등록하세요"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    style="float:right;"
                    placeholder="레시피이름을 입력하세요"
                    filled
                    rounded
                    dense
                    color="purple"
                    label="레시피 이름"
                  />
                </v-col>
              <v-col cols="12" md="10">
                 <v-textarea
                    no-resize
                    rows="5"
                    solo
                    name="input-7-4"
                    color="purple"
                    label="레시피 설명"
                  />
                </v-col>
                <v-col cols="12"  md="2">
                  <v-img
                        max-height="150"
                        max-width="250"
                        
                      ></v-img>
                  <template>
                      <v-file-input
                        accept="image/*"
                        prepend-icon="mdi-camera"
                        label="대표사진"
                      ></v-file-input>
                    </template>
                </v-col>

              <v-col
                  cols="12"
                  md="4"
                >
                  <v-autocomplete style="float:left;"
                      solo  
                      :items="object.category1"
                      :filter="customFilter"
                      color="white"
                      item-text="name"
                      label="카테고리"
                    ></v-autocomplete>
              </v-col>

              <!-- <v-col
                  cols="12"
                  md="4"
                >
                   <v-autocomplete style="float:left;"
                      solo
                      :items="object.category2"
                      :filter="customFilter"
                      color="white"
                      item-text="name"
                      label="카테고리 소분류"
                    ></v-autocomplete>
              </v-col>
               -->

              <v-col cols="12">
                    <div v-for="(input, i) in object.stuffs" :key="i">
                        <v-col cols="8" md="5" style="float:left;">
                            <v-text-field solo label="재료" v-model="input.stuffs" clearable/>
                        </v-col>
                        <v-col cols="4" md="5" style="float:left;">
                            <v-text-field solo label="양" v-model="input.quantity" clearable/>
                        </v-col>
                    </div>                                         
              </v-col>
              <v-btn  @click="addstuffslot()" text color="success">재료<v-icon right>mdi-plus</v-icon></v-btn>  
              <v-btn  @click="delstuffsslot(i)" text color="error">재료<v-icon right>mdi-minus</v-icon></v-btn>


              <v-col cols="12">
                    <div v-for="(item, i) in object.procedures" :key="i">
                      <v-col cols="12"  md="10" style="float:left;">
                         <v-text-field solo v-model="item.procedures" color="purple" label="조리순서" clearable/>
                      </v-col>
                      <v-col cols="12"  md="2" style="float:left;">
                        <template>
                          <v-file-input v-model="item.procedures"
                              accept="image/*"
                              prepend-icon="mdi-camera"
                              label="사진첨부"></v-file-input>
                        </template>
                      </v-col>
                    </div>                          
              </v-col>
              <v-btn  @click="addproceduresslot()" text color="success">
                조리순서<v-icon right>mdi-plus</v-icon></v-btn>   
              <v-btn  @click="delproceduresslot(i)" text color="error">
                조리순서<v-icon right>mdi-minus</v-icon></v-btn> 




                <v-col cols="12">
                  <v-textarea
                    no-resize
                    rows="5"
                    solo
                    color="purple"
                    label="조리팁"
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                 
                      <v-btn 
                        @click="navigate()" 
                        class="mx-2"
                        fab
                        dark
                        large
                        color="purple"
                      >
                        <v-icon dark>
                          mdi-plus
                        </v-icon>
                      </v-btn>

                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>

     
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      hasSaved: false,
        isEditing: null,
        model: null,
        object:{stuffs: [
           
        ],
        procedures:[

        ],
        category1: [
          { name: '밑반찬', abbr: 'FL', id: 1 },
          { name: '메인반찬', abbr: 'GA', id: 2 },
          { name: '국/탕', abbr: 'NE', id: 3 },
          { name: '찌개', abbr: 'CA', id: 4 },
          { name: '디저트', abbr: 'NY', id: 5 },
          { name: '기타', abbr: 'NY', id: 6 },
        ],
        
        
      },
        
      drawer: false, // drawer의 기본 값
      selectedItem: 0,
      items: [
        /* https://cdn.materialdesignicons.com/5.4.55/ */
        { text: '내정보', icon: 'mdi-account-search-outline', path: '/Mypage' },
        { text: '레시피등록', icon: 'mdi-book-open-page-variant', path: '/MypageRecipy' },
   
      ],  
      // list: [
      //   {recipyName:'어쩌구 감자', recipyImage:require('/recipy1.jpg') },
      //   {recipyName:'저쩌구 김치', recipyImage:'/recipy2.jpg' },
      //   {recipyName:'어쩌구 양파', recipyImage:'/recipy3.jpg' },

      // ],    
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
      addstuffslot(){
          
      this.object.stuffs.push({stuffs:''})
    
      },
      addproceduresslot(){
          
      this.object.procedures.push({procedures:''})
    
      },
      delstuffsslot(i){
          
      this.object.stuffs.splice(this.object.stuffs.indexOf(i), 1)
    
      },
      delproceduresslot(i){
          
      this.object.procedures.splice(this.object.procedures.indexOf(i), 1)
    
      },
          navigate() {
          this.$router.push('/Mypage');

      },
 
    
  
  }}
</script>
