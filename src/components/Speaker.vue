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
                    
                    <v-dialog v-model="dialog" scrollable max-width="800">
                        <template v-slot:activator="{ on }">
                            <v-btn text v-on="on">
                            <v-icon>mdi-cog-outline</v-icon>
                            </v-btn>
                        </template>
                        <v-card>
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
                                v-text="bpm"
                                ></span>
                                <span class="subheading font-weight-light mr-1">BPM</span>
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
                            <v-col class="text-right">
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
                            </v-col>
                            </v-row>
                    
                            <v-slider
                            v-model="bpm"
                            :color="color"
                            track-color="grey"
                            always-dirty
                            min="0"
                            max="99"
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
            product: 'Speaker',
            bpm: 25,
            interval: null,
            isPlaying: false,
            location: "Location Not Defined",
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
        }
    },
    computed: {
        color () {
      if (this.bpm < 25) return 'indigo'
      if (this.bpm < 50) return 'teal'
      if (this.bpm < 75) return 'green'
      if (this.bpm < 90) return 'orange'
      return 'red'
    },
    },
    methods: {
    decrement () {
      this.bpm--
    },
    increment () {
      this.bpm++
    },
    toggle () {
      this.isPlaying = !this.isPlaying
    },
    deleteDev() {
        this.dialog2 = false
        window.api.device.delete(this.dev.id)
        this.eventHub.$emit('deleted',this.dev.id)

      }
    }
};
</script>
