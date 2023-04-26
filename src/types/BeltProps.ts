import * as shared from "../shared/shared";

/**
 * Where to start stripe placement on patch (Left or Right)
 */
export const stripePositions = ["Left", "Right"] as const;
export type StripePositions = (typeof stripePositions)[number];

/**
 * Available belt types
 */
export enum BeltType {
  Solid = "Solid",
  Striped = "Striped",
  Coral = "Coral",
  Split = "Split",
  Checkered = "Checkered",
  Crazy = "Crazy",
}

/**
 * Property object passed to <CustomBelt /> component
 */
export interface BeltProps {
  border: string;
  hasPatch: boolean;
  patch: string;
  patchBorder: string;
  professorPatch: string;
  professorBorder: string;
  hasProfessorPatch: boolean;
  stripeCount: number;
  stripePosition: StripePositions;
  stripe1: string;
  stripe2: string;
  stripe3: string;
  stripe4: string;
  stripe5: string;
  stripe6: string;
  stripe7: string;
  stripe8: string;
  stripe9: string;
  stripe10: string;
  s1l1: string;
  s1l2a: string;
  s1l2b: string;
  s1l3: string;
  s2l1: string;
  s2l2a: string;
  s2l2b: string;
  s2l3: string;
  s3l1: string;
  s3l2a: string;
  s3l2b: string;
  s3l3: string;
  s4l1: string;
  s4l2a: string;
  s4l2b: string;
  s4l3: string;
  s5l1: string;
  s5l2a: string;
  s5l2b: string;
  s5l3: string;
  s6l1: string;
  s6l2a: string;
  s6l2b: string;
  s6l3: string;
  s7l1: string;
  s7l2a: string;
  s7l2b: string;
  s7l3: string;
  s8l1: string;
  s8l2a: string;
  s8l2b: string;
  s8l3: string;
  s9l1: string;
  s9l2a: string;
  s9l2b: string;
  s9l3: string;
  s10l1: string;
  s10l2a: string;
  s10l2b: string;
  s10l3: string;
  s11l1: string;
  s11l2a: string;
  s11l2b: string;
  s11l3: string;
  s12l1: string;
  s12l2a: string;
  s12l2b: string;
  s12l3: string;
  s13l1: string;
  s13l2a: string;
  s13l2b: string;
  s13l3: string;
  transitionCSS: string;
  rdfTitle: string;
  rdfDescription: string;
  randomBeltTypes: BeltType[];
  refreshInterval: number;
}

/**
 * Used to assign/lookup friendly names to hex colors
 */
export interface BeltColor {
  name: string;
  hex: string;
}

/**
 * Belt object definition
 */
export interface Belt {
  id: number;
  name: string;
  sortOrder: number;
  type: BeltType;
  color1: string;
  color2: string;
  color3: string;
  borderColor: string;
  hasPatch: boolean;
  patchColor: string;
  patchBorderColor: string;
  hasProfessorPatch: boolean;
  professorPatchColor: string;
  professorBorderColor: string;
  stripeColor: string;
  stripeCount: number;
  stripePosition: StripePositions;
  minStripes: number;
  maxStripes: number;
}

/**
 * Class used to represent predefined belt systems
 * @param {string} name name to give belt system
 * @param {string} title title used for display purposes
 * @param {string} transitionCSS default transition css to use between belt changes
 * @param {number} refreshInterval default milliseconds to wait before changing belt
 * @param {BeltColor[]} colors array of BeltColor objects used to lookup hex colors by friendly name
 * @param {Belt[]} belts array of Belt objects contained in this belt system
 */
export class BeltSystem {
  name: string;
  title: string;
  transitionCSS: string;
  refreshInterval: number;
  colors: BeltColor[];
  belts: Belt[];

  constructor(system: any) {
    this.name = system.name;
    this.title = system.title;
    this.transitionCSS = system.transitionCSS;
    this.refreshInterval = system.refreshInterval;
    this.colors = system.colors;
    this.belts = system.belts;

    // Replace friendly color names in Belt objects with hex values
    shared.mapColors(this.belts, this.colors);
  }

  /**
   * Get a Belt by Id
   * @param {number} id belt id to find
   * @return {Belt | undefined} matching Belt or undefined
   */
  getBeltById(id: number): Belt | undefined {
    return this.belts.find((belt) => belt.id === id);
  }

  /**
   * Get a Belt by Name (case insensitive search)
   * @param {string} name belt name to find
   * @return {Belt | undefined} matching Belt or undefined
   */
  getBeltByName(name: string): Belt | undefined {
    return this.belts.find(
      (belt) => belt.name.toUpperCase() === name.toUpperCase()
    );
  }

  /**
   * Get BeltpProps for provided Belt object and stripe info
   * @param {Belt} belt belt object to use
   * @param {number} stripeCount number of stripes to use (0-10)
   * @param {StripePositions | undefined} stripePosition stripe placement
   * @return {BeltProps} BeltProps for provided Belt object and stripe info
   */
  getBeltProps(
    belt: Belt,
    stripeCount: number,
    stripePosition: StripePositions | undefined = undefined
  ): BeltProps {
    const rdfTitle = `${this.title} ${belt.name} Belt`;
    const rdfDescription = shared.getDescription(rdfTitle, stripeCount);

    const beltProps: BeltProps = shared.getBeltProps(
      rdfTitle,
      rdfDescription,
      belt,
      stripeCount,
      stripePosition,
      this.transitionCSS,
      this.refreshInterval
    );

    return beltProps;
  }

