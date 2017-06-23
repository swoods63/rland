<template>
  <div class="properties">
    <!--<button @click="">Add Property</button>-->
    <ul>
      <li v-for="property in properties"><router-link :to="'/properties/'+property._id">{{property.name}}</router-link> <span @click="removeProperty(property)">x</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'properties',
<<<<<<< HEAD
  
=======
  // mounted(){
  //   this.$store.dispatch('getProperty')
  // },
>>>>>>> e48df6ccf8be7f0fa33219e3372ef9cb8606fa71
  computed:{
    properties(){
      return this.$store.state.searchProperties
    }
  },
  methods:{
<<<<<<< HEAD
    createProperty(){
      
    }
=======

>>>>>>> e48df6ccf8be7f0fa33219e3372ef9cb8606fa71
  }
}
</script>

<style scoped>

</style>
