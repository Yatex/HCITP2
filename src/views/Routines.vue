<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs5 md2 v-for="routine in routines" :key="routine.name">
        <routineCard v-bind:routine="routine" style="margin:10px;"></routineCard>
      </v-flex>
    </v-layout>
    <v-footer app color='#FFFFFF'>
              <AddRoutine></AddRoutine>
       </v-footer>   
    </v-container>
</template>


<script>
import RoutineCard from '../components/RoutineCard.vue';
import AddRoutine from '../components/AddRoutine.vue';
  export default {
    name: 'Routines',
  

    components: {
 
      'routineCard':RoutineCard,
      'AddRoutine':AddRoutine
    },

  
    data: () => ({

      routines: [],

      timer:0,
          
      cant: 0
    
      }),

      methods: {
        getAllRoutines(){
          window.api.routine.getAll().then(data=>{
            this.routines = data.result;
          });
        },


      },

      created(){
              this.getAllRoutines();
              this.timer = setInterval(this.getAllRoutines,1000);
              //console.log(this.routines);
          },
          update(){
              this.getAllRoutines();
          },
          beforeDestroy(){
              clearInterval(this.timer);

          }
    };
</script>

