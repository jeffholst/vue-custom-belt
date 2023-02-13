import type BeltProps from "../types/BeltProps";

const Color = {
  white: "#FFFFFF",
  gray: "#999999",
  black: "#000000",
  yellow: "#FFCC00",
  orange: "#CC6633",
  green: "#006633",
  blue: "#0099CC",
  purple: "#993399",
  brown: "#663300",
  red: "#990000",
  gold: "#CC9900",
  darkBorder: "#434244",
  lightBorder: "#CCCCCC",
};

const getBelt = (): BeltProps => {
  const beltProps: BeltProps = {
    border: Color.darkBorder,
    hasPatch: true,
    patch: Color.black,
    patchBorder: Color.darkBorder,
    professorPatch: Color.red,
    professorBorder: Color.darkBorder,
    hasProfessorPatch: false,
    stripeCount: 0,
    stripe4l1: Color.white,
    stripe4l2: Color.white,
    stripe4l3: Color.white,
    stripe4l4: Color.white,
    stripe10l1: Color.white,
    stripe10l2: Color.white,
    stripe10l3: Color.white,
    stripe10l4: Color.white,
    stripe10l5: Color.white,
    stripe10l6: Color.white,
    stripe10l7: Color.white,
    stripe10l8: Color.white,
    stripe10l9: Color.white,
    stripe10l10: Color.white,
    s1l1: Color.white,
    s1l2: Color.white,
    s1l3: Color.white,
    s2l1: Color.white,
    s2l2: Color.white,
    s2l3: Color.white,
    s3l1: Color.white,
    s3l2: Color.white,
    s3l3: Color.white,
    s4l1: Color.white,
    s4l2: Color.white,
    s4l3: Color.white,
    s5l1: Color.white,
    s5l2: Color.white,
    s5l3: Color.white,
    s6l1: Color.white,
    s6l2: Color.white,
    s6l3: Color.white,
    s7l1: Color.white,
    s7l2: Color.white,
    s7l3: Color.white,
    s8l1: Color.white,
    s8l2: Color.white,
    s8l3: Color.white,
    s9l1: Color.white,
    s9l2: Color.white,
    s9l3: Color.white,
    s10l1: Color.white,
    s10l2: Color.white,
    s10l3: Color.white,
    s11l1: Color.white,
    s11l2: Color.white,
    s11l3: Color.white,
    s12l1: Color.white,
    s12l2: Color.white,
    s12l3: Color.white,
    s13l1: Color.white,
    s13l2: Color.white,
    s13l3: Color.white,
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

  beltProps.stripe4l1 = stripeColor;
  beltProps.stripe4l2 = stripeColor;
  beltProps.stripe4l3 = stripeColor;
  beltProps.stripe4l4 = stripeColor;
  beltProps.stripe10l1 = stripeColor;
  beltProps.stripe10l2 = stripeColor;
  beltProps.stripe10l3 = stripeColor;
  beltProps.stripe10l4 = stripeColor;
  beltProps.stripe10l5 = stripeColor;
  beltProps.stripe10l6 = stripeColor;
  beltProps.stripe10l7 = stripeColor;
  beltProps.stripe10l8 = stripeColor;
  beltProps.stripe10l9 = stripeColor;
  beltProps.stripe10l10 = stripeColor;
};

const getSolidBelt = (
  beltColor: string,
  borderColor: string,
  hasPatch: boolean,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number
): BeltProps => {
  const beltProps: BeltProps = getBelt();

  beltProps.border = borderColor;

  beltProps.s1l1 = beltColor;
  beltProps.s1l2 = beltColor;
  beltProps.s1l3 = beltColor;
  beltProps.s2l1 = beltColor;
  beltProps.s2l2 = beltColor;
  beltProps.s2l3 = beltColor;
  beltProps.s3l1 = beltColor;
  beltProps.s3l2 = beltColor;
  beltProps.s3l3 = beltColor;
  beltProps.s4l1 = beltColor;
  beltProps.s4l2 = beltColor;
  beltProps.s4l3 = beltColor;
  beltProps.s5l1 = beltColor;
  beltProps.s5l2 = beltColor;
  beltProps.s5l3 = beltColor;
  beltProps.s6l1 = beltColor;
  beltProps.s6l2 = beltColor;
  beltProps.s6l3 = beltColor;
  beltProps.s6l1 = beltColor;
  beltProps.s6l2 = beltColor;
  beltProps.s6l3 = beltColor;
  beltProps.s7l1 = beltColor;
  beltProps.s7l2 = beltColor;
  beltProps.s7l3 = beltColor;
  beltProps.s8l1 = beltColor;
  beltProps.s8l2 = beltColor;
  beltProps.s8l3 = beltColor;
  beltProps.s9l1 = beltColor;
  beltProps.s9l2 = beltColor;
  beltProps.s9l3 = beltColor;
  beltProps.s10l1 = beltColor;
  beltProps.s10l2 = beltColor;
  beltProps.s10l3 = beltColor;
  beltProps.s11l1 = beltColor;
  beltProps.s11l2 = beltColor;
  beltProps.s11l3 = beltColor;
  beltProps.s12l1 = beltColor;
  beltProps.s12l2 = beltColor;
  beltProps.s12l3 = beltColor;
  beltProps.s13l1 = beltColor;
  beltProps.s13l2 = beltColor;
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

const getStrippedBelt = (
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
  stripeCount: number
): BeltProps => {
  const beltProps: BeltProps = getBelt();

  beltProps.border = borderColor;

  beltProps.s1l1 = beltColor;
  beltProps.s1l2 = beltStripeColor;
  beltProps.s1l3 = beltColor;
  beltProps.s2l1 = beltColor;
  beltProps.s2l2 = beltStripeColor;
  beltProps.s2l3 = beltColor;
  beltProps.s3l1 = beltColor;
  beltProps.s3l2 = beltStripeColor;
  beltProps.s3l3 = beltColor;
  beltProps.s4l1 = beltColor;
  beltProps.s4l2 = beltStripeColor;
  beltProps.s4l3 = beltColor;
  beltProps.s5l1 = beltColor;
  beltProps.s5l2 = beltStripeColor;
  beltProps.s5l3 = beltColor;
  beltProps.s6l1 = beltColor;
  beltProps.s6l2 = beltStripeColor;
  beltProps.s6l3 = beltColor;
  beltProps.s6l1 = beltColor;
  beltProps.s6l2 = beltStripeColor;
  beltProps.s6l3 = beltColor;
  beltProps.s7l1 = beltColor;
  beltProps.s7l2 = beltStripeColor;
  beltProps.s7l3 = beltColor;
  beltProps.s8l1 = beltColor;
  beltProps.s8l2 = beltStripeColor;
  beltProps.s8l3 = beltColor;
  beltProps.s9l1 = beltColor;
  beltProps.s9l2 = beltStripeColor;
  beltProps.s9l3 = beltColor;
  beltProps.s10l1 = beltColor;
  beltProps.s10l2 = beltStripeColor;
  beltProps.s10l3 = beltColor;
  beltProps.s11l1 = beltColor;
  beltProps.s11l2 = beltStripeColor;
  beltProps.s11l3 = beltColor;
  beltProps.s12l1 = beltColor;
  beltProps.s12l2 = beltStripeColor;
  beltProps.s12l3 = beltColor;
  beltProps.s13l1 = beltColor;
  beltProps.s13l2 = beltStripeColor;
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

const getCoralBelt = (
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
  stripeCount: number
): BeltProps => {
  const beltProps: BeltProps = getBelt();

  beltProps.border = borderColor;

  beltProps.s1l1 = beltColor1;
  beltProps.s1l2 = beltColor1;
  beltProps.s1l3 = beltColor1;
  beltProps.s2l1 = beltColor2;
  beltProps.s2l2 = beltColor2;
  beltProps.s2l3 = beltColor2;
  beltProps.s3l1 = beltColor1;
  beltProps.s3l2 = beltColor1;
  beltProps.s3l3 = beltColor1;
  beltProps.s4l1 = beltColor2;
  beltProps.s4l2 = beltColor2;
  beltProps.s4l3 = beltColor2;
  beltProps.s5l1 = beltColor2;
  beltProps.s5l2 = beltColor2;
  beltProps.s5l3 = beltColor2;
  beltProps.s6l1 = beltColor1;
  beltProps.s6l2 = beltColor1;
  beltProps.s6l3 = beltColor1;
  beltProps.s6l1 = beltColor1;
  beltProps.s6l2 = beltColor1;
  beltProps.s6l3 = beltColor1;
  beltProps.s7l1 = beltColor1;
  beltProps.s7l2 = beltColor1;
  beltProps.s7l3 = beltColor1;
  beltProps.s8l1 = beltColor1;
  beltProps.s8l2 = beltColor1;
  beltProps.s8l3 = beltColor1;
  beltProps.s9l1 = beltColor2;
  beltProps.s9l2 = beltColor2;
  beltProps.s9l3 = beltColor2;
  beltProps.s10l1 = beltColor1;
  beltProps.s10l2 = beltColor1;
  beltProps.s10l3 = beltColor1;
  beltProps.s11l1 = beltColor2;
  beltProps.s11l2 = beltColor2;
  beltProps.s11l3 = beltColor2;
  beltProps.s12l1 = beltColor2;
  beltProps.s12l2 = beltColor2;
  beltProps.s12l3 = beltColor2;
  beltProps.s13l1 = beltColor1;
  beltProps.s13l2 = beltColor1;
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

export const getGrayWhiteBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getStrippedBelt(
    Color.gray,
    Color.white,
    Color.darkBorder,
    true,
    Color.black,
    Color.darkBorder,
    Color.gold,
    Color.darkBorder,
    false,
    Color.white,
    stripeCount
  );
  return beltProps;
};

export const getWhiteBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    Color.white,
    Color.darkBorder,
    true,
    Color.black,
    Color.darkBorder,
    Color.gold,
    Color.darkBorder,
    false,
    Color.white,
    stripeCount
  );
  return beltProps;
};

export const getBlueBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    Color.blue,
    Color.darkBorder,
    true,
    Color.black,
    Color.darkBorder,
    Color.gold,
    Color.darkBorder,
    false,
    Color.white,
    stripeCount
  );
  return beltProps;
};

export const getPurpleBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    Color.purple,
    Color.darkBorder,
    true,
    Color.black,
    Color.darkBorder,
    Color.gold,
    Color.darkBorder,
    false,
    Color.white,
    stripeCount
  );
  return beltProps;
};

export const getBrownBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    Color.brown,
    Color.lightBorder,
    true,
    Color.black,
    Color.lightBorder,
    Color.gold,
    Color.lightBorder,
    false,
    Color.white,
    stripeCount
  );
  return beltProps;
};

export const getBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    Color.black,
    Color.lightBorder,
    true,
    Color.black,
    Color.lightBorder,
    Color.gold,
    Color.lightBorder,
    false,
    Color.white,
    stripeCount
  );
  return beltProps;
};

export const getRedBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getCoralBelt(
    Color.red,
    Color.black,
    Color.lightBorder,
    true,
    Color.white,
    Color.lightBorder,
    Color.gray,
    Color.lightBorder,
    true,
    Color.red,
    stripeCount
  );
  return beltProps;
};
