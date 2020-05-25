<template>
<v-container fluid>
    <div id="lamp">
    <v-app id="lamp">
    <v-card
      class="mx-auto"
      width="300"
      height="350"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require('../assets/lampF.png')"
      >
      </v-img>
      <v-card-title>{{ dev.name }}</v-card-title>
      <v-card-subtitle class="pb-0">{{ location }}</v-card-subtitle>
  
      <v-card-actions>
        
        <v-spacer></v-spacer>
        
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch1" v-on="on"  color="green"></v-switch>
            </template>
            <span v-if="switch1">
              Turned On
              </span>
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
              <v-subheader class="pl-0">Color</v-subheader>
              <v-radio-group v-model="colorL" column>
                <v-radio label="Green" value="81CC49" ></v-radio>
                <v-radio label="White" value="FFFFFF"></v-radio>
                <v-radio label="Blue" value="0A0082"></v-radio>
                <v-radio label="Red" value="FF0000"></v-radio>
                <v-radio label="Yellow" value="FFFF00"></v-radio>
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
    data:() => ({
            intensity: null,
            slider: null,
            heart: null,
            product: null,
            switch1: null,
            location: null,
            colorL: null,
            dialog: null,
            dialog2: null,
            timer: 0
    }),
    methods: {
      deleteDev() {
        this.dialog2 = false
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
},
created(){
  this.getData();
},
updated(){
}
};
</script>
