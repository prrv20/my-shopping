<template>
  <v-container>
    <h2>Carrito de Compras</h2>
    <v-toolbar flat>
      <v-toolbar-title>
        <div>
          Total Carrito:
          <span class="success--text">
            ${{ Number(cartTotal).toLocaleString("en-US") }}
          </span>
        </div>
      </v-toolbar-title>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >¿Estas seguro de borrar el producto?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >Si</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-toolbar>
    <v-simple-table height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="head in headers" :key="head.index">{{ head }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartProducts" :key="item.id">
            <!-- <td>{{ item.index }}</td> -->
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.count }}</td>
            <td>{{ item.total }}</td>
            <td>

              <v-icon color="blue-grey" small @click="removeStock(item)">
                  mdi-minus-thick
              </v-icon>
              <v-icon small color="green" @click="addStock(item)">
                mdi-plus-thick
              </v-icon>
              
              <v-icon color="red" small @click="deleteItem(item)">
                mdi-trash-can
              </v-icon>
            
            </td>
          </tr>
        </tbody>
        
      </template>
    </v-simple-table>
    
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cart-view",
  // props: {},
  data: function () {
    return {
      dialogDelete: false,
      headers: [
        "Id Producto",
        "Articulo",
        "Precio",
        "Cantidad",
        "SubTotal",
        "Acciones",
      ],
      deleteId: null,
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
    ...mapGetters(["cartCount", "cartProducts", "cartTotal"]),
  },
  methods: {
    ...mapActions([
      "addStockProductCart",
      "removeStockProductCart",
      "removeProductCart",
    ]),

    //Metodo que agrega 1 a la Cantidad del Producto
    addStock(item) {
      this.addStockProductCart(item.id);
    },
    removeStock(item) {
      this.removeStockProductCart(item.id);
    },
    deleteItem(item) {
      this.deleteId = item.id;
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.removeProductCart(this.deleteId);
      this.dialogDelete = false;
    },
    closeDelete(){
      this.dialogDelete = false;
    }
  },
  // watch: {
  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
 // },
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
</style>