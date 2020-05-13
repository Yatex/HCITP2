<template>
    <v-container fluid>
    <h1>{{$route.params.id}}</h1>
    </v-container>    

</template>




<script>
export default {

}
</script>

<script>
    
    export default {
    name: 'Room',
    
    props:{

        Devices: {
            type: Array,
            required: true
        }
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

