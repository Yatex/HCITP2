<template>
<v-container fluid>
   <h1> <div style="text-align: center; float: left; margin-left: 40%"><b><input type="text" id="rName" :value="roomName" disabled style="text-align: center; outline: none; font-size: 30px; border: 2px solid grey; border-radius: 25px;"></b></div>
    <div style="float:left; padding-top: 5px;"><v-btn rounded right icon @click="editRoomName"><v-icon size="30px">mdi-pencil</v-icon></v-btn></div>
    </h1>
     <div>
    <v-container class = "my-4" fluid>
      <v-layout row wrap>
        <v-flex style="margin: 10px" xs5 md5 v-for="device in devicesInRoom" :key="device.id">
        <DeviceCard v-bind:device="device" style="margin:10px;padding:10px" ></DeviceCard>
        </v-flex>
    </v-layout>
    </v-container>
    </div>
     <v-footer app
    color="#FFFFFFFF">
    <table width = "100%"><tr><td
    style="width:50%"
    >
     <AddDevice></AddDevice>
    </td>
     <td
      style="text-align:right;width:50%">
        
       <v-dialog
        v-model="dialog" max-width="300px" >
              <template v-slot:activator="{ on }">
                <v-btn
              
                rounded
             v-on="on">
                  <p style="margin:10px;color:#EC1801">
                      <v-icon
                      >mdi-delete</v-icon>
                       <big> Delete room </big></p>
                 </v-btn>
              </template>

        <v-card>
        <v-card-title>
          <span class="headline"><i><b>Are you sure?</b></i></span>
        </v-card-title>
        <v-card-text>
            If you delete the room all devices inside it will be lost

        </v-card-text> 
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-card-actions>
          <v-btn
            color="#F44336"
           @click="deleteRoom()"
           
           >
           delete
        
          </v-btn>
          <v-btn
          @click="dialog = false">
            Go back
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

export default {

}
</script>

<script>
    
    const $ = require('jquery');
    window.$ = $;
    import AddDevice from '../components/AddDevice';
    import DeviceCard from '../components/DeviceCard';


    export default {
    name: 'Room',
    
    props:{


    },

    components: {
        'AddDevice':AddDevice ,  
        'DeviceCard':DeviceCard
        },
    


   data: () => ({
    
        roomName:'',
        devicesInRoom:[],
        dialog: false
    
}),


methods:{
  getRoomName(id){
    window.api.room.get(id).then(data=>{
      this.roomName = data.result.name;
  });
  },

  deleteDevices()
  {

  for (var i = 0; i < this.devicesInRoom.length;i++){
      window.api.device.delete(this.devicesInRoom[i].id);
      }
    }
  ,


  deleteRoom()
  {
    this.dialog = false; 
    for (var i = 0; i < this.devicesInRoom.length;i++){
      window.api.device.delete(this.devicesInRoom[i].id);
      } 
    window.api.room.delete(this.$route.params.id);

  },

  editRoomName(){
      $('#rName').removeAttr('disabled');
      $('#rName').focus();
  },

  getDevicesInRoom(id){
    window.api.room.getDevicesInRoom(id).then(data=>{
        this.devicesInRoom = data.result;
    });
     
  }
},
    
created(){
  this.getRoomName(this.$route.params.id);
  this.getDevicesInRoom(this.$route.params.id);
},

updated(){
   this.getDevicesInRoom(this.$route.params.id);
},

 beforeDestroy(){
            
              this.devicesInRoom = null;

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


