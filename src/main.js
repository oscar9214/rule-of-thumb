import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./filters/filters";

Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    getAssetUrl: path => (process.env.BASE_URL || '/') + path
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
