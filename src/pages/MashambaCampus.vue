<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
<div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://globalanswers.co.za/vhembecollege/Mashamba.jpg" />
      <q-carousel-slide :name="2" img-src="https://globalanswers.co.za/vhembecollege/Mashamba1.jpg" />
       <q-carousel-slide :name="2" img-src="https://globalanswers.co.za/vhembecollege/Mashamba2.jpg" />
      </q-carousel>
  </div>

      <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Mashamba Campus</div>
        <div class="text-caption text-grey">
The campus was established in the early 2000 to focus on the agricultural needs in the region.

It started to fully functional after the merging of the technical colleges and it was gazetted as South Campus, which was later in 2009 be gazetted as Mashamba campus.

<br> <br>The first Campus Manager was Mr. Beeneck from 2005 to 2007, Mr Mentsa was caretaker for about six month before the current Campus Manger (Mr. Maumela NW) took the office.

The campus is currently offering the following<br> <br>

<strong>NCV programmes: L2 – L4 (Business and Engineering Studies) – 3 Years (36 Months)<br><br></strong>
Office Administration<br>
Primary Agriculture<br>
Travel and Tourism<br><br>
 

<strong>NATED programmes N4 – N6 (Business Studies) – 18 Months</strong><br><br>
Farming Management<br>



        </div>
      </q-card-section>

      <q-card-actions>
     
      <q-card-actions>
     
        <q-btn flat color="primary" label="Apply Online" to="OnlineApplication"/> <br>
        <q-btn flat color="primary" label="Return To Our Campus List" to="/OurCampuses"/>

      </q-card-actions>


      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>