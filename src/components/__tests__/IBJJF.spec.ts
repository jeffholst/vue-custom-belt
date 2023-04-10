import { describe, it, expect } from "vitest";

import {
  BeltSystem,
  beltTypes,
  BeltTypes,
  stripePositions,
  StripePositions,
} from "../../types/BeltProps";
import ibjjfJSON from "../../shared/ibjjf.json";

const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);

describe("IBJJF System", () => {
  it("JSON should match", () => {
    expect(ibjjfSystem).toMatchSnapshot();
  });

  ibjjfJSON.belts.forEach((belt) => {
    it(`${belt.name}`, () => {
      expect(ibjjfSystem.getBeltPropsByName(belt.name, 0)).toMatchSnapshot();
    });

    it(`${belt.name} min/max`, () => {
      expect(belt.minStripes <= belt.maxStripes).toBe(true);
    });

    it(`${belt.name} valid type`, () => {
      expect(beltTypes.includes(belt.type as BeltTypes)).toBe(true);
    });

    it(`${belt.name} valid stripeStart`, () => {
      expect(
        stripePositions.includes(belt.stripeStart as StripePositions)
      ).toBe(true);
    });
  });
});
