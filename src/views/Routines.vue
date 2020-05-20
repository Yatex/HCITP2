<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs5 md2 v-for="routine in routines" :key="routine.id">
        <routineCard v-bind:routine="routine" style="margin:10px;"></routineCard>
      </v-flex>
    </v-layout>
    <v-btn @click="aloja()">Clickeame Perri </v-btn>
  </v-container>
</template>

<script>
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

      methods: {
        getAllRoutines(){
          window.api.routine.getAll();
        },
        aloja(){
          console.log("aloja");
        }


      },

      created(){
              this.getAllRoutines();
              this.timer = setInterval(this.getAllRoutines(),1000);
              console.log(this.routines);
              this.aloja();

          },
          update(){
              this.getAllRoutines();
          },
          beforeDestroy(){
              clearInterval(this.timer);

          }
    };
</script>