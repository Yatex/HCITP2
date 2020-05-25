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
            product: 'Blind',
            switch1: false,
            location: this.dev.roomName,
            dialog: false,
            dialog2: false,
            slider: 0
        
    }),
    methods: {
      getData(){
        window.api.device.get(this.dev.id).then(data=>{
        this.slider = data.result.state.level
        this.switch1 = data.result.state.status == 'opened' ? true : false
        this.location = data.result.room.name
  })

      },

    },
    watch: {
      switch1(newValue){
        if (newValue == true) {
          window.api.device.executeAction(this.dev.id,'open',)
        } else {
          window.api.device.executeAction(this.dev.id,'close',)
        }
      },
      slider(newValue){
          window.api.device.executeAction(this.dev.id,'setLevel',[newValue])
      }
},
created(){
  this.getData();
},
updated(){
}
};
</script>
