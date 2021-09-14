<template>
  <div class="row items-start q-gutter-md ">
      <div class="ripped-div q-pt-xl col-12 row justify-center">
        <div class="col-12 normal-div row justify-center">
          <div class="col-6 bg-white q-pa-xl" style="margin-left:20px;border-radius:50%">
            <img style="width:100%" src="https://www.vhembecollege.edu.za/wp-content/uploads/2018/11/cropped-logo_cut-1024x896.jpg">
          </div>
        </div>
        <div class="overlay">

        </div>
      </div>
      <div style="text-align:center" class="q-pt-md q-px-md text-primary">
        <div class="text-h6" style="font-weight:500">Our Mission and Vision</div>
        </div>
  </div>
 <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      control-color="white"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      arrows
      height="400px"
      class="bg-light-blue text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="track_changes" size="100px" />
        <div class="q-mt-md text-center">
          <strong> Our Vision</strong>
          <br>
           <br>
          To be a national icon in producing the best technically and vocationally skilled professionals 

        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="emoji_events" size="100px" />
        <div class="q-mt-md text-center">
      <strong> Our Mission</strong>
          <br>
           <br>
    To enhance the quality of teaching and learning by providing adequate resources
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="thumb_up_alt" size="100px" />
        <div class="q-mt-md text-center">
       <strong> Our Core Values</strong>
          <br>
           <br>
           Leadership  <br>
           Teamwork<br> 
           Integrity <br>
           Respect<br> 
           Accountability<br> 
           Commitment<br>
        </div>
      </q-carousel-slide>

    </q-carousel>
  </div>

  <!--<div class="q-pa-md">
    <q-btn color="light-blue" class="full-width" label="Full-width" /></div> -->


  



</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>


<style lang="scss">
  .shiny-card{
    background-color: rgba(1,174,240,0.8);
    border-radius: 10px;
    color: white;
    box-shadow: 0px 0px 10px 0px rgba(1,174,240,0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(1,174,240,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(1,174,240,0.75);
  
  }
  .ripped-div {
    background-color: rgba(1,174,240,0.75);
    // background-color: rgba(1,174,240,0.75);
    position: relative;
    margin: 0;
    padding-top: 70px;
    padding-bottom: 20px;
    width: 100%;

    .normal-div{

    }
    .overlay{

    position: absolute;
    bottom: -50px;
    transform: rotate(180deg);
    z-index: -100;
    height: 50px;
    width: 100%;
    
    background-size: 200%;

   

    }
  }
</style>
