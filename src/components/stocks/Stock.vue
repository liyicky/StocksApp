<template>
    <div class="col-md-6 col-lg-4 col-sm-12">
        <div class="card bg-success text-white" style="width: 20rem; margin-bottom: 5px">
            <div class="card-header">
                {{ stock.name }}
                <small>(Price: ${{ stock.price }})</small>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-7">
                        <div class="input-group input-group-mds"  :class="{danger: insufficientFunds}">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-md">#</span>
                            </div>
                            <input v-model="quantity" type="number" class="form-control" aria-label="Sizing example?"> 
                        </div>
                    </div>
                    <div class="col-5">
                        <button class="btn btn-primary" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>    
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
import { mapMutations } from 'vuex';
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
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      },
      border() {
          return this.insufficientFunds ? 'border-danger' : '';
      }
    },
    props: ['stock'],
    methods: {
        ...mapMutations(['spendMoney']),
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order)
            this.quantity = 0;
        }
    }
};
</script>
