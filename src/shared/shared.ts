import type { BeltProps, BeltType, Belt, BeltColor } from "../types/BeltProps";

function isValidHexaCode(str: string): boolean {
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
}

const mapColor = (color: string, colors: BeltColor[]): string => {
  // 1. if color is valid hex code, return it
  // 2. else if color in colors, return hex code
  // 3. else return color
  let rval = color;

  if (!isValidHexaCode(color)) {
    const beltColor = colors.find((c) => c.name === color);
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
  description: string = ""
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
    stripeStart: "Right",
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
    randomBeltTypes: Array<BeltType>(),
    refreshInterval: 0,
  };
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
  stripeCount: number
) => {
  beltProps.hasPatch = hasPatch;
  beltProps.patch = patchColor;
  beltProps.patchBorder = patchBorderColor;
  beltProps.professorPatch = professorPatchColor;
  beltProps.professorBorder = professorBorderColor;
  beltProps.hasProfessorPatch = hasProfessorPatch;
  beltProps.stripeCount = stripeCount;

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

export const copyBeltProps = (oldProps: BeltProps, newProps: BeltProps) => {
  oldProps = Object.assign(oldProps, newProps);
};

const getRandomBeltIndex = (beltType: BeltType): number => {
  let index: number = -1;

  switch (beltType) {
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
    case "Random":
      index = 6;
      break;
  }
  return index;
};

export const getRandomBelt = (
  hasPatch: boolean | undefined,
  hasProfessorPatch: boolean | undefined,
  stripeCount: number | undefined,
  transitionCSS: string | undefined,
  includeBelts: Array<BeltType> | undefined,
  refreshInterval: number | undefined
): BeltProps => {
  let rand;
  let randomBeltTypeIndex;
  let title = "Random";
  const myTransitionCSS = transitionCSS === undefined ? "" : transitionCSS;
  const myIncludeBelts = includeBelts === undefined ? [] : includeBelts;
  const myRefreshInterval = refreshInterval === undefined ? 0 : refreshInterval;
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
      rand = Math.floor(Math.random() * ary.length);
      randomBeltTypeIndex = getRandomBeltIndex(ary[rand]);
    }
  } else {
    // no includeBelt types specified, for select random from all
    randomBeltTypeIndex = Math.floor(Math.random() * 6);
  }

  let beltProps: BeltProps = getBeltProps();

  const border = getRandomHexColor();
  if (hasPatch === undefined) hasPatch = Math.random() < 0.5;
  const patchColor = getRandomHexColor();
  const patchBorder = border;
  const professorPatchColor = getRandomHexColor();
  const professorBorder = border;
  if (hasProfessorPatch === undefined) hasProfessorPatch = Math.random() < 0.5;
  const stripeColor = getRandomHexColor();
  if (stripeCount === undefined) stripeCount = Math.floor(Math.random() * 11);

  switch (randomBeltTypeIndex) {
    case 0: // solid belt
      title = `${title} Solid belt`;
      beltProps = getSolidBelt(
        getRandomHexColor(),
        border,
        hasPatch,
        patchColor,
        patchBorder,
        professorPatchColor,
        professorBorder,
        hasProfessorPatch,
        stripeColor,
        stripeCount,
        myTransitionCSS,
        title,
        getDescription(`${title}`, stripeCount),
        myIncludeBelts,
        myRefreshInterval
      );
      break;
    case 1: // striped belt
      title = `${title} Striped belt`;
      beltProps = getStripedBelt(
        getRandomHexColor(),
        getRandomHexColor(),
        border,
        hasPatch,
        patchColor,
        patchBorder,
        professorPatchColor,
        professorBorder,
        hasProfessorPatch,
        stripeColor,
        stripeCount,
        myTransitionCSS,
        title,
        getDescription(`${title}`, stripeCount),
        myIncludeBelts,
        myRefreshInterval
      );
      break;
    case 2: // coral belt
      title = `${title} Coral belt`;
      beltProps = getCoralBelt(
        getRandomHexColor(),
        getRandomHexColor(),
        border,
        hasPatch,
        patchColor,
        patchBorder,
        professorPatchColor,
        professorBorder,
        hasProfessorPatch,
        stripeColor,
        stripeCount,
        myTransitionCSS,
        title,
        getDescription(`${title}`, stripeCount),
        myIncludeBelts,
        myRefreshInterval
      );
      break;
    case 3: // split belt
      title = `${title} Split belt`;
      beltProps = getSplitBelt(
        getRandomHexColor(),
        getRandomHexColor(),
        border,
        hasPatch,
        patchColor,
        patchBorder,
        professorPatchColor,
        professorBorder,
        hasProfessorPatch,
        stripeColor,
        stripeCount,
        myTransitionCSS,
        title,
        getDescription(`${title}`, stripeCount),
        myIncludeBelts,
        myRefreshInterval
      );
      break;
    case 4: // checkered belt
      title = `${title} Checkered belt`;
      beltProps = getCheckeredBelt(
        getRandomHexColor(),
        getRandomHexColor(),
        border,
        hasPatch,
        patchColor,
        patchBorder,
        professorPatchColor,
        professorBorder,
        hasProfessorPatch,
        stripeColor,
        stripeCount,
        myTransitionCSS,
        title,
        getDescription(`${title}`, stripeCount),
        myIncludeBelts,
        myRefreshInterval
      );
      break;
    case 5: // crazy belt
      title = `${title} Crazy belt`;
      beltProps = getSolidBelt(
        getRandomHexColor(),
        border,
        hasPatch,
        patchColor,
        patchBorder,
        professorPatchColor,
        professorBorder,
        hasProfessorPatch,
        stripeColor,
        stripeCount,
        myTransitionCSS,
        title,
        getDescription(`${title}`, stripeCount),
        myIncludeBelts,
        myRefreshInterval
      );
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
      break;
  }

  return beltProps;
};

