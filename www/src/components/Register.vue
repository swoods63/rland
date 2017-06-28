<template>
  <div class="login">
    <div class="container-fluid">
    <p>Register as a User if:<ul><li>You are an investor/developer</li><li>You need additional information on a property</li><li>You want email updates on the latest properties listed</li><li>You want instant access to additional information</li></ul></p>
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default center">
            <div class="panel-heading">
              <p class="panel-title text-center">Register</p>
            </div>
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
                <p> We promise to not share your information with anyone</p>
              </form>
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
  margin-top: 50px;
  margin-bottom: 200px;
  width: 500px;
  height: 440px;
}
.panel-title{
  color: black;
  padding-top: 20px;
  margin-bottom: 20px;
}
.container-fluid{
  background-color: black;
}
p{
  font-size:32px;
  color: #eeeeee;
  padding-top: 50px;
  padding-left: 25px;
}
.form-control{
  height: 60px;
}
.btn{
  font-size: 24px;
  height:50px;
}
</style>