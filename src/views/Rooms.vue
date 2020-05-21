<template>
    <v-container class = "my-5" fluid>
      <v-layout row wrap>
        <v-flex xs5 md3 v-for="room in Rooms" :key="room.id">
          <roomCard v-bind:room="room" ></roomCard>
        </v-flex>
    </v-layout>
    <v-footer app
    color='#FFFFFF'>
    <v-card-text>
            <v-dialog v-model="dialog" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn
                rounded
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

    Rooms: 
    [
        {id: 'Cuarto', type:'Bedroom'},
        {id: 'Living', type:'Living Room'},
        {id: 'Cocina', type:'Kitchen'},
        {id: 'Playroom', type:'Other'},
    ],
    
    rooms: 0,
    
}),

methods: () => ({

    addRoom: function(){

        this.rooms += 1;
    },
    
    


})
    };
</script>

