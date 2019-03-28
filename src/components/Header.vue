<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Stocks Trader</router-link>
      <h5>{{money}}</h5>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/portfolio" class="nav-item" tag="li"><a class="nav-link">Portfolio</a></router-link>
          <router-link to="/stocks" class="nav-item" tag="li"><a class="nav-link">Stocks</a></router-link>
            <li class="nav-item"><a href="#" class="nav-link" @click="endDay">End Day</a></li>
            <li class="nav-item dropdown">
                <a 
                href="#"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Save & Load</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                    <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                </div>
            </li>
        </ul>
        <strong class="navbar-text nav">Funds: {{ funds | currency }}</strong>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    funds() { 
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.post('data.json', data)
        .then(resp => {
          return resp.json()
        })
        .then(data => {
          console.log(data);
        });
    },
    loadData() {

    }
  }
}
</script>
