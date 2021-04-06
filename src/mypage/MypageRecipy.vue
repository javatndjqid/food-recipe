<template>
  <v-img src="./kitchen.png" alt="배경이미지" height="”bgHeight”">
    <v-container id="user-profile-view" fluid tag="section">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card color="glay" elevation="10" filled rounded dense>
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-text-field
                      dark
                      disabled
                      label="당신의 레시피를 등록하세요"
                    />
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="recipe.recipeName"
                      style="float: left"
                      placeholder="레시피이름을 입력하세요"
                      filled
                      rounded
                      dense
                      color="red"
                      label="레시피 이름"
                      dark
                      background-color="brown"
                      outline
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
                      dark
                      background-color="brown"
                      outline
                      rounded
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
                        label="대표사진"
                      />
                    </template>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-autocomplete
                      style="float: left"
                      v-model="recipe.category"
                      solo
                      :items="categorylist"
                      color="white"
                      item-text="type"
                      label="카테고리"
                      dark
                      background-color="brown"
                      outline
                      rounded
                    ></v-autocomplete>
                  </v-col>

                  <v-col cols="12">
                    <div v-for="(input, i) in recipe.stuffRecipe" :key="i">
                      <v-col cols="8" md="5" style="float: left">
                        <v-combobox
                          hide-no-data
                          v-model="input.stuffName"
                          solo
                          :items="stuffs"
                          label="재료명"
                          dark
                          background-color="brown"
                          return-object
                        ></v-combobox>
                      </v-col>
                      <v-col cols="4" md="5" style="float: left">
                        <v-text-field
                          dark
                          solo
                          label="양"
                          v-model="input.quantity"
                          clearable
                          background-color="brown"
                          outline
                        />
                      </v-col>
                    </div>
                  </v-col>
                  <v-col justify-center>
                    <v-btn
                      @click="addstuffslot()"
                      text
                      color="success"
                      elevation="15"
                      dark
                      >재료<v-icon right>mdi-plus</v-icon></v-btn
                    >

                    <v-btn
                      @click="delstuffsslot(i)"
                      text
                      color="error"
                      elevation="15"
                      dark
                      >재료<v-icon right>mdi-minus</v-icon></v-btn
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-card>
                      <v-col cols="10" md="10" style="float: left">
                        <div
                          v-for="(item, i) in recipe.recipeProcedure"
                          :key="i"
                        >
                          <v-text-field
                            dark
                            v-model="item.recipeProcedure"
                            solo
                            color="purple"
                            label="조리순서"
                            clearable
                            background-color="brown"
                            outline
                          />
                        </div>
                      </v-col>
                    </v-card>
                    <v-card>
                      <v-col cols="2" md="2" style="float: left">
                        <div v-for="(item, i) in file.recipeProcedure" :key="i">
                          <template>
                            <v-file-input
                              v-model="item.recipeProcedureImage"
                              accept="image/*"
                              prepend-icon="mdi-camera"
                              label="사진첨부"
                            />
                          </template>
                        </div>
                      </v-col>
                    </v-card>
                  </v-col>
                  <v-col cols="12" justify="center">
                    <v-btn
                      @click="addproceduresslot()"
                      text
                      color="success"
                      elevation="15"
                    >
                      조리순서<v-icon right>mdi-plus</v-icon></v-btn
                    >

                    <v-btn
                      @click="delproceduresslot(i)"
                      text
                      color="error"
                      elevation="15"
                    >
                      조리순서<v-icon right>mdi-minus</v-icon></v-btn
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="recipe.tip"
                      no-resize
                      rows="5"
                      solo
                      rounded
                      color="purple"
                      label="조리팁"
                      dark
                      background-color="brown"
                      outline
                    />
                  </v-col>

                  <v-col cols="12" class="text-right">
                    <v-btn @click="addData()" dark large color="brown">
                      <v-icon dark> mdi-plus </v-icon>
                      레시피등록
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container></v-img
  >
</template>

<script>
import api from "@/api/Mypage";

export default {
  props: {
    multiple: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile.data;
    }
  },
  data: () => ({
    alert: false,
    hasSaved: false,
    isEditing: null,
    model: null,
    recipe: {
      // userId: {userId:this.profile.id} ,
      image:
        "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif",
      tip: "",
      explanation: "",
      recipeName: "",
      // imageSmall: [],

      stuffRecipe: [{ quantity: "", stuffName: "" }],
      recipeProcedure: [{ recipeProcedure: "", recipeProcedureImage: "" }],
      category: ""
    },
    categorylist: [],
    // stuffs: [],
    files: [],
    stuffs: [],
    file: { recipeProcedure: [{ recipeProcedureImage: "" }] },

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
    this.$store.dispatch("profile/setProfile");
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
      this.file.recipeProcedure.push({ recipeProcedureImage: "" });
      this.recipe.recipeProcedure.push({ recipeProcedure: "" });
    },
    delstuffsslot(i) {
      this.recipe.stuffRecipe.splice(this.recipe.stuffRecipe.indexOf(i), 1);
    },
    delproceduresslot(i) {
      this.recipe.recipeProcedure.splice(
        this.recipe.recipeProcedure.indexOf(i),
        1
      );
      this.file.recipeProcedure.splice(this.file.recipeProcedure.indexOf(i), 1);
    },

    async addData() {
      this.recipe.userId = this.profile.userId;
      const recipedata = this.recipe;

      console.log(recipedata);

      const result = await api.postrecipelist(recipedata);
      if (result.status == 200) {
        const newdata = result.data;
        newdata.files = [];
        if (this.files && this.files.length > 0) {
          for (let file of this.files) {
            const form = new FormData();
            form.append("data", file);
            const result = await api.uploadFile(newdata.recipeId, form);
            newdata.files.push({
              ...result.data
            });
          }
        }
        result.data.recipeProcedure.forEach((recipe, index) => {
          const form = new FormData();
          form.append("data",this.file.recipeProcedure[index].recipeProcedureImage);
          api.uploadFile2(recipe.id, form);
        })
        //  console.log(this.file.recipeProcedure);
        // for(const procedure of result.data.recipeProcedure){
        //   const form = new FormData();
        //   form.append("data2", this.file.recipeProcedure.recipeProcedureImage);
        //   api.uploadFile2(procedure.id, form )
        // }

        //recipeProcedureImage

       
      } this.$router.push("/Mypage");
    },

    async getRecipeData() {
      const result = await api.stufflist();
      //  console.log(result.data[0].stuffName);

      for (let i = 0; i < result.data.length; i++) {
        this.stuffs.push(result.data[i].stuffName);
      }
      //   console.log(this.stuffs);
    },
    async getCategoryData() {
      const result = await api.categorylist();
      this.categorylist = result.data;
    }
  }
};
</script>
