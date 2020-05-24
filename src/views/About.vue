<template>
  <div class="about">
    <h1 class="header my-5 ma-5">About Us</h1>
    <v-row align="center" justify="center">
      <v-img aspect-ratio="1" max-width="500" :src="require('../assets/vac-png-4.png')"></v-img>
    </v-row>
    <h2 class="subheading my-5 ma-5">Team</h2>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-img :src="person.img" aspect-ratio="1"></v-img>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.legajo }}</div>
            </v-card-text>
          </v-card>          
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      team: [
        {name: 'Luca La Mattina', legajo: '57093', img: require('../assets/lucaLM.jpeg')},
        {name: 'Rodrigo Fera', legajo: '58079', img: require('../assets/rodri.jpeg')},
        {name: 'Holger Donath', legajo: '58110', img: require('../assets/holgi.jpeg')},
        {name: 'Felipe Oliver', legajo: '58439', img: require('../assets/felo.jpeg')},
      ]
    }
  }
}
</script>