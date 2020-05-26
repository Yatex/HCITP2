<template>
            <v-dialog v-model="dialog" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn
                dark
                rounded
                color="grey darken-4"
               v-on="on">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>CREATE NEW ROOM </big></p>
                 </v-btn>
              </template>
    <v-card 
      class="mx-auto">
      <v-img class="align-end"
        max-width="500" height="300px" :src="img">
      </v-img>
      <v-card-title>New Room</v-card-title>
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
            label="Room name"
            required
            ></v-text-field>
    
            <v-select
            v-model="select"
            :items="types"
            :rules="[v => !!v || 'Item is required']"
            label="Room Type"
            required
            v-on:change="typeChange(select.img)"
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
            Create Room
            </v-btn>
    
            <v-btn
            color="#FFFFFFFF"
            class="mr-4"
            @click="reset"
            >
            Reset
            </v-btn>
        </v-card-actions>
    </v-card>
      </v-dialog>
</template>

<script>
export default {

    name:'Addroom',

    data() {
        return{
        valid: true,
        name: '',
        img: require('../assets/qmark.jpeg'),
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15 && v.length >=3) || 'Name must be between 3 and 16 characters',
        ],
        select: null,
        types: [
        {text: 'Living Room', value: { img: require('../assets/livingroom.png')}},
        {text: 'Kitchen', value: { img: require('../assets/kitchen.png')}},
        {text: 'Playroom', value: { img: require('../assets/playroom.png')}},
        {text: 'Bedroom', value: { img: require('../assets/bedroom.png')}},
        {text: 'Other', value: { img: require('../assets/room.png')}},
     
    ],
    dialog: false
    }
    
    },
    methods: {
    validate () {
      this.dialog = false
      this.$refs.form.validate()
      var aux = {
        name: this.name,
        meta: {type: this.select}
      }
      window.api.room.add(aux);
      this.reset();
    },
    reset () {
      this.$refs.form.reset()
      this.img = require('../assets/qmark.jpeg')
    },
    typeChange (image) {
        this.img = image
    }
}
}
</script>