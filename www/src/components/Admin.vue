<template>
    <div class="admin">
        <h1 class="pageTitle text-center">
            <p><b>Recreationland</b></p>
            <p><b>Admin Property Upload</b></p>
        </h1>
        <form @submit.prevent="createProperty">
            <div>
                <div>
                    <label class="propT">Property Type:</label>
                    <select class="sel">
                        <option>Lake Front</option>
                        <option>River Front</option>
                        <option>Hunting Land</option>
                        <option>Remote Access</option>
                        <option>Islands</option>
                        <option>Cottages/Cabins</option>
                        <option>Development Land</option>
                        <option>Resorts</option>
                     </select>
                </div>
                <div>
                    <label class="propT">Prop Name/Title:</label>
                    <input class="propNT" type="text" />
                </div>
                <div>
                    <label class="propT">List Price:</label>
                    <input class="propLP" type="text" />
                    <select id="dollar">
                        <option>CDN</option>
                        <option>US</option> 
                    </select>
                </div>
                <div>
                    <label class="propT">Lot Size:</label>
                    <input class="propLS" type="text" />
                </div>
                <div>
                    <label class="propT">Longitude:</label>
                    <input class="propLNG" type="text" />
                </div>
                <div>
                    <label class="propT">Latitude:</label>
                    <input class="propLAT" type="text" />
                </div>
                <div>
                    <input type="file" id="tohide" />
                    <input type="button" value="upload images" class="upload" onClick="document.getElementById('tohide').click()" />
                </div>
                <div class="saf">
                    <label>Sold</label>
                    <input type="checkbox" value="" />
                </div>
                <div class="saf">
                    <label>Active Listing</label>
                    <input type="checkbox" value="" />
                </div>
                <div class="saf">
                    <label>Feature</label>
                    <input type="checkbox" value="" />
                    <div>
                        <h3><b>Description:</b></h3>
                        <p><textarea name="comment" id="" cols="100" rows="10" class="tArea" placeholder="Write about the property..."></textarea></p>
                    </div>
                </div>
                <div>
                    <h3><b>Additional Information:</b></h3>
                     <div class="row">
                        <div class="inputData">
                            <label class="lNames1">Taxes:</label>
                            <input type="text" placeholder="Taxes" class="inField1" />
                          </div>
                          <div>
                            <label class="lNames1">Year:</label>
                            <input type="text" placeholder="Year" class="inField2" />
                           </div>
                          <div>  
                            <label class="lNames1">Zoning:</label>
                            <input type="text" placeholder="Zoning" class="inField3" />
                           </div>
                          <div>  
                            <label class="lNames1">SD/RD:</label>
                            <input type="text" placeholder="SD/RD" class="inField4" />
                           </div>
                          <div>  
                            <label class="lNames1">Waterline:</label>
                            <input type="text" placeholder="Waterline" class="inField5" />
                           </div>
                          <div>  
                            <label class="lNames1">Survey:</label>
                            <input type="text" placeholder="Survey" class="inField6" />
                           </div>
                          <div>  
                            <label class="lNames1">Cap Changes:</label>
                            <input type="text" placeholder="Cap Changes" class="inField7" /> 
                           </div>
                          <div>                    
                            <label class="lNames1">Powerline:</label>
                            <input type="text" class="inField8" placeholder="Powerline" />
                           </div>
                          <div>  
                            <label class="lNames1">Sewerline:</label>
                            <input type="text" class="inField9" placeholder="Sewerline" />
                           </div>
                          <div>  
                            <label class="lNames1">Amps:</label>
                            <input type="text" class="inField10" placeholder="Amps" />
                           </div>
                          <div>  
                            <label class="lNames1">Frontage:</label>
                            <input type="text" class="inField11" placeholder="Frontage" />
                           </div>
                          <div>  
                            <label class="lNames1">Structure:</label>
                            <input type="text" class="inField12" placeholder="Structure" />
                           </div>
                          <div>  
                            <label class="lNames1">Usage:</label>
                            <input type="text" class="inField13" placeholder="Usage" />
                           </div>
                          <div>  
                            <label class="lNames1">Mineral Rights:</label>
                            <input type="text" class="inField14" placeholder="Mineral Rights" />
                           </div>
                          <div>  
                            <label class="lNames1">Unorganized Township:</label>
                            <input type="text" class="inField15" placeholder="Unorganized Township" />
                            </div>
                          <div> 
                        </div>
                     </div>
                </div>
                <div>
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Edit a Property</button>
                    <select class="edProp">
                        <option>Lake Front</option>
                        <option>River Front</option>
                        <option>Hunting Land</option>
                        <option>Remote Access</option>
                        <option>Islands</option>
                        <option>Cottages/Cabins</option>
                        <option>Development Land</option>
                        <option>Resorts</option>
                    </select>
                </div>
                <div>
                    <button class="btn pnt btn-primary" type="Submit">Submit Properties</button>
                </div>
            </div>
        </form>
    </div>


</template>

