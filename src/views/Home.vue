<template>
  <div class="home">
    <h1>HomePage</h1>
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn dark color="pink">click me</v-btn>
    <Lamp />
  </div>
</template>

<script>
// @ is an alias to /src
import Lamp from '@/components/Lamp'

export default {
  name: 'Home',
  components: {Lamp},
  data: () => ({
  //
  }),
  
}
</script>
