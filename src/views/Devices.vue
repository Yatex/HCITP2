<template>
  <div class="devices">
    <v-container class = "my-4" fluid>
      <v-layout row wrap>
        <v-flex xs5 md3 v-for="device in Devices" :key="device.id">
          <DeviceCard v-bind:device="dev" style="margin:10px;padding:10px" ></DeviceCard>
        </v-flex>
    </v-layout>
    </v-container>
    <v-footer app
    color="#FFFFFF">
    
    <AddDevice></AddDevice>

    </v-footer>  
  </div>
</template>

<script>
// @ is an alias to /src
import DeviceCard from '@/components/DeviceCard'
import AddDevice from '@/components/AddDevice'

export default {
  name: 'Devices',
  components: {AddDevice, DeviceCard},
  data: () => ({
    Devices: [],
    dev: '',
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