<template>
    <v-container class = "my-5" fluid>
      <v-layout row wrap>
        <v-flex xs5 md3 v-for="room in Rooms" :key="room.id">
          <roomCard v-bind:room="room" ></roomCard>
    </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>




<script>
    
    import RoomCard from '../components/RoomCard.vue';
    export default {
    name: 'Rooms',
  

    components: {
 
      'roomCard':RoomCard
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

