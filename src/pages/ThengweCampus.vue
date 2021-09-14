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
      <q-carousel-slide :name="1" img-src="https://globalanswers.co.za/vhembecollege/ThengweCampus1.jpg" />
      <q-carousel-slide :name="2" img-src="https://globalanswers.co.za/vhembecollege/ThengweCampus.jpg" />

    </q-carousel>
  </div>

      <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Thengwe Campus</div>
        <div class="text-caption text-grey">
The satellite campus was established in 2011 and was earmarked for Learnership and Short skills programmes. In 2016 it was then registered as the fully flashed campus.

<br><br>The campus is situated at Thengwe area near Tshilamba town formerly known as Thengwe High school and now Thengwe old school buildings.

<br><br>The campus is currently offering the following:<br>

<strong>NCV programmes: L2 – L4 (Business and Engineering Studies) – 3 Years (36 Months)<br><br></strong>
Office Administration<br>
Civil Engineering – Plumbing<br><br>
 

<strong>NATED programmes N4 – N6 (Business Studies) – 18 Months</strong><br>
Farming Management<br>
Clothing Production<br><br>
 

<strong>NATED programmes N1 – N6 (Engineering Studies) – 24 Months</strong><br>
Learnership programme – Pre-Requisite : Post Grade 9 – 1 Year(12 Months)
Technical Support
End-User Computing
Primary Agriculture
Building and Civil Construction
 
<br><br>
<strong>Short Skills Programme – Pre-Requisite : Post Grade – 4 Months</strong><br>
Basic Electricity<br>
Carpentry<br>
Catering<br>
Electrical Engineering<br>
End User Computing<br>
Fashion Design<br>
Financial Management<br>
Furnisher Making Wood<br>
Hair Dressing<br>
Marketing<br>
New Venture Creation<br>
Painting<br>
Plastering<br>
Plumbing<br>
Project Management<br>
Road Works<br>
Technical Skills<br>
Tiling<br>
Tourism<br>
Water Reticulation<br>
Woodwork Artisan<br>


        </div>
      </q-card-section>

      <q-card-actions>
     
        <q-btn flat color="primary" label="Apply Online" to="OnlineApplication"/>
        <q-btn flat color="primary" label="Return To Our Campus List" to="/OurCampuses"/>
 
      </q-card-actions>


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