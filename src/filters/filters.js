import Vue from "vue";
import moment from "moment";

Vue.filter('dateInDeltaTime', function (value) {
  return moment(value).fromNow();
});
