<template>
<v-card :to="{ path: '/rooms/' + room.id}"
    
      flat
      hover 
      >
      <v-list-item
            >
        <v-list-item-content>
            <img v-if="room.type == 'Kitchen'"
            :src="require('../assets/kitchen.png')"
            height = 200px
            width>
            <img v-else-if="room.type == 'Living Room'"
            :src="require('../assets/livingroom.png')"
            height = 200px
            width>
            <img v-else-if="room.type == 'Bedroom'"
            :src="require('../assets/bedroom.png')"
            height = 200px
            width>
            <img v-else
            :src="require('../assets/other.png')"
            height = 200px
            width>
         <v-list-item-title class="headline m"> 
            <strong>
              {{room.id}}
              </strong>
              </v-list-item-title>
      
        </v-list-item-content>
  
      </v-list-item>
    </v-card>
 </template>


 <script>
export default {

}
</script>

<script>
    
    export default {
    name: 'RoomCard',
    
    props: {

        room:{
        }
    },

    data: () => ({


    
}),

methods: () => ({

    addRoom: function(){

        this.rooms += 1;
    },
    
    


})
    };
</script>
