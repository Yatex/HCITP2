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
              <v-subheader class="pl-0">Position</v-subheader>
              <v-slider
                v-model="slider"
                thumb-label
              ></v-slider>
              <v-spacer></v-spacer>
              <v-subheader class="pl-0">Open</v-subheader>
              <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch1" v-on="on" color="green"></v-switch>
            </template>
            <span v-if="switch1">Opened</span>
            <span v-else>Closed</span>
        </v-tooltip>
              </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                
              <v-btn color="blue darken-1" text @click="sendData();dialog = false">
                                    
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
            heart: false,
            product: 'Blind',
            switch1: false,
            location: '',
            dialog: false,
            dialog2: false,
            slider: 0,
            acciones: []
        
    }),
    methods: {
      sendData(){
        if (this.switch1 == true) {
          this.acciones.push({actionName: "open", params: []});
        } else {
          this.acciones.push({actionName: "close", params: []});
        }
        this.acciones.push({actionName: "setLevel", params: [].push(this.slider)});
        
        console.log(this.location);
        this.$emit('dataChanged',this.acciones);
      }
    },
created(){

},
updated(){
}
};
</script>
