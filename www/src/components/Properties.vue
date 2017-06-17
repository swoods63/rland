<template>
  <div class="properties">
    <button @click="createProperty">Add Property</button>
    <ul>
      <li v-for="property in properties"><router-link :to="'/properties/'+property._id">{{property.name}}</router-link> <span @click="removeProperty(property)">x</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'properties',
  mounted(){
    this.$store.dispatch('getProper')
  },
  computed:{
    properties(){
      return this.$store.state.searchProperties
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
