import { describe, it, expect } from "vitest";
import * as belt from "../Belt";

const colors: belt.BeltColor[] = [
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

const belts: belt.Belt[] = [
  {
    system: "none",
    id: 1,
    name: "White",
    sortOrder: 10,
    type: belt.BeltType.Solid,
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
    stripePosition: belt.StripePosition.Right,
    minStripes: 0,
    maxStripes: 4,
  },
];

/**
 * StripeStart tests
 */
describe("StripeStart", () => {
  let rval = "";
  for (const ss in belt.StripePosition) {
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
  for (const bt in belt.BeltType) {
    rval += bt;
  }

  /**
   * Test that BeltType only contains expected values
   */
  it(`has correct values`, () => {
    expect(rval).toBe("SolidStripedCoralSplitCheckeredCrazy");
  });
});

/**
 * BeltTypeStandard tests
 */
describe("BeltTypeStandard", () => {
  let rval = "";
  for (const bt in belt.BeltTypeStandard) {
    rval += bt;
  }

  /**
   * Test that BeltTypeStandard only contains expected values
   */
  it(`has correct values`, () => {
    expect(rval).toBe("SolidStripedCoralSplitCheckered");
  });

  /**
   * Test that beltTypeStandard does not contain Crazy
   */
  it(`does not contain Crazy`, () => {
    // @ts-ignore
    expect(belt.BeltTypeStandard.Crazy).toBe(undefined);
  });

  /**
   * BeltType.Solid matches BeltTypeStandard.Solid
   */
  it(`matches BeltType`, () => {
    // @ts-ignore
    expect(belt.BeltType.Solid === belt.BeltTypeStandard.Solid).toBeTruthy();
  });
});

/**
 * Test isValidHexCode for various values
 */
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
      expect(belt.isValidHexCode(hexCode)).toBe(results[index]);
    });
  });
});

/**
 * Test that mapBeltColor returns expected values
 */
describe("mapBeltColor", () => {
  it("should return valid hexcode", () => {
    expect(belt.mapBeltColor("#FFFFFF", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for White", () => {
    expect(belt.mapBeltColor("White", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for mixed case wHiTe", () => {
    expect(belt.mapBeltColor("wHiTe", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for Gray", () => {
    expect(belt.mapBeltColor("Gray", colors)).toBe("#999999");
  });

  it("should return passed color", () => {
    expect(belt.mapBeltColor("Red", colors)).toBe("Red");
  });
});

/**
 * Test that mapBeltColors maps colors correctly
 */
describe("mapBeltColors", () => {
  belt.mapBeltColors(belts, colors);
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

/**
 * Test that getBeltProps returns expected values
 */
describe("getBeltProps", () => {
  const myBelt: belt.Belt = belt.getBelt();
  it("should match snap", () => {
    const beltProps: belt.BeltProps = belt.getBeltPropsFromBelt(
      myBelt,
      0,
      belt.StripePosition.Left,
      "",
      0,
      null
    );
    beltProps.id = ""; // blank id so snapshot doesn't fail
    beltProps.version = ""; // blank out version so snapshot does not fail
    expect(beltProps).toMatchSnapshot();
  });
});

describe("validateBelt_StripeCount", () => {
  it(`minStripe < ${belt.MinimumStripeCount} should return ${belt.MinimumStripeCount}`, () => {
    const b = belt.getBelt(
      0,
      "",
      belt.BeltType.Solid,
      0,
      "",
      "",
      "",
      "",
      false,
      "",
      "",
      false,
      "",
      "",
      "",
      0,
      belt.StripePosition.Right,
      belt.MinimumStripeCount - 1, // here is invalid stripe value
      10
    );
    expect(b.minStripes).toBe(belt.MinimumStripeCount);
  });

  it(`minStripe > ${belt.MaximumStripeCount} should return ${belt.MinimumStripeCount}`, () => {
    const b = belt.getBelt(
      0,
      "",
      belt.BeltType.Solid,
      0,
      "",
      "",
      "",
      "",
      false,
      "",
      "",
      false,
      "",
      "",
      "",
      0,
      belt.StripePosition.Right,
      belt.MaximumStripeCount + 1, // here is invalid stripe value
      10
    );
    expect(b.minStripes).toBe(belt.MinimumStripeCount);
  });

  it(`maxStripe > ${belt.MaximumStripeCount} should return ${belt.MaximumStripeCount}`, () => {
    const b = belt.getBelt(
      0,
      "",
      belt.BeltType.Solid,
      0,
      "",
      "",
      "",
      "",
      false,
      "",
      "",
      false,
      "",
      "",
      "",
      0,
      belt.StripePosition.Right,
      0,
      belt.MaximumStripeCount + 1 // here is invalid stripe value
    );
    expect(b.maxStripes).toBe(belt.MaximumStripeCount);
  });

  it(`maxStripe < ${belt.MinimumStripeCount} should return ${belt.MaximumStripeCount}`, () => {
    const b = belt.getBelt(
      0,
      "",
      belt.BeltType.Solid,
      0,
      "",
      "",
      "",
      "",
      false,
      "",
      "",
      false,
      "",
      "",
      "",
      0,
      belt.StripePosition.Right,
      0,
      belt.MinimumStripeCount - 1 // here is invalid stripe value
    );
    expect(b.maxStripes).toBe(belt.MaximumStripeCount);
  });

  it("minStripe is not > maxStripe check", () => {
    const b = belt.getBelt(
      0,
      "",
      belt.BeltType.Solid,
      0,
      "",
      "",
      "",
      "",
      false,
      "",
      "",
      false,
      "",
      "",
      "",
      0,
      belt.StripePosition.Right,
      5, // here is invalid minStripevalue
      4 // here is invalid maxStripes value
    );
    expect(b.minStripes).toBe(belt.MinimumStripeCount);
    expect(b.maxStripes).toBe(4);
  });

  it("must have color1", () => {
    const b = belt.getBelt(
      0,
      "",
      belt.BeltType.Solid, // requires 1 color
      0,
      "", //required color1 missing
      "",
      "",
      "",
      false,
      "",
      "",
      false,
      "",
      "",
      "",
      0,
      belt.StripePosition.Right,
      0,
      1
    );
    expect(b.color1).toBe(belt.DefaultColor);
  });

  it("must have color1 and color2", () => {
    const b = belt.getBelt(
      0,
      "",
      belt.BeltType.Coral, // requires 2 colors
      0,
      "", // required color1 missing
      "", // required color2 missing
      "",
      "",
      false,
      "",
      "",
      false,
      "",
      "",
      "",
      0,
      belt.StripePosition.Right,
      0,
      1
    );
    expect(b.color1).toBe(belt.DefaultColor);
    expect(b.color2).toBe(belt.DefaultColor);
  });

  it("must have color1, color2 and color3", () => {
    const b = belt.getBelt(
      0,
      "",
      belt.BeltType.Striped, // requires 3 colors
      0,
      "", // required color1 missing
      "", // required color2 missing
      "", // required color3 missing
      "",
      false,
      "",
      "",
      false,
      "",
      "",
      "",
      0,
      belt.StripePosition.Right,
      0,
      1
    );
    expect(b.color1).toBe(belt.DefaultColor);
    expect(b.color2).toBe(belt.DefaultColor);
    expect(b.color3).toBe(belt.DefaultColor);
  });
});
