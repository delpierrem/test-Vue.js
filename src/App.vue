<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'app',
  components: {
    TheHeader
  },
  data () {
    return {
    }
  },
}
</script>

<style>
.router-link-active{
  font-weight: bold;
}
</style>
