<template>
        
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
                <v-subheader>Turn On</v-subheader>
                <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch1" v-on="on" color="green"></v-switch>
            </template>
            <span v-if="switch1">Turned On</span>
            <span v-else>Turned Off</span>
        </v-tooltip>
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
            
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<script>
export default {
   props: {

        dev:{
            
        }
    },
    data:()=>({

            heart: false,
            product: 'Vacuum Cleaner',
            switch1: false,
            switch2: false,
            places: [],
            rBase: 'no',
            base:'Not Defined',
            clocation:'None',
            location: this.dev.roomName,
            dialog: false,
            mode: 'none',
            dialog2: false,
    }),
    methods: {
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
