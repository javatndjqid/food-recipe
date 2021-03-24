<template>
  <v-container id="user-profile-view" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <material-card color="primary" icon="mdi-account-outline">
          <template #title>
            Edit Profile —
            <small class="text-body-1">레시피를 등록하세요</small>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8">
                  <v-text-field disabled label="당신의 레시피를 등록하세요" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="recipe.recipeName"
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
                <v-col cols="12" md="2">
                  <v-img max-height="150" max-width="250"></v-img>
                  <template>
                    <v-text-field
                      v-model="recipe.imageSmall"
                      prepend-icon="mdi-camera"
                      label="대표사진URL"
                    ></v-text-field>
                  </template>
                </v-col>

                <v-col cols="12" md="4">
                  <v-autocomplete
                    style="float:left;"
                    v-model="recipe.category.type"
                    solo
                    :items="category1"
                    :filter="customFilter"
                    color="white"
                    item-text="name"
                    label="카테고리"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12">
                  <div v-for="(input, i) in recipe.stuffRecipe" :key="i">
                    <v-col cols="8" md="5" style="float:left;">
                      <v-text-field
                        solo
                        label="재료"
                        v-model="recipe.stuffRecipe.stuffName"
                        clearable
                      />
                    </v-col>
                    <v-col cols="4" md="5" style="float:left;">
                      <v-text-field
                        solo
                        label="양"
                        v-model="recipe.stuffRecipe.quantity"
                        clearable
                      />
                    </v-col>
                  </div>
                </v-col>
                <v-btn @click="addstuffslot()" text color="success"
                  >재료<v-icon right>mdi-plus</v-icon></v-btn
                >
                <v-btn @click="delstuffsslot(i)" text color="error"
                  >재료<v-icon right>mdi-minus</v-icon></v-btn
                >

                <v-col cols="12">
                  <div v-for="(item, i) in recipe.recipeProcedure" :key="i">
                    <v-col cols="12" md="10" style="float:left;">
                      <v-text-field
                        v-model="recipe.recipeProcedure.recipeProcedure"
                        solo
                        color="purple"
                        label="조리순서"
                        clearable
                      />
                    </v-col>
                    <v-col cols="12" md="2" style="float:left;">
                      <template>
                        <v-text-field
                          v-model="recipe.recipeProcedure.recipeProcedureImage"
                          prepend-icon="mdi-camera"
                          label="사진첨부URL"
                        ></v-text-field>
                      </template>
                      <!-- <template>
                          <v-text-field
                              v-model="recipe.recipeProcedure.recipeProcedureImage"
                              accept="image/*"
                              prepend-icon="mdi-camera"
                              label="사진첨부"></v-text-field>
                        </template> -->
                    </v-col>
                  </div>
                </v-col>
                <v-btn @click="addproceduresslot()" text color="success">
                  조리순서<v-icon right>mdi-plus</v-icon></v-btn
                >
                <v-btn @click="delproceduresslot(i)" text color="error">
                  조리순서<v-icon right>mdi-minus</v-icon></v-btn
                >
                <v-col cols="12">
                  <v-textarea
                    no-resize
                    rows="5"
                    solo
                    color="purple"
                    label="조리팁"
                  />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn
                    @click="addData()"
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
import api from "@/api/Mypage";

export default {
  data: () => ({
    hasSaved: false,
    isEditing: null,
    model: null,
    recipe: {
      recipeName: "",
      imageSmall: "",
      userId: 1,
      stuffRecipe: [{ quantity: "", stuffName: "" }],
      recipeProcedure: [
        { recipeOrder: "", recipeProcedure: "", recipeProcedureImage: "" }
      ],
      category: [{ type: "" }]
    },
    category1: [
      { name: "끓이기", id: 1 },
      { name: "찌기", id: 2 },
      { name: "튀기기", id: 3 },
      { name: "굽기", id: 4 },
      { name: "기타", id: 5 }
    ],

    drawer: false, // drawer의 기본 값
    selectedItem: 0,
    items: [
      { text: "내정보", icon: "mdi-account-search-outline", path: "/Mypage" },
      {
        text: "레시피등록",
        icon: "mdi-book-open-page-variant",
        path: "/MypageRecipy"
      }
    ]
  }),
  methods: {
    navigateTo(item) {
      /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
      // 현재 경로와 다르면
      if (this.$route.path != item.path) {
        // 라우터에 경로 추가
        this.$router.push(item.path);
      }
    },
    addstuffslot() {
      this.recipe.stuffRecipe.push({ stuffName: "" });
    },
    addproceduresslot() {
      this.recipe.recipeProcedure.push({ quantity: "" });
    },
    delstuffsslot(i) {
      this.recipe.stuffRecipe.splice(this.recipe.stuffRecipe.indexOf(i), 1);
    },
    delproceduresslot(i) {
      this.recipe.recipeProcedure.splice(
        this.recipe.recipeProcedure.indexOf(i),
        1
      );
    },
    async addData() {
      const recipedata = this.recipe;
      const result = await api.postrecipelist(recipedata);
      if (result.status == 200) {
        this.recipe.unshift(result.data);
      }
      this.$router.push("/Mypage");
    }
  }
};
</script>
