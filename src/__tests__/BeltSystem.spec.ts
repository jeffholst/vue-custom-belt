import { describe, it, expect } from "vitest";
import BeltSystemJSON_IBJJF from "../belt-systems/IBJJF.json";
import { Belt, BeltProps, StripePosition } from "../Belt";
import { BeltSystem } from "../BeltSystem";

/**
 * BeltSystem tests
 */
describe("BeltSystem", () => {
  const ibjjfSystem: BeltSystem = new BeltSystem(BeltSystemJSON_IBJJF);

  /**
   * Test that getBeltById returns undefined for invalid belt id
   */
  it(`getBeltById returns undefined`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltById(-9999);
    expect(belt).toBeUndefined();
  });

  /**
   * Test that getBeltById returns data for valid belt id
   */
  it(`getBeltById returns match`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltById(10); // White
    expect(belt).not.toBeUndefined();
  });

  /**
   * Test that getBeltByName returns undefined for invalid belt name
   */
  it(`getBeltByName returns undefined`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltByName("DoesNotExist");
    expect(belt).toBeUndefined();
  });

  /**
   * Test that getBeltByName returns data for valid belt name
   */
  it(`getBeltByName returns match`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltByName("White");
    expect(belt).not.toBeUndefined();
  });

  /**
   * Test that getBeltByName returns data for valid belt name (mixed case)
   */
  it(`getBeltByName returns match (mixed case)`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltByName("white");
    expect(belt).not.toBeUndefined();
  });

  /**
   * Test that getBeltProps returns valid data
   */
  it(`getBeltProps returns valid data`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltByName("white");
    if (belt !== undefined) {
      const beltProps: BeltProps = ibjjfSystem.getBeltProps(
        belt,
        1,
        StripePosition.Left
      );
      beltProps.id = ""; // blank out unique id so snapshot does not fail
      beltProps.version = ""; // blank out version so snapshot does not fail
      expect(beltProps).toMatchSnapshot();
    } else {
      expect(belt).not.toBeUndefined();
    }
  });

  /**
   * Test that getBeltProps returns valid data (stripePosition undefined)
   */
  it(`getBeltProps returns valid data (stripePosition undefined)`, () => {
    const belt: Belt | undefined = ibjjfSystem.getBeltByName("white");
    if (belt !== undefined) {
      const beltProps: BeltProps = ibjjfSystem.getBeltProps(belt, 2);
      beltProps.id = ""; // blank out unique id so snapshot does not fail
      beltProps.version = ""; // blank out version so snapshot does not fail
      expect(beltProps).toMatchSnapshot();
    } else {
      expect(belt).not.toBeUndefined();
    }
  });

  /**
   * Test that getBeltPropsAll returns valid data
   */
  it(`getBeltPropsAll returns valid data`, () => {
    const beltProps = ibjjfSystem.getBeltPropsAll("test", 2000);
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });
  /**
   * Test that getBeltPropsById returns valid data
   */
  it(`getBeltPropsById returns valid data`, () => {
    const beltProps: BeltProps[] = ibjjfSystem.getBeltPropsById(10);
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });

  /**
   * Test that getBeltPropsById returns empty array for invalid id
   */
  it(`getBeltPropsById returns valid data for invalid id`, () => {
    const beltProps = ibjjfSystem.getBeltPropsById(-9999);
    expect(beltProps).toEqual([]);
  });

  /**
   * Test that getBeltPropsByIds returns valid data (no parms)
   */
  it(`getBeltPropsByIds returns valid data (no parms)`, () => {
    const beltProps: BeltProps[] = ibjjfSystem.getBeltPropsByIds([10, 20]);
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });

  /**
   * Test that getBeltPropsByIds returns valid data (with stripe info)
   */
  it(`getBeltPropsByIds returns valid data (with stripe info)`, () => {
    const beltProps: BeltProps[] = ibjjfSystem.getBeltPropsByIds(
      [10, 20],
      1,
      StripePosition.Left
    );
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });

  /**
   * Test that getBeltPropsByIds returns valid data (with extra info)
   */
  it(`getBeltPropsByIds returns valid data (with extra info)`, () => {
    const beltProps: BeltProps[] = ibjjfSystem.getBeltPropsByIds(
      [1, 2],
      undefined,
      undefined,
      "test",
      1000
    );
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });

  /**
   * Test that getBeltPropsByName returns valid data
   */
  it(`getBeltPropsByName returns valid data`, () => {
    const beltProps: BeltProps[] = ibjjfSystem.getBeltPropsByName("Blue");
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });

  /**
   * Test that getBeltPropsByName returns empty array for invalid name
   */
  it(`getBeltPropsByName returns valid data for invalid name`, () => {
    const beltProps: BeltProps[] =
      ibjjfSystem.getBeltPropsByName("DoesNotExist");
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toEqual([]);
  });

  /**
   * Test that getBeltPropsByNames returns valid data (no parms)
   */
  it(`getBeltPropsByNames returns valid data (no parms)`, () => {
    const beltProps: BeltProps[] = ibjjfSystem.getBeltPropsByNames([
      "Blue",
      "Purple",
    ]);
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });

  /**
   * Test that getBeltPropsByNames returns valid data (with stripe info)
   */
  it(`getBeltPropsByNames returns valid data (with stripe info)`, () => {
    const beltProps: BeltProps[] = ibjjfSystem.getBeltPropsByNames(
      ["White", "Brown"],
      1,
      StripePosition.Left
    );
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });

  /**
   * Test that getBeltPropsByNames returns valid data (with extra info)
   */
  it(`getBeltPropsByNames returns valid data (with extra info)`, () => {
    const beltProps: BeltProps[] = ibjjfSystem.getBeltPropsByNames(
      ["White", "Purple"],
      undefined,
      undefined,
      "test",
      1000
    );
    beltProps.forEach((bp) => {
      bp.id = ""; // blank out unique id so snapshot does not fail
      bp.version = ""; // blank out version so snapshot does not fail
    });
    expect(beltProps).toMatchSnapshot();
  });

  /**
   * Test that getBeltsByIds correctly returns single match
   */
  it(`getBeltsByIds returns 1 match`, () => {
    const belts: Belt[] | undefined = ibjjfSystem.getBeltsByIds([1]);
    if (belts !== undefined) {
      expect(belts.length).toBe(1);
    } else {
      expect(belts).not.toBeUndefined();
    }
  });

  /**
   * Test that getBeltsByIds correctly returns multiple matches
   */
  it(`getBeltsByIds returns 4 matches`, () => {
    const belts: Belt[] | undefined = ibjjfSystem.getBeltsByIds([2, 4, 6, 8]);
    if (belts !== undefined) {
      expect(belts.length).toBe(4);
    } else {
      expect(belts).not.toBeUndefined();
    }
  });

  /**
   * Test that getBeltsByNames correctly returns single match
   */
  it(`getBeltsByNames returns 1 match`, () => {
    const belts: Belt[] | undefined = ibjjfSystem.getBeltsByNames(["White"]);
    if (belts !== undefined) {
      expect(belts.length).toBe(1);
    } else {
      expect(belts).not.toBeUndefined();
    }
  });

  /**
   * Test that getBeltsByNames correctly returns multiple matches
   */
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

  /**
   * Test that getBeltsByNames correctly returns multiple matches (mixed case)
   */
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
