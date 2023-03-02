import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import i18n from "./i18n";
import store from "./store";

// import css assets
import "./assets/css/reset.css";
import "./assets/css/style.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");
