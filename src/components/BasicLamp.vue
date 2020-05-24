<template>
<v-card
      class="mx-auto"
      width="300"
      height="350"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require('../assets/lampF.png')"
      >
      </v-img>
      <v-card-title>{{ product }}</v-card-title>
      </v-card>
</template>      

<script>
export default {
    data() {
        return{
            product: 'Lamp',
        }
    },
};
</script>