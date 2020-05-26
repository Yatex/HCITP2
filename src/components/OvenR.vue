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
              <v-btn color="blue darken-1" text @click="sendData();dialog = false;">

                                    
                                    <span>Save and close</span>
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
            intensity: 0,
            slider: 0,
            heart: false,
            product: 'Oven',
            switch1: false,
            location: '',
            dialog: false,
            convectionM: 'off',
            grillM: 'off',
            heatS: 'conventional',
            dialog2: false,
            acciones: []
        
    }),
    methods: {
     sendData(){
        if (this.switch1 == true) {
          this.acciones.push({actionName: "turnOn", params: []});
        } else {
          this.acciones.push({actionName: "turnOff", params: []});
        }
        var aux = {
          actionName: "setTemperature",
          params: []
        }
        aux.params.push(this.slider);

         var aux2 = {
          actionName: "setConvection",
          params: [this.convectionM]
        }

        var aux3 = {
          actionName: "setGrill",
          params: [this.grillM]
        }

        var aux4 = {
          actionName: "setHeat",
          params: [this.heatS]
        }

        this.acciones.push(aux, aux2, aux3, aux4);
        console.log(this.acciones);
        
        this.$emit('dataChanged',this.acciones);
      }
      
    },
    
// switch1(newValue){
//         if (newValue == true) {
//           window.api.device.executeAction(this.dev.id,'turnOn',)
//         } else {
//           window.api.device.executeAction(this.dev.id,'turnOff',)
//         }
//       },
//       slider(newValue){
//         window.api.device.executeAction(this.dev.id,'setTemperature',[newValue])
//       },
//       convectionM(newValue){
//         window.api.device.executeAction(this.dev.id,'setConvection',[newValue])
//       },
//       grillM(newValue){
//         window.api.device.executeAction(this.dev.id,'setGrill',[newValue])
//       },
//       heatS(newValue){
//         window.api.device.executeAction(this.dev.id,'setHeat',[newValue])
//       },




created(){
},
updated(){
}
};
</script>
