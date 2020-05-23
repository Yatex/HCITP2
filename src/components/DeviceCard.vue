<template>
    <div id="deviceCard">
        <Lamp v-if=" device.type.id === 'go46xmbqeomjrsjr'"/>
        <Oven v-else-if="device.type.id === 'im77xxyulpegfmv8'"/>
        <Door v-else-if="device.type.id === 'lsf78ly0eqrjbz91'"/>
        <Speaker v-else-if="device.type.id === 'c89b94e8581855bc'"/>
        <Blind v-else-if="device.type.id === 'eu0v2xgprrhhg41g'"/>
        <Sprinkler v-else-if="device.type.id === 'dbrlsh7o5sn8ur4i'"/>
        <Vacuum v-else-if="device.type.id === 'ofglvd9gqx8yfl3l'"/>
    </div>
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
        }
    }
  }
</script>