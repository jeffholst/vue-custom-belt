import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SVGBelt from "../SVGBelt.vue";

describe("SVGBelt", () => {
  it("renders properly", () => {
    const wrapper = mount(SVGBelt);
    expect(wrapper.text()).toContain("Invalid beltParms received");
  });
});
