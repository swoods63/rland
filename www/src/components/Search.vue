<template>
  <div class="search">  
    <div class="container">
      <div class="row"> 
        <div class="col-xs-12"> 
          <form @submit.prevent="searchProperties">
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
          </form>
        </div>
      </div>
      <div class="row" v-for="searchProperty in searchProperties">
        <div class="col-xs-12 col-sm-6 col-lg-4 media">
          <div class="media-left">
            <a href="#">
              <img class="media-object">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Media heading</h4>
            <p>This is some stuff about the property</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'search',
  data(){
    

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
</script>


<style scoped>

</style>
