<template>
  <div class="myFooter container-fluid">
    <div class="row">
      <ul class="list-inline text-center">
        <!--<li class="active myLinks"><a href="http://localhost:8080/#/advertising">Advertising</a></li>-->
        <li class="active myLinks"><a href="http://localhost:8080/#/contact">Contact</a></li>
        <li class="active myLinks"><a href="http://localhost:8080/#/faqs">FAQs</a></li>
        <li class="active myLinks"><a href="http://localhost:8080/#/border">Crossing Border</a></li>
      </ul>

    </div>
    <div class="row">
      <ul class="list-inline text-center">
        <li class="active myLinks"><a href="http://localhost:8080/#/privacy">Privacy</a></li>
        <li class="active myLinks"><a href="http://localhost:8080/#/register">Register</a></li>
        <li class="active myLinks"><a href="http://localhost:8080/#/resources">Resources</a></li>
        <!--<li class="active myLinks"><a href="http://localhost:8080/#/terms">Terms and Conditions</a></li><br>-->
        <li class="active myLinks"><a href="http://localhost:8080/#/">TDO  Web Design & Hosting</a></li>
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
    background: #0f0e19;
    border-top: 1px solid black;
    padding: 3rem;
  }

  .list-flex {
    display: flex;
  }

  li {
    margin: 3rem 1.5rem 0 0;
    font-size: 2rem;
  }
  li a{
    color: orange;
  }
  li a:hover, li a:focus{
    color: #ffcc6f;
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
      .list-inline li {
          display: block;
      }
    }
</style>