import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Admin from '../views/admin/Admin.vue';
import Products from '../views/admin/Products.vue';
import AddProduct from '../views/admin/AddProduct.vue';
import EditProduct from '../views/admin/EditProduct.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
      },
      {
        path: 'products/create',
        name: 'AddProduct',
        component: AddProduct,
      },
      {
        path: 'products/:proId/edit',
        name: 'EditProduct',
        component: EditProduct,
        // if you edit by pass id by props
        props: true,
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
