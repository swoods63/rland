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
  data(){
    return{}
  },

  // mounted(){
  //   this.$store.dispatch('getProperty')
  // },
  computed:{
    properties(){
      return this.$store.state.searchProperties
    }
  },
  methods:{
    createProperty(){
      
    }

  }
}
</script>

<style scoped>

</style>
