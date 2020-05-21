<template>
<v-card outlined>
      <v-list-item
            >
        <v-list-item-content>
            <img v-if="routine.name == 'kdankjdjkakl'"
            :src="require('../assets/kitchen.png')"
            height = 200px
            width>
            <img v-else
            :src="require('../assets/holgi.jpeg')"
            height = 200px
            width>
            <v-list-item-title class="headline m" style="text-align: center;"> 
                <strong>
                {{routine.name}}
                </strong>
                </v-list-item-title>
            <v-spacer></v-spacer>
            <v-card-actions>
            <v-btn icon color="green">
                <v-icon>{{'mdi-power'}}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn icon color="black">
              <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
            </v-card-actions>
        </v-list-item-content>
  
      </v-list-item>
    </v-card>
 </template>


 <script>
export default {

}
</script>

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
