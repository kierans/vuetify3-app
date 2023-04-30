import { createApp } from "vue";

import App from "./App.vue";
import loadFonts from "@/plugins/webfontloader";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/stores/index";

(async function() {
	const app = createApp(App);

	await loadFonts();

	app
		.use(vuetify)
		.use(store)
		.use(router);

	app.mount("#app");
})();
