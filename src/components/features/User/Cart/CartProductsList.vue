<template>
  <div class="d-flex flex-column p-5">
    <h5 class="border-bottom pb-3">Mon panier :</h5>
    <transition-group mode='out-in'>
      <cart-product-item v-for='item in cart' :key="item.id" :item="item"></cart-product-item>
    </transition-group>
    <template v-if="cart.length">
      <hr class="w-100">
      <transition apear>
        <span>Total: {{ total }} €</span>
      </transition>
    </template>
  </div>
</template>

<script>
import CartProductItem from './CartProductItem.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    CartProductItem
  },
  props: ['cart'],
  computed: {
    ...mapGetters('cart', ['total'])
  }
}
</script>

<style scoped>
@keyframes fade-out {
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
}
@keyframes fade-in {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}
.v-enter-active{
  animation: fade-in 1s;
}
.v-leave-active{
  animation: fade-out 1s;
}
</style>
