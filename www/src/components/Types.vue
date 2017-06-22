<template>
  <div class="types">
    <hr class="hr">
    <div class="container-fluid">
      <div class="row types2">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p1">
          <img class="img-responsive" src="..\..\static\Properties-img\100_4733 (2) LF.jpg"><h3>Lake Front</h3>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p2">
          <img class="img-responsive" src="..\..\static\Properties-img\1426710859_lg RF.jpg"><h3>River Front</h3>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p3">
          <img class="img-responsive" src="..\..\static\Properties-img\1488212429_lg HL.jpg"><h3>Hunting Land</h3>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p4">
          <img class="img-responsive" src="..\..\static\Properties-img\Islands.jpg"><h3>Islands</h3>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p5 text-center">
          <img class="img-responsive" src="..\..\static\Properties-img\1288384066_lg Cottage.jpg"><h3>Cottages/Cabins</h3>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p6">
          <img class="img-responsive" src="..\..\static\Properties-img\1355346997_lg DL.jpg"><h3>Development</h3>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p7">
          <img class="img-responsive" src="..\..\static\Properties-img\1464281988_lg Resort.jpg"><h3>Resorts</h3>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p8">
          <img class="img-responsive" src="..\..\static\Properties-img\pic 14 (2) Remote.jpg"><h3>Remote Access</h3>
        </div>
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

.img-responsive {
  margin: auto;
  height: 200px;
  width: 350px;

}

h3{
  position: relative;
  text-align:center;
  top: -60px;
  color: White;
  z-index: 10;


}

hr {
 margin-left:10%;
 margin-right:10%;
 margin-top: 5px;
 border-width:3px;
 padding-bottom:5px;
 background-color: #f5a608;

}

.type2 {
  display: inline-block;
  vertical-align: top;
  width: 75%;
}

</style>
