<template>
  <transition appear>
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="30" height="30" />
        Shop
      </a>
      <button class="navbar-toggler">
        <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'shop', params: {} }" class="nav-link" >Boutique</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'admin', params: {} }" class="nav-link" >Admin</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>
<script>
import { eventBus } from '../main.js'

export default {

  directives: {
    triggerCollapse:{
      inserted (el, binding) {
        window.addEventListener('click',() => {
          nav.classList.remove('show')
        })
        const nav = document.querySelector(`#${binding.value}`)
        el.addEventListener('click', (e) =>{
          if (nav.classList.contains('show')) {
            nav.classList.remove('show')
          }else {
            nav.classList.add('show')
          }
          e.stopPropagation()
        })
      }
    }
  }

}
</script>

<style scope>
@keyframes fromTop {
  from {
    transform: translateY(-20px);
  }
  to {}
  }
  .v-enter-active{
    animation: fromTop 1s;
  }
  a{
    cursor: pointer;
  }
  </style>
