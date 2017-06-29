template>
  <div class="search">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h3><button class="btn btn-white btn" @click="showForm = !showForm">Find Property</button></h3>
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
<<<<<<< HEAD
            </label>
=======
            </label>            
>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
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
<<<<<<< HEAD
        propertyModel: {
=======
        propertyModel: {          
>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
          lakefront: {type: 'checkbox', value:false, name: 'Lake Front'},
          riverfront: {type: 'checkbox', value:false, name: 'River Front'},
          huntingLand: {type: 'checkbox', value:false, name: 'Hunting Land'},
          remoteAccess: {type: 'checkbox', value:false, name: 'Remote Access'},
          islands: {type: 'checkbox', value:false, name: 'Islands'},
          cabins: {type: 'checkbox', value:false, name: 'Cabins/Cottages'},
          developmentLand: {type: 'checkbox', value:false, name: 'Development Land'},
          resorts: {type: 'checkbox', value:false, name: 'Resorts'},
<<<<<<< HEAD
=======

>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
          water: {type: 'checkbox', value:false, name: 'Water Line'},
          power: {type:'checkbox', value:false, name: 'Line Power'},
          bodyOfWater: {type: 'checkbox', value:false, name: 'Waterfront'},
          accessRoad: {type: 'checkbox', value:false, name: 'Access Road'},
<<<<<<< HEAD
=======

>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
          isFeature: {type: 'checkbox', value:false, name: 'Featured'},
          hasStructure: {type: 'checkbox', value:false, name: 'Includes Structure'},
          salePrice: {type: 'number', value:false, name: 'Sale Price'},
          totalAcreage: {type: 'number', value: 0, name: 'Total Acreage'},
          created: {type: 'number', value: 0, name: 'Created'},
<<<<<<< HEAD
=======

>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
          // name: "",
          conditionalOffer: {type: 'checkbox', value:false, name: ''},
          activeListing: {type: 'checkbox', value:false, name: ''},
          listingPrice: {type: 'number', value: 0, name: ''},
          lotSize: {type:'text', value:"", name: 'This is our test'},
          year: {type: 'number', value: 0, name: ''},
<<<<<<< HEAD
          use: {type:'text', value:"", name: ''},
=======
          use: {type:'text', value:"", name: ''},          
>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
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
<<<<<<< HEAD
=======

>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
    computed: {
      properties() {
        return this.$store.state.properties
      }
    },
    methods: {
      searchProperties() {
        for(var prop in this.propertyModel){
          if(this.propertyModel[prop].value){
<<<<<<< HEAD
            // { $lt: this.propertyModel[prop].value }
            if(prop == 'salePrice' || prop == 'totalAcreage'){
              this.query[prop] = {"$gte": this.min, "$lt": this.max}
=======
            // { $lt: this.propertyModel[prop].value }   
            if(prop == 'salePrice' || prop == 'totalAcreage'){
              this.query[prop] = {"$gte": this.min, "$lt": this.max}           
>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
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
<<<<<<< HEAD
    },
    components: {}
  }
=======

    },
    components: {}
  }

>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
</script>


<style scoped>
<<<<<<< HEAD
=======

>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
.btn-white{
  transition: all .3s ease;
  background: #d8d8d8;
  color: #000;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0;
}
.btn-white:hover{
  background: #efefef;
  transform: scale(1.2);
}
<<<<<<< HEAD
</style>
=======



</style>
>>>>>>> 9f93c14ec32eb1f389b9fe7741f771edf7e0df6c
