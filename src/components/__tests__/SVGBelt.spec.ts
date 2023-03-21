import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SVGBelt from "../SVGBelt.vue";
import ibjjfJSON from "../../shared/ibjjf.json";
import { BeltSystem } from "../../types/BeltProps";

const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);

describe("SVGBelt", () => {
  it("reports missing beltParms", () => {
    const wrapper = mount(SVGBelt);
    expect(wrapper.text()).toContain("Invalid beltParms received");
  });

  it("rendors correctly with no stripes", () => {
    const wrapper = mount(SVGBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("White", 0) },
    });
    expect(wrapper.html()).toContain("<svg");
    expect(wrapper.html()).toContain("IBJJF White Belt with no stripes");
  });

  it("rendors correctly with 1 stripe", () => {
    const wrapper = mount(SVGBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("White", 1) },
    });
    expect(wrapper.html()).toContain("<svg");
    expect(wrapper.html()).toContain("IBJJF White Belt with 1 stripe");
  });

  it("rendors correctly with 2 stripes", () => {
    const wrapper = mount(SVGBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("White", 2) },
    });
    expect(wrapper.html()).toContain("<svg");
    expect(wrapper.html()).toContain("IBJJF White Belt with 2 stripes");
  });
  /*
  it("rendors correctly", () => {
    const wrapper = mount(SVGBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("DoesNotExit", 0) },
    });
    expect(wrapper.html()).toContain("<svg");
  });
  */
});
