<template>
    <div class="col-md-6 col-lg-4 col-sm-12">
        <div class="card bg-primary text-white" style="width: 20rem; margin-bottom: 5px">
            <div class="card-header">
                {{ stock.name }}
                <small>(Price: ${{ stock.price }} Quantity: {{ stock.quantity }})</small>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-7">
                        <div class="input-group input-group-mds" :class="{danger: insufficientQuantity}">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-md">#</span>
                            </div>
                            <input v-model="quantity" type="number" class="form-control" aria-label="Sizing example?"> 
                        </div>
                    </div>
                    <div class="col-5">
                        <button class="btn btn-success" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0">{{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell'}}</button>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>


<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            quantity: 0
        };
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },
    props: ['stock'],
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          quantity: this.quantity,
          stockPrice: this.stock.price
        };

        this.placeSellOrder(order);
        this.quantity = 0;
      }
    }
};
</script>
