import { describe, it, expect } from "vitest";
import {
  stripePositions,
  StripePositions,
  beltTypes,
  BeltTypes,
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
