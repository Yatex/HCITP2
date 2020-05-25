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
              <v-subheader class="pl-0">Color</v-subheader>
              <v-radio-group v-model="colorL" column>
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
            intensity: 0,
            slider: 0,
            heart: false,
            product: 'Lamp',
            switch1: false,
            location: this.dev.roomName,
            colorL: 'white',
            dialog: false,
            dialog2: false,
        }),
    methods: {
        deleteDev() {
        this.dialog = false
        window.api.device.delete(this.dev.id)
        this.eventHub.$emit('deleted',this.dev.id)
        

      },
      getData(){
        window.api.device.get(this.dev.id).then(data=>{
        this.intensity = data.result.state.brightness
        this.slider = this.intensity
        this.colorL = data.result.state.color
        this.switch1 = data.result.state.status == 'on' ? true : false
        this.location = data.result.room.name  
  })
      }
    },
    watch: {
      switch1(newValue){
        if (newValue == true) {
          window.api.device.executeAction(this.dev.id,'turnOn',)
        } else {
          window.api.device.executeAction(this.dev.id,'turnOff',)
        }
      },
      colorL(newValue){
          window.api.device.executeAction(this.dev.id,'setColor',[newValue])
      },
      slider(newValue){
          window.api.device.executeAction(this.dev.id,'setBrightness',[newValue])

      }
    }
};
</script>
