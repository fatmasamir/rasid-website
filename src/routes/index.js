import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/home/index.vue');
// const Auth = () => import("../pages/auth/index.vue");
const About = () => import('../pages/aboutUs/index.vue');
const Contact = () => import('../pages/contactUs/index.vue');
const Services = () => import('../pages/services/index.vue');
const Profile = () => import('../pages/profile/index.vue');
const RestPassword = () => import('../pages/auth/changePassword/index.vue');
const Login = () => import('../pages/auth/Login/index.vue');
const Signup = () => import('../pages/auth/signup/index.vue');
const Forget = () => import('../pages/auth/Forget/index.vue');
const Notfound = () => import('../pages/NotFound/index.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    // {
    //   path: "/auth",
    //   component: Auth,
    // },
    {
      path: '/about-us',
      component: About,
    },
    {
      path: '/contact-us',
      component: Contact,
    },
    {
      path: '/services',
      component: Services,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/reset-password',
      component: RestPassword,
    },
    {
      path: '/Login',
      component: Login,
    },
    {
      path: '/sign-up',
      component: Signup,
    },
    {
      path: '/forget-password',
      component: Forget,
    },
    {
      path: '/:notfound(.*)',
      component: Notfound,
    },
  ],
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to,from,savedPosition)
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
