import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CustomBelt from "../components/CustomBelt.vue";
import BeltSystemJSON_IBJJF from "../belt-systems/IBJJF.json";
import { BeltSystem } from "../BeltSystem";

const ibjjfSystem: BeltSystem = new BeltSystem(BeltSystemJSON_IBJJF);

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
  });

  it("rendors correctly with 1 stripe", () => {
    const wrapper = mount(CustomBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("White", 1) },
    });
    expect(wrapper.html()).toContain("<svg");
  });

  it("rendors correctly with 2 stripes", () => {
    const wrapper = mount(CustomBelt, {
      props: { beltProps: ibjjfSystem.getBeltPropsByName("White", 2) },
    });
    expect(wrapper.html()).toContain("<svg");
  });
});
