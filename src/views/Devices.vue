<template>
  <div class="devices">
    <AddDevice />
    <Lamp />
    <Door />
    <Vacuum />
    <Speaker />
    <Oven />
    <Sprinkler />
    <Blind />
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
import AddDevice from '@/components/AddDevice'

export default {
  name: 'Home',
  components: {Lamp, Door, Vacuum, Speaker, Sprinkler, Blind, Oven, AddDevice},
  data: () => ({
  //
  })
}
</script>