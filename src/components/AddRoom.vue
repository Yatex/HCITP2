<template>
    <v-card 
      class="mx-auto">
      <v-img class="align-end"
        max-width="500" height="200" :src="img">
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
        v => (v && v.length <= 15) || 'Name must be less than 16 characters',
        ],
        select: null,
        types: [
        {text: 'Living Room', value: { img: require('../assets/livingroom.png')}},
        {text: 'Kitchen', value: { img: require('../assets/kitchen.png')}},
        {text: 'Playroom', value: { img: require('../assets/playroom.png')}},
        {text: 'Bedroom', value: { img: require('../assets/bedroom.png')}},
        {text: 'Other', value: { img: require('../assets/room.png')}},
     
    ],
    }
    
    },
    methods: {
    validate () {
      this.$refs.form.validate()
      var aux = {
        name: this.name,
        meta: {type: this.select}
      }
      window.api.room.add(aux);
    },
    reset () {
      this.$refs.form.reset()
    },
    typeChange (image) {
        this.img = image
    }
}
}
</script>