<template>
<v-container fluid>
    <div id="oven">
    <v-app id="oven">
    <v-card
      class="mx-auto"
      width="300"
      height="350"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require('../assets/oven.webp')"
      >
      </v-img>
      <v-card-title>{{ dev.name }}</v-card-title>
      <v-card-subtitle class="pb-0">{{ location }}</v-card-subtitle>
  
      <v-card-actions>
        
        <v-spacer></v-spacer>
        
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch1" v-on="on" color="green"></v-switch>
            </template>
            <span v-if="switch1">Turned On</span>
            <span v-else>Turned Off</span>
        </v-tooltip>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        
        <v-dialog v-model="dialog" scrollable max-width="300px">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>Configuration</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
                <v-subheader class="pl-0">Temperature</v-subheader>
                <v-slider
                v-model="slider"
                thumb-label
                min="90"
                max="230"
              ></v-slider>
              <v-subheader class="pl-0">Heat Source</v-subheader>
              <v-radio-group v-model="heatS" column>
                <v-radio label="Conventional" value="conventional"></v-radio>
                <v-radio label="Above" value="above"></v-radio>
                <v-radio label="Below" value="below"></v-radio>
              </v-radio-group>
              <v-subheader class="pl-0">Grill Mode</v-subheader>
              <v-radio-group v-model="grillM" column>
                <v-radio label="Off" value="off"></v-radio>
                <v-radio label="Economic" value="economic"></v-radio>
                <v-radio label="Complete" value="complete"></v-radio>
              </v-radio-group>
              <v-subheader class="pl-0">Convection Mode</v-subheader>
              <v-radio-group v-model="convectionM" column>
                <v-radio label="Off" value="off"></v-radio>
                <v-radio label="Economic" value="economic"></v-radio>
                <v-radio label="Conventional" value="conventional"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">
                                    <v-icon left>mdi-close</v-icon>
                                    <span>Close</span>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-dialog v-model="dialog2" persistent max-width="290">
                                    <template v-slot:activator="{ on }">
                                    <v-btn text color="error" dark v-on="on">
                                        <v-icon left>
                                        mdi-delete-outline
                                        </v-icon>
                                        <span>Delete</span>
                                    </v-btn>
                                    </template>
                                    <v-card>
                                    <v-card-title class="headline">Are you sure you want to delete this device?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="grey darken-4" text @click="dialog2 = false">No</v-btn>
                                        <v-btn color="grey darken-4" text @click="deleteDev" >Yes</v-btn>
                                    </v-card-actions>
                                    </v-card>
                                </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
    </v-app>
    </div>
    </v-container>
</template>

<script>
export default {
  props: {

        dev:{
            
        }
    },
    data() {
        return{
            intensity: 0,
            slider: 0,
            heart: false,
            product: 'Oven',
            switch1: false,
            location: 'Location Not Defined',
            dialog: false,
            convectionM: 'off',
            grillM: 'off',
            heatS: 'conventional',
            dialog2: false,
        }
    },
    methods: {
      deleteDev() {
        this.dialog2 = false
        window.api.device.delete(this.dev.id)
        this.eventHub.$emit('deleted',this.dev.id)

      }
    }
};
</script>
