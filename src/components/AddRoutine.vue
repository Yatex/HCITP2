<template>
    <v-container fluid>

<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
       <big> Select routine name</big>
      <small>No repeated names please!</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <p
        style="padding:10px">
    <input v-model="RoutineName" placeholder="Enter routine name">
    </p>
      <v-btn dark v-on:click="e6 = 2">Continue</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
        <big>Select devices you want to add to the routine</big></v-stepper-step>

    <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-12" height="400px"></v-card>
        <v-btn dark @click="e6 = 3">Continue</v-btn>
        <v-btn style = "margin-left:10px" color="FFFFFFFF" @click="e6 = 1">Back</v-btn>
    </v-stepper-content>
    
    <v-stepper-step :complete="e6 > 3" step="3">
        <big>Finish</big>
    </v-stepper-step>    
    
    <v-stepper-content step="3">
      <v-btn dark >Create Routine</v-btn>
      <v-btn style = "margin-left:10px" color="FFFFFFFF" @click="e6 = 2">Back</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>


    </v-container>    
</template>

<script>
export default {
    
}
</script>


<script>
export default {
    name: 'CreateRoutine',

    data () {
      return {
        e6: 1,
      }
    },
    
}
</script>


