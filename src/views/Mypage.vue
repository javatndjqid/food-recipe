<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
        </v-col>
        <v-col cols="12" md="6">
          <v-card outlined elevation="2">
            <v-card-text>
              <div class="text--primary">
                <label class="title">USER ID:</label> {{profile.userId}}
              </div>
              <div class="text--primary">
                <label class="title">NAME:</label> {{profile.name}}
              </div>
              <div class="text--primary">
                <label class="title">EMAIL:</label> {{profile.email}}
              </div>
              <div class="text--primary">
                <label class="title">IMAGE:</label>
                <v-img :src="profile.image" height="64px" width="64px"></v-img>
              </div>              
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
        </v-col>        
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  computed: {
    profile () {
      return this.$store.state.profile.data
    }
  },  
}
</script>