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
      <q-carousel-slide :name="1" img-src="https://globalanswers.co.za/vhembecollege/MusinaCampus1.jpg" />
      

    </q-carousel>
  </div>

      <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Musina Campus</div>
        <div class="text-caption text-grey">
Musina campus was established  and registered as fully flashed campus in 2019 .

The campus is situated at Musina Town just down the Musina Police station in a stand formerly known as old gateway primary school which is in Whyte road .
<br><br>
The campus is currently offering the following
<br><br>
<strong>NATED programmes N1 – N6 (Engineering Studies) – 24 Months </strong><br>
1. Chemical Engineering<br>
2. Civil Engineering<br>
3. Electrical Engineering<br>
4. Mechanical Engineering<br>

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