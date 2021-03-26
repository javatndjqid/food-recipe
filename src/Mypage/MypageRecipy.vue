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
                    v-model="recipe.explanation"
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
                    <v-file-input
                      v-model="files"
                      accept="image/*"
                      prepend-icon="mdi-camera"
                      multiple
                      label="대표사진URL"
                    />
                  </template>
                </v-col>

                <v-col cols="12" md="4">
                  <v-autocomplete
                    style="float:left;"
                    v-model="recipe.category"
                    solo
                    :items="categorylist"
                    :filter="customFilter"
                    color="white"
                    item-text="type"
                    label="카테고리"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12">
                  <div v-for="(item, i) in recipe.stuffRecipe" :key="i">
                    <v-col cols="8" md="5" style="float:left;">
                      <v-combobox
                        v-model="item.stuffName"
                        :items="stuffs"
                        item-text="name"
                        label="재료명"
                        
                        solo
                        clearable
                      ></v-combobox>
                    </v-col>
                    <v-col cols="4" md="5" style="float:left;">
                      <v-text-field
                        solo
                        label="양"
                        v-model="item.quantity"
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
                        v-model="item.recipeProcedure"
                        solo
                        color="purple"
                        label="조리순서"
                        clearable
                      />
                    </v-col>
                    <v-col cols="12" md="2" style="float:left;">
                      <template>
                        <v-file-input
                          v-model="item.recipeProcedureImage"
                          accept="image/*"
                          prepend-icon="mdi-camera"
                          multiple
                          label="사진첨부"
                        />
                      </template>
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
                    v-model="recipe.tip"
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
      tip: "",
      explanation: "",
      recipeName: "",
      // imageSmall: [],
      userId: 1,
      stuffRecipe: [{ quantity: "", stuffName: "" }],
      recipeProcedure: [{ recipeProcedure: "", recipeProcedureImage: "" }],
      category: ""
    },
    categorylist: [],
    stuffs: [],
    files: [],

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
  mounted() {
    this.getRecipeData();
    this.getCategoryData();
  },
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

      console.log(recipedata);
      const result = await api.postrecipelist(recipedata);
      if (result.status == 200) {
        const newdata = result.data;
        newdata.files = []; // 파일목록 초기화

        // this.files > file-input과 바인딩 되어있음
        // 파일 객체 여러개가 저장되는 배열
        // 선택한 파일이 있으면
        if (this.files && this.files.length > 0) {
          // 파일 업로드를 하고
          for (let file of this.files) {
            const form = new FormData();
            form.append("data", file);
            const result = await api.uploadFile(newdata.recipeId, form);
            console.log(result.status); // HTTP 상태코드
            console.log(result.data); // 응답받은 데이터
            newdata.files.push({
              ...result.data
            });
          }
        }

        this.$router.push("/Mypage");
      }
    },

    async getRecipeData() {
      const result = await api.stufflist();
      this.stuffs = result.data;
    },
    async getCategoryData() {
      const result = await api.categorylist();
      this.categorylist = result.data;
    }
  }
};
</script>
