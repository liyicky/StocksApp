<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Stocks Trader</router-link>
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
            <!-- <li><a href="#">End Day</a></li> -->
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
                    <a class="dropdown-item" href="#">Save Data</a>
                    <a class="dropdown-item" href="#">Load Data</a>
                </div>
            </li>
        </ul>
      </div>
    </nav>
  </div>
</template>