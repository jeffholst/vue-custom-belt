import { describe, it, expect } from "vitest";
import * as shared from "../../shared/shared";

describe("Shared tests", () => {
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
