import { describe, it, expect } from "vitest";

import { BeltSystem } from "../../types/BeltProps";
import ibjjfJSON from "../../shared/ibjjf.json";

const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);

describe("IBJJF System", () => {
  ibjjfJSON.belts.forEach((belt) => {
    it(`${belt.name}`, () => {
      expect(ibjjfSystem.getBeltPropsByName(belt.name, 0)).toMatchSnapshot();
    });
  });
});
