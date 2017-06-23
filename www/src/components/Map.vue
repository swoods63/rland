<template>
    <iframe class="g-map center-block"
  frameborder="0" style="border:0"
  :src="url" allowfullscreen>
</iframe>
</template>

<script>
    export default {
        props: ['lat', 'long'],
        computed:{
            url(){
                return `https://www.google.com/maps/embed/v1/view?key=AIzaSyAWugQ81GFyrrUi_6p5Q2NSk4vgjD991Q8&center=${this.lat},${this.long}&zoom=6`
            }
        }
    }
</script>

<style>
.g-map{
    width: 80%;
    height: 600px;
    margin-bottom: 20px;

}
</style>
