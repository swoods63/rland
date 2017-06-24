<template>
<div>
    <div class="container-fluid">
        <div class="row full-screen">
            <div><h2 class="sitename">Recreationland.net</h2></div>
            <div class="">
                <div class="cb-slideshow col-xs-12">
                    <div class="button-container">
                        <div class="buttons t-shadow">
                            <div class="button">
                                <button>
                <i class="fa fa-fw fa-envelope fa-3x t-shadow"></i>
                </button>
                                <h3>
                                    Contact Us
                                </h3>
                            </div>
                            <div class="button">
                                <button>
                <i class="fa fa-fw fa-home fa-3x t-shadow"></i>
                </button>
                                <h3>
                                    Properties
                                </h3>
                            </div>
                            <div class="button">
                                <button>
                <i class="fa fa-fw fa-user fa-3x t-shadow"></i>
                </button>
                                <h3>
                                    Login
                                </h3>
                            </div>
                        </div>
                    </div>
                    <ul>
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
            </div>
        </div>
    </div>
    <div class="container-fluid bg-green">
        <div class="row">
            <featured></featured>
        </div>
        <div class="row">
            <properties></properties>
        </div>
        <div class="row">
            <types></types>
        </div>
        <div class="row bg-red">
            <search></search>
        </div>
        <div class="row b-divider">
            <g-map lat="51.2538" long="-85.3232"></g-map>
        </div>
    </div>
    <myFooter></myFooter>
</div>
</template>


<script>
    import Featured from './Featured'
    import Properties from './Properties'
    import Types from './Types'
    import Search from './Search'
    import GMap from './Map'
    import myFooter from './myFooter'

    export default {
        name: 'home',


        mounted() {
            //this.$store.dispatch('getAuth')
        },
        computed: {},
        methods: {},
        components: {
            Featured,
            Properties,
            Search,
            Types,
            GMap,
            myFooter
        }
    }

</script>


// Add "scoped" attribute to limit CSS to this component only
<style scoped>
    .full-screen {
        height:1000px;
    }

    .bg-red{
        background: #50A879;
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        color: aliceblue;
    }

    .b-divider{
        border-bottom: 1px solid #252525;
    }
    .bg-green{
        background-color: #3b423a;
    }
    /* .text-yellow {
        color: #f5a608;
    }*/

    .t-shadow {
        text-shadow: 1px 1px 1px #000;
    }

    .button-container {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        opacity: 1;
    }

    .button-container .buttons {
        display: flex;
        z-index: 10;
    }

    @media screen and (max-width: 500px) {
        .button-container .buttons {
            flex-direction: column;
        }
    }

    .button-container .buttons .button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-transform: uppercase;
        font-family: Karma;
        text-shadow: 1px 1px 1px #000;
    }

    .button-container button {
        background: transparent;
        border-radius: 100%;
        border: 2px solid rgba(255, 255, 255, .5);
        color: white;
        font-size: 2rem;
        margin: 0 4rem;
        display: block;
        height: 120px;
        width: 120px;
        transition: all .3s linear;
    }

    .button-container button:hover {
        background: rgba(200, 200, 200, .5);
        border: 2px solid rgba(200, 200, 200, .5);
    }

    .cb-slideshow {
        position: absolute;
        width: 100%;
        height: 1000px;
        top: 0px;
        left: 0px;
        z-index: -10;
    }

    .cb-slideshow ul {
        z-index: -10;
        list-style: none;
    }

    .cb-slideshow ul li span {
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
        animation: imageAnimation 36s linear infinite 0s;
    }

    .cb-slideshow ul li:nth-child(1) span {
        background-image: url(../../static/Carousel-imgs/hannu-keski-hakuni-11194.jpg);
    }

    .cb-slideshow ul li:nth-child(2) span {
        background-image: url(../../static/Carousel-imgs/isaac-viglione-60416.jpg);
        animation-delay: 6s;
    }

    .cb-slideshow ul li:nth-child(3) span {
        background-image: url(../../static/Carousel-imgs/jay-toor-105107.jpg);
        animation-delay: 12s;
    }

    .cb-slideshow ul li:nth-child(4) span {
        background-image: url(../../static/Carousel-imgs/jon-flobrant-42712.jpg);
        animation-delay: 18s;
    }

    .cb-slideshow ul li:nth-child(5) span {
        background-image: url(../../static/Carousel-imgs/justin-luebke-43545.jpg);
        animation-delay: 24s;
    }

    .cb-slideshow ul li:nth-child(6) span {
        background-image: url(../../static/Carousel-imgs/kalen-emsley-100237.jpg);
        animation-delay: 30s;
    }

    .cb-slideshow ul li:nth-child(7) span {
        background-image: url(../../static/Carousel-imgs/kate-tandy-1576.jpg);
        animation-delay: 36s;
    }

    .cb-slideshow ul li:nth-child(8) span {
        background-image: url(../../static/Carousel-imgs/laura-lefurgey-smith-106938.jpg);
        animation-delay: 42s;
    }

    .cb-slideshow ul li:nth-child(9) span {
        background-image: url(../../static/Carousel-imgs/laurie-anne-robert-118365.jpg);
        animation-delay: 48s;
    }

    .cb-slideshow ul li:nth-child(10) span {
        background-image: url(../../static/Carousel-imgs/paul-gilmore-97770.jpg);
        animation-delay: 54s;
    }

    .cb-slideshow ul li:nth-child(11) span {
        background-image: url(../../static/Carousel-imgs/teddy-kelley-179099.jpg);
        animation-delay: 60s;
    }

    .cb-slideshow ul li:nth-child(12) span {
        background-image: url(../../static/Carousel-imgs/tim-gouw-44459.jpg);
        animation-delay: 66s;
    }

    .cb-slideshow ul li:nth-child(13) span {
        background-image: url(../../static/Carousel-imgs/tj-holowaychuk-61109.jpg);
        animation-delay: 72s;
    }

    @keyframes imageAnimation {
        0% {
            opacity: 0;
            animation-timing-function: ease-in;
        }
        8% {
            opacity: 1;
            animation-timing-function: ease-out;
        }
        17% {
            opacity: 1
        }
        25% {
            opacity: 0
        }
        100% {
            opacity: 0
        }
    }

    .sitename {
        font-family: 'Dancing Script', cursive;
        color: orange;
    }
</style>
