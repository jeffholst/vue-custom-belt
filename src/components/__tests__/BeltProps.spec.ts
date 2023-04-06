import { describe, it, expect } from "vitest";
import {
  stripeStart,
  StripeStart,
  beltType,
  BeltType,
} from "../../types/BeltProps";

describe("StripeStart", () => {
  let rval = "";
  stripeStart.forEach((ss: StripeStart) => {
    rval += ss;
  });

  it(`is iterable`, () => {
    expect(rval).toBe("LeftRight");
  });
});

describe("BeltType", () => {
  let rval = "";
  beltType.forEach((bt: BeltType) => {
    rval += bt;
  });

  it(`is iterable`, () => {
    expect(rval).toBe("SolidStripedCoralSplitCheckeredCrazy");
  });
});