<template>
    <v-container fluid>
    <h1>{{$route.params.id}}</h1>




    <v-footer app
    color="#FFFFFFFF">
    <table width = "100%"><tr><td
    style="width:50%"
    >
            <v-dialog v-model="dialog1" max-width="150px">
              <template v-slot:activator="{ on }">
                <v-btn
                rounded 
                v-on="on">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>ADD NEW DEVICE </big></p>
                 </v-btn>
              </template>
              <AddDevice></AddDevice>
              </v-dialog>

        </td>
        <td
        style="text-align:right;width:50%">
        
       
        <v-dialog
        v-model="dialog" max-width="300px" >
              <template v-slot:activator="{ on }">
                <v-btn
              
                rounded
             v-on="on">
                  <p style="margin:10px;color:#EC1801">
                      <v-icon
                      >mdi-delete</v-icon>
                       <big> Delete room </big></p>
                 </v-btn>
              </template>

        <v-card>
        <v-card-title>
          <span class="headline"><i>Are you sure?</i></span>
        </v-card-title>
        <v-card-text>
            If you delete the room all devices inside it will be lost

        </v-card-text> 
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-card-actions>
          <v-btn
            color="#F44336"
           @click="dialog = false">
           delete
        
          </v-btn>
          <v-btn
          @click="dialog = false">
            Go back
          </v-btn>
        </v-card-actions>
         </v-card>
        </v-dialog>
    
      </td>
      </tr>
      </table>
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
    

    data () {
      return {
        dialog: false,
        dialog1:false
      }
    },


methods: () => ({

    addRoom: function(){

        this.rooms += 1;
    },
    
    


})
    };
</script>

