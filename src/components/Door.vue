<template>
<v-container fluid>
    <div id="door">
    <v-app id="door">
    <v-card
      class="mx-auto"
      width="300"
      height="350"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require('../assets/door3.jpeg')"
      >
      </v-img>
      <v-card-title>{{ dev.name }}</v-card-title>
      <v-card-subtitle class="pb-0">{{ location }}</v-card-subtitle>
  
      <v-card-actions>
        
        <v-spacer></v-spacer>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-switch v-model="switch1" v-on="on" color="green" :disabled='switch2'></v-switch>
            </template>
            <span v-if="switch1">Opened</span>
            <span v-else>Closed</span>
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
              <v-subheader class="pl-0">Lock</v-subheader>
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                <v-switch v-model="switch2" v-on="on" color="red" :disabled='switch1'></v-switch>
                <v-spacer></v-spacer>
                </template>
                <span v-if="switch2">Locked</span>
                <span v-else>Unlocked</span>
            </v-tooltip>
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
    data () {
        return {
            heart: false,
            product: 'Door',
            switch1: false,
            switch2: false,
            location: '',
            dialog: false,
            dialog2: false,
        }
    },
    methods: {
      deleteDev() {
        this.dialog = false
        window.api.device.delete(this.dev.id)
        this.eventHub.$emit('deleted',this.dev.id)
      },
      getData(){
        window.api.device.get(this.dev.id).then(data=>{
        this.switch1 = data.result.state.status == 'opened' ? true : false
        console.log(data.result.state.status)
        this.switch2 = data.result.state.locked == 'locked' ? true : false
        this.location = data.result.room.name
  })

      }
    },
    watch: {
      switch1(newValue){
        if (newValue == true) {
          window.api.device.executeAction(this.dev.id,'open',)
        } else {
          window.api.device.executeAction(this.dev.id,'close',)
        }
      },
      switch2(newValue){
        if (newValue == true) {
          window.api.device.executeAction(this.dev.id,'lock',)
        } else {
          window.api.device.executeAction(this.dev.id,'unlock',)
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