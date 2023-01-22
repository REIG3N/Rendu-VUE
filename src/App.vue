<template>
  <nav>
    <router-link to="/directory">Directory</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/keyboard">Keyboard</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color: #42b983;
  background-color: #2c3e50;
  a {
    font-weight: bold;
    color: #42b983;
    text-decoration: none;

    &.router-link-exact-active {
      color: aquamarine;
    }
  }
}
</style>
