<template>
    <v-card class="mx-auto my-12">
        <template slot="progress">
			<v-progress-linear
				color="deep-purple"
				height="10"
				indeterminate
			></v-progress-linear>
		</template>

		<v-img height="250" :src="product.image"></v-img>

		<v-card-title size="14">{{ product.title }}</v-card-title>

		<v-card-text>
			<v-row align="center" class="mx-0">
				<v-rating
					:value="product.rating.rate"
					color="amber"
					dense
					half-increments
					readonly
					size="14"
				></v-rating>

				<div class="grey--text ms-4">
					{{ product.rating.rate }} ({{ product.rating.count }})
				</div>
			</v-row>

			<div class="my-4 text-subtitle-1">${{ product.price }}</div>
		</v-card-text>

		<v-divider class="mx-4"></v-divider>

		<v-card-actions>
			<v-btn color="orange lighten-2" text> Explore </v-btn>

			<v-spacer></v-spacer>

			<v-btn icon @click="show = !show">
				<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
			</v-btn>
		</v-card-actions>

		<v-expand-transition>
			<div v-show="show">
				<v-divider></v-divider>

				<v-card-text>
					{{ product.description }}
				</v-card-text>
			</div>
		</v-expand-transition>

		<v-card-actions>
			<v-btn class="green darken-2" dark text @click="add">
				<v-icon>mdi-cart</v-icon> Agregar
			</v-btn>
		</v-card-actions>
		<v-snackbar v-model="snackbar" :aria-multiline="multiLine" color="green">
			{{ product.title }} Agregado al carrito

			<template v-slot:action="{ attrs }">
				<v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
					Cerrar
				</v-btn>
			</template>
		</v-snackbar>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'card-comp',
    props: {
        product:{
            type: Object,
            require: true
        }

    },
    data: function(){
        return {
            loading: false,
			show: false,
            multiLine:true,
            snackbar: false
        }
    },
    //computed: {},
    methods: {
		...mapActions(['addToCart']),
	//Metodo para agregar al Carrito
	add(){
		//Creamos un Objeto a partir del Objeto Original
		let prod = {
			id: this.product.id,
			title: this.product.title,
			price: this.product.price,
			count: 1
		}
		this.addToCart(prod)
		this.snackbar = true
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
