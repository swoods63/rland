<template>
  <div class="featured">
   <div class="container-fluid">
    <div class="row FP">
      <div class = "col-lg-12">
        <p>Featured Property</p>
      </div>
    </div>
    <div class="row properties">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p1">
        <img class="img-responsive" src="static\Featured-imgs\olivier-guillard-49712.jpg">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p2">
        <img class="img-responsive" src="static\Featured-imgs\olivier-guillard-49712.jpg">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p2">
        <img class="img-responsive" src="static\Featured-imgs\olivier-guillard-49712.jpg">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p3">
        <img class="img-responsive" src="static\Featured-imgs\ryan-moreno-99473.jpg">
      </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'featured',
  data() {
    return {

    }

  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style scoped>
.FP {
  position: relative;
  text-align:center;
  font-size: 100px;
  background-color: orange;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom:5px;

}

.featured {
  /*padding-top: 10px;*/
  padding: 20px;
  border-bottom: 2px;

}


p {
  font-family: 'Lobster Two', cursive;
  font-size: 70px;
  /*border: 5px solid red;*/
  /*margin-left: 100px;
  margin-right: 100px;*/
}





</style>
