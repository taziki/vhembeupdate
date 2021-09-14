<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://www.vhembecollege.edu.za/wp-content/uploads/2019/05/Lopez-Consultancy-5.png">

      <q-card-section>
        <div class="text-h6">Our Alumni</div>
        <div>Our Alumini are initiated members of a fraternity who have graduated from Vhembe TVET College. </div>
        </q-card-section>
    <div class="q-pa-md">
<div class="q-pa-md q-gutter-md" style="max-width: 600px">
    <q-list bordered separator>
      <strong>BENEFITS OF ALUMNI</strong>
      <q-item clickable v-ripple to="/OnlineApplication" >
      <q-item-section> <ul>

                       <li> Opportunity to join a professional Forum <br> </li>
                       <li>  Career opportunities <br> </li>
                        <li>News and Events<br> </li>
                       <li>Read about your or your peer's success stories<br> </li>
                      <li> Gateway to industry<br> </li>
                       <li> Industry News<br> </li>
                       <li> Networking Opportunities<br> </li>
                       </ul>
                 </q-item-section>
            </q-item>
   
       

   

    <q-item clickable v-ripple tag="a" target="_blank" href = "https://www.vhembecollege.edu.za/alumni-register/" exact>
        <q-item-section avatar>
        <q-icon name="send" />
        </q-item-section>
        <q-item-section>Register To Join Our Alumni</q-item-section>
        <br>
      </q-item>



    </q-list>
  </div>
  </div>
      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>




    

 



  </div>
</template>