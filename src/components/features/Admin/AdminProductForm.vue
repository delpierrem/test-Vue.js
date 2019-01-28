<template lang="html">
  <form @submit.prevent="trySumbit()" class="d-flex flex-column">
    <h4>Ajouter un produit:</h4>
    <hr class="w-100">
    <div class="form-group">
      <label>Image (url)</label>
      <input v-model="form.img" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Titre</label>
      <input v-model="form.title" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea v-model="form.description" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>Prix</label>
      <input v-model.number="form.price" type="number" class="form-control">
    </div>
    <ul v-if="errors.length" class="text-danger">
      <li v-for="error in errors" :key="error"> {{ error }} </li>
    </ul>
    <button type="submit" class="btn btn-primary">Ajouter</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      form: {
        img: '',
        title: '',
        description: '',
        price: ''
      },
      errors: []
    }
  },

  methods: {
    trySumbit () {
      if (this.formIsValid()) {
        this.$store.dispatch('product/saveOne',
        {
          "title": this.form.title,
          "description": this.form.description,
          "img_url": this.form.img,
          "price": this.form.price
        }
      )
      this.resetForm()
      // this.$router.push('/shop')
    }
  },
  resetForm () {
    this.form = {
      img: '',
      title: '',
      description: '',
      price: ''
    }
  },
  formIsValid () {
    this.errors = []
    if (!this.form.img) {
      this.errors.push('image required')
    }
    if (!this.form.title) {
      this.errors.push('title required')
    }
    if (!this.form.description) {
      this.errors.push('description required')
    }
    if (!this.form.price) {
      this.errors.push('price required')
    }
    return this.errors.length ? false : true
  }
}
}
</script>

<style lang="css">
</style>
