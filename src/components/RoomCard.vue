<template>
<v-card :to="{ path: '/rooms/' + room.id}"
    
      hover 
      rounded
      >
      <v-list-item
            >
        <v-list-item-content>
            <img 
            :src="room.meta.type.img"
            height = "200px"
            >
         <v-list-item-title class="headline m"
         style="text-align: center;"> 
            <strong>
              {{room.name}}
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

    data() {
        return {

        }
},

methods: () => ({

    addRoom: function(){

        this.rooms += 1;
    },
    
    


})
    };
</script>
