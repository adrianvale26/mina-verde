import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const CatalogView = () => import('../views/CatalogView.vue')
const StoneDetailView = () => import('../views/StoneDetailView.vue')
const AboutView = () => import('../views/AboutView.vue')
const EducationView = () => import('../views/EducationView.vue')
const EducationPostView = () => import('../views/EducationPostView.vue')
const QuizView = () => import('../views/QuizView.vue')
const ToolsView = () => import('../views/ToolsView.vue')
const CertDecoderView = () => import('../views/CertDecoderView.vue')
const BudgetEstimatorView = () => import('../views/BudgetEstimatorView.vue')
const TripTrackerView = () => import('../views/TripTrackerView.vue')
const ContactView = () => import('../views/ContactView.vue')
const AdminView = () => import('../views/AdminView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, name: 'home', meta: { title: 'Home' } },
    { path: '/stones', component: CatalogView, name: 'stones', meta: { title: 'Catalog' } },
    { path: '/stones/:id', component: StoneDetailView, name: 'stoneDetail', meta: { title: 'Stone Detail' } },
    { path: '/about', component: AboutView, name: 'about', meta: { title: 'About' } },
    { path: '/education', component: EducationView, name: 'education', meta: { title: 'Education' } },
    { path: '/education/:slug', component: EducationPostView, name: 'educationPost', meta: { title: 'Education' } },
    { path: '/quiz', component: QuizView, name: 'quiz', meta: { title: 'Quiz' } },
    { path: '/tools', component: ToolsView, name: 'tools', meta: { title: 'Tools' } },
    { path: '/tools/certification-decoder', component: CertDecoderView, name: 'certDecoder', meta: { title: 'Certification Decoder' } },
    { path: '/tools/budget-estimator', component: BudgetEstimatorView, name: 'budgetEstimator', meta: { title: 'Budget Estimator' } },
    { path: '/trip-tracker', component: TripTrackerView, name: 'tripTracker', meta: { title: 'Trip Tracker' } },
    { path: '/contact', component: ContactView, name: 'contact', meta: { title: 'Contact' } },
    { path: '/admin', component: AdminView, name: 'admin', meta: { title: 'Admin', requiresAuth: true } }
  ]
})

export default router
