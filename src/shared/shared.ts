import type {
  BeltProps,
  BeltTypes,
  Belt,
  BeltColor,
  StripePositions,
} from "../types/BeltProps";

//function isValidHexCode(str: string): boolean {
export const isValidHexCode = (str: string): boolean => {
  // Regex to check valid
  // hexadecimalColor_code
  const regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  // if str
  // is empty return false
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

export const mapColor = (color: string, colors: BeltColor[]): string => {
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

export const mapColors = (belts: Belt[], colors: BeltColor[]) => {
  belts.forEach((belt) => {
    belt.color1 = mapColor(belt.color1, colors);
    belt.color2 = mapColor(belt.color2, colors);
    belt.color3 = mapColor(belt.color3, colors);
    belt.borderColor = mapColor(belt.borderColor, colors);
    belt.patchColor = mapColor(belt.patchColor, colors);
    belt.patchBorderColor = mapColor(belt.patchBorderColor, colors);
    belt.professorPatchColor = mapColor(belt.professorPatchColor, colors);
    belt.professorBorderColor = mapColor(belt.professorBorderColor, colors);
    belt.stripeColor = mapColor(belt.stripeColor, colors);
  });
};

export const getBeltProps = (
  title: string = "",
  description: string = "",
  belt: Belt | undefined,
  stripeCount: number,
  stripePosition: StripePositions | undefined,
  transitionCSS: string,
  refreshInterval: number
): BeltProps => {
  const beltProps: BeltProps = {
    border: "",
    hasPatch: true,
    patch: "",
    patchBorder: "",
    professorPatch: "",
    professorBorder: "",
    hasProfessorPatch: false,
    stripeCount: 0,
    stripePosition: "Right",
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
    rdfTitle: title,
    rdfDescription: description,
    randomBeltTypes: Array<BeltTypes>(),
    refreshInterval: 0,
  };

  beltProps.transitionCSS = transitionCSS;
  beltProps.refreshInterval = refreshInterval;
  beltProps.stripeCount = stripeCount;
  if (stripePosition != undefined) beltProps.stripePosition = stripePosition;
  else if (belt != undefined) beltProps.stripePosition = belt.stripePosition;

  if (belt) {
    switch (belt.type) {
      case "Solid":
        setSolidBelt(belt, beltProps);
        break;
      case "Striped":
        setStripedBelt(belt, beltProps);
        break;
      case "Coral":
        setCoralBelt(belt, beltProps);
        break;
      case "Split":
        setSplitBelt(belt, beltProps);
        break;
      case "Checkered":
        setCheckeredBelt(belt, beltProps);
        break;
      case "Crazy":
        setCrazyBelt(belt, beltProps);
        break;
    }
    beltProps.border = belt.borderColor;
    //beltProps.patchBorder = belt.patchBorderColor;
    //beltProps.professorBorder = belt.professorBorderColor;

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
  stripePosition: StripePositions | undefined
) => {
  beltProps.hasPatch = hasPatch;
  beltProps.patch = patchColor;
  beltProps.patchBorder = patchBorderColor;
  beltProps.professorPatch = professorPatchColor;
  beltProps.professorBorder = professorBorderColor;
  beltProps.hasProfessorPatch = hasProfessorPatch;
  beltProps.stripeCount = stripeCount;
  beltProps.stripePosition =
    stripePosition != undefined ? stripePosition : "Right";
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

export const getDescription = (
  beltName: string,
  stripeCount: number | undefined
): string => {
  if (stripeCount === undefined || stripeCount === 0) {
    return `${beltName} with no stripes`;
  } else if (stripeCount === 1) {
    return `${beltName} with 1 stripe`;
  }

  return `${beltName} with ${stripeCount} stripes`;
};

const getRandomHexColor = (): string => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const getRandomBeltIndex = (bType: BeltTypes): number => {
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

export const getRandomBelt = (
  hasPatch: boolean | undefined,
  hasProfessorPatch: boolean | undefined,
  stripeCount: number | undefined,
  stripeStart: StripePositions | undefined,
  transitionCSS: string = "",
  includeBelts: Array<BeltTypes> = [],
  refreshInterval: number = 0
): BeltProps[] => {
  let randomBeltTypeIndex;
  const title = "Random";

  if (hasPatch === undefined) hasPatch = Math.random() < 0.5; // randomly pick true or false
  if (hasProfessorPatch === undefined) hasProfessorPatch = Math.random() < 0.5; // randomly pick true or false
  if (stripeCount === undefined) stripeCount = Math.floor(Math.random() * 11); // randomly pick between 0-10 stripes
  if (stripeStart === undefined)
    Math.random() < 0.5 === true
      ? (stripeStart = "Left")
      : (stripeStart = "Right"); // randomly pick Left or Right
  if (includeBelts !== undefined && includeBelts.length > 0) {
    if (includeBelts.length === 1) {
      // if only one includeBelt items is specified, then use that belt type
      randomBeltTypeIndex = getRandomBeltIndex(includeBelts[0]);
    } else {
      // build array of includeBelt types and selct random one
      const ary: Array<BeltTypes> = [];
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

  const belt: Belt = getBelt();
  belt.sortOrder = 0;
  belt.color1 = getRandomHexColor();
  belt.color2 = getRandomHexColor();
  belt.color3 = getRandomHexColor();
  belt.borderColor =
    belt.patchBorderColor =
    belt.professorBorderColor =
      getRandomHexColor();
  belt.hasPatch = hasPatch;
  belt.patchColor = getRandomHexColor();
  belt.hasProfessorPatch = hasProfessorPatch;
  belt.professorPatchColor = getRandomHexColor();
  belt.stripeColor = getRandomHexColor();

  let rdfTitle = "";
  let rdfDescription = "";
  switch (randomBeltTypeIndex) {
    case 0: // solid belt
      rdfTitle = `${title} Solid belt`;
      rdfDescription = getDescription(rdfTitle, stripeCount);
      belt.type = "Solid";
      break;
    case 1: // striped belt
      rdfTitle = `${title} Striped belt`;
      rdfDescription = getDescription(rdfTitle, stripeCount);
      belt.type = "Striped";
      break;
    case 2: // coral belt
      rdfTitle = `${title} Coral belt`;
      rdfDescription = getDescription(rdfTitle, stripeCount);
      belt.type = "Coral";
      break;
    case 3: // split belt
      rdfTitle = `${title} Split belt`;
      rdfDescription = getDescription(rdfTitle, stripeCount);
      belt.type = "Split";
      break;
    case 4: // checkered belt
      rdfTitle = `${title} Checkered belt`;
      rdfDescription = getDescription(rdfTitle, stripeCount);
      belt.type = "Checkered";
      break;
    case 5: // crazy belt
      rdfTitle = `${title} Crazy belt`;
      rdfDescription = getDescription(rdfTitle, stripeCount);
      belt.type = "Crazy";
      break;
  }

  const beltProps: BeltProps = getBeltProps(
    rdfTitle,
    rdfDescription,
    belt,
    stripeCount,
    stripeStart,
    transitionCSS,
    refreshInterval
  );

  beltProps.randomBeltTypes = includeBelts;

  const beltPropsAry: BeltProps[] = [];
  beltPropsAry.push(beltProps);
  return beltPropsAry;
};

export const getPredefinedBelt = (
  id: number,
  name: string,
  beltType: BeltTypes,
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
  stripePosition: StripePositions,
  minStripes: number,
  maxStripes: number,
  title: string,
  description: string,
  transitionCSS: string,
  refreshInterval: number
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
    title,
    description,
    belt,
    stripeCount,
    stripePosition,
    transitionCSS,
    refreshInterval
  );

  const beltPropAry: BeltProps[] = [];
  beltPropAry.push(beltProps);

  return beltPropAry;
};

export const getSolidBelt = (
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
  stripeStart: StripePositions,
  minStripes: number,
  maxStripes: number,
  title: string,
  description: string,
  transitionCSS: string,
  refreshInterval: number
): BeltProps[] => {
  return getPredefinedBelt(
    id,
    name,
    "Solid",
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
    title,
    description,
    transitionCSS,
    refreshInterval
  );
};

export const getStripedBelt = (
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
  stripeStart: StripePositions,
  minStripes: number,
  maxStripes: number,
  title: string,
  description: string,
  transitionCSS: string,
  refreshInterval: number
): BeltProps[] => {
  return getPredefinedBelt(
    id,
    name,
    "Striped",
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
    title,
    description,
    transitionCSS,
    refreshInterval
  );
};

export const getCoralBelt = (
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
  stripeStart: StripePositions,
  minStripes: number,
  maxStripes: number,
  title: string,
  description: string,
  transitionCSS: string,
  refreshInterval: number
): BeltProps[] => {
  return getPredefinedBelt(
    id,
    name,
    "Coral",
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
    title,
    description,
    transitionCSS,
    refreshInterval
  );
};

export const getSplitBelt = (
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
  stripeStart: StripePositions,
  minStripes: number,
  maxStripes: number,
  title: string,
  description: string,
  transitionCSS: string,
  refreshInterval: number
): BeltProps[] => {
  return getPredefinedBelt(
    id,
    name,
    "Split",
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
    title,
    description,
    transitionCSS,
    refreshInterval
  );
};

export const getCheckeredBelt = (
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
  stripePosition: StripePositions,
  minStripes: number,
  maxStripes: number,
  title: string,
  description: string,
  transitionCSS: string,
  refreshInterval: number
): BeltProps[] => {
  return getPredefinedBelt(
    id,
    name,
    "Checkered",
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
    title,
    description,
    transitionCSS,
    refreshInterval
  );
};

const setSolidBelt = (belt: Belt, beltProps: BeltProps) => {
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

const setStripedBelt = (belt: Belt, beltProps: BeltProps) => {
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

const setCoralBelt = (belt: Belt, beltProps: BeltProps) => {
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

const setCheckeredBelt = (belt: Belt, beltProps: BeltProps) => {
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

const setSplitBelt = (belt: Belt, beltProps: BeltProps) => {
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

const setCrazyBelt = (belt: Belt, beltProps: BeltProps) => {
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

export const getBelt = (
  id: number = 0,
  name: string = "",
  type: BeltTypes = "Solid",
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
  stripePosition: StripePositions = "Right",
  minStripes: number = 0,
  maxStripes: number = 4
): Belt => {
  const belt: Belt = {
    id: id ? id : 0,
    name: name ? name : "",
    type: type ? type : "Solid",
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
    stripePosition: stripePosition ? stripePosition : "Right",
    minStripes: minStripes ? minStripes : 0,
    maxStripes: maxStripes ? maxStripes : 4,
  };

  return belt;
};
