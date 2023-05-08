import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faTrash,
  faPlus,
  faEraser,
  faXmark,
  faCartShopping,
  faCircleInfo,
  faFilter,
  faMagnifyingGlass,
  faHouse,
  faCartPlus,
  faMinus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrash,
  faPlus,
  faEraser,
  faXmark,
  faCartShopping,
  faCircleInfo,
  faFilter,
  faMagnifyingGlass,
  faHouse,
  faCartPlus,
  faMinus,
  faHeart
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
