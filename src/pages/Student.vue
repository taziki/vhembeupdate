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
        <div class="text-h6" style="font-weight:500">Student and Staff Portals</div>
        <div>Find information and activity portals links. </div>
      </div>

      
      <div style="width:100%" class="container d-flex q-px-md q-pt-lg">
        <div  data-lightbox="homePortfolio">
          <q-card class="shiny-card justify-center  row" style="width:100%;height:100%">
          <q-card-section style="text-align:center;align-items:center" class="row justify-between items-center">
            <div class="" style="line-height:1.2">
              <span style="font-size:0.9rem;font-weight:600">Apply For Courses</span>
            </div>
            <div class="col-12">
              <q-btn
              type="a"
              href="https://ienabler.vhembecollege.edu.za/pls/prodi41/gen.gw1pkg.gw1view" target="_blank"
              color="white" icon="east" size="sm" style="margin-top:2.5px" text-color="white" round outline />
            </div>
          </q-card-section>
          </q-card>
        </div>
        <div  data-lightbox="homePortfolio">
          <q-card class="shiny-card justify-center  row" style="width:100%;height:100%">
          <q-card-section style="text-align:center;align-items:center" class="row justify-between items-center">
            <div  style="line-height:1.2">
              <span style="font-size:0.8rem;font-weight:600">Apply For Bursary </span>
            </div>
            <div class="col-12">
              <q-btn
              type="a"
              href="https://www.nsfas.org.za/content/TVETs.html" target="_blank"
              color="white" icon="east" size="sm" style="margin-top:2.5px" text-color="white" round outline />
            </div>
          </q-card-section>
          </q-card>
        </div>
        <div data-lightbox="homePortfolio">
          <q-card class="shiny-card justify-center  row" style="width:100%;height:100%">
          <q-card-section style="text-align:center;align-items:center" class="row justify-between items-center">
            <div class="" style="line-height:1.2">
              <span style="font-size:0.9rem;font-weight:600">Student Email</span>
            </div>
            <div class="col-12">
              <q-btn
              type="a"
              href="https://login.microsoftonline.com/" target="_blank"
              color="white" icon="east" size="sm" style="margin-top:2.5px" text-color="white" round outline />
            </div>
          </q-card-section>
          </q-card>
        </div>
        <div data-lightbox="homePortfolio">
          <q-card class="shiny-card justify-center  row" style="width:100%;height:100%">
          <q-card-section style="text-align:center;align-items:center" class="row justify-between items-center">
            <div class="" style="line-height:1.2">
              <span style="font-size:0.9rem;font-weight:600">E-Learning Portal</span>
            </div>
            <div class="col-12">
              <q-btn
              type="a"
              href="https://training.vhembecollege.edu.za/login/index.php" target="_blank"
              color="white" icon="east" size="sm" style="margin-top:2.5px" text-color="white" round outline />
            </div>
          </q-card-section>
          </q-card>
        </div>
        <div data-lightbox="homePortfolio">
          <q-card class="shiny-card justify-center  row" style="width:100%;height:100%">
          <q-card-section style="text-align:center;align-items:center" class="row justify-between items-center">
            <div class="" style="line-height:1.2">
              <span style="font-size:0.9rem;font-weight:600">Learning Material</span>
            </div>
            <div class="col-12">
              <q-btn
              type="a"
              href="https://www.vhembecollege.edu.za/learning-material/" target="_blank"
              color="white" icon="east" size="sm" style="margin-top:2.5px" text-color="white" round outline />
            </div>
          </q-card-section>
          </q-card>
        </div>
        <div data-lightbox="homePortfolio">
          <q-card class="shiny-card justify-center  row" style="width:100%;height:100%">
          <q-card-section style="text-align:center;align-items:center" class="row justify-between items-center">
            <div class="" style="line-height:1.2">
              <span style="font-size:0.9rem;font-weight:600">Internal iEnabler</span>
            </div>
            <div class="col-12">
              <q-btn
              type="a"
              href="https://ienabler.vhembecollege.edu.za/pls/prodi41/w99pkg.mi_login" target="_blank"
              color="white" icon="east" size="sm" style="margin-top:2.5px" text-color="white" round outline />
            </div>
          </q-card-section>
          </q-card>
        </div>
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
