<template>
    <v-container fluid>
      <h1>
      <div style="text-align: center; float: left; margin-left: 40%"><b><input type="text" id="rName" :value="routineName" disabled style="text-align: center; outline: none; font-size: 30px; border: 2px solid grey; border-radius: 25px;"></b></div>
      <div style="float:left; padding-top: 5px;"><v-btn rounded right icon @click="editRoutineName"><v-icon size="30px">mdi-pencil</v-icon></v-btn></div>
      </h1>
      <br style="clear: both;">
      <div style="font-size: 20px;">Added devices:</div>
      <v-layout row wrap>
      <v-flex xs5 md1 v-for="device in devicesInRoutine" :key="device.device.id" style="margin:10px">
      <v-card hover color="#00ADB5" @click="removeFromRoutine(device)" style="height: 150px; width: 150px;">
      <v-list-item>
        <v-list-item-content>
            <img
            :src="require('../assets/holgi.jpeg')" style="height: 80px; width: 80px;">
            <v-list-item-title class="headline m" style="text-align: center;">
                <strong style="font-size: 20px;">
                {{device.device.name}}
                </strong>
                </v-list-item-title>
            <v-card-actions>

            </v-card-actions>
        </v-list-item-content>
  
      </v-list-item>
    </v-card>
      </v-flex>
    </v-layout>

    <div style="font-size: 20px;">Available devices:</div>
      <v-layout row wrap>
      <v-flex xs5 md1 v-for="device in allDevices" :key="device.device.id" style="margin:10px">
      <v-card hover @click="addToRoutine(device)" style="height: 150px; width: 150px;">
      <v-list-item>
        <v-list-item-content>
            <img
            :src="require('../assets/holgi.jpeg')" style="height: 80px; width: 80px;">
            <v-list-item-title class="headline m" style="text-align: center;">
                <strong style="font-size: 20px;">
                {{device.device.name}}
                </strong>
                </v-list-item-title>
            <v-card-actions>

            </v-card-actions>
        </v-list-item-content>
  
      </v-list-item>
    </v-card>
      </v-flex>
    </v-layout>
      <v-footer app
      color="#FFFFFFFF">
        <table width = "100%"><tr><td
    style="width:50%"
    >
     <!-- <AddDevice></AddDevice> -->
     <v-btn rounded @click="saveRoutine();">Save Routine</v-btn>
    </td>
     <td
      style="text-align:right;width:50%">
        
       <!-- <DeleteRoom></DeleteRoom> -->
      <v-dialog
        v-model="dialog" max-width="300px" >
              <template v-slot:activator="{ on }">
                <v-btn
              
                rounded
             v-on="on">
                  <p style="margin:10px;color:#EC1801">
                      <v-icon
                      >mdi-delete</v-icon>
                       <big> Delete Routine </big></p>
                 </v-btn>
              </template>

        <v-card>
        <v-card-title>
          <span class="headline"><i><b>Are you sure you want to delete this routine?</b></i></span>
        </v-card-title>
        <!-- <v-card-text>
            If you delete the room all devices inside it will be lost

        </v-card-text>  -->
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-card-actions>
          <v-btn
            color="#F44336"
           @click="deleteRoutine;dialog = false;" :to="{ path: '/routines/'}">
           Yes
        
          </v-btn>
          <v-btn
          @click="dialog = false">
            No
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
    const $ = require('jquery');
    window.$ = $;
    export default {
    name: 'Routine',
    
    

    data: () => ({
      routineName:'',
      allDevices: [],
      devicesInRoutine: [],
      dialog: false,
}),

methods:{
  getRoutineName(id){
    window.api.routine.get(id).then(data=>{
      this.routineName = data.result.name;
  });
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
          device: {id: aux[i].id, name: aux[i].name},
          actionName: "",
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
  getDevicesInRoutine(id){
    window.api.routine.get(id).then(data=>{
        this.devicesInRoutine = data.result.actions;
        this.checkRepe();
    });
    
  },
  addToRoutine(device){
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
    for (var i = 0; i < this.devicesInRoutine.length;i++){
      var actionAux = {
        device: {id: this.devicesInRoutine[i].device.id},
        actionName: this.devicesInRoutine[i].actionName,
        params: this.devicesInRoutine[i].params,
        meta: this.devicesInRoutine[i].meta
      }
      actionsAux.push(actionAux);
    }
      var routine = {
        name: $('#rName').val(),
        actions: actionsAux,
        meta: {}
      };
      window.api.routine.modify(routine, this.$route.params.id);
    
  },
  // validate(){
  //   for (var i = 0; i < this.devicesInRoutine.length;i++){
  //     if(this.devicesInRoutine[i].actionName == ""){

  //     }
  //   }
  // }
  
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

