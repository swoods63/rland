<template>
  <div class="types">
    <hr class="hr">
    <div class="container-fluid">
      <div class="row types2 property-types">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-2" v-for="propType in types">
          <div class="property-type">
            <img class="img-responsive" :src="propType.img">
            <h3>{{propType.type}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Types',
    data() {
      return {
        types: [{
          img: '../../static/Properties-img/100_4733 (2) LF.jpg',
          type: 'Lake Front'
        }, {
          img: "../../static/Properties-img/1426710859_lg RF.jpg",
          type: "River Front"
        }, {
          img: "../../static/Properties-img/1488212429_lg HL.jpg",
          type: "Hunting Land & Large Acreage"
        }, {
          img: "../../static/Properties-img/pic 14 (2) Remote.jpg",
          type: 'Islands'
        }, {
          img: "../../static/Properties-img/1288384066_lg Cottage.jpg",
          type: "Cottages/Cabins"
        }, {
          img: "../../static/Properties-img/1464281988_lg Resort.jpg",
          type: "Remote Access"
        }, {
          img: "../../static/Properties-img/1355346997_lg DL.jpg",
          type: 'Development/Resorts'
        }, {
          //img: //"../../static/Properties-img/pic 14 (2) Remote.jpg",
          type: "Lawyers/Attorneys"
        }]
      }
    },
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style scoped>
  .p-2{
    padding: 2rem;
  }
  .row {
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-top:10px;
    border-bottom: 2px;
  }

  .img-responsive {
    margin: auto;
    height: 150px;
    width: 300px;
  }

  h3 {
    position: relative;
    text-align: center;
    top: -80px;
    color: White;
    z-index: 10;
  }

  hr {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5px;
    border-width: 3px;
    padding-bottom: 5px;
    background-color: #f5a608;
  }

  .type2 {
    display: inline-block;
    vertical-align: top;
    width: 75%;
  }

  .property-type img {
    background: #fff;
    padding: .3rem;
  }

  .property-type h3{
    text-shadow: 1px 1px 1px #000;
  }
</style>