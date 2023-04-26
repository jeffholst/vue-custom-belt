import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CustomBelt from "../CustomBelt.vue";
import ibjjfJSON from "../../shared/ibjjf.json";
import { BeltSystem } from "../../types/BeltProps";

const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);

describe("CustomBelt", () => {
  it("reports missing beltParms", () => {
    console.log(`Next warning is expected:`);
    const wrapper = mount(CustomBelt);
    expect(wrapper.text()).toContain("Invalid beltParms received");
  });

  it("rendors correctly with no stripes", () => {
    const wrapper = mount(CustomBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("White", 0) },
    });
    expect(wrapper.html()).toContain("<svg");
    expect(wrapper.html()).toContain("IBJJF White Belt with no stripes");
  });

  it("rendors correctly with 1 stripe", () => {
    const wrapper = mount(CustomBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("White", 1) },
    });
    expect(wrapper.html()).toContain("<svg");
    expect(wrapper.html()).toContain("IBJJF White Belt with 1 stripe");
  });

  it("rendors correctly with 2 stripes", () => {
    const wrapper = mount(CustomBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("White", 2) },
    });
    expect(wrapper.html()).toContain("<svg");
    expect(wrapper.html()).toContain("IBJJF White Belt with 2 stripes");
  });
});
