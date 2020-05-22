 <template>
 <v-dialog
        v-model="dialog" max-width="300px" >
              <template v-slot:activator="{ on }">
                <v-btn
              
                rounded
             v-on="on">
                  <p style="margin:10px;color:#EC1801">
                      <v-icon
                      >mdi-delete</v-icon>
                       <big> Delete room </big></p>
                 </v-btn>
              </template>

        <v-card>
        <v-card-title>
          <span class="headline"><i><b>Are you sure?</b></i></span>
        </v-card-title>
        <v-card-text>
            If you delete the room all devices inside it will be lost

        </v-card-text> 
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-card-actions>
          <v-btn
            color="#F44336"
           @click="dialog = false">
           delete
        
          </v-btn>
          <v-btn
          @click="dialog = false">
            Go back
          </v-btn>
        </v-card-actions>
         </v-card>
        </v-dialog>
 </template>       



<script>
export default {
    
}
</script>

<script>
export default {

  data () {
      return {
        dialog: false,
      }
    }

}  
</script>
