<template>
<v-cols >
  <v-col cols="6" style="margin-left: auto; margin-right: auto;">
  <v-card
    class="mx-auto"        
    style="padding:20px"
  >  
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      
      
    ></v-img>

    <div style="marginTop:5px;display:flex;float:right;">
      <v-avatar style="flex:1"><v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/></v-avatar>
      <v-card-text style="flex:20">유저 아이디</v-card-text>
    </div>
    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-expand-transition>
      <div>
        
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  <v-card style="marginTop:30px;">
    
    <v-card-title>재료</v-card-title>
    <v-divider></v-divider>
    
    <v-list-item>
      <v-list-item-title v-for="(item,i) in stuffs" :key="i">{{item.stuff}} {{item.quentity}}</v-list-item-title>
    </v-list-item>
  </v-card>

  <v-card style="marginTop:30px;">
    <v-list>
      <v-list-item v-for="(item,i) in recipes" :key="i">
        <v-list-item-action>{{i+1}}</v-list-item-action>
        <v-list-item-action-text style="font-size:15px" >{{item.text}}
        </v-list-item-action-text>        
        <div style="float:right;marginLeft:10px">
          <v-list-item-action><v-img :src="item.image" min-width="200px" min-height="100px"/></v-list-item-action>
        </div>
      </v-list-item>      
    </v-list>
  </v-card>
  <v-card style="marginTop:30px;">
    
    <v-card-title>판매 재료</v-card-title>
    <v-divider></v-divider>    
    <v-list-item>
      <v-list-item-title v-for="(item,i) in product" :key="i">{{item.title}}</v-list-item-title>
    </v-list-item>
  </v-card>
  <v-card style="marginTop:30px;">
    
    <v-card-title>강의</v-card-title>
    <v-divider></v-divider>    
    <v-list-item>
      <v-list-item-title v-for="(item,i) in lecture" :key="i">{{item.title}}</v-list-item-title>
    </v-list-item>
  </v-card>
  </v-col>
</v-cols>
</template>
<script>
export default {
  data:()=>({
    show:false,
    stuffs:[
      {stuff:"잡곡밥",quentity:"140g"},
      {stuff:"곰취",quentity:"30g"},
      {stuff:"소금",quentity:"약간"},
      {stuff:"조갯살",quentity:"10g"},
      {stuff:"새우살",quentity:"10g"},
      {stuff:"잡곡밥",quentity:"140g"},
      {stuff:"곰취",quentity:"30g"},
      {stuff:"소금",quentity:"약간"},
      {stuff:"조갯살",quentity:"10g"},
      {stuff:"새우살",quentity:"10g"},
      {stuff:"잡곡밥",quentity:"140g"},
      {stuff:"곰취",quentity:"30g"},
      {stuff:"소금",quentity:"약간"},
      {stuff:"조갯살",quentity:"10g"},
      {stuff:"새우살",quentity:"10g"},
      {stuff:"잡곡밥",quentity:"140g"},
      {stuff:"곰취",quentity:"30g"},
      {stuff:"소금",quentity:"약간"},
      {stuff:"조갯살",quentity:"10g"},
      {stuff:"새우살",quentity:"10g"},
    ],
    recipes:[
      {text:"고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.",image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00017_1.png"},
      {text:"찜기에 고구마를 넣고 20~30분 정도 삶아 주고, 블렌더나 체를 이용하여 잘 으깨어 곱게 만든다.",image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00017_2.png"},
      {text:"고구마와 물을 섞어 끓이면서 찹쌀가루로 농도를 맞추고 설탕을 넣어 맛을 낸다.",image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00017_3.png"},
    ],
    product:[
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},   
  ],
  lecture:[
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
    {title:"죽", image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png"},
  ]
  }),
  
}
</script>