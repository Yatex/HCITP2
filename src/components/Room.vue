<template>
<v-container fluid>
    <div style="text-align: center; float: left; margin-left: 40%"><b><input type="text" id="rName" :value="roomName" disabled style="text-align: center; outline: none; font-size: 30px; border: 2px solid grey; border-radius: 25px;"></b></div>
    <div style="float:left; padding-top: 5px;"><v-btn rounded right icon @click="editRoomName"><v-icon size="30px">mdi-pencil</v-icon></v-btn></div>
    <br style="clear: both;">
    <v-layout row wrap>
      <v-flex style="margin: 10px" xs5 md1 v-for="device in devicesInRoom" :key="device.id">
      <v-card hover style="margin: 10px; height: 300px; width: 300px;">
      <v-list-item>
        <v-list-item-content>
            <img
            :src="require('../assets/holgi.jpeg')" style="height: 80px; width: 80px;">
            <v-list-item-title class="headline m" style="text-align: center;">
                <strong>
                {{device.name}}
                </strong>
                </v-list-item-title>çrrffe
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
     <AddDevice></AddDevice>
    </td>
     <td
      style="text-align:right;width:50%">
        
       <DeleteRoom></DeleteRoom>
    
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
    
    import AddDevice from '../components/AddDevice';
    import DeleteRoom from '../components/DeleteRoom';
    export default {
    name: 'Room',
    
    props:{


    },

    components: {
        'AddDevice':AddDevice ,  
        'DeleteRoom':DeleteRoom 
        },
    


   data: () => ({
    
        roomName:'',
        devicesInRoom:[]
    
}),


methods:{
  getRoomName(id){
    window.api.room.get(id).then(data=>{
      this.roomName = data.result.name;
  });
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

 beforeDestroy(){
            
              this.devicesInRoom = null;

          }
    };
</script>


