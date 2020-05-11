<template>
    <div id="app">
    <v-app id="inspire">
        <v-card
        class="mx-auto"
        max-width="344"
        >
        <v-img
            :src="require('../assets/vac-png-4.png')"
            width="225"
            height="200px"
        ></v-img>
    
        <v-card-title>
            {{ product }}
        </v-card-title>
    
        <v-card-subtitle>
            {{ location }}
        </v-card-subtitle>
    
        <v-card-actions>
            <v-row>
                <v-switch v-model="OnOff" class="ma-4" @click="status = !status">
                    <v-label>{{ status ? 'On' : 'Off' }}</v-label>
                </v-switch>
        
                <v-btn
                text
                @click="show = !show" class="ma-4"
                >
                    <v-label>More</v-label>
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-row>
        </v-card-actions>
    
        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
            
                <v-list class="transparent">
                    <v-list-item>
                        <v-label>Intensity</v-label>
                    </v-list-item>
                    <v-list-item>
                        <v-slider
                            v-model="intensity"
                            :max="4"
                            :tick-labels="labels"
                            class="mx-4"
                            ticks
                        ></v-slider>
                    </v-list-item>
                    <v-list-item>
                        <v-label>Color</v-label>
                    </v-list-item>
                </v-list>
            </div>
        </v-expand-transition>
        </v-card>
    </v-app>
    </div>
</template>

<script>
export default {
    data() {
        return{
            show: false,
            intensity: 0,
            labels: ['0%', '25%', '50%', '75%', '100%'],
            status: false,
            product: 'Lamp',
            location: 'LivingRoom '
        }
    }
}
</script>