<template>
  <div class="property">
    Active Property: {{property}}

    <div v-if="property.lat && property.long">
      <g-map :lat="property.lat" :long="property.long"></g-map>
    </div>

  </div>
</template>

<script>
import GMap from './Map'
export default {
  name: 'property',
  data(){
    return{}
  },
  mounted(){
    this.$root.$data.store.actions.getProperty(this.$route.params.id)
  },
  computed:{
    property(){
      return this.$root.$data.store.state.activeProperty
    }
  },
  components:{
    GMap
  }
}
</script>

<style>
</style>
