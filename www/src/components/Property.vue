<template>
  <div>
    Active Property: {{property}}
  </div>
</template>

<script>
export default {
  name: 'property',
  mounted(){
    this.$root.$data.store.actions.getProperty(this.$route.params.id)
  },
  computed:{
    property(){
      return this.$root.$data.store.state.activeProperty
    }
  }
}
</script>

<style scoped>
</style>
