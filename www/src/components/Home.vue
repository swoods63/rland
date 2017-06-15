<template>
<div>
  <ul class="cb-slideshow">
	  <li>
		<span>Image 1</span>
	  </li>
    <li>
		<span>Image 2</span>
	  </li>
    <li>
 		<span>Image 3</span>
	  </li>
     <li>
		<span>Image 4</span>
	  </li>
    <li>
		<span>Image 5</span>
	  </li>
    <li>
 		<span>Image 6</span>
	  </li>
     <li>
		<span>Image 7</span>
	  </li>
    <li>
		<span>Image 8</span>
	  </li>
    <li>
 		<span>Image 9</span>
	  </li>
     <li>
		<span>Image 10</span>
	  </li>
    <li>
		<span>Image 11</span>
	  </li>
    <li>
 		<span>Image 12</span>
	  </li>
    <li>
 		<span>Image 13</span>
	  </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {

            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cb-slideshow{ 
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 0; 
}
.cb-slideshow li span { 
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 36s linear infinite 0s; 
}



.cb-slideshow li:nth-child(1) span { 
    background-image: url(../../static/Carousel-imgs/hannu-keski-hakuni-11194.jpg); 
}
.cb-slideshow li:nth-child(2) span { 
    background-image: url(../../static/Carousel-imgs/isaac-viglione-60416.jpg);
    animation-delay: 6s; 
}
.cb-slideshow li:nth-child(3) span { 
    background-image: url(../../static/Carousel-imgs/jay-toor-105107.jpg);
    animation-delay: 12s; 
}
.cb-slideshow li:nth-child(4) span { 
    background-image: url(../../static/Carousel-imgs/jon-flobrant-42712.jpg);
    animation-delay: 18s; 
}
.cb-slideshow li:nth-child(5) span { 
    background-image: url(../../static/Carousel-imgs/justin-luebke-43545.jpg);
    animation-delay: 24s; 
}
.cb-slideshow li:nth-child(6) span { 
    background-image: url(../../static/Carousel-imgs/kalen-emsley-100237.jpg);
    animation-delay: 30s; 
}
.cb-slideshow li:nth-child(7) span { 
    background-image: url(../../static/Carousel-imgs/kate-tandy-1576.jpg);
    animation-delay: 36s; 
}
.cb-slideshow li:nth-child(8) span { 
    background-image: url(../../static/Carousel-imgs/laura-lefurgey-smith-106938.jpg);
    animation-delay: 42s; 
}
.cb-slideshow li:nth-child(9) span { 
    background-image: url(../../static/Carousel-imgs/laurie-anne-robert-118365.jpg);
    animation-delay: 48s; 
}
.cb-slideshow li:nth-child(10) span { 
    background-image: url(../../static/Carousel-imgs/paul-gilmore-97770.jpg);
    animation-delay: 54s; 
}
.cb-slideshow li:nth-child(11) span { 
    background-image: url(../../static/Carousel-imgs/teddy-kelley-179099.jpg);
    animation-delay: 60s; 
}
.cb-slideshow li:nth-child(12) span { 
    background-image: url(../../static/Carousel-imgs/tim-gouw-44459.jpg);
    animation-delay: 66s; 
}
.cb-slideshow li:nth-child(13) span { 
    background-image: url(../../static/Carousel-imgs/tj-holowaychuk-61109.jpg);
    animation-delay: 72s; 
}
@keyframes imageAnimation { 
    0% { opacity: 0; animation-timing-function: ease-in; }
    8% { opacity: 1; animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}
/*.no-cssanimations .cb-slideshow li span{
	opacity: 1;
}*/


</style>




