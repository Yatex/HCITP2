<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs5 md2 v-for="routine in routines" :key="routine.id">
        <routineCard v-bind:routine="routine" style="margin:10px;"></routineCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import api from '../../public/api'
import RoutineCard from '../components/RoutineCard.vue';
    export default {
    name: 'Routines',
  

    components: {
      'routineCard':RoutineCard
    },

  
    data: () => ({

      routines: 
          [
              {id: 'Goodnight', type:'Bedroom'},
              {id: 'Goodmorning', type:'Living Room'},
              {id: 'Leaving', type:'Kitchen'},
              {id: 'Vacation', type:'Other'},
              {id: 'Vacation', type:'Other'},
              {id: 'Vacation', type:'Other'},
              {id: 'Vacation', type:'Other'},
              {id: 'Vacation', type:'Other'},
              {id: 'Vacation', type:'Other'},
              {id: 'Vacation', type:'Other'},
          ],
          
      cant: 0,
    
    
}),

methods: () => ({
  // getAllRoutines: function(){
  //   api.routine.getAll().then( data=> {
  //     this.routines = data;
  //   }).catch(
  //       err => {
  //         console.log(err);
  //       });
  // },


}),

// created(){
//         this.getAllRoutines;
//         this.timer = setInterval(this.getAllRoutines,1000);
//         console.log(this.routines)

//     },
//     update(){
//         this.getAllRoutines();
//     },
//     beforeDestroy(){
//         clearInterval(this.timer);

//     }
    };
</script>