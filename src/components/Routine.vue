<template>
    <v-container fluid>
    <div style="text-align: center; float: left; margin-left: 40%"><b><input type="text" id="rName" :value="routineName" disabled style="text-align: center; outline: none; font-size: 30px; border: 2px solid grey; border-radius: 25px;"></b></div>
    <div style="float:left; padding-top: 5px;"><v-btn rounded right icon @click="editRoutineName"><v-icon size="30px">mdi-pencil</v-icon></v-btn></div>
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
    const $ = require('jquery');
    window.$ = $;
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
  },
  editRoutineName(){
      $('#rName').removeAttr('disabled');
      $('#rName').focus();
  }
},
    
created(){
  this.getRoutineName(this.$route.params.id);
}
    };
</script>

