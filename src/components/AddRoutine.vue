<template>
    <v-card-text>
            <v-dialog v-model="dialog" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn rounded v-on="on" dark color="grey darken-4">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>CREATE NEW ROUTINE</big></p>
                 </v-btn>
            </template>
    <v-card 
      class="mx-auto">
      <v-img class="align-end"
        max-width="500" height="200" :src="img">
      </v-img>
      <v-card-title>New Routine</v-card-title>
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
            label="Routine name"
            required
            ></v-text-field>
    
        </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Create Routine
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
    </v-card-text>
</template>

<script>
export default {

    name:'AddRoutine',

    data() {
        return{
        dialog: false,
        valid: true,
        name: '',
        img: require('../assets/qmark.jpeg'),
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 16 characters',
        ],
        select: null,
    }
    
    },
    methods: {
    validate () {
      this.$refs.form.validate();
      this.dialog = false
      var dev =
      {
        name: "test",
        type: {id: "go46xmbqeomjrsjr"},
        meta:{}

      }
       window.api.device.add(dev).then(data=>{
        var devAux = data.result;
        var aux = {
        name: this.name,
        actions: [{device: {id: devAux.id},actionName: "turnOn",params: [],meta: {}}],
        meta: {}
        }
        window.api.routine.add(aux);
        window.api.device.delete(devAux.id);
        
      })
      
      
    },
    reset () {
      this.$refs.form.reset()
    },
}
}
</script>