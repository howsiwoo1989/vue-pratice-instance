import Vue from 'vue';
import VueRouter from 'vue-router';
import FormLogin from '../views/FormLogin.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'FormLogin',
        component: FormLogin
    },
    {
        path: '/formStep1',
        name: 'FormStep1',
        component: () => import(/* webpackChunkName: "FormStep1" */ '../views/FormStep1.vue')
    },
    {
        path: '/formStep2',
        name: 'FormStep2',
        component: () => import(/* webpackChunkName: "FormStep2" */ '../views/FormStep2.vue')
    },
    {
        path: '/formStep3',
        name: 'FormStep3',
        component: () => import(/* webpackChunkName: "FormStep3" */ '../views/FormStep3.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
