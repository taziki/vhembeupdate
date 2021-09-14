<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
         Vhembe TVET College
        </q-toolbar-title>

        <div>Geared For Success.</div>
      </q-toolbar>
    </q-header>
<q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>

        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />   
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>











      <q-page-container>
        <q-page padding>

  <div class="q-pa-md">

    <div class="row" style="column-gap: 3px; margin-top: 5px; row-gap: 5px;">  
      <div class="col" style="color:#ffffff; row-gap: 5px; background:#052233">Apply Online</div>
      <div class="col" style="color:#ffffff; background:#052233">Campus Infomation</div>
    <div class="col" style="color:#ffffff; background:#052233">Our Courses</div>
      <div class="col" style="color:#ffffff; background:#052233">Contact Us</div>
    </div>
  
<div class="row" style="column-gap: 3px; margin-top: 3px; row-gap: 5px;">      
      <div class="col" style="color:#ffffff; background:#052233">Apply Online</div>
      <div class="col" style="color:#ffffff; background:#052233">Campus Infomation</div>
       <div class="col" style="color:#ffffff; background:#052233">Our Courses</div>
       <div class="col" style="color:#ffffff; background:#052233">Contact Us</div>
</div>

<div class="row" style="column-gap: 3px; margin-top: 3px; row-gap: 5px;"> 
      <div class="col" style="color:#ffffff; background:#052233">Apply Online</div>
       <div class="col" style="color:#ffffff; background:#052233">Campus Infomation</div>
      <div class="col" style="color:#ffffff; background:#052233">Our Courses</div>
       <div class="col" style="color:#ffffff; background:#052233">Contact Us</div>
    </div>


  </div>


  </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'About Us',
    caption: 'Information About Vhembe TVET College',
    icon: 'school',
    link: 'About.vue'
  },
   {
    title: 'Our Campuses',
    caption: 'Information On Our Campuses',
    icon: 'map',
    link: 'About.vue'
  },
   {
    title: 'Our Courses',
    caption: 'Courses We Offer.',
    icon: 'book',
    link: 'About.vue'
  },
   {
    title: 'Apply Online',
    caption: 'Information About Vhembe TVET College',
    icon: 'notes',
    link: 'About.vue'
  },
   {
    title: 'Events',
    caption: 'Information About Vhembe TVET College',
    icon: 'timer',
    link: 'About.vue'
  },
     {
    title: 'Contact Us',
    caption: 'How  To Get In Touch',
    icon: 'phone',
    link: 'About.vue'
  },
  {
    title: 'Our Main Website',
    caption: 'www.vhembecollege.edu.za',
    icon: 'refresh',
    link: 'https://www.vhembecollege.edu.za/'
  },
  {
    title: 'Twitter',
    caption: '@VhembeTVETCol',
    icon: 'wifi',
    link: 'https://twitter.com/VhembeTVETCol'
  },
    {
    title: 'Facebook',
    caption: '@Vhembe-TVET-College-Central',
    icon: 'facebook',
    link: 'https://www.iplanner.co.za'
  },
  {
    title: 'Student & Staff Zone',
    caption: 'iPlanner',
    icon: 'public',
    link: 'https://www.iplanner.co.za'
  }
];


import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
