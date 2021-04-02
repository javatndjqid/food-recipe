<style>
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  max-width: 50%;
}

.Aligner-item--top {
  align-self: flex-start;
}
</style>
<template>
  <v-cols>
    <v-col cols="4" style="margin-left: auto; margin-right: auto">
      <v-card class="mx-auto" style="padding: 20px">
        <v-img
          src="http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_1.png"
          max-height="400px"
          alt="Main Image"
        ></v-img>
        <div style="margin-top: 5px; display: flex; float: right">
          <v-avatar style="flex: 1"
            ><v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              alt="Avatar Image"
          /></v-avatar>
          <v-card-text style="flex: 20">유저 아이디</v-card-text>
        </div>
        <v-card-title> 칼륨 듬뿍 고구마죽 </v-card-title>
        <v-card-subtitle> 요리 간단 소개 </v-card-subtitle>
        <v-expand-transition>
          <div>
            <v-divider></v-divider>
            <v-card-text> 요리 상세 소개 </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-card style="margin-top: 30px">
        <v-card-title>재료</v-card-title>
        <v-divider></v-divider>
        <!-- <v-list-item>
          <v-list-item-title v-for="(item, i) in stuffs" :key="i"
            >{{ item.stuff }} {{ item.quentity }}</v-list-item-title
          >
        </v-list-item> -->
        <v-list>
          <v-list-item>
            <v-list-item-action
              style="width: 50%"
              class="Aligner-item Aligner-item--top"
            >
              <v-simple-table dense style="width: 100%">
                <template v-slot:default>
                  <thead style="background-color: blue">
                    <tr>
                      <th class="text-left white--text">Stuff</th>
                      <th class="text-left white--text">Quentity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in stuff1" :key="i">
                      <td>{{ item.stuff }}</td>
                      <td>{{ item.quentity }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-list-item-action>
            <v-list-item-action
              style="width: 50%"
              class="Aligner-item Aligner-item--top"
            >
              <v-simple-table dense style="width: 100%">
                <template v-slot:default>
                  <thead style="background-color: blue">
                    <tr>
                      <th class="text-left white--text">Stuff</th>
                      <th class="text-left white--text">Quentity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in stuff2" :key="i">
                      <td>{{ item.stuff }}</td>
                      <td>{{ item.quentity }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-list-item-action>
            <v-list-item-action
              style="width: 50%"
              class="Aligner-item Aligner-item--top"
            >
              <v-simple-table dense style="width: 100%">
                <template v-slot:default>
                  <thead style="background-color: blue">
                    <tr>
                      <th class="text-left white--text">Stuff</th>
                      <th class="text-left white--text">Quentity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in stuff3" :key="i">
                      <td>{{ item.stuff }}</td>
                      <td>{{ item.quentity }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card style="margin-top: 30px">
        <v-list>
          <v-list-item v-for="(item, i) in recipes" :key="i">
            <v-list-item-action>{{ i + 1 }}</v-list-item-action>
            <v-list-item-action-text style="font-size: 15px"
              >{{ item.text }}
            </v-list-item-action-text>
            <div style="margin-left: auto">
              <v-list-item-action
                ><v-img
                  :src="item.image"
                  min-width="200px"
                  min-height="100px"
                  style="float: right"
                  alt="Recipe Procedure Image"
              /></v-list-item-action>
            </div>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card style="margin-top: 30px">
        <v-card-title>판매 재료</v-card-title>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title v-for="(item, i) in product" :key="i">
            <v-img
              :src="item.image"
              style="margin: 20px"
              max-width="150px"
              alt="Market Stuff Image"
            />
            <v-list-item-title
              style="text-align: center; margin: 10px; font-weight: bold"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-title>
        </v-list-item>
      </v-card>
      <v-card style="margin-top: 30px">
        <v-card-title>추천 강의</v-card-title>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title v-for="(item, i) in product" :key="i">
            <v-img
              :src="item.image"
              style="margin: 20px"
              max-width="150px"
              alt="Lecture Image"
            />
            <v-list-item-title
              style="text-align: center; margin: 10px; font-weight: bold"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-title>
        </v-list-item>
      </v-card>
    </v-col>
  </v-cols>
</template>
<script>
export default {
  data: () => ({
    show: false,
    headers: [
      { text: "재료", align: "start", value: "stuff" },
      { text: "양", value: "quentity" },
    ],
    stuffs: [
      { stuff: "잡곡밥", quentity: "140g" },
      { stuff: "곰취", quentity: "30g" },
      { stuff: "소금", quentity: "약간" },
      { stuff: "조갯살", quentity: "10g" },
      { stuff: "새우살", quentity: "10g" },
      { stuff: "잡곡밥", quentity: "140g" },
      { stuff: "곰취", quentity: "30g" },
      { stuff: "소금", quentity: "약간" },
      { stuff: "조갯살", quentity: "10g" },
      { stuff: "새우살", quentity: "10g" },
      { stuff: "잡곡밥", quentity: "140g" },
      { stuff: "곰취", quentity: "30g" },
      { stuff: "소금", quentity: "약간" },
      { stuff: "조갯살", quentity: "10g" },
      { stuff: "새우살", quentity: "10g" },
      { stuff: "잡곡밥", quentity: "140g" },
      { stuff: "곰취", quentity: "30g" },
      { stuff: "소금", quentity: "약간" },
      { stuff: "조갯살", quentity: "10g" },
      { stuff: "새우살", quentity: "10g" },
    ],
    stuff1: [],
    stuff2: [],
    stuff3: [],
    recipes: [
      {
        text:
          "고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00017_1.png",
      },
      {
        text:
          "찜기에 고구마를 넣고 20~30분 정도 삶아 주고, 블렌더나 체를 이용하여 잘 으깨어 곱게 만든다.",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00017_2.png",
      },
      {
        text:
          "고구마와 물을 섞어 끓이면서 찹쌀가루로 농도를 맞추고 설탕을 넣어 맛을 낸다.",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00017_3.png",
      },
    ],
    product: [
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
    ],
    lecture: [
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
      {
        title: "고구마 죽",
        image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_2.png",
      },
    ],
  }),
  mounted() {
    this.sliceList();
  },
  methods: {
    sliceList() {
      this.stuff1 = this.stuffs.slice(0, this.stuffs.length / 3 + 1);
      console.log("===== this.stuff1 =====");
      console.log(this.stuff1);
      this.stuff2 = this.stuffs.slice(
        this.stuffs.length / 3 + 1,
        (this.stuffs.length / 3) * 2 + 1
      );
      console.log("===== this.stuff2 =====");
      console.log(this.stuff2);
      this.stuff3 = this.stuffs.slice((this.stuffs.length / 3) * 2 + 1);
      console.log("===== this.stuff3 =====");
      console.log(this.stuff3);
    },
  },
};
</script>