<template>
  <div class="search">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h3><button class="btn btn-white" @click="showForm = !showForm">Find Property</button></h3>
          <hr>
        </div>
        </div>
      <div class="row" v-if="showForm">
        <div class="col-xs-12">
          <form @submit.prevent="searchProperties">
            <div class="row">
              <div class="col-xs-3 form-group" v-for="(obj, prop) in propertyModel">
                <label for="">{{obj.name}}</label>
                <input type="checkbox" v-if="obj.type == 'checkbox'" v-model="obj.value">
                <input type="text" v-if="obj.type !== 'checkbox'" :placeholder="prop" v-model="obj.value">
              </div>-->
              <div class="form-group text-center">
                <label class="checkbox-inline pa">Property Acreage:</label>
                  <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties(1, 50)">1 - 50
              </label>
                <label class="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties(51, 100)">51 - 100
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties(101, 150)">101 - 150
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties(151, 200)">151 - 200
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties(200, 400)">200 - 400
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties(400)">400 +
                </label>
              </div>

              <div class="form-group text-center">
                <label class="checkbox-inline sp">Sales Price:</label>
                <input type="checkbox" id="inlineCheckbox1" data-size="large" data-toggle="toggle" @click="checkboxProperties(1, 100000)"> 0-100K
                </label>
                <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" data-size="large" data-toggle="toggle" @click="checkboxProperties(101000, 200000)"> 101-200K
            </label>
                <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" data-size="large" data-toggle="toggle" @click="checkboxProperties(201000, 3500000)"> 201-350K
            </label>
                <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox1" data-size="large" data-toggle="toggle" @click="checkboxProperties(351000, 500000)"> 351-500K
            </label>
                <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" data-size="large" data-toggle="toggle" @click="checkboxProperties(501000, 800000)"> 501-800K
            </label>
                <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" data-size="large" data-toggle="toggle" @click="checkboxProperties(801000)"> 800k+
            </label><br><br>
              </div>
              <div class="text-center">

                <button class="sp-btn" type="submit">Search Properties</button>
              </div>
            </div>
          </form>
         
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-lg-4 media" v-for="property in properties">
          <div class="media-left">
            <a href="#">
              <img class="media-object">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{property.name}} {{property.salePrice}}</h4>
            <p>{{property}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data() {
      return {
        showForm: false,
        min: 0,
        max: 0,
        query: {},
        propertyModel: {
          
          //lakefront: { type: 'checkbox', value: false, name: 'Lakefront' },
          //riverfront: { type: 'checkbox', value: false, name: 'Riverfront' },
          //huntinglandlargeacreage: { type: 'checkbox', value: false, name: 'Hunting Land Large Aacreage' },
          //islands: { type: 'checkbox', value: false, name: 'Islands' },
          //cottagescabins: { type: 'checkbox', value: false, name: 'Cottages and Cabins' },
          //remoteaccess: { type: 'checkbox', value: false, name: 'Remote Access' },
          //devres: { type: 'checkbox', value: false, name: 'Developement and Resorts' },
         
          
          water: { type: 'checkbox', value: false, name: 'Water Line' },
          power: { type: 'checkbox', value: false, name: 'Line Power' },
          bodyOfWater: { type: 'checkbox', value: false, name: 'Waterfront' },
          accessRoad: { type: 'checkbox', value: false, name: 'Access Road' },

          //isFeature: {type: 'checkbox', value:false, name: 'Featured'},
          //hasStructure: {type: 'checkbox', value:false, name: 'Includes Structure'},
          //salePrice: {type: 'number', value:false, name: 'Sale Price'},
          //totalAcreage: {type: 'number', value: 0, name: 'Total Acreage'},
          //created: {type: 'number', value: 0, name: 'Created'},

         
        }
      }
    },
    // mounted() {
    //   this.$store.dispatch('searchProperties', this.query)
    // },

    computed: {
      properties() {
        return this.$store.state.properties
      }
    },
    methods: {
      searchProperties() {
        for (var prop in this.propertyModel) {
          if (this.propertyModel[prop].value) {
            // { $lt: this.propertyModel[prop].value }   
            if (prop == 'salePrice' || prop == 'totalAcreage') {
              this.query[prop] = { "$gte": this.min, "$lt": this.max }
            } else {
              this.query[prop] = this.propertyModel[prop].value
            }
          }
        }
        this.$store.dispatch('searchProperties', this.query)
        this.query = {}
        this.min = 0
        this.max = 0
      },
      checkboxProperties(minValue, maxValue) {
        this.propertyModel.salePrice.value = true
        this.min = minValue
        this.max = maxValue
        console.log(this.min)
      }

    },
    components: {}
  }

</script>


<style scoped>
  .btn-white {
    transition: all .3s ease;
    background: #d8d8d8;
    color: #000;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0;
  }

  .btn-white:hover {
    background: #efefef;
    transform: scale(1.2);
  }
  .form-group{
    font-size:18px;
  }
  .pa{
    font-size: 22px;
    padding-right: 10px
  }
  .sp{
    font-size: 22px;
    margin-left: 10px;
    padding-right: 10px;
  }
  .sp-btn{
    color: black;
  }
  .checkbox-inline{
    margin-left: 20px;
  }
  .pt{
    font-size: 18px;
  }
  
 
</style>

 <!-- name: "",
          //buildingDiv: {type:'text', value:"", name: ''},
          //totalArea: {type:'text', value:"", name: ''},
          //officeArea: {type:'text', value:"", name: ''},
          //whseArea: {type:'text', value:"", name: ''},
          //ceiling: {type:'text', value:"", name: ''},
          //construction: {type:'text', value:"", name: ''},
          //power: {type:'text', value:"", name: ''},
          //amps: {type: 'number', value: 0, name: ''},
          //heatAir: {type: 'checkbox', value:false, name: ''},
          //whseHeatAir: {type: 'checkbox', value:false, name: ''},
          //fuel: {type:'text', value:"", name: ''},
          //loading: {type:'text', value:"", name: ''},
          //numRentalUnits: {type: 'number', value: 0, name: ''},
          //area: {type:'text', value:"", name: ''},
          //features: {type:'text', value:"", name: ''},
          //exclusions: {type:'text', value:"", name: ''},
          //remarks: {type:'text', value:"", name: ''},
          //agreement: {type:'text', value:"", name: ''},
          //occupants: {type: 'number', value: 0, name: ''},
          //howShown: {type:'text', value:"", name: ''}-->






           <!--<div class="form-group text-center">
          <div>
            <label class="checkbox-inline pt">Lakefront</label>
            <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties">
            </label>
          </div>
          <div>
            <label class="checkbox-inline pt">Riverfront</label>
            <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties">
            </label>
          </div>
          <div>
            <label class="checkbox-inline pt">Hunting Land/Large Acreage</label>
            <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties">
            </label>
          </div>
          <div>
            <label class="checkbox-inline pt">Islands</label>
            <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties">
            </label>
          </div>
          <div>
            <label class="checkbox-inline pt">Cottages/Cabins</label>
            <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties">
            </label>
          </div>
          <div>
            <label class="checkbox-inline pt">Remote Access</label>
            <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties">
            </label>
          </div>
          <div>
            <label class="checkbox-inline pt">Developement/Resorts</label>
            <input type="checkbox" id="inlineCheckbox" data-size="large" data-toggle="toggle" @click="checkboxProperties">
            </label>
          </div>
      </div>-->