import type { BeltProps, BeltType } from "../types/BeltProps";

const getBelt = (title: string = "", description: string = ""): BeltProps => {
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
    s1l2: "",
    s1l3: "",
    s2l1: "",
    s2l2: "",
    s2l3: "",
    s3l1: "",
    s3l2: "",
    s3l3: "",
    s4l1: "",
    s4l2: "",
    s4l3: "",
    s5l1: "",
    s5l2: "",
    s5l3: "",
    s6l1: "",
    s6l2: "",
    s6l3: "",
    s7l1: "",
    s7l2: "",
    s7l3: "",
    s8l1: "",
    s8l2: "",
    s8l3: "",
    s9l1: "",
    s9l2: "",
    s9l3: "",
    s10l1: "",
    s10l2: "",
    s10l3: "",
    s11l1: "",
    s11l2: "",
    s11l3: "",
    s12l1: "",
    s12l2: "",
    s12l3: "",
    s13l1: "",
    s13l2: "",
    s13l3: "",
    transitionCSS: "",
    rdfTitle: title,
    rdfDescription: description,
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
  let index: number;

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
    case "Crazy":
      index = 3;
      break;
  }
  return index;
};

export const getRandomBelt = (
  hasPatch: boolean | undefined,
  hasProfessorPatch: boolean | undefined,
  stripeCount: number | undefined,
  includeBelts: Array<BeltType> | undefined
): BeltProps => {
  let rand;
  let randomBeltTypeIndex;
  let title = "Random";
  if (includeBelts !== undefined && includeBelts.length > 0) {
    if (includeBelts.length === 1) {
      randomBeltTypeIndex = getRandomBeltIndex(includeBelts[0]);
    } else {
      const ary: Array<BeltType> = [];
      for (let i = 0; i < includeBelts.length; i++) {
        ary.push(includeBelts[i]);
      }
      rand = Math.floor(Math.random() * ary.length);
      randomBeltTypeIndex = getRandomBeltIndex(ary[rand]);
    }
  } else {
    randomBeltTypeIndex = Math.floor(Math.random() * 4);
  }

  let beltProps: BeltProps = getBelt();

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
        title,
        getDescription(`${title}`, stripeCount)
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
        title,
        getDescription(`${title}`, stripeCount)
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
        title,
        getDescription(`${title}`, stripeCount)
      );
      break;
    case 3: // crazy belt
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
        title,
        getDescription(`${title}`, stripeCount)
      );
      beltProps.s1l1 = getRandomHexColor();
      beltProps.s1l2 = getRandomHexColor();
      beltProps.s1l3 = getRandomHexColor();
      beltProps.s2l1 = getRandomHexColor();
      beltProps.s2l2 = getRandomHexColor();
      beltProps.s2l3 = getRandomHexColor();
      beltProps.s3l1 = getRandomHexColor();
      beltProps.s3l2 = getRandomHexColor();
      beltProps.s3l3 = getRandomHexColor();
      beltProps.s4l1 = getRandomHexColor();
      beltProps.s4l2 = getRandomHexColor();
      beltProps.s4l3 = getRandomHexColor();
      beltProps.s5l1 = getRandomHexColor();
      beltProps.s5l2 = getRandomHexColor();
      beltProps.s5l3 = getRandomHexColor();
      beltProps.s6l1 = getRandomHexColor();
      beltProps.s6l2 = getRandomHexColor();
      beltProps.s6l3 = getRandomHexColor();
      beltProps.s6l1 = getRandomHexColor();
      beltProps.s6l2 = getRandomHexColor();
      beltProps.s6l3 = getRandomHexColor();
      beltProps.s7l1 = getRandomHexColor();
      beltProps.s7l2 = getRandomHexColor();
      beltProps.s7l3 = getRandomHexColor();
      beltProps.s8l1 = getRandomHexColor();
      beltProps.s8l2 = getRandomHexColor();
      beltProps.s8l3 = getRandomHexColor();
      beltProps.s9l1 = getRandomHexColor();
      beltProps.s9l2 = getRandomHexColor();
      beltProps.s9l3 = getRandomHexColor();
      beltProps.s10l1 = getRandomHexColor();
      beltProps.s10l2 = getRandomHexColor();
      beltProps.s10l3 = getRandomHexColor();
      beltProps.s11l1 = getRandomHexColor();
      beltProps.s11l2 = getRandomHexColor();
      beltProps.s11l3 = getRandomHexColor();
      beltProps.s12l1 = getRandomHexColor();
      beltProps.s12l2 = getRandomHexColor();
      beltProps.s12l3 = getRandomHexColor();
      beltProps.s13l1 = getRandomHexColor();
      beltProps.s13l2 = getRandomHexColor();
      beltProps.s13l3 = getRandomHexColor();
      break;
  }

  return beltProps;
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
  title: string = "",
  description: string = ""
): BeltProps => {
  const beltProps: BeltProps = getBelt(title, description);

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
  title: string = "",
  description: string = ""
): BeltProps => {
  const beltProps: BeltProps = getBelt(title, description);

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
  title: string = "",
  description: string = ""
): BeltProps => {
  const beltProps: BeltProps = getBelt(title, description);

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
