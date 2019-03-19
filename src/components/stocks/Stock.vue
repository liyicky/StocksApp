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
                        <div class="input-group input-group-mds">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-md">#</span>
                            </div>
                            <input v-model="quantity" type="number" class="form-control" aria-label="Sizing example?"> 
                        </div>
                    </div>
                    <div class="col-5">
                        <button class="btn btn-primary" @click="buyStock" :disabled="quantity <= 0">Buy</button>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0
        };
    },
    props: ['stock'],
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.quantity = 0;
        }
    }
};
</script>
