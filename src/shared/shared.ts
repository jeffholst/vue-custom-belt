import type BeltProps from "../types/BeltProps";

const getBelt = (): BeltProps => {
  const beltProps: BeltProps = {
    border: "#434244",
    patch: "#000000",
    patchBorder: "#414042",
    professorPatch: "#c3922e",
    professorBorder: "#414042",
    hasProfessorPatch: false,
    stripeCount: 0,
    stripe4l1: "#FFFFFF",
    stripe4l2: "#FFFFFF",
    stripe4l3: "#FFFFFF",
    stripe4l4: "#FFFFFF",
    stripe10l1: "#FFFFFF",
    stripe10l2: "#FFFFFF",
    stripe10l3: "#FFFFFF",
    stripe10l4: "#FFFFFF",
    stripe10l5: "#FFFFFF",
    stripe10l6: "#FFFFFF",
    stripe10l7: "#FFFFFF",
    stripe10l8: "#FFFFFF",
    stripe10l9: "#FFFFFF",
    stripe10l10: "#FFFFFF",
    s1l1: "#FFFFFF",
    s1l2: "#FFFFFF",
    s1l3: "#FFFFFF",
    s2l1: "#FFFFFF",
    s2l2: "#FFFFFF",
    s2l3: "#FFFFFF",
    s3l1: "#FFFFFF",
    s3l2: "#FFFFFF",
    s3l3: "#FFFFFF",
    s4l1: "#FFFFFF",
    s4l2: "#FFFFFF",
    s4l3: "#FFFFFF",
    s5l1: "#FFFFFF",
    s5l2: "#FFFFFF",
    s5l3: "#FFFFFF",
    s6l1: "#FFFFFF",
    s6l2: "#FFFFFF",
    s6l3: "#FFFFFF",
    s7l1: "#FFFFFF",
    s7l2: "#FFFFFF",
    s7l3: "#FFFFFF",
    s8l1: "#FFFFFF",
    s8l2: "#FFFFFF",
    s8l3: "#FFFFFF",
    s9l1: "#FFFFFF",
    s9l2: "#FFFFFF",
    s9l3: "#FFFFFF",
    s10l1: "#FFFFFF",
    s10l2: "#FFFFFF",
    s10l3: "#FFFFFF",
    s11l1: "#FFFFFF",
    s11l2: "#FFFFFF",
    s11l3: "#FFFFFF",
    s12l1: "#FFFFFF",
    s12l2: "#FFFFFF",
    s12l3: "#FFFFFF",
    s13l1: "#FFFFFF",
    s13l2: "#FFFFFF",
    s13l3: "#FFFFFF",
  };

  return beltProps;
};

const setPatchProperties = (
  beltProps: BeltProps,
  patchColor: string,
  patchBorderColor: string,
  professorPatchColor: string,
  professorBorderColor: string,
  hasProfessorPatch: boolean,
  stripeColor: string,
  stripeCount: number
) => {
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

export const getWhiteBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    "#FFFFFF",
    "#434244",
    "#000000",
    "#414042",
    "#c3922e",
    "#414042",
    false,
    "#FFFFFF",
    stripeCount
  );
  return beltProps;
};

export const getBlueBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    "#0000FF",
    "#434244",
    "#000000",
    "#414042",
    "#c3922e",
    "#414042",
    false,
    "#FFFFFF",
    stripeCount
  );
  return beltProps;
};

export const getPurpleBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    "#BF40BF",
    "#434244",
    "#000000",
    "#414042",
    "#c3922e",
    "#414042",
    false,
    "#FFFFFF",
    stripeCount
  );
  return beltProps;
};

export const getBrownBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    "#964B00",
    "#434244",
    "#000000",
    "#414042",
    "#c3922e",
    "#414042",
    false,
    "#FFFFFF",
    stripeCount
  );
  return beltProps;
};

export const getBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = getSolidBelt(
    "#000000",
    "#434244",
    "#000000",
    "#414042",
    "#c3922e",
    "#414042",
    false,
    "#FFFFFF",
    stripeCount
  );
  return beltProps;
};
