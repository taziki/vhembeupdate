<template>
<div>
  

  
     
  <section class="q-mb-lg">
    <div class="q-py-md q-px-sm" >
      <span class="text-h4 text-secondary" style="font-weight:600">Vhembe TVET</span>
      <div class="row items-center">
      <span class="text-h4 text-secondary" style="font-weight:600">News</span>
      <span class="q-ml-sm" style="margin-top:2.5px">
        <q-icon name="east" size="lg" color="secondary"/>
      </span>
      </div>
    </div>
    
  </section>
</div>
      <q-card-section>
        <div class="text-h6">Enterprenuer Awareness Campaign 2021</div>
        <div>Vhembe TVET College supports the enterprenuer spirit in the students. </div>
        <q-img
        src="https://globalanswers.co.za/vhembecollege/EnteprenuerAwareness.jpg"
                style="height: 280px; max-width: 380px"
      >
      
      </q-img>
         <q-item clickable v-ripple tag="a" target="_blank" href = "https://twitter.com/VhembeTVETCol/status/1436377404960919603" exact>
        <q-item-section avatar>
        <q-icon name="send" />
        </q-item-section>
        <q-item-section>Read More On Twitter</q-item-section>
      </q-item>
        </q-card-section>

            <q-card-section>
        <div class="text-h6">Digital Youth Festival</div>
        <div>Supporting the vision of 4IR @ab4_ir</div>
        <q-img
        src="https://globalanswers.co.za/vhembecollege/Digital%20Youth%20Festival.jpg"
                style="height: 280px; max-width: 380px"
      >
      
      </q-img>
         <q-item clickable v-ripple tag="a" target="_blank" href = "https://twitter.com/VhembeTVETCol/status/1405843310506283010" exact>
        <q-item-section avatar>
        <q-icon name="send" />
        </q-item-section>
        <q-item-section>Read More On Twitter</q-item-section>
      </q-item>
        </q-card-section>

              <q-card-section>
        <div class="text-h6">Casual Day 2021</div>
        <div>Disability Unit celebrates Casual Day 2021.</div>
        <q-img
        src="https://globalanswers.co.za/vhembecollege/CasualDay.jpg"
                style="height: 280px; max-width: 380px"
      >
      
      </q-img>
         <q-item clickable v-ripple tag="a" target="_blank" href = "https://twitter.com/VhembeTVETCol/status/1433788531953082374" exact>
        <q-item-section avatar>
        <q-icon name="send" />
        </q-item-section>
        <q-item-section>Read More On Twitter</q-item-section>
      </q-item>
        </q-card-section>

              <q-card-section>
        <div class="text-h6">Lecturer Development Program 2021</div>
        <div>Appreciation Ceremony, congratulations to all the lecturers that completed the development program. </div>
        <q-img
        src="https://globalanswers.co.za/vhembecollege/LecturerDevelopment.jpg"
                style="height: 280px; max-width: 380px"
      >
      
      </q-img>
         <q-item clickable v-ripple tag="a" target="_blank" href = "https://twitter.com/VhembeTVETCol/status/1400717587433017344" exact>
        <q-item-section avatar>
        <q-icon name="send" />
        </q-item-section>
        <q-item-section>Read More On Twitter</q-item-section>
      </q-item>
        </q-card-section>

       



</template>

<script>


  const linksList =

    [


    ];


  import {
    defineComponent,
    ref
  } from 'vue'

  export default defineComponent({
    name: 'MainLayout',

    components: {

    },

    setup() {
      const leftDrawerOpen = ref(false)

      return {
        essentialLinks: linksList,
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
      }
    }
  })

</script>

<style lang="scss" scoped>
.q-toolbar{
  position: absolute !important;
}
.overlay{
  position:absolute;
  width: 100%;
  top:0;
  height: 100%;
  background: rgb(1,174,240);
  background: linear-gradient(127deg, rgba(1,174,240,1) 0%, rgba(1,174,240,0.8491771708683473) 41%, rgba(1,174,240,0) 100%);
}
.container > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}

.container > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 2px 16px var(--shadow);
}

.container {
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 131px;
  grid-auto-flow: dense;
}

.card{
  &-aboutus .svg{
    width: 100%;
    height: 60px;
    background-image: url("../assets/aboutus.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &-application .svg{
    width: 100%;
    height: 90px;
    background-image: url("../assets/application.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &-courses .svg{
    width: 100%;
    height: 60px;
    background-image: url("../assets/courses.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &-elearning .svg{
    width: 100%;
    height: 60px;
    background-image: url("../assets/e-learning.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &-campuses .svg{
    width: 100%;
    height: 60px;
    background-image: url("../assets/campuses.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &-contactus .svg{
    width: 100%;
    height: 60px;
    background-image: url("../assets/contactus.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.horizontal {
  grid-column: span 2;
}

.vertical {
  grid-row: span 2;
}

.big {
  grid-column: span 2;
  grid-row: span 2;
}
.text-custom-heading{
  font-size: 1rem;
}

.q-img__content > div{
  height: 100%;
  width: 100%;
 background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 100%);
}

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