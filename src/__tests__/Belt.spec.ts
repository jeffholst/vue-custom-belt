import { describe, it, expect } from "vitest";
import * as shared from "../Belt";
import { BeltColor, Belt, BeltType, StripePosition } from "../Belt";

/**
 * StripeStart tests
 */
describe("StripeStart", () => {
  let rval = "";
  for (const ss in StripePosition) {
    rval += ss;

    /**
     * Test that stripePosition only contains expected values
     */
    it(`is iterable`, () => {
      expect(rval).toBe("LeftRight");
    });
  }
});

/**
 * BeltType tests
 */
describe("BeltType", () => {
  let rval = "";
  for (const bt in BeltType) {
    rval += bt;
  }

  /**
   * Test that beltTypes only contains expected values
   */
  it(`is iterable`, () => {
    expect(rval).toBe("SolidStripedCoralSplitCheckeredCrazy");
  });
});

describe("isValidHexCode", () => {
  const hexCodes: string[] = [
    "#1AFFa1",
    "#F00",
    "123456",
    "#123abce",
    "#afafah",
  ];
  const results: boolean[] = [true, true, false, false, false];

  hexCodes.forEach((hexCode, index) => {
    it(`isValidHexCode ${hexCode} (${results[index]})`, () => {
      expect(shared.isValidHexCode(hexCode)).toBe(results[index]);
    });
  });
});

const colors: BeltColor[] = [
  {
    name: "White",
    hex: "#FFFFFF",
  },
  {
    name: "Black",
    hex: "#000000",
  },
  {
    name: "Gray",
    hex: "#999999",
  },
];

const belts: Belt[] = [
  {
    id: 1,
    name: "White",
    sortOrder: 10,
    type: BeltType.Solid,
    color1: "wHiTe",
    color2: "Black",
    color3: "Gray",
    borderColor: "DarkBorder",
    hasPatch: true,
    patchColor: "Black",
    patchBorderColor: "DarkBorder",
    hasProfessorPatch: false,
    professorPatchColor: "",
    professorBorderColor: "",
    stripeColor: "White",
    stripeCount: 0,
    stripePosition: StripePosition.Right,
    minStripes: 0,
    maxStripes: 4,
  },
];

describe("mapBeltColor", () => {
  it("should return valid hexcode", () => {
    expect(shared.mapBeltColor("#FFFFFF", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for White", () => {
    expect(shared.mapBeltColor("White", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for mixed case wHiTe", () => {
    expect(shared.mapBeltColor("wHiTe", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for Gray", () => {
    expect(shared.mapBeltColor("Gray", colors)).toBe("#999999");
  });

  it("should return passed color", () => {
    expect(shared.mapBeltColor("Red", colors)).toBe("Red");
  });
});

describe("mapBeltColors", () => {
  shared.mapBeltColors(belts, colors);
  it("should return mapped color for White", () => {
    expect(belts[0].color1).toBe("#FFFFFF");
  });

  it("should return mapped color for Black", () => {
    expect(belts[0].color2).toBe("#000000");
  });

  it("should return mapped color for Gray", () => {
    expect(belts[0].color3).toBe("#999999");
  });
});

describe("getBeltProps", () => {
  it("should match snap", () => {
    expect(
      shared.getBeltProps(
        "Test Title",
        "Test Description",
        undefined,
        0,
        StripePosition.Left,
        "",
        0
      )
    ).toMatchSnapshot();
  });
});
