import { describe, it, expect } from "vitest";
import * as shared from "../../shared/shared";
import { BeltColor } from "../../types/BeltProps";

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

describe("mapColor", () => {
  const colors: BeltColor[] = [
    {
      name: "White",
      hex: "#FFFFFF",
    },
    {
      name: "Gray",
      hex: "#999999",
    },
  ];

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