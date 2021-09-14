<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://www.vhembecollege.edu.za/wp-content/uploads/2019/05/DJI_0264-1024x683.jpg"
      />

      <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Shingwedzi Campus</div>
        <div class="text-caption text-grey">
The campus one the latest to be established. It is located at Malamulele area, where Shingwedzi College of Education was.

It was only launched by Dr. B. Nzimande on the 9th of December 2016.<br><br>

The campus was gazetted as Shingwedzi Campus.<br>

The campus was opened in January 2017 offering the following:<br><br>

<strong>NCV programmes: L2 – L4 (Business and Engineering Studies) – 3 Years (36 Months)</strong>
 
<br><br>
<strong> NATED programmes N4 – N6 (Business Studies) – 18 Months</strong><br>
Financial Management<br>
Business Management<br>
Management Assistance<br>
 <br>

<strong>NATED programmes N1 – N6 (Engineering Studies) – 24 Months </strong>
Civil Engineering – Brick Laying <br>
Mechanical Engineering – Motor Mechanics

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