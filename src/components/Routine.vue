<template>
    <v-container fluid>
      <h1>
      <div style="text-align: center; float: left; margin-left: 40%"><b><input type="text" id="rName" :value="routineName" disabled style="text-align: center; outline: none; font-size: 30px; border: 2px solid grey; border-radius: 25px;"></b></div>
      <div style="float:left; text-align:center; margin-bottom: 10px;"><v-btn rounded right icon @click="editRoutineName"><v-icon size="30px">mdi-pencil</v-icon></v-btn></div>
      </h1>
      <br style="clear: both;">
      <div style="border: 2px solid grey; border-radius: 25px; width: auto; margin-top: 30px;">
      <div style="font-size: 25px; padding-top: 10px; padding-bottom: 15px; margin-left: 20px;"><u><b>Added devices:</b></u></div>
      <v-layout row wrap>
      <v-flex xs5 md2 v-for="device in devicesInRoutine" :key="device.device.id" style="margin-left:27px; margin-right: 27px; margin-bottom: 27px;">

      <v-card fluid >
      <v-list-item>
        <v-list-item-content>
            <img
            :id="device.device.typeId"
            :src="getImage(device.device.typeId)" style="height: 150px; width: 80px;">

            <v-card-text class="headline m" style="text-align: center;">
                <strong style="font-size: 20px;">
                {{device.device.name}}
                </strong>
                <div style="text-align: center;">
                <div style="font-size: 15px; padding-bottom: 2px">Location: {{device.device.roomName}}</div></div>
            </v-card-text >
                <v-card-actions >
                <v-btn text @click="removeFromRoutine(device)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-spacer/>
                <DoorR v-bind:dev="device.device" v-if="device.device.typeId === 'lsf78ly0eqrjbz91'" @dataChanged="updateDevice(device.device.id, $event)"/>
                <LampR v-bind:dev="device.device" v-else-if="device.device.typeId === 'go46xmbqeomjrsjr'" @dataChanged="updateDevice(device.device.id, $event)"/>
                <OvenR v-bind:dev="device.device" v-else-if="device.device.typeId === 'im77xxyulpegfmv8'" @dataChanged="updateDevice(device.device.id, $event)"/>
                <SpeakerR v-bind:dev="device.device" v-else-if="device.device.typeId === 'c89b94e8581855bc'" @dataChanged="updateDevice(device.device.id, $event)"/>
                <BlindR v-bind:dev="device.device" v-else-if="device.device.typeId === 'eu0v2xgprrhhg41g'" @dataChanged="updateDevice(device.device.id, $event)"/>

                <FaucetR v-bind:dev="device.device" v-else-if="device.device.typeId === 'dbrlsh7o5sn8ur4i'" @dataChanged="updateDevice(device.device.id, $event)"/>
                <VacuumR v-bind:dev="device.device" v-else-if="device.device.typeId === 'ofglvd9gqx8yfl3l'" @dataChanged="updateDevice(device.device.id, $event)"/>
        </v-card-actions>
        </v-list-item-content>
  
      </v-list-item>
    </v-card>
      </v-flex>
    </v-layout>
      </div>

    <div style=" margin-top: 20px">
    <div style="font-size: 25px; padding-top: 10px; padding-bottom: 15px; margin-left: 20px"><u><b>Available devices:</b></u></div>
      <v-layout row wrap>
      <v-flex xs5 md2 v-for="device in allDevices" :key="device.device.id" style="margin-left:27px; margin-right: 27px; margin-bottom: 27px;">

      <v-card fluid >
      <v-list-item>
        <v-list-item-content>
            <img
            :id="device.device.typeId"
            :src="getImage(device.device.typeId)" style="height: 150px; width: 80px;">

            <v-card-text class="headline m" style="text-align: center;">
                <strong style="font-size: 20px;">
                {{device.device.name}}
                </strong>
                <div style="font-size: 15px; text-align: center;">Location: {{device.device.roomName}}</div>
                </v-card-text >
                  
                  
            <v-card-actions>
              <div style="text-align:center; width: 100%;"><v-btn text style="text-align: center;" @click="addToRoutine(device)"><v-icon>mdi-plus</v-icon></v-btn></div>
            </v-card-actions>
        </v-list-item-content>
  
      </v-list-item>
    </v-card>
      </v-flex>
    </v-layout>
    </div>
      <v-footer app
      color="#FFFFFFFF">
        <table width = "100%"><tr><td
    style="width:50%"
    >
     <!-- <AddDevice></AddDevice> -->
     <v-btn rounded dark color="grey darken-4" @click="saveRoutine();">
       <v-icon size='30px'>mdi-content-save</v-icon>
        <p style="margin:10px">
        <big>Save Routine</big>
        </p>
        </v-btn>
    </td>
     <td
      style="text-align:right;width:50%">
        
       <!-- <DeleteRoom></DeleteRoom> -->
      <v-dialog
        v-model="dialog" max-width="290px" >
              <template v-slot:activator="{ on }">
                  <v-btn rounded v-on="on" color="error">
                  <v-icon size='30px'>mdi-delete-outline</v-icon>
                  <p style="margin:10px"> <big>Delete Routine</big></p>
                 </v-btn>
              </template>

        <v-card>
        <v-card-title>
          <span class="headline">Are you sure you want to delete this routine?</span>
        </v-card-title>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-card-actions>
          <v-btn
          @click="dialog = false">
            No
          </v-btn>
          <v-btn
           @click="deleteRoutine();dialog = false;$router.push({ path: '/routines' });">
           Yes
          </v-btn>
        </v-card-actions>
         </v-card>
        </v-dialog>
      </td>
      </tr>
      </table>
        
      </v-footer>   
    </v-container>    
