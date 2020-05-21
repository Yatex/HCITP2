<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs5 md2 v-for="routine in routines" :key="routine.name">
        <routineCard v-bind:routine="routine" style="margin:10px;"></routineCard>
      </v-flex>
    </v-layout>
    <v-footer app color='#EEEEEE'>
    <v-card-text>
            <v-dialog v-model="dialog" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn
                rounded
                text v-on="on">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>CREATE NEW ROUTINE</big></p>
                 </v-btn>
              </template>
              <AddRoutine></AddRoutine>
              </v-dialog>
          </v-card-text>
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
          
      cant: 0,
    
    rooms: 0,
    
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
              console.log(this.routines);
          },
          update(){
              this.getAllRoutines();
          },
          beforeDestroy(){
              clearInterval(this.timer);

          }
    };
</script>

