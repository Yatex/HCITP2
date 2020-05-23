<template>
    <v-container fluid>
      <div style="text-align: center; float: left; margin-left: 40%"><b><input type="text" id="rName" :value="routineName" disabled style="text-align: center; outline: none; font-size: 30px; border: 2px solid grey; border-radius: 25px;"></b></div>
      <div style="float:left; padding-top: 5px;"><v-btn rounded right icon @click="editRoutineName"><v-icon size="30px">mdi-pencil</v-icon></v-btn></div>
      <br style="clear: both;">
      <div style="font-size: 20px;">Added devices:</div>
      <v-layout row wrap>
      <v-flex xs5 md3 v-for="device in devicesInRoutine" :key="device.device.id">
      <v-card hover style="margin: 10px; height: 150px; width: 150px;">
      <v-list-item>
        <v-list-item-content>
            <img
            :src="require('../assets/holgi.jpeg')" style="height: 80px; width: 80px;">
            <v-list-item-title class="headline m" style="text-align: center;">
                <strong>
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
      <v-flex xs5 md3 v-for="device in allDevices" :key="device.id">
      <v-card hover style="margin: 10px; height: 150px; width: 150px;">
      <v-list-item>
        <v-list-item-content>
            <img
            :src="require('../assets/holgi.jpeg')" style="height: 80px; width: 80px;">
            <v-list-item-title class="headline m" style="text-align: center;">
                <strong>
                {{device.name}}
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
      timer: 0,
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
      this.allDevices = data.result;
    });
    this.checkRepe();
  },
  checkRepe(){
    var device;
    var otherDevice;
    for (var i = 0; i < this.allDevices.length; i++){
      device = this.allDevices[i];
      for(var j = 0; j < this.devicesInRoutine.length; j++){
        otherDevice = this.devicesInRoutine[j];
        if(device.id == otherDevice.device.id){
          this.allDevices.splice(i,1);
          console.log("BORRATE HDP LA PUTA MADRE");
        }
      }
    }
  },
  getDevicesInRoutine(id){
    window.api.routine.get(id).then(data=>{
        this.devicesInRoutine = data.result.actions;
    });
    
  }
  
},

created(){
  this.getRoutineName(this.$route.params.id);
  this.getDevicesInRoutine(this.$route.params.id);
  this.getAvailableDevices();
  this.checkRepe();
  this.timer = setInterval(this.getAllRoutines,1000);
},
update(){
  this.getRoutineName(this.$route.params.id);
  this.getDevicesInRoutine(this.$route.params.id);
  this.getAvailableDevices();
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

