<template>
    <nav>
        <v-app-bar stick dark color="grey darken-4" height="90"> <!-- NO FUNCA EL APP YA, CAMBIAR PARA Q AL BAJAR DESLIZE -->
            <v-toolbar-title>
                <v-btn width="70" outlined height="80" to="/">    
                    <v-img :src="require('../assets/vac-png-4.png')" width="70">
                    </v-img>
                </v-btn>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-row align="center">
                <v-row justify="space-around">
                    <v-btn text to="/routines">
                        Routines
                    </v-btn>

                    <v-btn text to="/rooms">
                        Rooms
                    </v-btn>

                    <v-btn text to="/devices">
                        Devices
                    </v-btn>

                    <v-btn text to="/favourites">
                        Favourites
                    </v-btn>
                </v-row>
            </v-row>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon to="/about">
                <v-icon>mdi-information-outline</v-icon>
            </v-btn>

            <v-btn text>
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
export default {

}
</script>