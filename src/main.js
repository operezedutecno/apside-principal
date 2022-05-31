import Vue from 'vue'
import App from './App.vue'
import ApsideList from 'apside-list'
import 'vuetify/dist/vuetify.min.css'
import "@mdi/font/css/materialdesignicons.css";

Vue.use(ApsideList);

Vue.config.productionTip = false

new Vue({
  vuetify: ApsideList.vuetify,
  render: h => h(App),
}).$mount('#app')
