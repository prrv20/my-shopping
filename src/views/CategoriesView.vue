<template>
    <v-container>
        <h1>Categorías</h1>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'categories-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['categories'])
    },
    //methods: {}
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