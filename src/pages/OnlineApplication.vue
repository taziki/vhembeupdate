<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/201251437_1153067975159580_1618631734686502831_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=8bfeb9&_nc_ohc=rNDuPw0oipYAX9MPWpJ&_nc_ht=scontent-cpt1-1.xx&oh=7982fb8f949d02ddc5f90c44ea24825f&oe=613BAA04"
      />

      <q-card-section>
       <div class="text-h5 q-mt-sm q-mb-xs">Online Application Process</div>
        <div class="text-caption text-grey">
Our application process is done and concluded online using our ienabler platform. All you have to to is to follow the ienebler link and follow the very easy prompts to apply for the course of your choice.        </div>
      </q-card-section>

      <q-card-actions>
          <q-item clickable v-ripple tag="a" target="_blank" href = "https://ienabler.vhembecollege.edu.za/pls/prodi41/gen.gw1pkg.gw1view" exact>  
          <q-item-section avatar>
          <q-icon name="send" />
          </q-item-section>
        <q-item-section>Click Here To Apply Online</q-item-section>
      </q-item>
        <q-space />


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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 550px
</style>
