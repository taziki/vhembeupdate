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
      <q-carousel-slide :name="1" img-src="https://globalanswers.co.za/vhembecollege/Makwarela1.jpg" />
      <q-carousel-slide :name="2" img-src="https://globalanswers.co.za/vhembecollege/Makwarela2.jpg" />
      <q-carousel-slide :name="3" img-src="https://globalanswers.co.za/vhembecollege/Makwarela3.jpg" />
      <q-carousel-slide :name="4" img-src="https://globalanswers.co.za/vhembecollege/Makwarela4.jpg" />
    </q-carousel>
  </div>

      <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Makwarela Campus</div>
        <div class="text-caption text-grey">
The campus is the first technical college in the region and was established in 1963. It has gone through different changes in addressing the skills of South Africans since then.
Some of this evolutions were the names given to the institution namely Vocational College of Venda, Finyazwanda, and Technical College of Venda.
<br>
<br>It later assisted in the initiation of Mavhoi Technical College in 1983 and offered some of the staff members the opportunity to show case at the newly established college.
<br>
<br>
In 2002, the college initiated another technical college at Mashamba which came to fully operational after the merging of technical colleges.
The campus was initially gazetted as East Campus and in 2009 was gazetted Makwarela Campus.
The campus is currently offering the following:<br>
<br>
1. <strong>NCV programmes: L2 – L4 (Business and Engineering Studies) – 3 Years (36 Months)</strong><br>
a. Management<br>
b. Marketing<br>
c. Finance, Economics and Accounting<br>
d. Office Administration<br>
e. Hospitality Management<br>
f. Tourism<br>
g. Information Technology and Computer Science<br>
h. Electrical Infrastructure Construction<br>
i. Civil Engineering<br>
j. Engineering and Related Design<br>
k. Process Plant Operations<br>

<strong>2. NATED programmes N4 – N6 (Business Studies) – 18 Months</strong><br>
a. Human Resource<br>
b. Financial Management<br>
c. Marketing Management<br>
d. Business Management<br>
e. Management Assistance<br>
f. Public Management<br>
g. Clothing Production<br>
h. Hospitality Management<br>

<strong>3. NATED programmes N1 – N6 (Engineering Studies) – 24 Months</strong><br>
a. Chemical Management<br>
b. Civil Engineering<br>
c. Electrical Engineering<br>
d. Mechanical Engineering<br>


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