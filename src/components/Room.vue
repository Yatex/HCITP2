<template>
<v-container fluid>
   <h1>
      <div style="text-align: center; float: left; margin-left: 40%"><b><input type="text" id="rName" :value="roomName" disabled style="text-align: center; outline: none; font-size: 30px; border: 2px solid grey; border-radius: 25px;"></b></div>
      <div  v-show="!toggle" style="float:left; padding-top: 5px;"><v-btn rounded right icon @click="editRoomName();toggle=!toggle"><v-icon size="30px">mdi-pencil</v-icon></v-btn></div>
      <div  v-show="toggle" style="float:left; padding-top: 5px"><v-btn 
      rounded right icon @click="saveName();toggle = !toggle">
      <v-icon 
      style = "color:#8BC34A" size="30px">mdi-checkbox-marked-circle</v-icon></v-btn></div>
      </h1>
      <br style="clear: both;">
    <v-container class = "my-5" fluid>
      <v-layout row wrap>
        <v-flex xs5 md3 style="height:420px" v-for="device in devicesInRoom" :key="device.id">
        <DeviceCard v-bind:device="device" style="margin:10px;padding:10px" ></DeviceCard>
        </v-flex>
    </v-layout>
    </v-container>

     <v-footer app
    color="#FFFFFFFF">
    <table width = "100%"><tr><td
    style="width:50%"
    >
     <v-dialog v-model="dialog1" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn rounded v-on="on" dark color="grey darken-4">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>Add Device </big></p>
                 </v-btn>
              </template>
              <v-card 
                class="mx-auto">
                <v-img class="align-end"
                  max-width="500" height="300px" :src="img">
                </v-img>
                <v-card-title>Add Device</v-card-title>
                <v-spacer></v-spacer>
                <v-card-subtitle>Note: no repeteaed names allowed, your device will not be added unless this condition is met</v-card-subtitle>
                <v-card-text>
                  <v-form
                      ref="form"
                      v-model="valid"
                      :lazy-validation="lazy"
                  >
                      <v-text-field
                      v-model="name"
                      :counter="15"
                      :rules="nameRules"
                      label="Name of Device"
                      required
                      ></v-text-field>
              
                      <v-select
                      v-model="select"
                      :items="devices"
                      :rules="[v => !!v || 'Item is required']"
                      label="Type of Device"
                      required
                      v-on:change="devChange(select.img)"
                      ></v-select>
                  </v-form>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="validate"
                      >
                      Create Device
                      </v-btn>
              
                      <v-btn
                      
                      class="mr-4"
                      @click="reset"
                      >
                      Reset
                      </v-btn>
                  </v-card-actions>
              </v-card>
            </v-dialog>
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
           @click="deleteRoom();dialog = false;$router.push({ path: '/rooms' });"
           
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

        toggle: true,
        valid: true,
        name: '',
        deviceId:'',
        dialog1: false,
        img: require('../assets/qmark.jpeg'),
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15 && v.length >=3) || 'Name must be between 3 and 16 characters',
        ],
        select: null,
        devices: [
        {text: 'Lamp', value: { img: require('../assets/lampF.png'), type:'go46xmbqeomjrsjr'}, letter: 'L'},
        {text: 'Vacuum', value: { img: require('../assets/vacuum2.jpeg'), type:'ofglvd9gqx8yfl3l' }, letter: 'V'},
        {text: 'Door', value: { img: require('../assets/door3.jpeg'), type:'lsf78ly0eqrjbz91'}, letter: 'D'},
        {text: 'Oven', value: { img: require('../assets/oven.webp'), type:'im77xxyulpegfmv8'}, letter: 'O'},
        {text: 'Speaker', value: { img: require('../assets/speaker.jpg'), type:'c89b94e8581855bc'}, letter: 'S'},
        {text: 'Sprinkler', value: { img: require('../assets/sprinkler.jpeg'), type: 'dbrlsh7o5sn8ur4i'}, letter: 'P'},
        {text: 'Blind', value: { img: require('../assets/blind.jpeg'), type:'eu0v2xgprrhhg41g'}, letter: 'B'},
    ],
        toggle: false,
        roomName:'',
        devicesInRoom:[],
        dialog: false,
        roomie: {name:'',   meta:{}},
        routeId:'',
    
}),


methods:{

  getRoom(id){
    window.api.room.get(id).then(data=>{
      this.roomie.name = data.result.name;
      this.roomie.meta = data.result.meta;
  });

  },
  getRoomName(id){
    window.api.room.get(id).then(data=>{
      this.roomName = data.result.name;
  });
  },

   validate () {
      this.$refs.form.validate()
      this.dialog1 = false
      var aux =
      {
        name: this.name,
        type: {id: this.select.type},
        meta:{type: this.select}
      

      }

       window.api.device.add(aux).then(data=>{
        this.deviceId = data.result.id


        window.api.room.addDeviceToRoom(this.$route.params.id,this.deviceId).then(datas=>{window.api.room.getDevicesInRoom(this.$route.params.id).then(datas=>{
        this.devicesInRoom = datas.result;  })
       
      });
      
    })
      
      this.reset();      

    },

    saveName(){
    
    this.roomie.name= $('#rName').val()
    window.api.room.modify(this.roomie,this.$route.params.id).then(data=>{this.getRoomName(this.$route.params.id)})
     if(!$('#rName').attr('disabled')){
        $('#rName').attr('disabled', true);
      }
   
  
    
    },
    
  
      
  

    reset () {
      this.$refs.form.reset()
      this.img = require('../assets/qmark.jpeg')
    },
    devChange (image) {
        this.img = image
    },

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
  this.getRoom(this.$route.params.id);

},

updated(){


},

mounted() {

  
    this.eventHub.$on('deleted', data => {
        console.log(this.$route.params.id);
        this.devicesInRoom = []
        this.getDevicesInRoom(this.$route.params.id)
    });
}






    };


</script>




