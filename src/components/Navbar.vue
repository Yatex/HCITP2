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
                    <v-btn text to="/routines">
                        Routines
                    </v-btn>

                    <v-btn text to="/devices">
                        Devices
                    </v-btn>

                    <v-btn text to="/rooms">
                        Rooms
                    </v-btn>
                </v-row>
            </v-row>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

             <v-menu bottom offset-y>
                <template v-slot:activator="{ on }">
                <v-btn text dark v-on="on" @click=" arrow = !arrow">
                    <span>Info</span>
                    <v-icon>{{ arrow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                </template>
        
                <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :to="item.rut"
                >
                    <v-list-item-title>{{ item.option }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text>
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            items: [
            { option: 'Option 1', rut: '/Option' },
            { option: 'Option 2', rut: '/Option' },
            { option: 'Option 3', rut: '/Option' },
            { option: 'About Us', rut: '/about' },
            ],
            arrow: false
        }
    }
}
</script>