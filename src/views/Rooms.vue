<template>
    <v-container class = "my-5" fluid>
      <v-layout row wrap>
        <v-flex xs5 md3 v-for="room in Rooms" :key="room.id">
          <roomCard v-bind:room="room" style="margin:10px;padding:10px" ></roomCard>
        </v-flex>
    </v-layout>
    <v-footer app
    color='#FFFFFF'>
    <v-card-text>
            <v-dialog v-model="dialog" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn
                rounded
                outlined
                text v-on="on">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>CREATE NEW ROOM </big></p>
                 </v-btn>
              </template>
              <AddRoom></AddRoom>
              </v-dialog>
          </v-card-text>
       </v-footer>   
    </v-container>
</template>


<script>
export default {

}
</script>




<script>
    
    import RoomCard from '../components/RoomCard';
    import AddRoom from '../components/AddRoom';
    export default {
    name: 'Rooms',
  

    components: {
 
      'roomCard':RoomCard,
      'AddRoom':AddRoom
    },

  
    data: () => ({

    Rooms: [],
    
    rooms: 0,

    timer:0
    
}),
methods: {
        getAllRooms(){
          window.api.room.getAll().then(data=>{
            this.Rooms = data.result;
          });
        },


      },

      created(){
              this.getAllRooms();
              this.timer = setInterval(this.getAllRooms,1000);
              console.log(this.Rooms);
          },
          update(){
              this.getAllRooms();
          },
          beforeDestroy(){
              clearInterval(this.timer);

          }
    };
</script>

