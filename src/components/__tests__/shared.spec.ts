import { describe, it, expect } from "vitest";
import * as shared from "../../shared/shared";
import { BeltColor, Belt } from "../../types/BeltProps";

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
    type: "Solid",
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
    stripePosition: "Right",
    minStripes: 0,
    maxStripes: 4,
  },
];

describe("mapColor", () => {
  it("should return valid hexcode", () => {
    expect(shared.mapColor("#FFFFFF", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for White", () => {
    expect(shared.mapColor("White", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for mixed case wHiTe", () => {
    expect(shared.mapColor("wHiTe", colors)).toBe("#FFFFFF");
  });

  it("should return mapped value for Gray", () => {
    expect(shared.mapColor("Gray", colors)).toBe("#999999");
  });

  it("should return passed color", () => {
    expect(shared.mapColor("Red", colors)).toBe("Red");
  });
});

describe("mapColors", () => {
  shared.mapColors(belts, colors);
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
        "Left",
        "",
        0
      )
    ).toMatchSnapshot();
  });
});
