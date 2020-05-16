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
        
        <v-dialog v-model="dialog" scrollable max-width="300px">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>Select Country</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
              <v-radio-group v-model="colorL" column>
                <span class="mt-1 mb-2">Color</span>
                <v-radio label="Green" value="green"></v-radio>
                <v-radio label="White" value="white"></v-radio>
                <v-radio label="Blue" value="blue"></v-radio>
                <v-radio label="Red" value="red"></v-radio>
                <v-radio label="Yellow" value="yellow"></v-radio>
              </v-radio-group>
              <v-subheader class="pl-0">Intensity</v-subheader>
              <v-slider
                v-model="slider"
                thumb-label
              ></v-slider>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
            slider: 0,
            heart: false,
            product: 'Lamp',
            switch1: false,
            location: 'LivingRoom ',
            colorL: '',
            dialog: false,
        }
    }
}
</script>