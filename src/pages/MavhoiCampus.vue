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
      <q-carousel-slide :name="1" img-src="https://globalanswers.co.za/vhembecollege/MavhoiCampus.jpg" />

      </q-carousel>
  </div>

      <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Mavhoi Campus</div>
        <div class="text-caption text-grey">
The campus was formed to easy the load which was too much for Finyazwanda Technical College, in 1983.

It was known as Mavhoi Technical College since then until the merging of technical colleges.<br>

The campus was initially gazetted as Central Campus and in 2009 was gazetted Makwarela Campus.<br> <br>

The campus is currently offering the following: <br><br>

<strong>NCV programmes: L2 – L4 (Business and Engineering Studies) – 3 Years (36 Months)</strong><br>
Office Administration<br>
Information Technology and Computer Science<br>
Electrical Infrastructure Construction<br>
Civil Engineering<br><br>
 

<strong>NATED programmes N4 – N6 (Business Studies) – 18 Months</strong><br><br>

<strong>NATED programmes N1 – N6 (Engineering Studies) – 24 Months</strong><br><br>
Civil Engineering<br>
Electrical Engineering <br>
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