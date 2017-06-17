<template>
  <div class="properties"> 
    
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
</script>

<style scoped>

</style>
