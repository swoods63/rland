<template>
  <div class="featured">
    <div class="row FP">
      <h2 class="text-center">Featured Property</h2>
    </div>
    <div class="row properties">
      <div class="col-md-4 p1">
        <img class="img-responsive" src="static\Featured-imgs\olivier-guillard-49712.jpg">
      </div>
      <div class="col-md-4 p2">
        <img class="img-responsive" src="static\Featured-imgs\olivier-guillard-49712.jpg">
      </div>
      <div class="col-md-4 p3">
        <img class="img-responsive" src="static\Featured-imgs\ryan-moreno-99473.jpg">

      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'featured',
  data() {

  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style scoped>
.FP {
  padding-top: 20px;
  padding: 50px;
  border-bottom: 2px;
}

.featured {
  padding-top: 20px;
  padding: 50px;
  border-bottom: 2px;
}


h2 {
  font-family:family=Dancing+Script;
  font-size: 100px;
  border: 5px solid red;
  margin-left: 100px;
  margin-right: 100px;

}



</style>
