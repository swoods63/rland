<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Welcome to my site</h3>
            </div>
            <div class="panel-body">
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
                  <button type="submit" class="btn btn-success btn-block">Login</button>
                  <p>New Member? <a class="">Sign up</a></p>
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

</style>