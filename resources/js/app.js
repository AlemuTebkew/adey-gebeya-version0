/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-icons/font/bootstrap-icons'
createApp(App).use(store).use(router).mount('#app')