export const setSolidBelt = (belt: Belt, beltProps: BeltProps) => {
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

export const setStripedBelt = (belt: Belt, beltProps: BeltProps) => {
  beltProps.s1l1 = belt.color1;
  beltProps.s1l2a = belt.color2;
  beltProps.s1l2b = belt.color2;
  beltProps.s1l3 = belt.color1;
  beltProps.s2l1 = belt.color1;
  beltProps.s2l2a = belt.color2;
  beltProps.s2l2b = belt.color2;
  beltProps.s2l3 = belt.color1;
  beltProps.s3l1 = belt.color1;
  beltProps.s3l2a = belt.color2;
  beltProps.s3l2b = belt.color2;
  beltProps.s3l3 = belt.color1;
  beltProps.s4l1 = belt.color1;
  beltProps.s4l2a = belt.color2;
  beltProps.s4l2b = belt.color2;
  beltProps.s4l3 = belt.color1;
  beltProps.s5l1 = belt.color1;
  beltProps.s5l2a = belt.color2;
  beltProps.s5l2b = belt.color2;
  beltProps.s5l3 = belt.color1;
  beltProps.s6l1 = belt.color1;
  beltProps.s6l2a = belt.color2;
  beltProps.s6l2b = belt.color2;
  beltProps.s6l3 = belt.color1;
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
  beltProps.s9l1 = belt.color1;
  beltProps.s9l2a = belt.color2;
  beltProps.s9l2b = belt.color2;
  beltProps.s9l3 = belt.color1;
  beltProps.s10l1 = belt.color1;
  beltProps.s10l2a = belt.color2;
  beltProps.s10l2b = belt.color2;
  beltProps.s10l3 = belt.color1;
  beltProps.s11l1 = belt.color1;
  beltProps.s11l2a = belt.color2;
  beltProps.s11l2b = belt.color2;
  beltProps.s11l3 = belt.color1;
  beltProps.s12l1 = belt.color1;
  beltProps.s12l2a = belt.color2;
  beltProps.s12l2b = belt.color2;
  beltProps.s12l3 = belt.color1;
  beltProps.s13l1 = belt.color1;
  beltProps.s13l2a = belt.color2;
  beltProps.s13l2b = belt.color2;
  beltProps.s13l3 = belt.color1;
};

export const getSolidBelt = (
  beltColor: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number,
  transitionCSS: string,
  title: string = "",
  description: string = "",
  randomBeltTypes: Array<BeltType>,
  refreshInterval: number
): BeltProps => {
  const beltProps: BeltProps = getBeltProps(title, description);
  beltProps.transitionCSS = transitionCSS;
  beltProps.randomBeltTypes = randomBeltTypes;
  beltProps.refreshInterval = refreshInterval;

  beltProps.border = borderColor;

  beltProps.s1l1 = beltColor;
  beltProps.s1l2a = beltColor;
  beltProps.s1l2b = beltColor;
  beltProps.s1l3 = beltColor;
  beltProps.s2l1 = beltColor;
  beltProps.s2l2a = beltColor;
  beltProps.s2l2b = beltColor;
  beltProps.s2l3 = beltColor;
  beltProps.s3l1 = beltColor;
  beltProps.s3l2a = beltColor;
  beltProps.s3l2b = beltColor;
  beltProps.s3l3 = beltColor;
  beltProps.s4l1 = beltColor;
  beltProps.s4l2a = beltColor;
  beltProps.s4l2b = beltColor;
  beltProps.s4l3 = beltColor;
  beltProps.s5l1 = beltColor;
  beltProps.s5l2a = beltColor;
  beltProps.s5l2b = beltColor;
  beltProps.s5l3 = beltColor;
  beltProps.s6l1 = beltColor;
  beltProps.s6l2a = beltColor;
  beltProps.s6l2b = beltColor;
  beltProps.s6l3 = beltColor;
  beltProps.s6l1 = beltColor;
  beltProps.s6l2a = beltColor;
  beltProps.s6l2b = beltColor;
  beltProps.s6l3 = beltColor;
  beltProps.s7l1 = beltColor;
  beltProps.s7l2a = beltColor;
  beltProps.s7l2b = beltColor;
  beltProps.s7l3 = beltColor;
  beltProps.s8l1 = beltColor;
  beltProps.s8l2a = beltColor;
  beltProps.s8l2b = beltColor;
  beltProps.s8l3 = beltColor;
  beltProps.s9l1 = beltColor;
  beltProps.s9l2a = beltColor;
  beltProps.s9l2b = beltColor;
  beltProps.s9l3 = beltColor;
  beltProps.s10l1 = beltColor;
  beltProps.s10l2a = beltColor;
  beltProps.s10l2b = beltColor;
  beltProps.s10l3 = beltColor;
  beltProps.s11l1 = beltColor;
  beltProps.s11l2a = beltColor;
  beltProps.s11l2b = beltColor;
  beltProps.s11l3 = beltColor;
  beltProps.s12l1 = beltColor;
  beltProps.s12l2a = beltColor;
  beltProps.s12l2b = beltColor;
  beltProps.s12l3 = beltColor;
  beltProps.s13l1 = beltColor;
  beltProps.s13l2a = beltColor;
  beltProps.s13l2b = beltColor;
  beltProps.s13l3 = beltColor;

  setPatchProperties(
    beltProps,
    hasPatch,
    patchColor,
    patchBorderColor,
    professorPatchColor,
    professorBorderColor,
    hasProfessorPatch,
    stripeColor,
    stripeCount
  );

  return beltProps;
};

export const getBelt = (
  name: string,
  type: BeltType,
  sortOrder: number,
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
  stripeCount: number
): Belt => {
  const belt: Belt = {
    name: name,
    type: type,
    sortOrder: sortOrder,
    color1: color1,
    color2: color2,
    color3: color3,
    borderColor: borderColor,
    hasPatch: hasPatch,
    patchColor: patchColor,
    patchBorderColor: patchBorderColor,
    hasProfessorPatch: hasProfessorPatch,
    professorPatchColor: professorPatchColor,
    professorBorderColor: professorBorderColor,
    stripeColor: stripeColor,
    stripeCount: stripeCount,
  };

  return belt;
};

export const setBeltProps = (
  belt: Belt | undefined,
  stripeCount: number,
  rdfTitle: string,
  rdfDescription: string,
  transitionCSS: string,
  refreshInterval: number
): BeltProps => {
  const beltProps: BeltProps = getBeltProps(rdfTitle, rdfDescription);

  beltProps.transitionCSS = transitionCSS;
  beltProps.refreshInterval = refreshInterval;
  beltProps.stripeCount = stripeCount;

  if (belt) {
    switch (belt.type) {
      case "Solid":
        setSolidBelt(belt, beltProps);
        break;
      case "Striped":
        setStripeBelt(belt, beltProps);
        break;
      case "Coral":
        setCoralBelt(belt, beltProps);
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
      stripeCount
    );
  }

  return beltProps;
};

export const getCheckeredBelt = (
  beltColor1: string,
  beltColor2: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number,
  transitionCSS: string,
  title: string = "",
  description: string = "",
  randomBeltTypes: Array<BeltType>,
  refreshInterval: number
): BeltProps => {
  const beltProps: BeltProps = getBeltProps(title, description);
  beltProps.transitionCSS = transitionCSS;
  beltProps.randomBeltTypes = randomBeltTypes;
  beltProps.refreshInterval = refreshInterval;

  beltProps.border = borderColor;

  beltProps.s1l1 = beltColor1;
  beltProps.s1l2a = beltColor2;
  beltProps.s1l2b = beltColor2;
  beltProps.s1l3 = beltColor1;
  beltProps.s2l1 = beltColor2;
  beltProps.s2l2a = beltColor1;
  beltProps.s2l2b = beltColor1;
  beltProps.s2l3 = beltColor2;
  beltProps.s3l1 = beltColor1;
  beltProps.s3l2a = beltColor2;
  beltProps.s3l2b = beltColor2;
  beltProps.s3l3 = beltColor1;
  beltProps.s4l1 = beltColor2;
  beltProps.s4l2a = beltColor1;
  beltProps.s4l2b = beltColor1;
  beltProps.s4l3 = beltColor2;
  beltProps.s5l1 = beltColor2;
  beltProps.s5l2a = beltColor1;
  beltProps.s5l2b = beltColor1;
  beltProps.s5l3 = beltColor2;
  beltProps.s6l1 = beltColor1;
  beltProps.s6l2a = beltColor2;
  beltProps.s6l2b = beltColor2;
  beltProps.s6l3 = beltColor1;
  beltProps.s6l1 = beltColor1;
  beltProps.s6l2a = beltColor1;
  beltProps.s6l2b = beltColor1;
  beltProps.s6l3 = beltColor1;
  beltProps.s7l1 = beltColor1;
  beltProps.s7l2a = beltColor2;
  beltProps.s7l2b = beltColor2;
  beltProps.s7l3 = beltColor1;
  beltProps.s8l1 = beltColor1;
  beltProps.s8l2a = beltColor2;
  beltProps.s8l2b = beltColor2;
  beltProps.s8l3 = beltColor1;
  beltProps.s9l1 = beltColor2;
  beltProps.s9l2a = beltColor1;
  beltProps.s9l2b = beltColor1;
  beltProps.s9l3 = beltColor2;
  beltProps.s10l1 = beltColor2;
  beltProps.s10l2a = beltColor1;
  beltProps.s10l2b = beltColor1;
  beltProps.s10l3 = beltColor2;
  beltProps.s11l1 = beltColor1;
  beltProps.s11l2a = beltColor2;
  beltProps.s11l2b = beltColor2;
  beltProps.s11l3 = beltColor1;
  beltProps.s12l1 = beltColor2;
  beltProps.s12l2a = beltColor1;
  beltProps.s12l2b = beltColor1;
  beltProps.s12l3 = beltColor2;
  beltProps.s13l1 = beltColor1;
  beltProps.s13l2a = beltColor2;
  beltProps.s13l2b = beltColor2;
  beltProps.s13l3 = beltColor1;

  setPatchProperties(
    beltProps,
    hasPatch,
    patchColor,
    patchBorderColor,
    professorPatchColor,
    professorBorderColor,
    hasProfessorPatch,
    stripeColor,
    stripeCount
  );

  return beltProps;
};

export const getStripedBelt = (
  beltColor: string,
  beltStripeColor: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number,
  transitionCSS: string,
  title: string = "",
  description: string = "",
  randomBeltTypes: Array<BeltType>,
  refreshInterval: number
): BeltProps => {
  const beltProps: BeltProps = getBeltProps(title, description);
  beltProps.transitionCSS = transitionCSS;
  beltProps.randomBeltTypes = randomBeltTypes;
  beltProps.refreshInterval = refreshInterval;

  beltProps.border = borderColor;

  beltProps.s1l1 = beltColor;
  beltProps.s1l2a = beltStripeColor;
  beltProps.s1l2b = beltStripeColor;
  beltProps.s1l3 = beltColor;
  beltProps.s2l1 = beltColor;
  beltProps.s2l2a = beltStripeColor;
  beltProps.s2l2b = beltStripeColor;
  beltProps.s2l3 = beltColor;
  beltProps.s3l1 = beltColor;
  beltProps.s3l2a = beltStripeColor;
  beltProps.s3l2b = beltStripeColor;
  beltProps.s3l3 = beltColor;
  beltProps.s4l1 = beltColor;
  beltProps.s4l2a = beltStripeColor;
  beltProps.s4l2b = beltStripeColor;
  beltProps.s4l3 = beltColor;
  beltProps.s5l1 = beltColor;
  beltProps.s5l2a = beltStripeColor;
  beltProps.s5l2b = beltStripeColor;
  beltProps.s5l3 = beltColor;
  beltProps.s6l1 = beltColor;
  beltProps.s6l2a = beltStripeColor;
  beltProps.s6l2b = beltStripeColor;
  beltProps.s6l3 = beltColor;
  beltProps.s6l1 = beltColor;
  beltProps.s6l2a = beltStripeColor;
  beltProps.s6l2b = beltStripeColor;
  beltProps.s6l3 = beltColor;
  beltProps.s7l1 = beltColor;
  beltProps.s7l2a = beltStripeColor;
  beltProps.s7l2b = beltStripeColor;
  beltProps.s7l3 = beltColor;
  beltProps.s8l1 = beltColor;
  beltProps.s8l2a = beltStripeColor;
  beltProps.s8l2b = beltStripeColor;
  beltProps.s8l3 = beltColor;
  beltProps.s9l1 = beltColor;
  beltProps.s9l2a = beltStripeColor;
  beltProps.s9l2b = beltStripeColor;
  beltProps.s9l3 = beltColor;
  beltProps.s10l1 = beltColor;
  beltProps.s10l2a = beltStripeColor;
  beltProps.s10l2b = beltStripeColor;
  beltProps.s10l3 = beltColor;
  beltProps.s11l1 = beltColor;
  beltProps.s11l2a = beltStripeColor;
  beltProps.s11l2b = beltStripeColor;
  beltProps.s11l3 = beltColor;
  beltProps.s12l1 = beltColor;
  beltProps.s12l2a = beltStripeColor;
  beltProps.s12l2b = beltStripeColor;
  beltProps.s12l3 = beltColor;
  beltProps.s13l1 = beltColor;
  beltProps.s13l2a = beltStripeColor;
  beltProps.s13l2b = beltStripeColor;
  beltProps.s13l3 = beltColor;

  setPatchProperties(
    beltProps,
    hasPatch,
    patchColor,
    patchBorderColor,
    professorPatchColor,
    professorBorderColor,
    hasProfessorPatch,
    stripeColor,
    stripeCount
  );

  return beltProps;
};

export const getSplitBelt = (
  topColor: string,
  bottomColor: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number,
  transitionCSS: string,
  title: string = "",
  description: string = "",
  randomBeltTypes: Array<BeltType>,
  refreshInterval: number
): BeltProps => {
  const beltProps: BeltProps = getBeltProps(title, description);
  beltProps.transitionCSS = transitionCSS;
  beltProps.randomBeltTypes = randomBeltTypes;
  beltProps.refreshInterval = refreshInterval;

  beltProps.border = borderColor;

  beltProps.s1l1 = topColor;
  beltProps.s1l2a = topColor;
  beltProps.s1l2b = bottomColor;
  beltProps.s1l3 = bottomColor;
  beltProps.s2l1 = topColor;
  beltProps.s2l2a = topColor;
  beltProps.s2l2b = bottomColor;
  beltProps.s2l3 = bottomColor;
  beltProps.s3l1 = topColor;
  beltProps.s3l2a = topColor;
  beltProps.s3l2b = bottomColor;
  beltProps.s3l3 = bottomColor;
  beltProps.s4l1 = topColor;
  beltProps.s4l2a = topColor;
  beltProps.s4l2b = bottomColor;
  beltProps.s4l3 = bottomColor;
  beltProps.s5l1 = topColor;
  beltProps.s5l2b = topColor;
  beltProps.s5l2a = bottomColor;
  beltProps.s5l3 = bottomColor;
  beltProps.s6l1 = topColor;
  beltProps.s6l2b = topColor;
  beltProps.s6l2a = bottomColor;
  beltProps.s6l3 = bottomColor;
  beltProps.s6l1 = topColor;
  beltProps.s6l2b = topColor;
  beltProps.s6l2a = bottomColor;
  beltProps.s6l3 = bottomColor;
  beltProps.s7l1 = topColor;
  beltProps.s7l2a = topColor;
  beltProps.s7l2b = bottomColor;
  beltProps.s7l3 = bottomColor;
  beltProps.s8l1 = topColor;
  beltProps.s8l2a = topColor;
  beltProps.s8l2b = bottomColor;
  beltProps.s8l3 = bottomColor;
  beltProps.s9l1 = topColor;
  beltProps.s9l2a = topColor;
  beltProps.s9l2b = bottomColor;
  beltProps.s9l3 = bottomColor;
  beltProps.s10l1 = topColor;
  beltProps.s10l2a = topColor;
  beltProps.s10l2b = bottomColor;
  beltProps.s10l3 = bottomColor;
  beltProps.s11l1 = topColor;
  beltProps.s11l2a = topColor;
  beltProps.s11l2b = bottomColor;
  beltProps.s11l3 = bottomColor;
  beltProps.s12l1 = topColor;
  beltProps.s12l2a = topColor;
  beltProps.s12l2b = bottomColor;
  beltProps.s12l3 = bottomColor;
  beltProps.s13l1 = topColor;
  beltProps.s13l2a = topColor;
  beltProps.s13l2b = bottomColor;
  beltProps.s13l3 = bottomColor;

  setPatchProperties(
    beltProps,
    hasPatch,
    patchColor,
    patchBorderColor,
    professorPatchColor,
    professorBorderColor,
    hasProfessorPatch,
    stripeColor,
    stripeCount
  );

  return beltProps;
};

export const getCoralBelt = (
  beltColor1: string,
  beltColor2: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number,
  transitionCSS: string,
  title: string = "",
  description: string = "",
  randomBeltTypes: Array<BeltType>,
  refreshInterval: number
): BeltProps => {
  const beltProps: BeltProps = getBeltProp(title, description);
  beltProps.transitionCSS = transitionCSS;
  beltProps.randomBeltTypes = randomBeltTypes;
  beltProps.refreshInterval = refreshInterval;

  beltProps.border = borderColor;

  beltProps.s1l1 = beltColor1;
  beltProps.s1l2a = beltColor1;
  beltProps.s1l2b = beltColor1;
  beltProps.s1l3 = beltColor1;
  beltProps.s2l1 = beltColor2;
  beltProps.s2l2a = beltColor2;
  beltProps.s2l2b = beltColor2;
  beltProps.s2l3 = beltColor2;
  beltProps.s3l1 = beltColor1;
  beltProps.s3l2a = beltColor1;
  beltProps.s3l2b = beltColor1;
  beltProps.s3l3 = beltColor1;
  beltProps.s4l1 = beltColor2;
  beltProps.s4l2a = beltColor2;
  beltProps.s4l2b = beltColor2;
  beltProps.s4l3 = beltColor2;
  beltProps.s5l1 = beltColor2;
  beltProps.s5l2a = beltColor2;
  beltProps.s5l2b = beltColor2;
  beltProps.s5l3 = beltColor2;
  beltProps.s6l1 = beltColor1;
  beltProps.s6l2a = beltColor1;
  beltProps.s6l2b = beltColor1;
  beltProps.s6l3 = beltColor1;
  beltProps.s6l1 = beltColor1;
  beltProps.s6l2a = beltColor1;
  beltProps.s6l2b = beltColor1;
  beltProps.s6l3 = beltColor1;
  beltProps.s7l1 = beltColor1;
  beltProps.s7l2a = beltColor1;
  beltProps.s7l2b = beltColor1;
  beltProps.s7l3 = beltColor1;
  beltProps.s8l1 = beltColor1;
  beltProps.s8l2a = beltColor1;
  beltProps.s8l2b = beltColor1;
  beltProps.s8l3 = beltColor1;
  beltProps.s9l1 = beltColor2;
  beltProps.s9l2a = beltColor2;
  beltProps.s9l2b = beltColor2;
  beltProps.s9l3 = beltColor2;
  beltProps.s10l1 = beltColor1;
  beltProps.s10l2a = beltColor1;
  beltProps.s10l2b = beltColor1;
  beltProps.s10l3 = beltColor1;
  beltProps.s11l1 = beltColor2;
  beltProps.s11l2a = beltColor2;
  beltProps.s11l2b = beltColor2;
  beltProps.s11l3 = beltColor2;
  beltProps.s12l1 = beltColor1;
  beltProps.s12l2a = beltColor1;
  beltProps.s12l2b = beltColor1;
  beltProps.s12l3 = beltColor1;
  beltProps.s13l1 = beltColor2;
  beltProps.s13l2a = beltColor2;
  beltProps.s13l2b = beltColor2;
  beltProps.s13l3 = beltColor2;

  setPatchProperties(
    beltProps,
    hasPatch,
    patchColor,
    patchBorderColor,
    professorPatchColor,
    professorBorderColor,
    hasProfessorPatch,
    stripeColor,
    stripeCount
  );

  return beltProps;
};
