<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">PRODUTOS</a>
      </div>
    </nav>

    <button
      class="btn waves-effect waves-light align-button"
      type="button"
      name="action"
      @click.prevent="openModal"
    >
      Adicionar
      <i class="material-icons right">add</i>
    </button>
    <ModalProductForm />

    <table class="striped">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th colspan="2" style="padding: 30px">Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product of products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}</td>
          <td style="width: 45%; display: flex; justify-content: space-around">
            <button
              class="btn waves-effect waves-light dark"
              @click="edit(product)"
            >
              <i class="material-icons">edit</i>
            </button>
            <button
              class="btn waves-effect waves-light red"
              @click="remove(product)"
            >
              <i class="material-icons">delete</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ModalProductForm from "./ModalProductForm.vue";
import Products from "../services/product";
import M from "materialize-css";

export default {
  name: "Product",
  components: {
    ModalProductForm,
  },
  data() {
    return {
      products: [],
      product: {
        id: "",
        name: "",
        quantity: "",
        price: "",
      },
    };
  },

  mounted() {
    this.search();
  },

  methods: {
    search() {
      Products.search().then((response) => {
        this.products = response.data.products;
      });
    },

    edit(product) {
      this.$modal.show("modal-product-form", { product });
    },

    remove(product) {
      if (confirm("Deseja realmente remover esse produto")) {
        Products.delete(product).then((response) => {
          M.toast({ html: response.data.message });
          this.search();
        });
      }
    },

    openModal() {
      this.$modal.show("modal-product-form", { product: this.product });
    },
  },
  computed: {
    refresh: function () {
      console.log("entrei");
      return this.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.align-button {
  margin-top: 5px;
}
</style>>

