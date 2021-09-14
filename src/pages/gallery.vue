
<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/DJI_0050.jpg" />
      <q-carousel-slide :name="2" img-src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/DJI_0059.jpg" />
      <q-carousel-slide :name="3" img-src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/DJI_0120.jpg" />
  
    </q-carousel>
  </div>

 <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0001_(1).jpg" />
      <q-carousel-slide :name="2" img-src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0012_(1).jpg" />
      <q-carousel-slide :name="3" img-src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0023.jpg" />
      <q-carousel-slide :name="4" img-src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0025.jpg" />
    </q-carousel>
  </div>


  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-img
        src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0025.jpg"
        srcset="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0025.jpg 300w,
                https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0025.jpg 2x,
                https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0025.jpg 3x,
                https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0025.jpg 4x"
        style="height: 280px; max-width: 300px"
      >
        <div class="absolute-bottom text-body1 text-center">
          Presetation Of Prizes
        </div>
      </q-img>

      <q-img
        src="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0023.jpg"
        srcset="https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0023.jpg 400w,
                https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0023.jpg 800w,
                https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0023.jpg 1200w,
                https://www.vhembecollege.edu.za/wp-content/uploads/photo-gallery/IMG-20190910-WA0023.jpg 1600w"
        sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
        style="height: 280px; max-width: 400px"
      >
        <div class="absolute-bottom text-body1 text-center">
          Presetation Of Prizes
        </div>
      </q-img>
    </div>
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