<template>
  <div class="register">
     <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <p class="regP">Register as a User if:<br><br><ul><li>You are an investor/developer</li><br><li>You need additional information on a property</li><br><li>You want email updates on latest properties listed</li><br><li>You want instant access to additional information</li></ul></p>
              </div>
               <div class="panel col-md-6">
                <div class="panel-heading">
                  <p class="panel-title text-center">Register</p>
                <div class="panel-body text-center">
                 <form role="form" @submit.prevent="register">
                  <fieldset>
                    <div class="form-group">
                    <input class="form-control" placeholder="Name" type="text" autofocus v-model="user.name">
                    </div>
                    <div class="form-group">
                    <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus v-model="user.email">
                    </div>
                    <div class="form-group">
                    <input class="form-control" placeholder="Password" name="password" type="password" v-model="user.password">
                    </div>
                  <!-- Change this to a button or input when using this as a form -->
                    <button type="submit" class="btn btn-success btn-block">Create Account</button>
                  </fieldset>
                 </form>
                 <div>
                  <p class="prom text-center">We promise to not share your information with anyone</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return{
        user:{}
      }
    },
    computed: {},
    methods: {
      login(){
        this.$store.dispatch('login', this.user)
      },
      register(){
        this.$store.dispatch('register', this.user)
      }
    },
    components: {}
  }

</script>


<style scoped>
.panel{
  margin-top: 80px;
  margin-bottom: 0px;
  margin-left: 80px;
  width: 480px;
  height: 400px;
}
.panel-title{
  color: black;
  padding-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  display: flex;
}
.container-fluid{
  background-color: black;
  height: 700px;
}
p{
  font-size:22px;
  color: white;
  padding-top: 100px;
  margin-left: 100px;
 }
.form-control{
  height: 60px;
}
.prom{
  font-size: 20px;
  margin-top: -55px;
}
.btn{
  font-size: 24px;
  height: 50px;
}


</style>