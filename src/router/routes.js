
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/alumin', component: () => import('pages/Alumni.vue') },
      { path: '/busuries', component: () => import('pages/Bursaries.vue') },
      { path: '/Careers', component: () => import('pages/Alumni.vue') },
      { path: '/CollegeBackground', component: () => import('pages/CollegeBackground.vue') },
      { path: '/ContactUs', component: () => import('pages/ContactUs.vue') },
      { path: '/Courses', component: () => import('pages/Courses.vue') },
      { path: '/gallery', component: () => import('pages/gallery.vue') },
      { path: '/Legislative Mandate', component: () => import('pages/LegislativeMandate.vue') },
      { path: '/MakwarelaCampusCampus', component: () => import('pages/MakwarelaCampus.vue') },
      { path: '/MashambaCampus', component: () => import('pages/MashambaCampus.vue') },
      { path: '/MavhoiCampus', component: () => import('pages/MavhoiCampus.vue') },
      { path: '/MusinaCampus', component: () => import('pages/MusinaCampus.vue') },
      { path: '/OnlineApplication', component: () => import('pages/OnlineApplication.vue') },
      { path: '/OurCampuses', component: () => import('pages/OurCampuses.vue') },
      { path: '/Placement', component: () => import('pages/Placement.vue') },
      { path: '/Procument', component: () => import('pages/Procurement.vue') },
      { path: '/ShingwedziCampus', component: () => import('pages/ShingwedziCampus.vue') },
      { path: '/ThengweCampus', component: () => import('pages/ThengweCampus.vue') },
      { path: '/TshisimaniCampus', component: () => import('pages/TshisimaniCampus.vue') },
      { path: '/Events', component: () => import('pages/Events.vue') },
      { path: '/student', component: () => import('pages/Student.vue') },
      { path: '/Makhadho', component: () => import('pages/Makhadho.vue') },
      { path: '/news', component: () => import('pages/news.vue') },
      { path: '/vision', component: () => import('pages/vision.vue') },
      { path: '/Whoweare', component: () => import('pages/WhoWeAre.vue') }
      
    ] 
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
