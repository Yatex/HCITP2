<template>
    <v-container fluid>
    <h1>{{$route.params.id}}</h1>
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
              <AddDevice></AddDevice>
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
    
    import AddDevice from '../components/AddDevice';
    export default {
    name: 'Room',
    
    props:{

        Devices: {
            type: Array,
            required: true
        }
    },

    components: {
        'AddDevice':AddDevice ,    
        },
    

    data: () => ({


    
}),

methods: () => ({

    addRoom: function(){

        this.rooms += 1;
    },
    
    


})
    };
</script>

