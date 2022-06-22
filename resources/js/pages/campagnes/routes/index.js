import { createRouter, createWebHistory } from "vue-router";

import AuthenticatedLayout from "../layouts/Authenticated";

import campagnesList from '../campagnesList'

function auth(to, from, next) {
    if (JSON.parse(localStorage.getItem('loggedIn'))) {
        next()
    }

    next('/login')
}

export default [    
    {
        component: AuthenticatedLayout,
        beforeEnter: auth,
        children: [
            {
                path: '/campagnes',
                name: 'campagnes.index',
                component: campagnesList,
                meta: { title: 'Campagne List' }
            },
            {
                path: '/campagnes/create',
                name: 'campagne.create',
                component: CampagneCreate,
                meta: { title: 'Ajouter nouveau campagne' }
            },
            {
                path: '/campagnes/edit/:id',
                name: 'campagne.edit',
                component: CampagneEdit,
                meta: { title: 'Edit post' }
            },
        ]
    }
]

