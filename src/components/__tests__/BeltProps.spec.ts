import { describe, it, expect } from "vitest";
import ibjjfJSON from "../../shared/ibjjf.json";
import {
  stripePositions,
  StripePositions,
  beltTypes,
  BeltTypes,
  BeltSystem,
  Belt,
} from "../../types/BeltProps";

describe("StripeStart", () => {
  let rval = "";
  stripePositions.forEach((ss: StripePositions) => {
    rval += ss;
  });

  it(`is iterable`, () => {
    expect(rval).toBe("LeftRight");
  });
});

describe("BeltType", () => {
  let rval = "";
  beltTypes.forEach((bt: BeltTypes) => {
    rval += bt;
  });

  it(`is iterable`, () => {
    expect(rval).toBe("SolidStripedCoralSplitCheckeredCrazy");
  });
});

describe("BeltSystem", () => {
  const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);

  it(`getBeltByName returns undefined`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltByName("DoesNotExist");
    expect(belt).toBeUndefined();
  });

  it(`getBeltByName returns match`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltByName("White");
    expect(belt).not.toBeUndefined();
  });

  it(`getBeltByName returns match (mixed case)`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltByName("white");
    expect(belt).not.toBeUndefined();
  });

  it(`getBeltsByNames returns 1 match`, () => {
    const belts: Belt[] | undefined = ibjjfSystem.getBeltsByNames(["White"]);
    if (belts !== undefined) {
      expect(belts.length).toBe(1);
    } else {
      expect(belts).not.toBeUndefined();
    }
  });

  it(`getBeltsByNames returns 4 matches`, () => {
    const belts: Belt[] | undefined = ibjjfSystem.getBeltsByNames([
      "White",
      "Black",
      "Brown",
      "Purple",
    ]);
    if (belts !== undefined) {
      expect(belts.length).toBe(4);
    } else {
      expect(belts).not.toBeUndefined();
    }
  });

  it(`getBeltsByNames returns 4 matches (mixed case)`, () => {
    const belts: Belt[] | undefined = ibjjfSystem.getBeltsByNames([
      "wHiTe",
      "bLaCk",
      "bRoWn",
      "pUrPlE",
    ]);
    if (belts !== undefined) {
      expect(belts.length).toBe(4);
    } else {
      expect(belts).not.toBeUndefined();
    }
  });
});
