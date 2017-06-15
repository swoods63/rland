<template>
  <div>
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
    this.$root.$data.store.actions.getProperties()
  },
  computed:{
    properties(){
      return this.$root.$data.store.state.properties
    }
  },
  methods:{
    createProperty(){
      this.$root.$data.store.actions.createProperty({
        name: 'Testing property creation',
        description: 'blarg'
      })
    },
    removeProperty(property){
      this.$root.$data.store.actions.removeProperty(property)
    }
  }
}
</script>

<style scoped>
</style>
