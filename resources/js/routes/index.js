import { createRouter, createWebHistory } from "vue-router";

import AuthenticatedLayout from "../layouts/Authenticated";
import GuestLayout from "../layouts/Guest";

import PostsIndex from '../components/Posts/Index'
import PostsCreate from '../components/Posts/Create'
import PostsEdit from '../components/Posts/Edit'
import Login from '../components/Login'

/*function auth(to, from, next) {
    if (JSON.parse(localStorage.getItem('loggedIn'))) {
        next()
    }

    next('/login')
}*/

let routes = []
routes = routes.concat(CampagneRoutes, TemplateRoutes)




export default createRouter({
    history: createWebHistory(),
    routes
})
