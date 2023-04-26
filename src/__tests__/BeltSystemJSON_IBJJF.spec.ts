import { describe, it, expect } from "vitest";

import { BeltType, stripePositions, StripePositions } from "../Belt";
import { BeltSystem } from "../BeltSystem";
import BeltSystemJSON_IBJJF from "../belt-systems/IBJJF.json";

const ibjjfSystem: BeltSystem = new BeltSystem(BeltSystemJSON_IBJJF);

describe("IBJJF System", () => {
  it("JSON should match", () => {
    expect(ibjjfSystem).toMatchSnapshot();
  });

  BeltSystemJSON_IBJJF.belts.forEach((belt) => {
    it(`${belt.name}`, () => {
      expect(ibjjfSystem.getBeltPropsByName(belt.name, 0)).toMatchSnapshot();
    });

    it(`${belt.name} min/max`, () => {
      expect(belt.minStripes <= belt.maxStripes).toBe(true);
    });

    it(`${belt.name} valid type`, () => {
      expect(Object.values(BeltType).includes(belt.type as BeltType)).toBe(
        true
      );
    });

    it(`${belt.name} valid stripeStart`, () => {
      expect(
        stripePositions.includes(belt.stripeStart as StripePositions)
      ).toBe(true);
    });

    it(`${belt.name} unique id`, () => {
      const matchingBelts = ibjjfSystem.belts.filter((b) => b.id === belt.id);
      expect(matchingBelts.length === 1).toBe(true);
    });
  });
});