<script>
  export default {
    name: 'admin',
    data() {
      return {
        showForm: false,
        min: 0,
        max: 0,
        newProperty: {},
        propertyModel: {
          // lakefront: {type: 'checkbox', value:false, name: 'Lake Front'},
          // riverfront: {type: 'checkbox', value:false, name: 'River Front'},
          // huntingLand: {type: 'checkbox', value:false, name: 'Hunting Land'},
          // remoteAccess: {type: 'checkbox', value:false, name: 'Remote Access'},
          // islands: {type: 'checkbox', value:false, name: 'Islands'},
          // cabins: {type: 'checkbox', value:false, name: 'Cabins/Cottages'},
          // developmentLand: {type: 'checkbox', value:false, name: 'Development Land'},
          // resorts: {type: 'checkbox', value:false, name: 'Resorts'},
          water: {type: 'checkbox', value:false, name: 'Water Line'},
          power: {type:'checkbox', value:false, name: 'Line Power'},
          bodyOfWater: {type: 'checkbox', value:false, name: 'Waterfront'},
          accessRoad: {type: 'checkbox', value:false, name: 'Access Road'},
          isFeature: {type: 'checkbox', value:false, name: 'Featured'},
          hasStructure: {type: 'checkbox', value:false, name: 'Includes Structure'},
          salePrice: {type: 'number', value:false, name: 'Sale Price'},
          totalAcreage: {type: 'number', value: 0, name: 'Total Acreage'},
          created: {type: 'number', value: 0, name: 'Created'},
         // propertyUrl: { type: 'string', value: "", name: 'Property URL' }
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
      createProperty(){
        this.$store.dispatch('createProperty', newProperty)
      },
      searchProperties() {
        for(var prop in this.propertyModel){
          if(this.propertyModel[prop].value){
            // { $lt: this.propertyModel[prop].value }
            if(prop == 'salePrice' || prop == 'totalAcreage'){
              this.newProperty[prop] = {"$gte": this.min, "$lt": this.max}
            }else{
              this.newProperty[prop] = this.propertyModel[prop].value
            }
          }
        }
        this.$store.dispatch('searchProperties', this.newProperty)
        this.newProperty = {}
        this.min = 0
        this.max = 0
      },
      checkboxProperties(minValue, maxValue){
        this.propertyModel.salePrice.value = true
        this.min = minValue
        this.max = maxValue
      },
      transferUrl(url){
        this.propertyModel.propertyUrl.value = url
      }
    },
    components: {}
  }
</script>


<style scoped>
.admin{
  background-color: orange;
  height: 1600px;
}
.btn{
  margin-bottom: 20px;
  margin-left: 140px;
  margin-right: 5px;
  height: 35px;
}
.field{
  height: 300px;
  margin-top: 20px;
}
h3{
  margin-left: 140px;
}
.inField1{
  margin-left: 130px;
}
.inField2{
  margin-left: 138px;
}
.inField3{
  margin-left: 123px;
}
.inField4{
  margin-left: 125px;
}
.inField5{
  margin-left: 105px;
}
.inField6{
  margin-left: 123px;
}
.inField7{
  margin-left: 80px;
}
.inField8{
  margin-left: 105px;
}
.inField9{
  margin-left: 105px;
}
.inField10{
  margin-left: 131px;
}
.inField11{
  margin-left: 112px;
}
.inField12{
  margin-left: 110px;
}
.inField13{
  margin-left: 129px;
}
.inField14{
  margin-left: 76px;
}
.inField15{
  margin-left: 21px;
}

input{
  float-left: 400px;
}
.lNames1{
  margin-left: 140px;
  margin-bottom: 10px;
}
.listP{
  margin-left: 140px;
  font-size: 18px;
}
.lNames2{
  margin-left: 90px;
  margin-bottom: 10px;
}
.pageTitle{
  padding-top: 30px;
  padding-bottom: 30px;
}
.propLP{
  margin-left: 79px;
  margin-top: 10px;
}
.propLS{
  margin-left: 90px;
  margin-top: 10px;
}
.propNameT{
  margin-left: 140px;
  font-size: 18px;
}
.propNT{
  margin-left: 25px;
  margin-top: 10px;
  width: 400px;
}
.propT{
  margin-left: 140px;
  margin-bottom: 10px;
  font-size: 18px;
}
.saf{
  margin-left: 140px;
}
.sel{
  margin-left: 40px;
}
.tArea{
  height: 310px;
  width: 450px;
  margin-left: 140px;
}
#tohide{
  visibility: hidden;
}
.upload{
  border-color: blue;
  background-color: white;
  border-radius: 5px;
  color: green;
  width: 200px;
  height: 50px;
  margin-left: 310px;
}
.propLNG{
  margin-left: 74px;
  margin-top: 10px;
}
.propLAT{
  margin-left: 90px;
  margin-top: 10px;
}
.edProp{
  width: 500px;
}














/*.btn-white{
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
}*/
</style>



<!-- <p> This is the admin page where properties and photos will be uploaded and edited</p>
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
            </label>
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
    </div>-->