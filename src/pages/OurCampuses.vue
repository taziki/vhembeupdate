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
        <div class="text-h6" style="font-weight:500">Our Campuses</div>
      </div>

    <div class="q-pa-md">
            <q-btn color="light-blue" class="full-width" to="/MakwarelaCampusCampus">Makwarela Campus</q-btn>
            <q-btn color="light-blue" class="full-width" to="/TshisimaniCampus">Tshisimani Campus</q-btn>
            <q-btn color="light-blue" class="full-width" to="MashambaCampus">Mashamba Campus</q-btn>
            <q-btn color="light-blue" class="full-width" to="/MavhoiCampus">Mavhoi Campus</q-btn>
            <q-btn color="light-blue" class="full-width" to="/ThengweCampus">Thengwe Campus</q-btn>
            <q-btn color="light-blue" class="full-width" to="/ShingwedziCampus">Shingwedzi Campus</q-btn>
            <q-btn color="light-blue" class="full-width" to="/MusinaCampus">Musina Campus</q-btn>
            <q-btn color="light-blue" class="full-width" to="/Makhadho">Makhado Hospitality Center</q-btn>
    </div>
 
  </div>
</template>
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
    border-bottom-color: azure;
    border-top-color:azure;

    }
  }
</style>