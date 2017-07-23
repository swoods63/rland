<template>
  <div class="featured">
   <div class="container-fluid">
    <div class="row FP">
      <div class = "col-lg-12">
        <p>Featured Property</p>
      </div>
    </div>
    <div class="row properties property-feat">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 p1">
        <img class="img-responsive" src="static\Featured-imgs\olivier-guillard-49712.jpg">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 p2">
        <img class="img-responsive" src="static\Featured-imgs\olivier-guillard-49712.jpg">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 p2">
        <img class="img-responsive" src="static\Featured-imgs\olivier-guillard-49712.jpg">
      </div>
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
  font-size: 40px;
  background-color: orange;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom:10px;
}

.featured {
  padding: 20px;
  border-bottom: 2px;
}

p {
  font-family: 'Lobster Two', cursive;
  font-size: 40px;
}

.property-feat img{
    background: #fff;
    padding: .5rem;
    height: 200px;
    width: 350px;
    margin: auto;
    margin-top:20px;
}


</style>
