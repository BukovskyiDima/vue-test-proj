import Vue from 'vue';
import App from './App.vue';
import {Tabs, Tab} from 'vue-tabs-component';

import AppTopList from './components/TopList.vue';
import AppRatingList from './components/RatingList.vue';
import AppFavoriteList from './components/FavoriteList.vue';
import AppButtonList from './components/ButtonList.vue';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.component('AppTopList', AppTopList);
Vue.component('AppRatingList', AppRatingList);
Vue.component('AppFavoriteList', AppFavoriteList);
Vue.component('AppButtonList', AppButtonList);

new Vue({
  el: '#app',
  render: h => h(App)
})
