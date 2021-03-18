<template>
  <div>
    <v-app>
      <v-toolbar
        dark
        color="teal"
      >
        <!-- <v-toolbar-title>State selection</v-toolbar-title> -->
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="What state are you from?"
          solo-inverted
        ></v-autocomplete>
        <v-btn icon >
          <v-icon size="40" :style="{marginRight: '10px'}">mdi-card-search</v-icon>
        </v-btn>
      </v-toolbar> 
      <div class="text-center">
        <v-chip
          v-if="chip1"
          class="ma-2"
          close
          @click:close="chip1 = false"
        >
          Closable
        </v-chip>
      </div>     

      <v-row :style="{marginTop: '20px', marginBottom:'-50px'}">
        <v-expansion-panels popout>
          <v-expansion-panel>
            <v-expansion-panel-header v-slot="{ open }">
              <v-row no-gutters>
                <v-col cols="4">
                  카테고리
                </v-col>
                <v-col
                  cols="8"
                  class="text--secondary"
                >
                  <v-fade-transition leave-absolute>
                    <span
                      v-if="open"
                      key="0"
                    />
                  </v-fade-transition>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card-actions>                
                <v-btn
                  text
                  color="secondary"
                  v-for="(item,i) in category"
                  :key="i"                  
                >
                  {{item.name}}
                </v-btn>                
              </v-card-actions>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
      
      <v-main>
        <v-container>
          <v-row>
            <v-col
              v-for="(item,n) in 24"
              :key="n"
              cols="3"
            >
              <v-card 
                class="mx-auto"
                max-width="344"
                @click="navigateTo(item)"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                ></v-img>

                <v-card-title>
                  Top western road trips
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="10"
      :total-visible="9"
    ></v-pagination>
  </div>
  </div>
  
  
</template>
<script>
export default {
  data: ()=>({
    loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],  
        // recipeImage: 
        category:[
            {name:'국',status: false},
            {name:'탕',status: false},
            {name:'찌개',status: false},
            {name:'구이',status: false},
            {name:'볶음',status: false},
          ],
        chip1: true,
        // chip2: true,
        // chip3: true,
        // chip4: true,
        page: 1,
        move:[
          {text:"SearchDetail",path: '/SearchDetail'}
        ]
  }),
  watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
      navigateTo(item){
        console.log(item)
        this.$router.push('/SearchDetail');
        
      },
    },

}
</script>

