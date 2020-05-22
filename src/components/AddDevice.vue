<template>
  
            <v-dialog v-model="dialog1" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn rounded v-on="on">
                 <p style="margin:10px">
                      <v-icon
                      >mdi-plus</v-icon>
                       <big> Add device </big></p>

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
                      color="error"
                      class="mr-4"
                      @click="reset"
                      >
                      Reset Form
                      </v-btn>
                  </v-card-actions>
              </v-card>
            </v-dialog>
    
</template>

<script>
export default {
    data() {
        return{
        valid: true,
        name: '',
        dialog1: false,
        img: require('../assets/qmark.jpeg'),
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 16 characters',
        ],
        select: null,
        devices: [
        {text: 'Lamp', value: { img: require('../assets/lampF.png')}},
        {text: 'Vacuum', value: { img: require('../assets/vacuum.jpeg')}},
        {text: 'Door', value: { img: require('../assets/door.jpeg')}},
        {text: 'Oven', value: { img: require('../assets/oven.webp')}},
        {text: 'Speaker', value: { img: require('../assets/speaker.jpg')}},
        {text: 'Sprinkler', value: { img: require('../assets/sprinkler.jpeg')}},
        {text: 'Blind', value: { img: require('../assets/blind.jpeg')}},
    ],
    }
    },
    methods: {
    validate () {
      this.$refs.form.validate()
      this.dialog1 = false
      this.reset()
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