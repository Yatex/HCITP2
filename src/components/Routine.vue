<template>
    <v-container fluid>
    <h1>{{$route.params.id}}</h1>
    <v-footer app
    color="#FFFFFFFF">
      <v-card-text>
            <v-dialog v-model="dialog" scrollable max-width="450px">
              <template v-slot:activator="{ on }">
                <v-btn
                rounded
                right
                text v-on="on">
                  <v-icon size='30px'>mdi-plus</v-icon>
                  <p style="margin:10px"> <big>ADD NEW DEVICE </big></p>
                 </v-btn>
              </template>
              <AddRoutine></AddRoutine>
              </v-dialog>
          </v-card-text>
    </v-footer>   
    </v-container>    

</template>