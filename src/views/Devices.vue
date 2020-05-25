<template>
  <div class="devices">
    <v-container class = "my-4" fluid>
      <v-layout row wrap>
        <v-flex xs5 md3  style ="height:420px;" v-for="device in Devices" :key="device.id">
          <DeviceCard v-bind:device="device"  ></DeviceCard>
        </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import DeviceCard from '@/components/DeviceCard'

export default {
  name: 'Devices',
  components: {DeviceCard},
  data: () => ({
    Devices: [],
    device: '',
    amount: 0,
    timer:0
    
}),
methods: {
        getAllDevices(){
          window.api.device.getAll().then(data=>{
            this.Devices = data.result;
          });
        },
  },
        created(){
              this.getAllDevices();
              this.timer = setInterval(this.getAllDevices,1000);
              console.log(this.Devices);
          },
          update(){
              this.getAllDevices();
          },
          beforeDestroy(){
              clearInterval(this.timer);

          }
}
</script>