<template>
  <div class="search">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <form @submit.prevent="searchProperties">
<<<<<<< HEAD
            <div class="row">
              <div class="col-xs-3 form-group" v-for="(obj, prop) in propertyModel">
                <label for="">{{obj.name}}</label>
                <input type="checkbox" v-if="obj.type == 'checkbox'" v-model="obj.value">
                <input type="text" v-if="obj.type !== 'checkbox'" :placeholder="prop" v-model="obj.value">
              </div>
            </div>
            <button class="btn" type="submit">Search Properties</button>
          </form>
          <form>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox1" data-size="large" data-toggle="toggle" @click="checkboxProperties(1, 5000)"> 0-50K
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" data-size="large" data-toggle="toggle" @click="checkboxProperties(5000, 40000)"> 51-100K
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" data-size="large" data-toggle="toggle" @click="checkboxProperties(49000, 100000)"> 101-300K
            </label>            
=======
          <div class="form-group">
            <ul class="dropdown-menu">
              <li>
                <a href="#" class="small" data-value="option1" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;Lake Front
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option2" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;River Front
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option3" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;Hunting Land
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option4" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;Remote Access
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option5" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;Islands
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option6" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;Cottages/Cabins
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option7" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;Development Land
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option8" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;Resorts
                </a>
              </li>
            </ul>
          </div>
          <div class="form-group">
            <ul class="dropdown-menu">
              <li>
                <a href="#" class="small" data-value="option9" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;0 - $50,000
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option10" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;$51,000 - $150,000
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option11" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;$151,000 - $300,000
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option12" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;$301,000 - $500,000
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option13" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;$500,000 +
                </a>
              </li>
            </ul>
          </div>
          <div class="form-group">
            <ul class="dropdown-menu">
              <li>
                <a href="#" class="small" data-value="option14" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;More Than
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option15" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;Less Than
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option16" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;5 acres
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option17" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;10 acres
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option18" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;50 acres
                </a>
              </li>
              <li>
                <a href="#" class="small" data-value="option19" tabIndex="-1">
                  <input type="checkbox"/>&nbsp;100 acres
                </a>
              </li>
            </ul>
          </div>
            <button class="btn btn-primary" type="submit">Search Properties</button>
>>>>>>> e48df6ccf8be7f0fa33219e3372ef9cb8606fa71
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
<<<<<<< HEAD
  export default {
    name: 'search',
    data() {
      return {
        min: 0,
        max: 0,
        query: {},
        propertyModel: {          
          lakefront: {type: 'checkbox', value:false, name: 'Lake Front'},
          riverfront: {type: 'checkbox', value:false, name: 'River Front'},
          huntingLand: {type: 'checkbox', value:false, name: 'Hunting Land'},
          remoteAccess: {type: 'checkbox', value:false, name: 'Remote Access'},
          islands: {type: 'checkbox', value:false, name: 'Islands'},
          cabins: {type: 'checkbox', value:false, name: 'Cabins/Cottages'},
          developmentLand: {type: 'checkbox', value:false, name: 'Development Land'},
          resorts: {type: 'checkbox', value:false, name: 'Resorts'},

          water: {type: 'checkbox', value:false, name: 'Water Line'},
          power: {type:'checkbox', value:false, name: 'Line Power'},
          bodyOfWater: {type: 'checkbox', value:false, name: 'Waterfront'},
          accessRoad: {type: 'checkbox', value:false, name: 'Access Road'},

          isFeature: {type: 'checkbox', value:false, name: 'Featured'},
          hasStructure: {type: 'checkbox', value:false, name: 'Includes Structure'},
          salePrice: {type: 'number', value:false, name: 'Sale Price'},
          totalAcreage: {type: 'number', value: 0, name: 'Total Acreage'},
          created: {type: 'number', value: 0, name: 'Created'},

          // name: "",
          conditionalOffer: {type: 'checkbox', value:false, name: ''},
          activeListing: {type: 'checkbox', value:false, name: ''},
          listingPrice: {type: 'number', value: 0, name: ''},
          lotSize: {type:'text', value:"", name: 'This is our test'},
          year: {type: 'number', value: 0, name: ''},
          use: {type:'text', value:"", name: ''},          
          sewer: {type: 'checkbox', value:false, name: ''},
          basement: {type: 'checkbox', value:false, name: ''},
          propSize: {type:'text', value:"", name: ''},
          waterfront: {type: 'checkbox', value:false, name: ''},
          numStories: {type: 'number', value: 0, name: ''},
          frontage: {type:'text', value:"", name: ''},
          buildingDiv: {type:'text', value:"", name: ''},
          totalArea: {type:'text', value:"", name: ''},
          officeArea: {type:'text', value:"", name: ''},
          whseArea: {type:'text', value:"", name: ''},
          ceiling: {type:'text', value:"", name: ''},
          construction: {type:'text', value:"", name: ''},
          power: {type:'text', value:"", name: ''},
          amps: {type: 'number', value: 0, name: ''},
          heatAir: {type: 'checkbox', value:false, name: ''},
          whseHeatAir: {type: 'checkbox', value:false, name: ''},
          fuel: {type:'text', value:"", name: ''},
          loading: {type:'text', value:"", name: ''},
          numRentalUnits: {type: 'number', value: 0, name: ''},
          area: {type:'text', value:"", name: ''},
          features: {type:'text', value:"", name: ''},
          exclusions: {type:'text', value:"", name: ''},
          remarks: {type:'text', value:"", name: ''},
          agreement: {type:'text', value:"", name: ''},
          occupants: {type: 'number', value: 0, name: ''},
          howShown: {type:'text', value:"", name: ''}
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
        for(var prop in this.propertyModel){
          if(this.propertyModel[prop].value){
            // { $lt: this.propertyModel[prop].value }   
            if(prop == 'salePrice' || prop == 'totalAcreage'){
              this.query[prop] = {"$gte": this.min, "$lt": this.max}           
            }else{
              this.query[prop] = this.propertyModel[prop].value
            }
          }
        }
        this.$store.dispatch('searchProperties', this.query)
        this.query = {}
        this.min = 0
        this.max = 0
      },
      checkboxProperties(minValue, maxValue){
        this.propertyModel.salePrice.value = true
        this.min = minValue
        this.max = maxValue
        console.log(this.min)
      }

    },
    components: {}
  }

=======
export default {
  name: 'search',
  data(){
    return {

    }

  },

  computed:{
    searchProperties(){
      return this.$store.state.searchProperties
    }
  },
  methods:{
    searchProperties(){
      this.$store.dispatch('searchProperties', {})
    }
  },
  components:{}
}
>>>>>>> e48df6ccf8be7f0fa33219e3372ef9cb8606fa71
</script>


<style scoped>

</style>