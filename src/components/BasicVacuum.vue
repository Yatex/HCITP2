<template>
<v-card
      class="mx-auto"
      width="300"
      height="350"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require('../assets/vacuum2.jpeg')"
      >
      </v-img>
      <v-card-title>{{ product }}</v-card-title>
       <v-card-subtitle>
      <i>You will be able to manipulate the device once it is properly added and saved</i>
       </v-card-subtitle>
      </v-card>
</template>      

<script>
export default {
    data() {
        return{
            product: 'Vacuum',
        }
    },
};
</script>