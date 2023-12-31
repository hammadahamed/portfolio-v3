import { createApp } from "vue";
import "./index.scss";
import App from "./App.vue";
import router from "./router";
import useAssets from "./common/useAssets";

// const modules = import.meta.glob("./assets/**");

if (window.location.href.includes(".web.app")) {
  window.location.href = "https://hammadahamed.com";
}

const asset = useAssets("profile-pic.png");
const app = createApp(App);
app.use(router);
app.mount("#app");
