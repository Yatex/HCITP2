<template>
    <div id="deviceCard">
        <Lamp v-if="whichDevice === 'L'"/>
        <Oven v-else-if="whichDevice === 'O'"/>
        <Door v-else-if="whichDevice === 'D'"/>
        <Speaker v-else-if="whichDevice === 'S'"/>
        <Blind v-else-if="whichDevice === 'B'"/>
        <Sprinkler v-else-if="whichDevice === 'P'"/>
        <Vacuum v-else-if="whichDevice === 'V'"/>
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
  data() {
        return{
            whichDevice: "S",
        }
    }
  }
</script>