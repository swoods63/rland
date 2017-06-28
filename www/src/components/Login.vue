<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default center">
            <div class="panel-heading">
              <p class="panel-title text-center">Login</p>
            </div>
            <div class="panel-body text-center">
              <form role="form" @submit.prevent="register">
                <fieldset>
                  <div class="form-group">
                    <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus v-model="user.email">
                  </div>
                  <div class="form-group">
                    <input class="form-control" placeholder="Password" name="password" type="password" v-model="user.password">
                  </div>
                  <!-- Change this to a button or input when using this as a form -->
                  <button type="submit" class="btn btn-success btn-block">Login</button>
                 <p class="reg">Not Registered Yet? <b v-on:click="register">Click here.</b></p>
                </fieldset>
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
        user:{email:"", password:""}
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
  margin-top: 275px;
  margin-bottom: 500px;
  width: 500px;
  height: 460px;
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
  height: 70px;
}
.btn{
  height: 60px;
  font-size: 24px;
}
.reg{
  font-size:26px;
  color: red;
}

</style>
