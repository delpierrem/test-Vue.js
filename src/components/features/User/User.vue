<template lang="html">
  <div class="d-flex flex-row">
    <transition name="left" appear>
      <shop :products="products" class="w-75"></shop>
    </transition>
    <transition name="right" appear>
      <cart :cart="cart" class="w-25"></cart>
    </transition>
  </div>
</template>

<script>
import Cart from './Cart/Cart.vue'
import Shop from './Shop/Shop.vue'
import { mapState } from 'vuex'


export default {

  components: {
    Cart,
    Shop
  },

  created() {
    this.$store.dispatch('product/fetchDatas')
  },

  computed: {
    ...mapState('product', {
      products: 'datas'
    }),
    ...mapState('cart', {
      cart: 'datas'
    })
  }
}
</script>

<style lang="css" scoped>
@keyframes fromLeft {
  from {
    transform: translateX(-20px);
  }
  to {}
  }
  @keyframes fromRight {
    from {
      transform: translateX(20px);
    }
    to { }
  }
  .left-enter-active{
    animation: fromLeft 1s;
  }
  .right-enter-active{
    animation: fromRight 1s;
  }

  </style>
