<template>
        <Lamp v-bind:dev="dev" v-if=" device.type.id === 'go46xmbqeomjrsjr'"/>
        <Oven v-bind:dev="dev" v-else-if="device.type.id === 'im77xxyulpegfmv8'"/>
        <Door v-bind:dev="dev" v-else-if="device.type.id === 'lsf78ly0eqrjbz91'"/>
        <Speaker v-bind:dev="dev" v-else-if="device.type.id === 'c89b94e8581855bc'"/>
        <Blind v-bind:dev="dev" v-else-if="device.type.id === 'eu0v2xgprrhhg41g'"/>
        <Sprinkler v-bind:dev="dev" v-else-if="device.type.id === 'dbrlsh7o5sn8ur4i'"/>
        <Vacuum v-bind:dev="dev" v-else-if="device.type.id === 'ofglvd9gqx8yfl3l'"/>
    
</template>

<script>
// @ is an alias to /src
import Lamp from '@/components/Lamp'
import Door from '@/components/Door'
import Vacuum from '@/components/Vacuum'
import Speaker from '@/components/Speaker'
import Sprinkler from '@/components/Sprinkler'
import Blind from '@/components/Blind'
import Oven from '@/components/Oven'

export default {
  name: 'deviceCard',
  components: {Lamp, Door, Vacuum, Speaker, Sprinkler, Blind, Oven},
  props: {

        device:{
            
        }
    },
  data() {
        return{
            dev: this.device,
        }
    }
  }
</script>
