
<template>
<v-card :to="{ path: '/routines/' + routine.id}" hover>
      <v-list-item
            >
        <v-list-item-content>
            <img
            :src="require('../assets/relojArena.jpeg')"
            height = 200px
            width>
            <v-list-item-title class="headline m" style="text-align: center;">
                <strong>
                {{routine.name}}
                </strong>
                </v-list-item-title>
            <v-spacer></v-spacer>
            <v-card-actions>
            <v-flex style="text-align: center">
            <v-btn  @click="snackbar = true" icon color="green" :to="'/routines/'" >
                <v-icon>{{'mdi-power'}}</v-icon>
            </v-btn>
            </v-flex>
            </v-card-actions>
        </v-list-item-content>
      </v-list-item>
     <v-snackbar color=success v-model="snackbar" :timeout="2000" >
            Routine "{{routine.name}}" Activated
            <v-btn text @click="snackbar = false" :to="'/routines/'" >
                X
            </v-btn>
        </v-snackbar>
    </v-card>
    
 </template>







<script>
    
    export default {
    name: 'RoutineCard',
    
    props: {

        routine:{
        }
    },

    data: () => ({


    
}),




methods: {
  

}
    };
</script>
