<template>
    <nav>
        <v-app-bar app stick dark color="grey darken-4" height="90">
            <v-toolbar-title>
                <v-btn width="70" outlined height="80" to="/">    
                    <v-img :src="require('../assets/vac-png-4.png')" width="70">
                    </v-img>
                </v-btn>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-row align="center">
                <v-row justify="space-around">

                    <v-btn text to="/rooms">
                        Rooms
                    </v-btn>

                    <v-btn text to="/routines">
                        Routines
                    </v-btn>

                    <v-btn text to="/devices">
                        Devices
                    </v-btn>
                </v-row>
            </v-row>

            <v-spacer></v-spacer>

            <v-btn text to="/about">
                About Us
            </v-btn>
            
            <v-btn text to="/instructions">
                FAQ
            </v-btn>

        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            arrow: false
        }
    }
}
</script>