</template>



<script>
    import DoorR from './DoorR.vue'
    import BlindR from './BlindR.vue'
    import FaucetR from './FaucetR.vue'
    import SpeakerR from './SpeakerR.vue'
    import VacuumR from './VacuumR.vue'
    import LampR from './LampR.vue'
    import OvenR from './OvenR.vue'

    const $ = require('jquery');
    window.$ = $;
    export default {
    name: 'Routine',
    
    components: {
 
      'DoorR':DoorR,
      'BlindR':BlindR,
      'FaucetR':FaucetR,
      'SpeakerR':SpeakerR,
      'VacuumR':VacuumR,
      'LampR':LampR,
      'OvenR':OvenR

    },

    data () {
      return {
      routineName:'',
      allDevices: [],
      devicesInRoutine: [],
      dialog: false,
      }},

methods:{
  getRoutineName(){
    window.api.routine.get(this.$route.params.id).then(data=>{
      this.routineName = data.result.name;
  });
  },
  updateDevice(id, event){
    for(var i = 0; i< this.devicesInRoutine.length;i++){
      if(this.devicesInRoutine[i].device.id == id){
        this.devicesInRoutine[i].actionName = [];
        for(var j = 0; j < event.length;j++){
          this.devicesInRoutine[i].actionName.push(event[j].actionName);
          this.devicesInRoutine[i].params.push(event[j].params);
          
        }
      }
    }
    console.log(this.devicesInRoutine[0].params);
    
  },
  editRoutineName(){
      $('#rName').removeAttr('disabled');
      $('#rName').focus();
  },
  getAvailableDevices(){
    window.api.device.getAll().then(data => {
      var aux = data.result;
      for(var i = 0; i < aux.length;i++){
        var action = {
          device: {id: aux[i].id, name: aux[i].name, typeId: aux[i].type.id, roomName: aux[i].room.name},
          actionName: [],
          params: [],
          meta: {}
        };
        this.allDevices.push(action);
      }
      this.checkRepe();
    });
  },
  checkRepe(){
    var device;
    var otherDevice;
    for (var i = 0; i < this.allDevices.length; i++){
      device = this.allDevices[i];
      for(var j = 0; j < this.devicesInRoutine.length; j++){
        otherDevice = this.devicesInRoutine[j];
        if(device.device.id == otherDevice.device.id){
          this.allDevices.splice(i,1);
        }
      }
    }
  },
  getDevicesInRoutine(){
    window.api.routine.get(this.$route.params.id).then(data=>{
        var auxActions = data.result.actions;
        var flag = 1;
        var index = 0;
        for (var i = 0; i < auxActions.length; i++){
          for(var j = 0; j < this.devicesInRoutine.length;j++){
            if(auxActions[i].device.id == this.devicesInRoutine[j].device.id){
              flag = 0;
              index = j;
            }
          }
          if(auxActions[i].device.id == "6b4e02f3f66338db"){
            console.log("nada");
          }else {
          if(flag == 0){
            this.devicesInRoutine[index].actionName.push(auxActions[i].actionName == null || auxActions[i].actionName == "" ? "" : auxActions[i].actionName);
            this.devicesInRoutine[index].params.push(auxActions[i].params == null || auxActions[i].params == "" ? [] : auxActions[i].params);
          }else {
            var auxAction = {
              device: {id: auxActions[i].device.id, name: auxActions[i].device.name, typeId: auxActions[i].device.type.id, roomName: auxActions[i].device.room.name},
              actionName: [],
              params: [],
              meta: {}
            }
            auxAction.actionName.push(auxActions[i].actionName == null || auxActions[i].actionName == "" ? "" : auxActions[i].actionName);
            auxAction.params.push(auxActions[i].params == null || auxActions[i].params == "" ? [] : auxActions[i].params);
            this.devicesInRoutine.push(auxAction);
            
          }
          }
          flag = 1;
        }
        this.checkRepe();

    });
    
  },
  addToRoutine(device){
    window.api.get()
    this.devicesInRoutine.push(device);
    for (var i = 0; i < this.allDevices.length;i++){
      if(this.allDevices[i].device.id == device.device.id){
        this.allDevices.splice(i,1);
      }
    }
  },
  removeFromRoutine(device){
    this.allDevices.push(device);
    for (var i = 0; i < this.devicesInRoutine.length;i++){
      if(this.devicesInRoutine[i].device.id == device.device.id){
        this.devicesInRoutine.splice(i,1);
      }
    }
  },
  deleteRoutine(){
    window.api.routine.delete(this.$route.params.id);
  },
  saveRoutine(){
    var actionsAux = [];
    // if(this.devicesInRoutine.length == 0){
    //   window.alert("A device must be added to routine before saving.")
    //   return;
    // }

    for (var i = 0; i < this.devicesInRoutine.length;i++){
      // if(this.devicesInRoutine[i].actionName.length == 0){
      //   window.alert("All devices must have a selected action in order to save routine changes, please check your added devices.");
      //   return;
      // }
      for (var j = 0; j < this.devicesInRoutine[i].actionName.length;j++){
        // if(this.devicesInRoutine[i].actionName[j] == "" || this.devicesInRoutine[i].actionName[j] == null){
        //   window.alert("All devices must have a selected action in order to save routine changes, please check your added devices.");
        //   return;
        // }
        if(this.devicesInRoutine[i].actionName[j] != null){
          console.log(this.devicesInRoutine[i].params[j]);
        
        var actionAux = {
          device: {id: this.devicesInRoutine[i].device.id},
          actionName: this.devicesInRoutine[i].actionName[j],
          params: this.devicesInRoutine[i].params[j] != null ? this.devicesInRoutine[i].params[j] : [],
          meta: this.devicesInRoutine[i].meta
        }

        actionsAux.push(actionAux);
        }
      }
      
    }
      var routine = {
        name: $('#rName').val(),
        actions: actionsAux,
        meta: {}
      };
      window.api.routine.modify(routine, this.$route.params.id);
      this.$router.push({ path: '/routines' });
    
  },

  getImage(typeId){
    if(typeId == "go46xmbqeomjrsjr"){
      return require('../assets/lampF.png');
    } else if(typeId == "im77xxyulpegfmv8"){
      return require('../assets/oven.webp');
    } else if(typeId == "lsf78ly0eqrjbz91"){
      return require('../assets/door3.jpeg');
    } else if(typeId == "c89b94e8581855bc"){
      return require('../assets/speaker.jpg');
    } else if(typeId == "eu0v2xgprrhhg41g"){
      return require('../assets/blind.jpeg');
    } else if(typeId == "dbrlsh7o5sn8ur4i"){
      return require('../assets/faucet.jpeg');
    } else if(typeId == "ofglvd9gqx8yfl3l"){
      return require('../assets/vacuum2.jpeg');
    } 
    
  }
  
},

created(){
  this.getRoutineName(this.$route.params.id);
  this.getAvailableDevices();
  this.getDevicesInRoutine(this.$route.params.id);
},

update(){


},

 beforeDestroy(){
              this.allDevices = null;
              this.devicesInRoutine = null;

          }
    };

  $(document).on('keypress',function(e) {
    if(e.which == 13) {
      if(!$('#rName').attr('disabled')){
        $('#rName').attr('disabled', true);
      }
    }
});
</script>

