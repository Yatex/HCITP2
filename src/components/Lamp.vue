<template>
    <div id="app">
    <v-app id="inspire">
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        height="200px"
        :src="require('../assets/lamp3.png')">
      </v-img>
        <v-card-title>{{ product }}</v-card-title>
      <v-card-subtitle class="pb-0">{{ location }}</v-card-subtitle>
  
      <v-card-actions>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-switch color="green" class="mx-5" v-model="switch1" v-on="on"></v-switch>
            </template>
            <span v-if="switch1">Turn off</span>
            <span v-else>Turn on</span>
        </v-tooltip>
        <v-spacer></v-spacer>
         <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn text @click="show = !show" v-on="on">
                    <v-icon color="red">{{ show ? 'mdi-heart' : 'mdi-heart-outline'}}</v-icon>
                </v-btn>
            </template>
            <span>Favourite</span>
        </v-tooltip>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
                <v-icon>mdi-cog</v-icon>
            </v-btn>
            </template>
            <span>Edit</span>
      </v-tooltip>
      </v-card-actions>
    </v-card>
    </v-app>
    </div>
</template>

<script>
export default {
    data() {
        return{
            show: false,
            intensity: 0,
            switch1: false,
            labels: ['0', '25', '50', '75', '100'],
            product: 'Lamp',
            location: 'LivingRoom ',
            heart: false,
        }
    },
    // methods: {
    //     clicked() {
    //         this.onoff = !this.onoff
    //     }
    // }
}
</script>

