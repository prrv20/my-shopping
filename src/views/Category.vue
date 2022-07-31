<template>
    <div>
        <h2 class="text-center indigo--text">Categoría: {{ id }}</h2>
        <v-container>
			<v-row>
				<load-comp></load-comp>
			</v-row>
			<v-row justify="center">
				<v-col class="pa-5" col="12" sm="6" md="4" v-for="product in products" :key="product.id">
					<card-product :product="product"></card-product>
				</v-col>
			</v-row>
		</v-container>
    </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'
export default {
    name: 'category-view',
    props: {
        id:{
            type: String,
        }
    },
    data: function(){
        return {
            products: []
        }
    },
    // computed: {},
    methods: {
        async fetchProducts(){
            try {
                let response = await fetch(
                    `https://fakestoreapi.com/products/category/${this.id}`)
                
                if(!response.ok) throw'error api'

                let json = await response.json()
                this.products = json
                console.log(json)
            } catch (error) {
                console.log(error)
            }
        }
    },
    // watch: {},
    components: {
        'card-product':CardProduct
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchProducts()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>