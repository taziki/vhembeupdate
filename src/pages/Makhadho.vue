<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://www.vhembecollege.edu.za/wp-content/uploads/2019/05/DJI_0264-1024x683.jpg"
      />

      <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Makhadho Satelite Campus</div>
        <div class="text-caption text-grey">
Makhadho Satelite Campus campus was established  and registered as fully flashed campus in 2019 .

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
     
        <q-btn flat color="primary" label="Apply Online" to="OnlineApplication"/> <br>
        <q-btn flat color="primary" label="Return To Our Campus List" to="/OurCampuses"/>

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