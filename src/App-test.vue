<template>
  <div id="app">
    <h1>Test App</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/restaurants">Restaurants</router-link> |
      <router-link to="/market">Market</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav a {
  padding: 10px;
  margin: 5px;
  text-decoration: none;
}
nav a.router-link-active {
  background: #ccc;
}
</style>