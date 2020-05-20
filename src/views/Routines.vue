<template>
    <v-container class = "my-5" fluid>
      <v-layout row wrap>
        <v-flex xs5 md3 v-for="routine in Routines" :key="routine.id">
          <routineCard v-bind:routine="routine" ></routineCard>
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
export default {

}
</script>



<script>
    
    import RoutineCard from '../components/RoutineCard';
    import AddRoutine from '../components/AddRoutine';
    export default {
    name: 'Routines',
  

    components: {
 
      'routineCard':RoutineCard,
      'AddRoutine':AddRoutine
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

