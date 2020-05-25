<template>
<v-container fluid>
    <div id="vacuum">
    <v-app id="vacuum">
        <v-card
      class="mx-auto"
      width="300"
      height="350"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require('../assets/vacuum2.jpeg')"
      >
      </v-img>
      <v-card-title>{{ dev.name }}</v-card-title>
      <v-card-subtitle class="pb-0">Clean: {{ clocation }} -- Base: {{ base }}</v-card-subtitle>
  
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
            <v-card-title>Configuration</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
                <v-subheader>Mode</v-subheader>
                <v-radio-group v-model="mode" column>
                    <v-radio label="Mop" value="mop"></v-radio>
                    <v-radio label="Vacuum" value="vacuum"></v-radio>
                    <v-radio label="None" value="none"></v-radio>
                </v-radio-group>
                <v-subheader>Return Base</v-subheader>
                <v-radio-group v-model="rBase" column>
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                </v-radio-group>
                <v-subheader>Charge Base</v-subheader>
                <v-overflow-btn
                    v-model="base"
                    :items="places"
                    label="Charge Base"
                ></v-overflow-btn>
                <v-subheader>Cleaning Location</v-subheader>
                <v-overflow-btn
                    v-model="clocation"
                    :items="places"
                    label="Cleaning location"
                ></v-overflow-btn>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

              <v-dialog v-model="dialog2" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn color="error" dark v-on="on">
              <v-icon>
                mdi-delete-outline
              </v-icon>
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

            heart: false,
            product: 'Vacuum Cleaner',
            switch1: false,
            switch2: false,
            places: ['Bathroom','Bedroom','Living Room','Kitchen'],
            rBase: 'no',
            base:'Living Room',
            clocation:'None',
            location: 'Location Not Defined',
            dialog: false,
            mode: 'none',
            dialog2: false,
        }
    },
    methods: {
      deleteDev() {
        this.dialog2 = false
        window.api.device.delete(this.dev.id)
        this.eventHub.$emit('deleted',this.dev.id);
      }
    },
    watch: {
      switch1(newValue){
        if (newValue == true) {
          window.api.device.executeAction(this.dev.id,'start',)
        } else {
          window.api.device.executeAction(this.dev.id,'dock',)
        }
      }
}
};
</script>
