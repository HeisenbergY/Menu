<template>
  <div id="app">
    <Header></Header>
    <MenuList></MenuList>
    <router-view/>
  </div>
</template>

<script>
  import Header from 'components/Header/Header';
  import MenuList from 'components/MenuList/MenuList';

  export default {
    name: 'app',
    components: {
      Header,
      MenuList
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
