<template>
<v-container fluid>
    <div id="speaker">
        <v-app id="speaker">
            <v-card
                class="mx-auto"
                width="300"
                height="350"
                >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/speaker.jpg')"
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
                    
                    <v-dialog v-model="dialog" scrollable max-width="1000px">
                        <template v-slot:activator="{ on }">
                            <v-btn text v-on="on">
                            <v-icon>mdi-cog-outline</v-icon>
                            </v-btn>
                        </template>
                        <v-card height="700">
                            <v-card-title>Configuration</v-card-title>
                            <v-divider></v-divider>
                            <v-card-text style="height: 300px;">
                            <v-subheader>Volume</v-subheader>
                            <v-row
                            class="mb-4"
                            justify="space-between"
                            >
                            <v-col class="text-left">
                                <span
                                class="display-3 font-weight-light"
                                v-text="volume"
                                ></span>
                                <span class="subheading font-weight-light mr-1">volume</span>
                                <v-fade-transition>
                                <v-avatar
                                    v-if="isPlaying"
                                    :color="color"
                                    :style="{
                                    }"
                                    class="mb-1 v-avatar--metronome"
                                    size="12"
                                ></v-avatar>
                                </v-fade-transition>
                            </v-col>
                            </v-row>
                    
                            <v-slider
                            v-model="volume"
                            :color="color"
                            track-color="grey"
                            always-dirty
                            min="0"
                            max="10"
                            >
                            <template v-slot:prepend>
                                <v-icon
                                :color="color"
                                @click="decrement"
                                >
                                mdi-minus
                                </v-icon>
                            </template>
                    
                            <template v-slot:append>
                                <v-icon
                                :color="color"
                                @click="increment"
                                >
                                mdi-plus
                                </v-icon>
                            </template>
                            </v-slider>
                            <div style="text-align:center">
                                <v-btn
                                :color="black"
                                dark
                                flat
                                @click="prevSong()"
                                style="margin-right:10px"
                                >
                                <v-icon large>
                                    {{'mdi-skip-backward' }}
                                </v-icon>
                                </v-btn>
                                <v-btn
                                :color="color"
                                dark
                                depressed
                                fab
                                @click="toggle"
                                >
                                <v-icon large>
                                    {{ isPlaying ? 'mdi-pause' : 'mdi-play' }}
                                </v-icon>
                                </v-btn>
                                <v-btn
                                :color="black"
                                dark
                                flat
                                style="margin-left:10px"
                                @click="nextSong()"
                                >
                                <v-icon large>
                                    {{'mdi-skip-forward' }}
                                </v-icon>
                                </v-btn>
                            </div>
                            <v-subheader>Song</v-subheader>
                            <v-slide-group
                            v-model="songs1"
                            class="pa-4"
                            :mandatory="mandatory"
                            :center-active="centerActive"
                            >
                            <v-slide-item
                                v-for="song in songs"
                                :key="song.name"
                                v-slot:default="{ active, toggle }"
                            >
                                <v-card
                                :color="active ? 'primary' : 'grey lighten-1'"
                                class="ma-4"
                                height="200"
                                width="110"
                                @click="toggle"
                                >
                                <v-card-title>{{ song.name }}</v-card-title>
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <v-scale-transition>
                                    <v-icon
                                        v-if="active"
                                        color="white"
                                        size="48"
                                        v-text="'mdi-close-circle-outline'"
                                    ></v-icon>
                                    </v-scale-transition>
                                </v-row>
                                </v-card>
                            </v-slide-item>
                            </v-slide-group>

                            <v-subheader>Genre</v-subheader>
                            <v-slide-group
                            v-model="genre1"
                            class="pa-4"
                            :mandatory="mandatory2"
                            :center-active="centerActive2"
                            >
                            <v-slide-item
                                v-for="genre in generos"
                                :key="genre.name"
                                v-slot:default="{ active, toggle }"
                            >
                                <v-card
                                :color="active ? 'primary' : 'grey lighten-1'"
                                class="ma-4"
                                height="200"
                                width="110"
                                @click="toggle"
                                >
                                <v-card-title>{{ genre.name }}</v-card-title>
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <v-scale-transition>
                                    <v-icon
                                        v-if="active"
                                        color="white"
                                        size="48"
                                        v-text="'mdi-close-circle-outline'"
                                    ></v-icon>
                                    </v-scale-transition>
                                </v-row>
                                </v-card>
                            </v-slide-item>
                            </v-slide-group>
                                
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn color="blue darken-1" text @click="dialog = false">
                                    <v-icon left>mdi-close</v-icon>
                                    <span>Close</span>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-dialog v-model="dialog2" persistent max-width="290px">
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
    data:()=>({
            product: 'Speaker',
            volume: 0,
            interval: null,
            isPlaying: false,
            location: this.dev.room.name,
            switch1: false,
            songs1: '',
            genre1: '',
            dialog: false,
            heart: false,
            songs: [ {name: 'cancion1'}, {name: 'cancion2'}, {name: 'cancion3'}, {name: 'cancion4'}, {name: 'cancion5'}, {name: 'cancion6'}, {name: 'cancion7'}, {name: 'cancion8'}, {name: 'cancion9'}, {name: 'cancion10'}, {name: 'cancion11'}, {name: 'cancion12'}],
            generos: [ {name: 'genero1'}, {name: 'genero2'}, {name: 'genero3'}, {name: 'genero4'}, {name: 'genero5'}, {name: 'genero6'}, {name: 'genero7'}, {name: 'genero8'}, {name: 'genero9'}, {name: 'genero10'}, {name: 'genero11'}, {name: 'genero12'}],
            mandatory: true,
            centerActive: true,
            mandatory2: true,
            centerActive2: true,
            dialog2: false,
    }),
    computed: {
        color () {
      if (this.volume < 2) return 'indigo'
      if (this.volume < 5) return 'teal'
      if (this.volume < 7) return 'green'
      if (this.volume < 9) return 'orange'
      return 'red'
    },
    },
    methods: {
    decrement () {
      this.volume--
    },
    increment () {
      this.volume++
    },
    toggle () {
      this.isPlaying = !this.isPlaying
    },
    deleteDev() {
        this.dialog = false
        window.api.device.delete(this.dev.id)
        this.eventHub.$emit('deleted',this.dev.id)
      },
    nextSong () {
      window.api.device.executeAction(this.dev.id,'nextSong',)
    },
    prevSong () {
      window.api.device.executeAction(this.dev.id,'previousSong',)
    },
    },
    watch: {
      switch1(newValue){
        if (newValue == true) {
          window.api.device.executeAction(this.dev.id,'play',)
        } else {
          window.api.device.executeAction(this.dev.id,'stop',)
        }
      },
      isPlaying(newValue){
        if (newValue == true) {
          window.api.device.executeAction(this.dev.id,'resume',)
        } else {
          window.api.device.executeAction(this.dev.id,'pause',)
        }
      },
      volume(newValue){
        window.api.device.executeAction(this.dev.id,'setVolume',[newValue])
      },
      convectionM(newValue){
        window.api.device.executeAction(this.dev.id,'setConvection',[newValue])
      },
      grillM(newValue){
        window.api.device.executeAction(this.dev.id,'setGrill',[newValue])
      },
      heatS(newValue){
        window.api.device.executeAction(this.dev.id,'setHeat',[newValue])
      },

},
created(){
  this.getData();
},
updated(){
}
};
</script>
