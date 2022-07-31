<template>
    <v-container>
        <h1 class="text-center my-2 indigo--text">Categorías</h1>
        <v-row class="mt-5">
            <v-col col="12" sm="6" md="3" v-for="category in categories" :key="category">
                <v-card class="pa-2">
                    <h3 class="text-center">{{category}}</h3>
                    <a @click="redirectTo(category)">
                        <div class="d-flex justify-center pa-5">
                            <v-icon size="150" color="indigo accent-1">
                                {{selectIcon(category)}}
                            </v-icon>
                        </div>
                    </a>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'categories-comp',
    // props: {},
    data: function(){
        return {

        }
    },
    computed: {
        ...mapState(['categories'])
    },
    methods: {
        selectIcon(category) {
			let icon = ''

			switch (category) {
				case 'electronics':
					icon = 'mdi-laptop'
					break
				case 'jewelery':
					icon = 'mdi-diamond-stone'
					break
				case "men's clothing":
					icon = 'mdi-face-man'
					break
				case "women's clothing":
					icon = 'mdi-face-woman'
			}
			return icon
		},
        redirectTo(category){
            this.$router.push(`/category/${category}`)
        }
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