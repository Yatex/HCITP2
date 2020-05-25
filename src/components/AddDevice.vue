<template> 
  <v-card-text>
            <v-dialog v-model="dialog1" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn rounded v-on="on" dark color="grey darken-4">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>Add New Device </big></p>
                 </v-btn>
              </template>
              <v-card 
                class="mx-auto">
                <v-img class="align-end"
                  max-width="500" height="200" :src="img">
                </v-img>
                <v-card-title>Add Device</v-card-title>
                <v-card-text>
                  <v-form
                      ref="form"
                      v-model="valid"
                      :lazy-validation="lazy"
                  >
                      <v-text-field
                      v-model="name"
                      :counter="15"
                      :rules="nameRules"
                      label="Name of Device"
                      required
                      ></v-text-field>
              
                      <v-select
                      v-model="select"
                      :items="devices"
                      :rules="[v => !!v || 'Item is required']"
                      label="Type of Device"
                      required
                      v-on:change="devChange(select.img)"
                      ></v-select>
                  </v-form>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="validate"
                      >
                      Create Device
                      </v-btn>
              
                      <v-btn
                      
                      class="mr-4"
                      @click="reset"
                      >
                      Reset
                      </v-btn>
                  </v-card-actions>
              </v-card>
            </v-dialog>
  </v-card-text>
</template>

<script>
export default {
    data() {
        return{
        valid: true,
        name: '',
        deviceId:'',
        dialog1: false,
        img: require('../assets/qmark.jpeg'),
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 16 characters',
        ],
        select: null,
        devices: [
        {text: 'Lamp', value: { img: require('../assets/lampF.png'), type:'go46xmbqeomjrsjr'}},
        {text: 'Vacuum', value: { img: require('../assets/vacuum2.jpeg'), type:'ofglvd9gqx8yfl3l' }},
        {text: 'Door', value: { img: require('../assets/door3.jpeg'), type:'lsf78ly0eqrjbz91'}},
        {text: 'Oven', value: { img: require('../assets/oven.webp'), type:'im77xxyulpegfmv8'}},
        {text: 'Speaker', value: { img: require('../assets/speaker.jpg'), type:'c89b94e8581855bc'}},
        {text: 'Faucet', value: { img: require('../assets/faucet.jpeg'), type: 'dbrlsh7o5sn8ur4i'}},
        {text: 'Blind', value: { img: require('../assets/blind.jpeg'), type:'eu0v2xgprrhhg41g'}},
    ],
    }
    },
    methods: {
    validate () {
      this.$refs.form.validate()
      this.dialog1 = false
      var aux =
      {
        name: this.name,
        type: {id: this.select.type},
        meta:{type: this.select}

      }
       window.api.device.add(aux).then(data=>{
        this.deviceId = data.result.id


        window.api.room.addDeviceToRoom(this.$route.params.id,data.result.id);
        this.reset()
      });
      

    },
    reset () {
      this.$refs.form.reset()
      this.img = require('../assets/qmark.jpeg')
    },
    devChange (image) {
        this.img = image
    }
}
}
</script>


      //   .then(data=>{
      //   this.deviceId = data.result.id


      //   window.api.room.addDeviceToRoom(this.$route.params.id,this.deviceId)