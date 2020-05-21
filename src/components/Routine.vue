<template>
    <v-container fluid>
    <div style="text-align: center;"><b><input type="text" :value="routineName" style="text-align: center; font-size: 30px; border: 2px solid grey; border-radius: 25px;"></b></div>
    
    <v-footer app
    color="#FFFFFFFF">
      <v-card-text>
            <v-dialog v-model="dialog" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn
                rounded
                right
                text v-on="on">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>ADD NEW DEVICE </big></p>
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
    name: 'Routine',
    
    props:{

        Devices: {
            type: Array,
            required: true
        }
    },
    

    data: () => ({
      routineName:''


    
}),

methods:{
  getRoutineName(id){
    window.api.routine.get(id).then(data=>{
      this.routineName = data.result.name;
  });
}
    
    


},
created(){
  this.getRoutineName(this.$route.params.id);
}
    };
</script>

