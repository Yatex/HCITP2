<template>
    
        <BasicLamp v-if=" device.type.id === 'go46xmbqeomjrsjr'"/>
        <!-- <BasicOven v-else-if="device.type.id === 'im77xxyulpegfmv8'"/> -->
        <BasicDoor v-else-if="device.type.id === 'lsf78ly0eqrjbz91'"/>
        <BasicSpeaker v-else-if="device.type.id === 'c89b94e8581855bc'"/>
        <BasicBlind v-else-if="device.type.id === 'eu0v2xgprrhhg41g'"/>
        <BasicSprinkler v-else-if="device.type.id === 'dbrlsh7o5sn8ur4i'"/>
        <BasicVacuum v-else-if="device.type.id === 'ofglvd9gqx8yfl3l'"/>
    
</template>

<script>
// @ is an alias to /src
import BasicLamp from '@/components/BasicLamp'
import BasicDoor from '@/components/BasicDoor'
import BasicVacuum from '@/components/BasicVacuum'
import BasicSpeaker from '@/components/BasicSpeaker'
import BasicSprinkler from '@/components/BasicSprinkler'
import BasicBlind from '@/components/BasicBlind'
// import Basic0ven from '@/components/BasicOven'

export default {
  name: 'BasicDeviceCard',
  components: {BasicLamp, BasicDoor, BasicVacuum, BasicSpeaker, BasicSprinkler, BasicBlind, },
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