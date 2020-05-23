<template>
    <div id="door">
    <v-app id="door">
    <v-card
      class="mx-auto"
      width="300"
      height="350"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require('../assets/door.jpeg')"
      >
      </v-img>
      <v-card-title>{{ product }}</v-card-title>
      <v-card-subtitle class="pb-0">{{ location }}</v-card-subtitle>
  
      <v-card-actions>
        
        <v-spacer></v-spacer>
        
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch1" v-on="on" color="green" :disabled='switch2'></v-switch>
            <v-spacer></v-spacer>
            <v-label>State</v-label>
            </template>
            <span v-if="switch1">Opened</span>
            <span v-else>Closed</span>
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch2" v-on="on" color="red" :disabled='switch1'></v-switch>
            <v-spacer></v-spacer>
            <v-label>Lock</v-label>
            </template>
            <span v-if="switch2">Locked</span>
            <span v-else>Unlocked</span>
        </v-tooltip>

        
        <v-btn text @click="heart = !heart" class="ma-4" color="red">
            <v-icon>{{ heart ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
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
            heart: false,
            product: 'Door',
            switch1: false,
            switch2: false,
            location: 'LivingRoom ',
        }
    },
};
</script>