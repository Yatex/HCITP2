<template>
    <v-container fluid>
    <h1>{{$route.params.id}}</h1>




    <v-footer app
    color="#FFFFFFFF">
    <table width = "100%"><tr><td
    style="width:50%"
    >
     <AddDevice></AddDevice>
    </td>
     <td
      style="text-align:right;width:50%">
        
       <DeleteRoom></DeleteRoom>
    
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
    import DeleteRoom from '../components/DeleteRoom';
    export default {
    name: 'Room',
    
    props:{


    },

    components: {
        'AddDevice':AddDevice ,  
        'DeleteRoom':DeleteRoom 
        },
    

    data () {
  
    },


    methods() {


    }
    
    
    };
</script>

