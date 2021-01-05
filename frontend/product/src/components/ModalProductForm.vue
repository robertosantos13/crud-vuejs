<template>
  <modal
    name="modal-product-form"
    height="400"
    width="400"
    @before-open="beforeOpen"
  >
    <h4>Cadastro de Produtos</h4>

    <div class="row">
      <form class="col s12" @submit.prevent="save">
        <div class="row">
          <div class="input-field col s12">
            <label for="name">Nome do produto</label>
            <input
              id="name"
              type="text"
              class="validate"
              v-model="product.name"
            />
          </div>
          <div class="input-field col s12">
            <label for="quantity">Quantidade</label>
            <input
              id="quantity"
              type="tel"
              class="validate"
              v-model="product.quantity"
            />
          </div>
          <div class="input-field col s12">
            <label for="price">Preço</label>
            <input
              id="price"
              type="tel"
              v-model="product.price"
              v-money="money"
            />
          </div>
          <div class="input-field col s12">
            <button
              style="float: right"
              class="btn waves-effect waves-light align-button teal darken-4"
              type="submit"
              name="action"
              :disabled="product.price === 'R$ 0,00'"
              v-if="!product.id"
            >
              Salvar
              <i class="material-icons right">save</i>
            </button>
            <button
              style="float: right"
              class="btn waves-effect waves-light align-button teal darken-4"
              type="submit"
              name="action"
              :disabled="product.price === 'R$ 0,00'"
              v-if="product.id"
            >
              Update
              <i class="material-icons right">save</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </modal>
</template>

<script>
import { VMoney } from "v-money";
import Products from "../services/product";
import M from "materialize-css";

export default {
  directives: { money: VMoney },

  data() {
    return {
      product: {
        id: "",
        name: "",
        quantity: "",
        price: "",
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false,
      },
    };
  },

  methods: {
    save() {
      if (!this.product.id) {
        Products.create(this.product).then((response) => {
          this.product = {};
          M.toast({ html: response.data.message });
          this.$modal.hide("modal-product-form");
        });
      } else {
        Products.update(this.product).then((response) => {
          M.toast({ html: response.data.message });
        });
        this.product = {};
        this.$modal.hide("modal-product-form");
      }
    },

    beforeOpen(event) {
      this.product = event.params.product;
    },
  },
  computed: {
    itemToShow: function () {
      return this.product;
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  text-align: center;
}
</style>>

