import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Search from '../components/Search'
import Property from '../components/Property'
import Login from '../components/Login'
import Register from '../components/Register'
import Advertising from '../components/Advertising'
import Border from '../components/Border'
import Contact from '../components/Contact'
import Faqs from '../components/Faqs'
import Privacy from '../components/Privacy'
import Resources from '../components/Resources'
import Map from '../components/Map'

Vue.use(Router)

export default new Router({

    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/search',
        name: 'Search',
        component: Search
    },{
        path: '/properties/:id',
        name: 'Property',
        component: Property
    },{
        path: '/login',
        name: 'Login',
        component: Login
    },{
        path: '/register',
        name: 'Register',
        component: Register
    },{
        path: '/advertising',
        name: 'Advertising',
        component: Advertising
    },{
        path: '/border',
        name: 'Border',
        component: Border
    },{
        path: '/contact',
        name: 'Contact',
        component: Contact
    },{
        path: '/faqs',
        name: 'Faqs',
        component: Faqs
    },{
        path: '/privacy',
        name: 'Privacy',
        component: Privacy
    },{
        path: '/resources',
        name: 'Resources',
        component: Resources
    },
    {
        path: '/map',
        name: 'Map',
        component: Map
   }]
})