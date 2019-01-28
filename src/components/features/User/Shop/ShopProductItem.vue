<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img :src="product.attributes.img" alt="" style="height:300px;">
    </div>
    <div>
      <span></span>
      <h3>{{ product.attributes.title | mediumTitle }}</h3>
      <hr>
    </div>
    <div>
      <p class="product_description">{{ product.attributes.description | mediumText }}</p>
    </div>
    <div>
      <span>{{ product.attributes.price | price }}</span>
      <button @click="addOne(product.attributes)" class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: ['product'],
  methods: {
    ...mapMutations('cart', ['addOne'])
  }
}
</script>

<style>
.product-container{
  height: 600px;
}
.product_description{
  min-height: 50px;
}
p{
  font-size: 12px;
}
</style>
