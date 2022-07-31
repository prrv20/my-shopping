<template>
  <v-container>
    <h2>Carrito de Compras</h2>
    <v-simple-table height="300px">
      <template v-slot:default>
        <thead >
          <tr>
            <th v-for="head in headers" :key="head.index">{{ head }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartProducts" :key="item.id">
            <td>{{ index }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.count }}</td>
            <td>{{item.total}}</td>
            
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    Total Carrito: <span class="success--text">${{Number(cartTotal).toLocaleString('en-US')}}</span> 
    <div>{{cartTotal}}</div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {
        headers: ["Item", "Id Producto","Articulo", "Precio", "Cantidad", "SubTotal"],
        // headers:[
        //     {
		// 			text: 'ID:Producto',
		// 			align: 'start',
		// 			sortable: false,
		// 			value: 'id',
		// 		},
		// 		{ text: 'Producto', value: 'title' },
		// 		{ text: 'Cantidad', value: 'count' },
		// 		{ text: 'Precio', value: 'price' },
		// 		{ text: 'subtotal', value: 'total' },
		// 		{ text: 'Acciones', value: 'actions', sortable: false },
		// 	],
    };
  },
  computed: {
    ...mapGetters(['cartCount', 'cartProducts', 'cartTotal'])
  },
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>