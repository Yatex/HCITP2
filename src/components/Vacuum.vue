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
      <v-card-subtitle class="pb-0">Base: <b>{{ location }}</b> -- Cleans: <b>{{ clocation }}</b></v-card-subtitle>
  
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
              <div style="width: 100%; text-align:center; margin-top:10px"> 
              <v-btn style="text-align:center" text class="grey darken-4 white--text" @click="dock()">
                  Dock
                </v-btn>
              </div>
                <v-subheader>Mode</v-subheader>
                <v-radio-group v-model="mode" column>
                    <v-radio label="Mop" value="mop"></v-radio>
                    <v-radio label="Vacuum" value="vacuum"></v-radio>
                    <v-radio label="None" value="none"></v-radio>
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
                    <v-btn @click="dialog2 = false">No</v-btn>
                    <v-btn @click="deleteDev" >Yes</v-btn>
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
    data () {
      return {
            heart: false,
            product: 'Vacuum Cleaner',
            switch1: false,
            switch2: false,
            places: [],
            rBase: 'no',
            base:'Not Defined',
            clocation:'None',
            location: 'Not Defined',
            dialog: false,
            mode: 'none',
            dialog2: false,
      }
    },
    methods: {
      deleteDev() {
        this.dialog = false
        window.api.device.delete(this.dev.id)
        this.eventHub.$emit('deleted',this.dev.id);
      },
      getData(){
        window.api.device.get(this.dev.id).then(data=>{
        this.slider = data.result.state.dispense
        this.switch1 = data.result.state.status == 'opene' ? true : false
        this.location = data.result.room.name
        window.api.room.getAll().then(data=>{
          for(var i=0; i<data.result.length; i++){
            this.places.push(data.result[i].name)
          }
        })
        })
      },
      dock(){
        window.api.device.executeAction(this.dev.id,'dock',)
        this.switch1 = false
      }
    },
    watch: {
      switch1(newValue){
        if (newValue == true) {
          window.api.device.executeAction(this.dev.id,'start',)
        } else {
          window.api.device.executeAction(this.dev.id,'pause',)
        }
      }
},
created(){
  this.getData();
},
updated(){
}
};
</script>
