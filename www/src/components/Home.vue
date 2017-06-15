<template>
  <div class="home">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->

    <div class="container">
      <!-- Indicators -->
      <div id="bootstrap-touch-slider" class="carousel bs-slider slide  control-round indicators-line" data-ride="carousel" data-pause="hover" data-interval="6000">
        <!--<div id="myCarousel" class="carousel slide" data-ride="carousel">-->
        <!-- Wrapper for slides-->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="static/Carousel-imgs/hannu-keski-hakuni-11194.jpg" alt="First Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 1</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/isaac-viglione-60416.jpg" alt="Second Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 2</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/jay-toor-105107.jpg" alt="Third Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 3</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/jon-flobrant-42712.jpg" alt="Fouth Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 4</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/justin-luebke-43545.jpg" alt="Fifth Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 5</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/kalen-emsley-100237.jpg" alt="Six Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 6</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/kate-tandy-1576.jpg" alt="Seven Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 7</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/laura-lefurgey-smith-106938.jpg" alt="Eight Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 8</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/laurie-anne-robert-118365.jpg" alt="Nine Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 9</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/paul-gilmore-97770.jpg" alt="Ten Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 10</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/teddy-kelley-179099.jpg" alt="Eleven Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 11</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/tim-gouw-44459.jpg" alt="Twelve Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 12</h3>
            </div>
          </div>
          <div class="item">
            <img src="static/Carousel-imgs/tj-holowaychuk-61109.jpg" alt="Thirteen Slide">
            <div class="carousel-caption">
              <h3>Header of Slide 13</h3>
            </div>
          </div>
        </div>
      </div>
  <div class="row">
    <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
    <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  </div>
</div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="fa fa-angle-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="fa fa-angle-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!--<ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
          <li data-target="#myCarousel" data-slide-to="5"></li>
          <li data-target="#myCarousel" data-slide-to="6"></li>
          <li data-target="#myCarousel" data-slide-to="7"></li>
          <li data-target="#myCarousel" data-slide-to="8"></li>
          <li data-target="#myCarousel" data-slide-to="9"></li>
          <li data-target="#myCarousel" data-slide-to="10"></li>
          <li data-target="#myCarousel" data-slide-to="11"></li>
          <li data-target="#myCarousel" data-slide-to="12"></li>
        </ol>-->
    </div>
  </div>

</template>
<script>
export default {
  name: 'home',
  data() {
    return {

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  height: 500px;
}
</style>
