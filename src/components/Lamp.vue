<template>
    <div id="app">
    <v-app id="inspire">
        <v-card
      class="mx-auto"
      max-width="300"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require('../assets/lampF.png')"
      >
      </v-img>
      <v-card-title>{{ product }}</v-card-title>
      <v-card-subtitle class="pb-0">{{ location }}</v-card-subtitle>
  
      <v-card-actions>
        
        <v-spacer></v-spacer>
        
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch1" v-on="on" color="green"></v-switch>
            </template>
            <span v-if="switch1">Turn Off</span>
            <span v-else>Turn On</span>
        </v-tooltip>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        
        <v-btn text @click="heart = !heart" class="ma-4" color="red">
            <v-icon>{{ heart ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
        </v-btn>
  
        <v-btn text>
            <v-icon>mdi-cog</v-icon>
        </v-btn>
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
            labels: ['0%', '25%', '50%', '75%', '100%'],
            heart: false,
            product: 'Lamp',
            switch1: false,
            location: 'LivingRoom '
        }
    }
}
</script>