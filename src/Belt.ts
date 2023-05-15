import { version } from "../package.json";

/**
 *  ___
 * | __|_ _ _  _ _ __  ___
 * | _|| ' \ || | '  \(_-<
 * |___|_||_\_,_|_|_|_/__/
 */

export enum BeltCallbackType {
  Refresh = "Refresh",
  Click = "Click",
  DoubleClick = "DoubleClick",
}

/**
 * Belt types
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
 * Log types
 */

enum LogType {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

/**
 * Where to start stripe placement on patch (Left or Right)
 */
export enum StripePosition {
  Left = "Left",
  Right = "Right",
}

/**
 *  ___     _            __
 * |_ _|_ _| |_ ___ _ _ / _|__ _ __ ___ ___
 *  | || ' \  _/ -_) '_|  _/ _` / _/ -_|_-<
 * |___|_||_\__\___|_| |_| \__,_\__\___/__/
 */

/**
 * Belt object definition
 */
export interface Belt {
  system: string;
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
  stripePosition: StripePosition;
  minStripes: number;
  maxStripes: number;
}

/**
 * Used to assign/lookup friendly names to hex colors
 */
export interface BeltColor {
  name: string;
  hex: string;
}

/**
 * Property object passed to <CustomBelt /> component
 */
export interface BeltProps {
  version: string;
  id: string;
  belt: Belt;
  border: string;
  hasPatch: boolean;
  patch: string;
  patchBorder: string;
  professorPatch: string;
  professorBorder: string;
  hasProfessorPatch: boolean;
  stripeCount: number;
  stripePosition: StripePosition;
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
  beltRDF: BeltRDF;
  randomSettings: RandomSettings;
  refreshInterval: number;
  callback: Function | null;
}

/**
 * RDF metadata used in SVG tag
 */
interface BeltRDF {
  title: string;
  about: string;
}

/**
 * Settings from getBeltRandom()
 */
export interface RandomSettings {
  hasPatch: boolean | undefined;
  hasProfessorPatch: boolean | undefined;
  stripeCount: number | undefined;
  stripeStart: StripePosition | undefined;
  includeBelts: Array<BeltType> | undefined;
}

/**
 *  ___       __           _ _
 * |   \ ___ / _|__ _ _  _| | |_ ___
 * | |) / -_)  _/ _` | || | |  _(_-<
 * |___/\___|_| \__,_|\_,_|_|\__/__/
 */

const RDFAbout = "https://github.com/jeffholst/vue-custom-belt"; // about URL for RDF metadata
const UniqueIDPrefix = "custom-belt-"; // prefix for unique ID generation

export const DefaultColor = "#FF0000"; // default when no color provided
export const MinimumStripeCount = 0; // minimum number of stripes
export const MaximumStripeCount = 10; // maximum number of stripes a belt may have
export const StripePositionDefault = StripePosition.Right; // default stripe position

/*
 *  ___                   _     ___             _   _
 * | __|_ ___ __  ___ _ _| |_  | __|  _ _ _  __| |_(_)___ _ _  ___
 * | _|\ \ / '_ \/ _ \ '_|  _| | _| || | ' \/ _|  _| / _ \ ' \(_-<
 * |___/_\_\ .__/\___/_|  \__| |_| \_,_|_||_\__|\__|_\___/_||_/__/
 *         |_|
 */

export const combineBeltProps = (beltProps: BeltProps[][]): BeltProps[] => {
  let combinedBeltProps: BeltProps[] = [];
  beltProps.forEach((beltProp) => {
    combinedBeltProps = combinedBeltProps.concat(beltProp);
  });
  return combinedBeltProps;
};

/**
 * Create a new Belt object from specified parameters
 * @param {number} id unique identifier for belt
 * @param {string} name friendly name for belt
 * @param {BeltType} type type of belt
 * @param {number} sortOrder used for sorting belts for display
 * @param {string} color1 hex value for belt color 1
 * @param {string} color2 hex value for belt color 2
 * @param {string} color3 hex value for belt color 3
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @return {Belt} Belt object
 */
export const getBelt = (
  id: number = 0,
  name: string = "",
  type: BeltType = BeltType.Solid,
  sortOrder: number = 0,
  color1: string = "",
  color2: string = "",
  color3: string = "",
  borderColor: string = "",
  hasPatch: boolean = false,
  patchColor: string = "",
  patchBorderColor: string = "",
  hasProfessorPatch: boolean = false,
  professorPatchColor: string = "",
  professorBorderColor: string = "",
  stripeColor: string = "",
  stripeCount: number = 0,
  stripePosition: StripePosition = StripePositionDefault,
  minStripes: number = MinimumStripeCount,
  maxStripes: number = MaximumStripeCount
): Belt => {
  const belt: Belt = {
    system: "none",
    id: id ? id : 0,
    name: name ? name : "",
    type: type ? type : BeltType.Solid,
    sortOrder: sortOrder ? sortOrder : 0,
    color1: color1 ? color1 : "",
    color2: color2 ? color2 : "",
    color3: color3 ? color3 : "",
    borderColor: borderColor ? borderColor : "",
    hasPatch: hasPatch ? hasPatch : false,
    patchColor: patchColor ? patchColor : "",
    patchBorderColor: patchBorderColor ? patchBorderColor : "",
    hasProfessorPatch: hasProfessorPatch ? hasProfessorPatch : false,
    professorPatchColor: professorPatchColor ? professorPatchColor : "",
    professorBorderColor: professorBorderColor ? professorBorderColor : "",
    stripeColor: stripeColor ? stripeColor : "",
    stripeCount: stripeCount ? stripeCount : 0,
    stripePosition: stripePosition ? stripePosition : StripePositionDefault,
    minStripes: minStripes ? minStripes : 0,
    maxStripes: maxStripes ? maxStripes : 4,
  };

  validateBelt(belt);

  return belt;
};

/**
 * Create a new Checkered Belt object from specified parameters
 * @param {number} id unique identifier for belt
 * @param {string} name friendly name for belt
 * @param {string} color1 hex value for belt color 1
 * @param {string} color2 hex value for belt color 2
 * @param {string} borderColor hex value for belt border color
 * @param {boolean} hasPatch whether belt has patch or not
 * @param {string} patchColor hex value for patch color
 * @param {string} patchBorderColor hex value for patch border color
 * @param {boolean} hasProfessorPatch whether belt has professor patch or not
 * @param {string} professorPatchColor hex value for professor patch color
 * @param {string} professorBorderColor hex value for professor patch border color
 * @param {string} stripeColor hex value for stripe color
 * @param {number} stripeCount number of stripes for belt [0-10]
 * @param {StripePosition} stripePosition starting position of stripes on belt
 * @param {number} minStripes minimum number of stripes for belt
 * @param {number} maxStripes maximum number of stripes for belt
 * @param {string} transitionCSS CSS for transition animation
 * @param {number} refreshInterval interval for refreshing belt in milliseconds
 * @return {BeltProps[]} Belt object */
export const getBeltCheckered = (
  id: number,
  name: string,
  color1: string,
  color2: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  hasProfessorPatch: boolean,
  professorPatchColor: string,
  professorBorderColor: string,
  stripeColor: string,
  stripeCount: number,
  stripePosition: StripePosition,
  minStripes: number,
  maxStripes: number,
  transitionCSS: string,
  refreshInterval: number,
  callback: Function | null = null
): BeltProps[] => {
  return getBeltPredefined(
    id,
    name,
    BeltType.Checkered,
    color1,
    color2,
    "",
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripePosition,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

export const getBeltCoral = (
  id: number,
  name: string,
  color1: string,
  color2: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  hasProfessorPatch: boolean,
  professorPatchColor: string,
  professorBorderColor: string,
  stripeColor: string,
  stripeCount: number,
  stripeStart: StripePosition,
  minStripes: number,
  maxStripes: number,
  transitionCSS: string,
  refreshInterval: number,
  callback: Function | null = null
): BeltProps[] => {
  return getBeltPredefined(
    id,
    name,
    BeltType.Coral,
    color1,
    color2,
    "",
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripeStart,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

export const getBeltPredefined = (
  id: number,
  name: string,
  beltType: BeltType,
  color1: string,
  color2: string,
  color3: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  hasProfessorPatch: boolean,
  professorPatchColor: string,
  professorBorderColor: string,
  stripeColor: string,
  stripeCount: number,
  stripePosition: StripePosition,
  minStripes: number,
  maxStripes: number,
  transitionCSS: string,
  refreshInterval: number,
  callback: Function | null = null
): BeltProps[] => {
  const belt: Belt = getBelt(
    id,
    name,
    beltType,
    0,
    color1,
    color2,
    color3,
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripePosition,
    minStripes,
    maxStripes
  );

  const beltProps: BeltProps = getBeltProps(
    belt,
    stripeCount,
    stripePosition,
    transitionCSS,
    refreshInterval,
    callback
  );

  const beltPropAry: BeltProps[] = [];
  beltPropAry.push(beltProps);

  return beltPropAry;
};

export const getBeltProps = (
  belt: Belt,
  stripeCount: number,
  stripePosition: StripePosition | undefined,
  transitionCSS: string,
  refreshInterval: number,
  callback: Function | null = null
): BeltProps => {
  const beltRDF: BeltRDF = getBeltRDF(belt);
  const randomSettings: RandomSettings = getRandomSettings();
  const beltProps: BeltProps = {
    version: version,
    id: generateUniqueId(),
    belt: belt,
    border: "",
    hasPatch: true,
    patch: "",
    patchBorder: "",
    professorPatch: "",
    professorBorder: "",
    hasProfessorPatch: false,
    stripeCount: stripeCount,
    stripePosition: StripePositionDefault,
    stripe1: "",
    stripe2: "",
    stripe3: "",
    stripe4: "",
    stripe5: "",
    stripe6: "",
    stripe7: "",
    stripe8: "",
    stripe9: "",
    stripe10: "",
    s1l1: "",
    s1l2a: "",
    s1l2b: "",
    s1l3: "",
    s2l1: "",
    s2l2a: "",
    s2l2b: "",
    s2l3: "",
    s3l1: "",
    s3l2a: "",
    s3l2b: "",
    s3l3: "",
    s4l1: "",
    s4l2a: "",
    s4l2b: "",
    s4l3: "",
    s5l1: "",
    s5l2a: "",
    s5l2b: "",
    s5l3: "",
    s6l1: "",
    s6l2a: "",
    s6l2b: "",
    s6l3: "",
    s7l1: "",
    s7l2a: "",
    s7l2b: "",
    s7l3: "",
    s8l1: "",
    s8l2a: "",
    s8l2b: "",
    s8l3: "",
    s9l1: "",
    s9l2a: "",
    s9l2b: "",
    s9l3: "",
    s10l1: "",
    s10l2a: "",
    s10l2b: "",
    s10l3: "",
    s11l1: "",
    s11l2a: "",
    s11l2b: "",
    s11l3: "",
    s12l1: "",
    s12l2a: "",
    s12l2b: "",
    s12l3: "",
    s13l1: "",
    s13l2a: "",
    s13l2b: "",
    s13l3: "",
    transitionCSS: "",
    beltRDF: beltRDF,
    randomSettings: randomSettings,
    refreshInterval: 0,
    callback: callback,
  };

  beltProps.transitionCSS = transitionCSS;
  beltProps.refreshInterval = refreshInterval;
  beltProps.stripeCount = stripeCount;
  if (stripePosition != undefined) beltProps.stripePosition = stripePosition;
  else if (belt != undefined) beltProps.stripePosition = belt.stripePosition;

  if (belt) {
    switch (belt.type) {
      case "Solid":
        setBeltSolid(belt, beltProps);
        break;
      case "Striped":
        setBeltStriped(belt, beltProps);
        break;
      case "Coral":
        setBeltCoral(belt, beltProps);
        break;
      case "Split":
        setBeltSplit(belt, beltProps);
        break;
      case "Checkered":
        setBeltCheckered(belt, beltProps);
        break;
      case "Crazy":
        setBeltCrazy(belt, beltProps);
        break;
    }
    beltProps.border = belt.borderColor;

    setPatchProperties(
      beltProps,
      belt.hasPatch,
      belt.patchColor,
      belt.patchBorderColor,
      belt.professorPatchColor,
      belt.professorBorderColor,
      belt.hasProfessorPatch,
      belt.stripeColor,
      stripeCount,
      stripePosition
    );
  }

  return beltProps;
};

export const getBeltRandom = (
  hasPatch: boolean | undefined = undefined,
  hasProfessorPatch: boolean | undefined = undefined,
  stripeCount: number | undefined = undefined,
  stripeStart: StripePosition | undefined = undefined,
  transitionCSS: string | undefined = "",
  includeBelts: Array<BeltType> | undefined = [],
  refreshInterval: number | undefined = 0,
  callback: Function | null = null
): BeltProps[] => {
  let randomBeltTypeIndex;
  const title = "Random";
  const randomSettings: RandomSettings = getRandomSettings(
    hasPatch,
    hasProfessorPatch,
    stripeCount,
    stripeStart,
    includeBelts
  );
  if (hasPatch == undefined) hasPatch = Math.random() < 0.5; // randomly pick true or false
  if (hasProfessorPatch === undefined) hasProfessorPatch = Math.random() < 0.5; // randomly pick true or false
  if (stripeCount === undefined)
    stripeCount = Math.floor(Math.random() * MaximumStripeCount + 1); // randomly pick between 0-10 stripes
  if (stripeStart === undefined)
    Math.random() < 0.5 === true
      ? (stripeStart = StripePosition.Left)
      : (stripeStart = StripePosition.Right); // randomly pick Left or Right
  if (transitionCSS === undefined) transitionCSS = "";
  if (includeBelts !== undefined && includeBelts.length > 0) {
    if (includeBelts.length === 1) {
      // if only one includeBelt items is specified, then use that belt type
      randomBeltTypeIndex = getRandomBeltIndex(includeBelts[0]);
    } else {
      // build array of includeBelt types and selct random one
      const ary: Array<BeltType> = [];
      for (let i = 0; i < includeBelts.length; i++) {
        ary.push(includeBelts[i]);
      }
      const rand = Math.floor(Math.random() * ary.length);
      randomBeltTypeIndex = getRandomBeltIndex(ary[rand]);
    }
  } else {
    // no includeBelt types specified, for select random from all
    randomBeltTypeIndex = Math.floor(Math.random() * 6);
  }
  if (refreshInterval === undefined) refreshInterval = 0;
  let name = "";
  let beltType: BeltType = BeltType.Solid;
  switch (randomBeltTypeIndex) {
    case 0: // solid belt
      name = `${title} Solid belt`;
      beltType = BeltType.Solid;
      break;
    case 1: // striped belt
      name = `${title} Striped belt`;
      beltType = BeltType.Striped;
      break;
    case 2: // coral belt
      name = `${title} Coral belt`;
      beltType = BeltType.Coral;
      break;
    case 3: // split belt
      name = `${title} Split belt`;
      beltType = BeltType.Split;
      break;
    case 4: // checkered belt
      name = `${title} Checkered belt`;
      beltType = BeltType.Checkered;
      break;
    case 5: // crazy belt
      name = `${title} Crazy belt`;
      beltType = BeltType.Crazy;
      break;
  }

  const belt: Belt = getBelt(
    undefined,
    name,
    beltType,
    0,
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
    hasPatch,
    getRandomHexColor(),
    getRandomHexColor(),
    hasProfessorPatch,
    getRandomHexColor(),
    getRandomHexColor(),
    getRandomHexColor(),
    0,
    StripePosition.Right,
    0,
    10
  );

  const beltProps: BeltProps = getBeltProps(
    belt,
    stripeCount,
    stripeStart,
    transitionCSS,
    refreshInterval,
    callback
  );

  beltProps.randomSettings = randomSettings;

  const beltPropsAry: BeltProps[] = [];
  beltPropsAry.push(beltProps);
  return beltPropsAry;
};

export const getBeltRDF = (
  belt: Belt,
  about: string | undefined = undefined
): BeltRDF => {
  if (about === undefined) about = RDFAbout;
  const beltRDF: BeltRDF = {
    title: belt.name,
    about: about,
  };
  return beltRDF;
};

export const getBeltSolid = (
  id: number,
  name: string,
  color: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  hasProfessorPatch: boolean,
  professorPatchColor: string,
  professorBorderColor: string,
  stripeColor: string,
  stripeCount: number,
  stripeStart: StripePosition,
  minStripes: number,
  maxStripes: number,
  transitionCSS: string,
  refreshInterval: number,
  callback: Function | null = null
): BeltProps[] => {
  return getBeltPredefined(
    id,
    name,
    BeltType.Solid,
    color,
    "",
    "",
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripeStart,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

export const getBeltSplit = (
  id: number,
  name: string,
  color1: string,
  color2: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  hasProfessorPatch: boolean,
  professorPatchColor: string,
  professorBorderColor: string,
  stripeColor: string,
  stripeCount: number,
  stripeStart: StripePosition,
  minStripes: number,
  maxStripes: number,
  transitionCSS: string,
  refreshInterval: number,
  callback: Function | null = null
): BeltProps[] => {
  return getBeltPredefined(
    id,
    name,
    BeltType.Split,
    color1,
    color2,
    "",
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripeStart,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

export const getBeltStriped = (
  id: number,
  name: string,
  color1: string,
  color2: string,
  color3: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  hasProfessorPatch: boolean,
  professorPatchColor: string,
  professorBorderColor: string,
  stripeColor: string,
  stripeCount: number,
  stripeStart: StripePosition,
  minStripes: number,
  maxStripes: number,
  transitionCSS: string,
  refreshInterval: number,
  callback: Function | null = null
): BeltProps[] => {
  return getBeltPredefined(
    id,
    name,
    BeltType.Striped,
    color1,
    color2,
    color3,
    borderColor,
    hasPatch,
    patchColor,
    patchBorderColor,
    hasProfessorPatch,
    professorPatchColor,
    professorBorderColor,
    stripeColor,
    stripeCount,
    stripeStart,
    minStripes,
    maxStripes,
    transitionCSS,
    refreshInterval,
    callback
  );
};

export const isValidHexCode = (str: string): boolean => {
  // Regex to check valid
  // hexadecimalColor_code
  const regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  // if str is empty return false
  if (str == null) {
    return false;
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) == true) {
    return true;
  } else {
    return false;
  }
};

export const mapBeltColor = (color: string, colors: BeltColor[]): string => {
  // 1. if color is valid hex code, return it
  // 2. else if color in colors, return hex code
  // 3. else return color
  let rval = color;

  if (!isValidHexCode(color)) {
    const beltColor = colors.find(
      (c) => c.name.toUpperCase() === color.toUpperCase()
    );
    if (beltColor) {
      rval = beltColor.hex;
    }
  }

  return rval;
};

export const mapBeltColors = (belts: Belt[], colors: BeltColor[]) => {
  belts.forEach((belt) => {
    belt.color1 = mapBeltColor(belt.color1, colors);
    belt.color2 = mapBeltColor(belt.color2, colors);
    belt.color3 = mapBeltColor(belt.color3, colors);
    belt.borderColor = mapBeltColor(belt.borderColor, colors);
    belt.patchColor = mapBeltColor(belt.patchColor, colors);
    belt.patchBorderColor = mapBeltColor(belt.patchBorderColor, colors);
    belt.professorPatchColor = mapBeltColor(belt.professorPatchColor, colors);
    belt.professorBorderColor = mapBeltColor(belt.professorBorderColor, colors);
    belt.stripeColor = mapBeltColor(belt.stripeColor, colors);
  });
};

/**
 *  _                 _   ___             _   _
 * | |   ___  __ __ _| | | __|  _ _ _  __| |_(_)___ _ _  ___
 * | |__/ _ \/ _/ _` | | | _| || | ' \/ _|  _| / _ \ ' \(_-<
 * |____\___/\__\__,_|_| |_| \_,_|_||_\__|\__|_\___/_||_/__/
 */

const generateUniqueId = (): string => {
  return `${UniqueIDPrefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
};

const getBeltColorCount = (bType: BeltType): number | undefined => {
  let colorCount: number | undefined = undefined;
  switch (bType) {
    case BeltType.Solid:
      colorCount = 1;
      break;
    case BeltType.Coral:
    case BeltType.Split:
    case BeltType.Checkered:
      colorCount = 2;
      break;
    case BeltType.Striped:
      colorCount = 3;
      break;
    case BeltType.Crazy:
      colorCount = 3;
      break;
  }

  return colorCount;
};

const getRandomBeltIndex = (bType: BeltType): number => {
  let index: number = -1;

  switch (bType) {
    case "Solid":
      index = 0;
      break;
    case "Striped":
      index = 1;
      break;
    case "Coral":
      index = 2;
      break;
    case "Split":
      index = 3;
      break;
    case "Checkered":
      index = 4;
      break;
    case "Crazy":
      index = 5;
      break;
  }
  return index;
};

const getRandomHexColor = (): string => {
  return `#${[...Array(6)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("")}`;
};

const getRandomSettings = (
  hasPatch: boolean | undefined = undefined,
  hasProfessorPatch: boolean | undefined = undefined,
  stripeCount: number | undefined = undefined,
  stripeStart: StripePosition | undefined = undefined,
  includeBelts: Array<BeltType> | undefined = undefined
): RandomSettings => {
  const randomSettings: RandomSettings = {
    hasPatch: hasPatch,
    hasProfessorPatch: hasProfessorPatch,
    stripeCount: stripeCount,
    stripeStart: stripeStart,
    includeBelts: includeBelts,
  };

  return randomSettings;
};

const logMessage = (
  ltype: LogType,
  beltName: string,
  beltId: number,
  message: string
) => {
  const myName: string = beltName ? beltName : "Not Specified";
  const msg: string = `CustomBelt ${ltype}: {'beltName': '${myName}', 'id': ${beltId}, 'message': '${message}'}`;

  console.log(msg);
};

const setBeltCheckered = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1 = belt.color1;
  beltProps.s1l2a = belt.color2;
  beltProps.s1l2b = belt.color2;
  beltProps.s1l3 = belt.color1;
  beltProps.s2l1 = belt.color2;
  beltProps.s2l2a = belt.color1;
  beltProps.s2l2b = belt.color1;
  beltProps.s2l3 = belt.color2;
  beltProps.s3l1 = belt.color1;
  beltProps.s3l2a = belt.color2;
  beltProps.s3l2b = belt.color2;
  beltProps.s3l3 = belt.color1;
  beltProps.s4l1 = belt.color2;
  beltProps.s4l2a = belt.color1;
  beltProps.s4l2b = belt.color1;
  beltProps.s4l3 = belt.color2;
  beltProps.s5l1 = belt.color2;
  beltProps.s5l2a = belt.color1;
  beltProps.s5l2b = belt.color1;
  beltProps.s5l3 = belt.color2;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2a = belt.color2;
  beltProps.s6l2b = belt.color2;
  beltProps.s6l3 = belt.color1;
  beltProps.s7l1 = belt.color1;
  beltProps.s7l2a = belt.color2;
  beltProps.s7l2b = belt.color2;
  beltProps.s7l3 = belt.color1;
  beltProps.s8l1 = belt.color1;
  beltProps.s8l2a = belt.color2;
  beltProps.s8l2b = belt.color2;
  beltProps.s8l3 = belt.color1;
  beltProps.s9l1 = belt.color2;
  beltProps.s9l2a = belt.color1;
  beltProps.s9l2b = belt.color1;
  beltProps.s9l3 = belt.color2;
  beltProps.s10l1 = belt.color2;
  beltProps.s10l2a = belt.color1;
  beltProps.s10l2b = belt.color1;
  beltProps.s10l3 = belt.color2;
  beltProps.s11l1 = belt.color1;
  beltProps.s11l2a = belt.color2;
  beltProps.s11l2b = belt.color2;
  beltProps.s11l3 = belt.color1;
  beltProps.s12l1 = belt.color2;
  beltProps.s12l2a = belt.color1;
  beltProps.s12l2b = belt.color1;
  beltProps.s12l3 = belt.color2;
  beltProps.s13l1 = belt.color1;
  beltProps.s13l2a = belt.color2;
  beltProps.s13l2b = belt.color2;
  beltProps.s13l3 = belt.color1;
};

const setBeltCoral = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1 = belt.color2;
  beltProps.s1l2a = belt.color2;
  beltProps.s1l2b = belt.color2;
  beltProps.s1l3 = belt.color2;
  beltProps.s2l1 = belt.color1;
  beltProps.s2l2a = belt.color1;
  beltProps.s2l2b = belt.color1;
  beltProps.s2l3 = belt.color1;
  beltProps.s3l1 = belt.color1;
  beltProps.s3l2a = belt.color1;
  beltProps.s3l2b = belt.color1;
  beltProps.s3l3 = belt.color1;
  beltProps.s4l1 = belt.color2;
  beltProps.s4l2a = belt.color2;
  beltProps.s4l2b = belt.color2;
  beltProps.s4l3 = belt.color2;
  beltProps.s5l1 = belt.color2;
  beltProps.s5l2a = belt.color2;
  beltProps.s5l2b = belt.color2;
  beltProps.s5l3 = belt.color2;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2a = belt.color1;
  beltProps.s6l2b = belt.color1;
  beltProps.s6l3 = belt.color1;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2a = belt.color1;
  beltProps.s6l2b = belt.color1;
  beltProps.s6l3 = belt.color1;
  beltProps.s7l1 = belt.color1;
  beltProps.s7l2a = belt.color1;
  beltProps.s7l2b = belt.color1;
  beltProps.s7l3 = belt.color1;
  beltProps.s8l1 = belt.color1;
  beltProps.s8l2a = belt.color1;
  beltProps.s8l2b = belt.color1;
  beltProps.s8l3 = belt.color1;
  beltProps.s9l1 = belt.color2;
  beltProps.s9l2a = belt.color2;
  beltProps.s9l2b = belt.color2;
  beltProps.s9l3 = belt.color2;
  beltProps.s10l1 = belt.color2;
  beltProps.s10l2a = belt.color2;
  beltProps.s10l2b = belt.color2;
  beltProps.s10l3 = belt.color2;
  beltProps.s11l1 = belt.color1;
  beltProps.s11l2a = belt.color1;
  beltProps.s11l2b = belt.color1;
  beltProps.s11l3 = belt.color1;
  beltProps.s12l1 = belt.color2;
  beltProps.s12l2a = belt.color2;
  beltProps.s12l2b = belt.color2;
  beltProps.s12l3 = belt.color2;
  beltProps.s13l1 = belt.color1;
  beltProps.s13l2a = belt.color1;
  beltProps.s13l2b = belt.color1;
  beltProps.s13l3 = belt.color1;
};

const setBeltCrazy = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1 = getRandomHexColor();
  beltProps.s1l2a = getRandomHexColor();
  beltProps.s1l2b = getRandomHexColor();
  beltProps.s1l3 = getRandomHexColor();
  beltProps.s2l1 = getRandomHexColor();
  beltProps.s2l2a = getRandomHexColor();
  beltProps.s2l2b = getRandomHexColor();
  beltProps.s2l3 = getRandomHexColor();
  beltProps.s3l1 = getRandomHexColor();
  beltProps.s3l2a = getRandomHexColor();
  beltProps.s3l2b = getRandomHexColor();
  beltProps.s3l3 = getRandomHexColor();
  beltProps.s4l1 = getRandomHexColor();
  beltProps.s4l2a = getRandomHexColor();
  beltProps.s4l2b = getRandomHexColor();
  beltProps.s4l3 = getRandomHexColor();
  beltProps.s5l1 = getRandomHexColor();
  beltProps.s5l2a = getRandomHexColor();
  beltProps.s5l2b = getRandomHexColor();
  beltProps.s5l3 = getRandomHexColor();
  beltProps.s6l1 = getRandomHexColor();
  beltProps.s6l2a = getRandomHexColor();
  beltProps.s6l2b = getRandomHexColor();
  beltProps.s6l3 = getRandomHexColor();
  beltProps.s6l1 = getRandomHexColor();
  beltProps.s6l2a = getRandomHexColor();
  beltProps.s6l2b = getRandomHexColor();
  beltProps.s6l3 = getRandomHexColor();
  beltProps.s7l1 = getRandomHexColor();
  beltProps.s7l2a = getRandomHexColor();
  beltProps.s7l2b = getRandomHexColor();
  beltProps.s7l3 = getRandomHexColor();
  beltProps.s8l1 = getRandomHexColor();
  beltProps.s8l2a = getRandomHexColor();
  beltProps.s8l2b = getRandomHexColor();
  beltProps.s8l3 = getRandomHexColor();
  beltProps.s9l1 = getRandomHexColor();
  beltProps.s9l2a = getRandomHexColor();
  beltProps.s9l2b = getRandomHexColor();
  beltProps.s9l3 = getRandomHexColor();
  beltProps.s10l1 = getRandomHexColor();
  beltProps.s10l2a = getRandomHexColor();
  beltProps.s10l2b = getRandomHexColor();
  beltProps.s10l3 = getRandomHexColor();
  beltProps.s11l1 = getRandomHexColor();
  beltProps.s11l2a = getRandomHexColor();
  beltProps.s11l2b = getRandomHexColor();
  beltProps.s11l3 = getRandomHexColor();
  beltProps.s12l1 = getRandomHexColor();
  beltProps.s12l2a = getRandomHexColor();
  beltProps.s12l2b = getRandomHexColor();
  beltProps.s12l3 = getRandomHexColor();
  beltProps.s13l1 = getRandomHexColor();
  beltProps.s13l2a = getRandomHexColor();
  beltProps.s13l2b = getRandomHexColor();
  beltProps.s13l3 = getRandomHexColor();
};

const setBeltSolid = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1 = belt.color1;
  beltProps.s1l2a = belt.color1;
  beltProps.s1l2b = belt.color1;
  beltProps.s1l3 = belt.color1;
  beltProps.s2l1 = belt.color1;
  beltProps.s2l2a = belt.color1;
  beltProps.s2l2b = belt.color1;
  beltProps.s2l3 = belt.color1;
  beltProps.s3l1 = belt.color1;
  beltProps.s3l2a = belt.color1;
  beltProps.s3l2b = belt.color1;
  beltProps.s3l3 = belt.color1;
  beltProps.s4l1 = belt.color1;
  beltProps.s4l2a = belt.color1;
  beltProps.s4l2b = belt.color1;
  beltProps.s4l3 = belt.color1;
  beltProps.s5l1 = belt.color1;
  beltProps.s5l2a = belt.color1;
  beltProps.s5l2b = belt.color1;
  beltProps.s5l3 = belt.color1;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2a = belt.color1;
  beltProps.s6l2b = belt.color1;
  beltProps.s6l3 = belt.color1;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2a = belt.color1;
  beltProps.s6l2b = belt.color1;
  beltProps.s6l3 = belt.color1;
  beltProps.s7l1 = belt.color1;
  beltProps.s7l2a = belt.color1;
  beltProps.s7l2b = belt.color1;
  beltProps.s7l3 = belt.color1;
  beltProps.s8l1 = belt.color1;
  beltProps.s8l2a = belt.color1;
  beltProps.s8l2b = belt.color1;
  beltProps.s8l3 = belt.color1;
  beltProps.s9l1 = belt.color1;
  beltProps.s9l2a = belt.color1;
  beltProps.s9l2b = belt.color1;
  beltProps.s9l3 = belt.color1;
  beltProps.s10l1 = belt.color1;
  beltProps.s10l2a = belt.color1;
  beltProps.s10l2b = belt.color1;
  beltProps.s10l3 = belt.color1;
  beltProps.s11l1 = belt.color1;
  beltProps.s11l2a = belt.color1;
  beltProps.s11l2b = belt.color1;
  beltProps.s11l3 = belt.color1;
  beltProps.s12l1 = belt.color1;
  beltProps.s12l2a = belt.color1;
  beltProps.s12l2b = belt.color1;
  beltProps.s12l3 = belt.color1;
  beltProps.s13l1 = belt.color1;
  beltProps.s13l2a = belt.color1;
  beltProps.s13l2b = belt.color1;
  beltProps.s13l3 = belt.color1;
};

const setBeltSplit = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1 = belt.color1;
  beltProps.s1l2a = belt.color1;
  beltProps.s1l2b = belt.color2;
  beltProps.s1l3 = belt.color2;
  beltProps.s2l1 = belt.color1;
  beltProps.s2l2a = belt.color1;
  beltProps.s2l2b = belt.color2;
  beltProps.s2l3 = belt.color2;
  beltProps.s3l1 = belt.color1;
  beltProps.s3l2a = belt.color1;
  beltProps.s3l2b = belt.color2;
  beltProps.s3l3 = belt.color2;
  beltProps.s4l1 = belt.color1;
  beltProps.s4l2a = belt.color1;
  beltProps.s4l2b = belt.color2;
  beltProps.s4l3 = belt.color2;
  beltProps.s5l1 = belt.color1;
  beltProps.s5l2b = belt.color1;
  beltProps.s5l2a = belt.color2;
  beltProps.s5l3 = belt.color2;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2b = belt.color1;
  beltProps.s6l2a = belt.color2;
  beltProps.s6l3 = belt.color2;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2b = belt.color1;
  beltProps.s6l2a = belt.color2;
  beltProps.s6l3 = belt.color2;
  beltProps.s7l1 = belt.color1;
  beltProps.s7l2a = belt.color1;
  beltProps.s7l2b = belt.color2;
  beltProps.s7l3 = belt.color2;
  beltProps.s8l1 = belt.color1;
  beltProps.s8l2a = belt.color1;
  beltProps.s8l2b = belt.color2;
  beltProps.s8l3 = belt.color2;
  beltProps.s9l1 = belt.color1;
  beltProps.s9l2a = belt.color1;
  beltProps.s9l2b = belt.color2;
  beltProps.s9l3 = belt.color2;
  beltProps.s10l1 = belt.color1;
  beltProps.s10l2a = belt.color1;
  beltProps.s10l2b = belt.color2;
  beltProps.s10l3 = belt.color2;
  beltProps.s11l1 = belt.color1;
  beltProps.s11l2a = belt.color1;
  beltProps.s11l2b = belt.color2;
  beltProps.s11l3 = belt.color2;
  beltProps.s12l1 = belt.color1;
  beltProps.s12l2a = belt.color1;
  beltProps.s12l2b = belt.color2;
  beltProps.s12l3 = belt.color2;
  beltProps.s13l1 = belt.color1;
  beltProps.s13l2a = belt.color1;
  beltProps.s13l2b = belt.color2;
  beltProps.s13l3 = belt.color2;
};

const setBeltStriped = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1 = belt.color1;
  beltProps.s1l2a = belt.color2;
  beltProps.s1l2b = belt.color2;
  beltProps.s1l3 = belt.color3;
  beltProps.s2l1 = belt.color1;
  beltProps.s2l2a = belt.color2;
  beltProps.s2l2b = belt.color2;
  beltProps.s2l3 = belt.color3;
  beltProps.s3l1 = belt.color1;
  beltProps.s3l2a = belt.color2;
  beltProps.s3l2b = belt.color2;
  beltProps.s3l3 = belt.color3;
  beltProps.s4l1 = belt.color1;
  beltProps.s4l2a = belt.color2;
  beltProps.s4l2b = belt.color2;
  beltProps.s4l3 = belt.color3;
  beltProps.s5l1 = belt.color1;
  beltProps.s5l2a = belt.color2;
  beltProps.s5l2b = belt.color2;
  beltProps.s5l3 = belt.color3;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2a = belt.color2;
  beltProps.s6l2b = belt.color2;
  beltProps.s6l3 = belt.color3;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2a = belt.color2;
  beltProps.s6l2b = belt.color2;
  beltProps.s6l3 = belt.color3;
  beltProps.s7l1 = belt.color1;
  beltProps.s7l2a = belt.color2;
  beltProps.s7l2b = belt.color2;
  beltProps.s7l3 = belt.color3;
  beltProps.s8l1 = belt.color1;
  beltProps.s8l2a = belt.color2;
  beltProps.s8l2b = belt.color2;
  beltProps.s8l3 = belt.color3;
  beltProps.s9l1 = belt.color1;
  beltProps.s9l2a = belt.color2;
  beltProps.s9l2b = belt.color2;
  beltProps.s9l3 = belt.color3;
  beltProps.s10l1 = belt.color1;
  beltProps.s10l2a = belt.color2;
  beltProps.s10l2b = belt.color2;
  beltProps.s10l3 = belt.color3;
  beltProps.s11l1 = belt.color1;
  beltProps.s11l2a = belt.color2;
  beltProps.s11l2b = belt.color2;
  beltProps.s11l3 = belt.color3;
  beltProps.s12l1 = belt.color1;
  beltProps.s12l2a = belt.color2;
  beltProps.s12l2b = belt.color2;
  beltProps.s12l3 = belt.color3;
  beltProps.s13l1 = belt.color1;
  beltProps.s13l2a = belt.color2;
  beltProps.s13l2b = belt.color2;
  beltProps.s13l3 = belt.color3;
};

const setPatchProperties = (
  beltProps: BeltProps,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number,
  stripePosition: StripePosition | undefined
) => {
  beltProps.hasPatch = hasPatch;
  beltProps.patch = patchColor;
  beltProps.patchBorder = patchBorderColor;
  beltProps.professorPatch = professorPatchColor;
  beltProps.professorBorder = professorBorderColor;
  beltProps.hasProfessorPatch = hasProfessorPatch;
  beltProps.stripeCount = stripeCount;
  beltProps.stripePosition =
    stripePosition != undefined ? stripePosition : StripePositionDefault;
  beltProps.stripe1 = stripeColor;
  beltProps.stripe2 = stripeColor;
  beltProps.stripe3 = stripeColor;
  beltProps.stripe4 = stripeColor;
  beltProps.stripe5 = stripeColor;
  beltProps.stripe6 = stripeColor;
  beltProps.stripe7 = stripeColor;
  beltProps.stripe8 = stripeColor;
  beltProps.stripe9 = stripeColor;
  beltProps.stripe10 = stripeColor;
};

/**
 * __   __    _ _    _      _             ___             _   _
 * \ \ / /_ _| (_)__| |__ _| |_ ___ _ _  | __|  _ _ _  __| |_(_)___ _ _  ___
 *  \ V / _` | | / _` / _` |  _/ _ \ '_| | _| || | ' \/ _|  _| / _ \ ' \(_-<
 *   \_/\__,_|_|_\__,_\__,_|\__\___/_|   |_| \_,_|_||_\__|\__|_\___/_||_/__/
 */

/**
 * Validate parameters received for Belt object
 * @param {Belt} belt belt object to validate
 */
const validateBelt = (belt: Belt) => {
  validateBelt_Colors(belt);
  validateBelt_StripeCount(belt);
};

/**
 * Validate color parameters for  Belt object
 * @param {Belt} belt belt object to validate
 */
const validateBelt_Colors = (belt: Belt) => {
  let msg;
  const colorCount: number | undefined = getBeltColorCount(belt.type);

  if (colorCount === undefined) {
    msg = `unknown color count`;
    logMessage(LogType.Error, belt.name, belt.id, msg);
  } else {
    if (colorCount >= 1) {
      if (!belt.color1) {
        msg = `color1 is required setting to (${DefaultColor})`;
        logMessage(LogType.Error, belt.name, belt.id, msg);
        belt.color1 = DefaultColor;
      } else if (!isValidHexCode(belt.color1)) {
        msg = `invalid color1 (${belt.color1}) setting to (${DefaultColor})`;
        logMessage(LogType.Warning, belt.name, belt.id, msg);
        belt.color1 = DefaultColor;
      }
    }
    if (colorCount >= 2) {
      if (!belt.color2) {
        msg = `color2 is required setting to (${DefaultColor})`;
        logMessage(LogType.Error, belt.name, belt.id, msg);
        belt.color2 = DefaultColor;
      } else if (!isValidHexCode(belt.color2)) {
        msg = `invalid color2 (${belt.color2}) setting to (${DefaultColor})`;
        logMessage(LogType.Warning, belt.name, belt.id, msg);
        belt.color2 = DefaultColor;
      }
    }
    if (colorCount >= 3) {
      if (!belt.color3) {
        msg = `color3 is required setting to (${DefaultColor})`;
        logMessage(LogType.Error, belt.name, belt.id, msg);
        belt.color3 = DefaultColor;
      } else if (!isValidHexCode(belt.color3)) {
        msg = `invalid color2 (${belt.color3}) setting to (${DefaultColor})`;
        logMessage(LogType.Warning, belt.name, belt.id, msg);
        belt.color3 = DefaultColor;
      }
    }
  }
};

/**
 * Validate minStripes and maxStripes parameters received for Belt object
 * @param {Belt} belt belt object to validate
 */
const validateBelt_StripeCount = (belt: Belt) => {
  let msg;
  if (belt.minStripes < MinimumStripeCount) {
    msg = `invalid minStripes (${belt.minStripes}) setting to (${MinimumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.minStripes = MinimumStripeCount;
  } else if (belt.minStripes > MaximumStripeCount) {
    msg = `invalid minStripes (${belt.minStripes}) setting to (${MinimumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.minStripes = MinimumStripeCount;
  }

  if (belt.maxStripes > MaximumStripeCount) {
    msg = `invalid maxStripes (${belt.maxStripes}) setting to (${MaximumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.maxStripes = MaximumStripeCount;
  } else if (belt.maxStripes < MinimumStripeCount) {
    msg = `invalid maxStripes (${belt.maxStripes}) setting to (${MaximumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.maxStripes = MaximumStripeCount;
  }

  if (belt.minStripes > belt.maxStripes) {
    msg = `minStripes (${belt.minStripes}) must be <= maxStripes (${belt.maxStripes}) setting minStripes to (${MinimumStripeCount})`;
    logMessage(LogType.Warning, belt.name, belt.id, msg);
    belt.minStripes = MinimumStripeCount;
  }
};
