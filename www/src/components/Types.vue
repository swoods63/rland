<template>
  <div class="Types">
  <hr class="hr">
    <div class="row types2">
      <div class="col-md-3 p1">
        <img class="img-responsive" src="..\..\static\Properties-img\100_4733 (2) LF.jpg"><h3>Lake Front</h3>
      </div>
      <div class="col-md-3 p2">
        <img class="img-responsive" src="..\..\static\Properties-img\1426710859_lg RF.jpg"><h3>River Front</h3>
      </div>
      <div class="col-md-3 p3">
        <img class="img-responsive" src="..\..\static\Properties-img\1488212429_lg HL.jpg"><h3>Hunting Land</h3>
      </div>
      <div class="col-md-3 p4">
        <img class="img-responsive" src="..\..\static\Properties-img\Islands.jpg"><h3>Islands</h3>
      </div>
    </div>
    <div class="row types2">
      <div class="col-md-3 p5">
        <img class="img-responsive" src="..\..\static\Properties-img\1288384066_lg Cottage.jpg"><h3>Cottages/Cabin</h3>
      </div>
      <div class="col-md-3 p6">
        <img class="img-responsive" src="..\..\static\Properties-img\1355346997_lg DL.jpg"><h3>Development</h3>
      </div>
      <div class="col-md-3 p7">
        <img class="img-responsive" src="..\..\static\Properties-img\1464281988_lg Resort.jpg"><h3>Resorts</h3>
      </div>
      <div class="col-md-3 p8">
        <img class="img-responsive" src="..\..\static\Properties-img\pic 14 (2) Remote.jpg"><h3>Remote Access</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Types',
  data() {

  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style scoped>
.row {
  margin: auto;
  padding-top: 20px;
  padding: 30px;
  border-bottom: 2px;
}

.img-responsive{
  margin: auto;
  height: 200px;
  width: 260px;
}

h3{
  text-align:center;
}
hr{
 margin-left:10%;
 margin-right:10%;
 margin-top: 5px;
 border-width:3px;
 padding-bottom:5px;
 background-color: red;
}
</style>
