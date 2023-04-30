import { describe, it } from "vitest";
import { mountVuetify } from "../mount-vuetify";
import { assertThat, containsString } from "hamjest";

import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
	it("renders properly", () => {
		const wrapper = mountVuetify(HelloWorld, { props: { msg: "Hello Vitest" } });

		assertThat(wrapper.text(), containsString("Welcome toVuetify"));
	});
});
