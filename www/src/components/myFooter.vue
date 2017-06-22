<template>
  <div class="myFooter container-fluid">
    <div class="row">
      <ul class="list-inline text-center">
        <li class="active myLinks"><a href="#">Advertising</a></li>
        <li class="active myLinks"><a href="#">Border Crossing</a></li>
        <li class="active myLinks"><a href="#">Contact</a></li>
        <li class="active myLinks"><a href="#">FAQs</a></li>
      </ul>

    </div>
    <div class="row">
      <ul class="list-inline text-center">
        <li class="active myLinks"><a href="#">Privacy</a></li>
        <li class="active myLinks"><a href="#">Register</a></li>
        <li class="active myLinks"><a href="#">Resources</a></li>
        <li class="active myLinks"><a href="#">Terms and Conditions</a></li>
      </ul>
    </div>


  </div>
</template>


<script>
  export default {
    name: 'myFooter',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style>
  .myFooter {
    background: url("../assets/ryan-moreno-99473.jpg");
    background-size: cover;
    height: 270px;
    font-size: 25px;
  }

  .list-flex {
    display: flex;
  }

  li {
    margin: 30px;
  }
  li a{
    color: orange;
  }
  li a:hover, li a:focus{
    color: #ffcc6f;
    text-decoration: none;
  }
</style>