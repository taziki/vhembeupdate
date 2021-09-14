<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="custom-header" >
      <q-toolbar class="row items-center">
        <q-btn
        style="margin-top:auto"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title style="margin-top:auto;margin-bottom:5px"  class="align-content:center">
          <span>
              Vhembe TVET College
          </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

          <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title >Vhembe TVET College 2021</q-toolbar-title>
            <q-icon name="copyright" />
        </q-toolbar>
      </q-footer>
<q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>

            
   <!-- <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        -->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

      <q-item
      to="/"
      clickable
      v-ripple exact>
        <q-item-section avatar>
        <q-icon name="home" />
        </q-item-section>
        <q-item-section>Home</q-item-section>
      </q-item>
      <q-item
      to="/about"
      clickable
      v-ripple>
        <q-item-section avatar>
        <q-icon name="business_center" />
        </q-item-section>
        <q-item-section>About Us</q-item-section>
      </q-item>

<q-item
      to="/vision"
      clickable
      v-ripple>
        <q-item-section avatar>
        <q-icon name="emoji_events" />
        </q-item-section>
        <q-item-section>Our Vision</q-item-section>
      </q-item>

        <q-item clickable v-ripple to="/OurCampuses">
        <q-item-section avatar>
         <q-icon name="map" />
        </q-item-section>
        <q-item-section>Our Campuses</q-item-section>
      </q-item>

        <q-item clickable v-ripple to="/courses">
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>Our Courses</q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable v-ripple to="/OnlineApplication">
        <q-item-section avatar>
        <q-icon name="approval" />
        </q-item-section>
        <q-item-section>Apply Online</q-item-section>
      </q-item>

     <q-item clickable v-ripple to="/contactus">
        <q-item-section avatar>
        <q-icon name="contact_phone" />
        </q-item-section>
        <q-item-section>Contact Us</q-item-section>
      </q-item>
     
      <q-item clickable v-ripple to="/gallery">
        <q-item-section avatar>
        <q-icon name="camera" />
        </q-item-section>
        <q-item-section>Gallery</q-item-section>
      </q-item>

      <q-separator />

    <q-item clickable to="/news">
        <q-item-section avatar>
        <q-icon name="tv" />
        </q-item-section>
        <q-item-section>News</q-item-section>
      </q-item>

    <q-item clickable v-ripple tag="a" target="_blank" href = "https://www.vhembecollege.edu.za/ " exact>
        <q-item-section avatar>
        <q-icon name="language" />
        </q-item-section>
        <q-item-section>Our Main Website</q-item-section>
      </q-item>

<q-item clickable v-ripple tag="a" target="_blank" href = "https://twitter.com/VhembeTVETCol" exact>
        <q-item-section avatar>
        <q-icon name="flutter_dash" />
        </q-item-section>
        <q-item-section>Twitter</q-item-section>
      </q-item>

    <q-item clickable v-ripple tag="a" target="_blank" href = "https://www.facebook.com/Vhembe-TVET-College-Central-Office-302451900221196" exact>
        <q-item-section avatar>
        <q-icon name="facebook" />
        </q-item-section>
        <q-item-section>Facebook</q-item-section>
      </q-item>






         </q-list>
        </q-scroll-area>
        
<div >
  <q-img 
        class="absolute-top" 
        src="https://globalanswers.co.za/200x200_vhembelogo.png" 
        style="height: 140px; max-width: 140px; margin-left:45px; margin-top:5px" 
        >        
        </q-img>

  </div>






      </q-drawer>

      <q-page-container style="margin-top:-20px">
        <keep-alive>
            <router-view />
        </keep-alive>
      </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList =

[

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
<style lang="scss">
.q-toolbar{
  position: absolute;
  top: 0;
}
.custom-header{
  margin-top:10px;
  z-index:100;
  position:absolute;
  top:0;
  background:rgba(1,174,240);
  height:55px
}
.q-toolbar__title{
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 0;
  padding-right: 19px !important;
}
</style>


