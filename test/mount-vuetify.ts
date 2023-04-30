import { createVuetify } from "vuetify";
import { mount, VueWrapper } from "@vue/test-utils";

export function mountVuetify(
	component: any,
	options?: any
): VueWrapper {
	return mount(component, updateOptions(options));
}

function updateOptions(options?: any): any {
	options = options || {};

	updateGlobalOptions(options);

	return options;
}

function updateGlobalOptions(options: any): any {
	options.global = options.global || {};

	updateGlobalPlugins(options);

	return options;
}

function updateGlobalPlugins(options: any): any {
	options.global.plugins = options.global.plugins || [];
	options.global.plugins.push(createVuetify());

	return options;
}
