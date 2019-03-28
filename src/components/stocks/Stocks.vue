<template>
  <div>
    <div class="container">
      <h1>Stocks Component</h1>
      <div class="row">
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>

      </div>
    </div>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },
  components: {
    appStock: Stock
  }
}
</script>
