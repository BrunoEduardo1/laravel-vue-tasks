import DashboardLayout from '../layout/DashboardLayout.vue';
// GeneralViews
import NotFound from '../pages/NotFound';

// Admin pages
import Overview from '../pages/Overview.vue';
import UserProfile from '../pages/UserProfile.vue';

import Users from '../pages/Users';
import UsersEdit from '../pages/Users/edit';
import UsersCreate from '../pages/Users/create';
import UsersView from '../pages/Users/view';

import TasksLists from '../pages/TasksLists';
import TasksEdit from '../pages/TasksLists/edit';
import TasksCreate from '../pages/TasksLists/create';
import TasksView from '../pages/TasksLists/view';

import TasksListsItemsEdit from '../pages/TasksListsItems/edit';

// user authentication pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';

import AuthMiddleware from '../directives/auth.middleware';

const routes = [
  {
    path: '/admin',
    component: DashboardLayout
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: AuthMiddleware.run
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: AuthMiddleware.run
  },
  {
    path: '/forgotPassword',
    name: 'RecoverPassword',
    component: RecoverPassword
    // beforeEnter: AuthMiddleware.run
  },
  {
    path: '/resetPassword/:token/:email',
    name: 'ResetPassword',
    component: ResetPassword
    // beforeEnter: AuthMiddleware.run
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    beforeEnter: AuthMiddleware.run,
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'tasks',
        name: 'tasks-lists',
        component: TasksLists
      },
      {
        path: 'tasks/edit/:id',
        name: 'edit-task',
        component: TasksEdit
      },
      {
        path: 'tasks/create',
        name: 'create-task',
        component: TasksCreate
      },
      {
        path: 'tasks/view/:id',
        name: 'view-task',
        component: TasksView
      },
      {
        path: 'tasks/items/edit/:id',
        name: 'edit-task-item',
        component: TasksListsItemsEdit
      },
      {
        path: 'users',
        name: 'users',
        component: Users
      },
      {
        path: 'users/edit/:id',
        name: 'edit-user',
        component: UsersEdit
      },
      {
        path: 'users/create',
        name: 'create-user',
        component: UsersCreate
      },
      {
        path: 'users/view/:id',
        name: 'view-user',
        component: UsersView
      }
    ]
  },
  { path: '*', component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
