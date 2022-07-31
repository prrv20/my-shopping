<template>
    <div>
    <v-app-bar color="indigo darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon>mdi-shopping-outline</v-icon>
        My Shopping
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
          <v-badge color="green" :content="cartCount" class="ma-3" :value="cartCount > 0">
            <v-icon @click="redirectTo('Cart')">mdi-cart-variant</v-icon>
          </v-badge>
        
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--darken-3"
        >
          <v-list-item v-for="route in routes" :key="route.name" @click="redirectTo(route.name)" :disabled="currentRoute==route.name">
            <v-list-item-icon>
              <v-icon>{{route.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{route.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'nav-component',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
            routes:[
                {
                    icon:'mdi-home',
                    title:'Inicio',
                    name:'Home'
                },
                {
                    icon:'mdi-format-list-bulleted',
                    title:'Categorías',
                    name:'Categories'
                },
                {
                    icon:'mdi-account',
                    title:'Acerca',
                    name:'About'
                }
            ]
        }
    },
    computed: {
      ...mapGetters(['cartCount']),
        currentRoute(){
            return this.$route.name
        }
    },
    methods: {
        redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        },
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>