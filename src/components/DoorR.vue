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
              <v-subheader class="pl-0">Lock</v-subheader>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                <v-switch v-model="switch2" v-on="on" color="red" :disabled='switch1'></v-switch>
                <v-spacer></v-spacer>
                </template>
                <span v-if="switch2">Locked</span>
                <span v-else>Unlocked</span>
            </v-tooltip>
            <v-spacer></v-spacer>
            <v-subheader class="pl-0">Open</v-subheader>
            <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch1" v-on="on" color="green" :disabled='switch2'></v-switch>
            </template>
            <span v-if="switch1">Opened</span>
            <span v-else>Closed</span>
            </v-tooltip>
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
    data:() => ({
            heart: false,
            product: 'Door',
            switch1: false,
            switch2: false,
            location: '',
            dialog: false,
            dialog2: false,
            acciones: []
    }),
    methods: {
      deleteDev() {
        this.dialog = false
        window.api.device.delete(this.dev.id)
        this.eventHub.$emit('deleted',this.dev.id)
      },
      sendData(){
        if (this.switch1 == true) {
          this.acciones.push({actionName: "open", params: []});
        } else {
          this.acciones.push({actionName: "close", params: []});
        }

        if (this.switch2 == true) {
          this.acciones.push({actionName: "lock", params: []});
        } else {
          this.acciones.push({actionName: "unlock", params: []});
        }
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