  /**
   * Get all BeltProps from the belt system
   * @param {string} transitionCSS transition css to use between belt changes. Empty for no effect
   * @param {number} refreshInterval milliseconds to wait before changing belt. 0 for no rotate
   * @return {BeltProps[]} all belts in the belt system
   */
  getBeltPropsAll(
    transitionCSS: string = "",
    refreshInterval: number = 0
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    this.belts.forEach((belt) => {
      const beltProps = this.getBeltProps(
        belt,
        belt.minStripes,
        belt.stripePosition
      );
      beltProps.transitionCSS = transitionCSS;
      beltProps.refreshInterval = refreshInterval;
      beltPropsAry.push(beltProps);
    });

    return beltPropsAry;
  }

  /**
   * Get BeltProps for matching belt id
   * @param {number} id belt id to find
   * @param {number | undefined} stripeCount number of stripes to use (0-10)
   * @param {StripePositions | undefined} stripePosition stripe placement (Right or Left)
   * @return {BeltProps[]} BeltProps for matching belt name
   */
  getBeltPropsById(
    id: number,
    stripeCount: number | undefined = undefined,
    stripePosition: StripePositions | undefined = undefined
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    const belt = this.getBeltById(id);

    if (belt) {
      beltPropsAry.push(
        this.getBeltProps(
          belt,
          stripeCount === undefined ? belt.minStripes : stripeCount,
          stripePosition
        )
      );
    }

    return beltPropsAry;
  }

  /**
   * Get BeltProps for matching belt ids
   * @param {number[]} ids ids of belts to return
   * @param {number | undefined} stripeCount the number of stripes to use
   * @param {StripePositions | undefined} stripePosition the stripe position to use
   * @param {string} transitionCSS transition css to use between belt changes
   * @param {number} refreshInterval milliseconds to wait before changing belt
   * @return {BeltProps[]} BeltProps[] of matching belts
   */
  getBeltPropsByIds(
    ids: number[],
    stripeCount: number | undefined = undefined,
    stripePosition: StripePositions | undefined = undefined,
    transitionCSS: string = "",
    refreshInterval: number = 0
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    const belts = this.getBeltsByIds(ids);

    if (belts) {
      belts.forEach((belt) => {
        const beltProps: BeltProps = this.getBeltProps(
          belt,
          stripeCount === undefined ? belt.minStripes : stripeCount,
          stripePosition
        );
        beltProps.transitionCSS = transitionCSS;
        beltProps.refreshInterval = refreshInterval;
        beltPropsAry.push(beltProps);
      });
    }

    return beltPropsAry;
  }

  /**
   * Get BeltProps for matching belt name
   * @param {string} name belt name to find
   * @param {number | undefined} stripeCount number of stripes to use (0-10)
   * @param {StripePositions | undefined} stripePosition stripe placement (Right or Left)
   * @return {BeltProps[]} BeltProps for matching belt name
   */
  getBeltPropsByName(
    name: string,
    stripeCount: number | undefined = undefined,
    stripePosition: StripePositions | undefined = undefined
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    const belt = this.getBeltByName(name);

    if (belt) {
      beltPropsAry.push(
        this.getBeltProps(
          belt,
          stripeCount === undefined ? belt.minStripes : stripeCount,
          stripePosition
        )
      );
    }

    return beltPropsAry;
  }

  /**
   * Get BeltProps for matching belt names
   * @param {string[]} names names of belts to return
   * @param {number | undefined} stripeCount the number of stripes to use
   * @param {StripePositions | undefined} stripePosition the stripe position to use
   * @param {string} transitionCSS transition css to use between belt changes
   * @param {number} refreshInterval milliseconds to wait before changing belt
   * @return {BeltProps[]} BeltProps[] of matching belts
   */
  getBeltPropsByNames(
    names: string[],
    stripeCount: number | undefined = undefined,
    stripePosition: StripePositions | undefined = undefined,
    transitionCSS: string = "",
    refreshInterval: number = 0
  ): BeltProps[] {
    const beltPropsAry: BeltProps[] = [];
    const belts = this.getBeltsByNames(names);

    if (belts) {
      belts.forEach((belt) => {
        const beltProps: BeltProps = this.getBeltProps(
          belt,
          stripeCount === undefined ? belt.minStripes : stripeCount,
          stripePosition
        );
        beltProps.transitionCSS = transitionCSS;
        beltProps.refreshInterval = refreshInterval;
        beltPropsAry.push(beltProps);
      });
    }

    return beltPropsAry;
  }

  /**
   * Get matching belts by ids
   * @param {number[]} ids ids of belts to return
   * @return {Belt[]} Belt[] of matching belts
   */
  getBeltsByIds(ids: number[]): Belt[] {
    const belts: Belt[] = [];
    ids.forEach((id) => {
      const b: Belt | undefined = this.getBeltById(id);
      if (b !== undefined) {
        belts.push(b);
      }
    });

    return belts;
  }

  /**
   * Get matching belts by names
   * @param {string[]} names names of belts to return
   * @return {Belt[]} Belt[] of matching belts
   */
  getBeltsByNames(names: string[]): Belt[] {
    const upperCased: string[] = names.map((val) => val.toUpperCase());
    const belts: Belt[] = [];
    upperCased.forEach((belt) => {
      const b: Belt | undefined = this.getBeltByName(belt);
      if (b !== undefined) {
        belts.push(b);
      }
    });

    return belts;
  }
}
