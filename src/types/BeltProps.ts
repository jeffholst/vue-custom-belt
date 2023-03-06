import * as shared from "../shared/shared";

export type StripeStart = "Left" | "Right";
export type BeltType =
  | "Solid"
  | "Striped"
  | "Coral"
  | "Split"
  | "Checkered"
  | "Crazy"
  | "Random";

export interface BeltProps {
  border: string;
  hasPatch: boolean;
  patch: string;
  patchBorder: string;
  professorPatch: string;
  professorBorder: string;
  hasProfessorPatch: boolean;
  stripeCount: number;
  stripeStart: StripeStart;
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

export interface BeltColor {
  name: string;
  hex: string;
}

export interface Belt {
  name: string;
  types: BeltType[];
  sortOrder: number;
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
}

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
  }

  setPatchProperties = (
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

  setSolidBelt(belt: Belt, beltProps: BeltProps) {
    beltProps.s1l1 = belt ? belt.color1 : "";
    beltProps.s1l2a = belt ? belt.color1 : "";
    beltProps.s1l2b = belt ? belt.color1 : "";
    beltProps.s1l3 = belt ? belt.color1 : "";
    beltProps.s2l1 = belt ? belt.color1 : "";
    beltProps.s2l2a = belt ? belt.color1 : "";
    beltProps.s2l2b = belt ? belt.color1 : "";
    beltProps.s2l3 = belt ? belt.color1 : "";
    beltProps.s3l1 = belt ? belt.color1 : "";
    beltProps.s3l2a = belt ? belt.color1 : "";
    beltProps.s3l2b = belt ? belt.color1 : "";
    beltProps.s3l3 = belt ? belt.color1 : "";
    beltProps.s4l1 = belt ? belt.color1 : "";
    beltProps.s4l2a = belt ? belt.color1 : "";
    beltProps.s4l2b = belt ? belt.color1 : "";
    beltProps.s4l3 = belt ? belt.color1 : "";
    beltProps.s5l1 = belt ? belt.color1 : "";
    beltProps.s5l2a = belt ? belt.color1 : "";
    beltProps.s5l2b = belt ? belt.color1 : "";
    beltProps.s5l3 = belt ? belt.color1 : "";
    beltProps.s6l1 = belt ? belt.color1 : "";
    beltProps.s6l2a = belt ? belt.color1 : "";
    beltProps.s6l2b = belt ? belt.color1 : "";
    beltProps.s6l3 = belt ? belt.color1 : "";
    beltProps.s6l1 = belt ? belt.color1 : "";
    beltProps.s6l2a = belt ? belt.color1 : "";
    beltProps.s6l2b = belt ? belt.color1 : "";
    beltProps.s6l3 = belt ? belt.color1 : "";
    beltProps.s7l1 = belt ? belt.color1 : "";
    beltProps.s7l2a = belt ? belt.color1 : "";
    beltProps.s7l2b = belt ? belt.color1 : "";
    beltProps.s7l3 = belt ? belt.color1 : "";
    beltProps.s8l1 = belt ? belt.color1 : "";
    beltProps.s8l2a = belt ? belt.color1 : "";
    beltProps.s8l2b = belt ? belt.color1 : "";
    beltProps.s8l3 = belt ? belt.color1 : "";
    beltProps.s9l1 = belt ? belt.color1 : "";
    beltProps.s9l2a = belt ? belt.color1 : "";
    beltProps.s9l2b = belt ? belt.color1 : "";
    beltProps.s9l3 = belt ? belt.color1 : "";
    beltProps.s10l1 = belt ? belt.color1 : "";
    beltProps.s10l2a = belt ? belt.color1 : "";
    beltProps.s10l2b = belt ? belt.color1 : "";
    beltProps.s10l3 = belt ? belt.color1 : "";
    beltProps.s11l1 = belt ? belt.color1 : "";
    beltProps.s11l2a = belt ? belt.color1 : "";
    beltProps.s11l2b = belt ? belt.color1 : "";
    beltProps.s11l3 = belt ? belt.color1 : "";
    beltProps.s12l1 = belt ? belt.color1 : "";
    beltProps.s12l2a = belt ? belt.color1 : "";
    beltProps.s12l2b = belt ? belt.color1 : "";
    beltProps.s12l3 = belt ? belt.color1 : "";
    beltProps.s13l1 = belt ? belt.color1 : "";
    beltProps.s13l2a = belt ? belt.color1 : "";
    beltProps.s13l2b = belt ? belt.color1 : "";
    beltProps.s13l3 = belt ? belt.color1 : "";
  }

  setStripedBelt(belt: Belt, beltProps: BeltProps) {
    beltProps.s1l1 = belt ? belt.color1 : "";
    beltProps.s1l2a = belt ? belt.color2 : "";
    beltProps.s1l2b = belt ? belt.color2 : "";
    beltProps.s1l3 = belt ? belt.color1 : "";
    beltProps.s2l1 = belt ? belt.color1 : "";
    beltProps.s2l2a = belt ? belt.color2 : "";
    beltProps.s2l2b = belt ? belt.color2 : "";
    beltProps.s2l3 = belt ? belt.color1 : "";
    beltProps.s3l1 = belt ? belt.color1 : "";
    beltProps.s3l2a = belt ? belt.color2 : "";
    beltProps.s3l2b = belt ? belt.color2 : "";
    beltProps.s3l3 = belt ? belt.color1 : "";
    beltProps.s4l1 = belt ? belt.color1 : "";
    beltProps.s4l2a = belt ? belt.color2 : "";
    beltProps.s4l2b = belt ? belt.color2 : "";
    beltProps.s4l3 = belt ? belt.color1 : "";
    beltProps.s5l1 = belt ? belt.color1 : "";
    beltProps.s5l2a = belt ? belt.color2 : "";
    beltProps.s5l2b = belt ? belt.color2 : "";
    beltProps.s5l3 = belt ? belt.color1 : "";
    beltProps.s6l1 = belt ? belt.color1 : "";
    beltProps.s6l2a = belt ? belt.color2 : "";
    beltProps.s6l2b = belt ? belt.color2 : "";
    beltProps.s6l3 = belt ? belt.color1 : "";
    beltProps.s6l1 = belt ? belt.color1 : "";
    beltProps.s6l2a = belt ? belt.color2 : "";
    beltProps.s6l2b = belt ? belt.color2 : "";
    beltProps.s6l3 = belt ? belt.color1 : "";
    beltProps.s7l1 = belt ? belt.color1 : "";
    beltProps.s7l2a = belt ? belt.color2 : "";
    beltProps.s7l2b = belt ? belt.color2 : "";
    beltProps.s7l3 = belt ? belt.color1 : "";
    beltProps.s8l1 = belt ? belt.color1 : "";
    beltProps.s8l2a = belt ? belt.color2 : "";
    beltProps.s8l2b = belt ? belt.color2 : "";
    beltProps.s8l3 = belt ? belt.color1 : "";
    beltProps.s9l1 = belt ? belt.color1 : "";
    beltProps.s9l2a = belt ? belt.color2 : "";
    beltProps.s9l2b = belt ? belt.color2 : "";
    beltProps.s9l3 = belt ? belt.color1 : "";
    beltProps.s10l1 = belt ? belt.color1 : "";
    beltProps.s10l2a = belt ? belt.color2 : "";
    beltProps.s10l2b = belt ? belt.color2 : "";
    beltProps.s10l3 = belt ? belt.color1 : "";
    beltProps.s11l1 = belt ? belt.color1 : "";
    beltProps.s11l2a = belt ? belt.color2 : "";
    beltProps.s11l2b = belt ? belt.color2 : "";
    beltProps.s11l3 = belt ? belt.color1 : "";
    beltProps.s12l1 = belt ? belt.color1 : "";
    beltProps.s12l2a = belt ? belt.color2 : "";
    beltProps.s12l2b = belt ? belt.color2 : "";
    beltProps.s12l3 = belt ? belt.color1 : "";
    beltProps.s13l1 = belt ? belt.color1 : "";
    beltProps.s13l2a = belt ? belt.color2 : "";
    beltProps.s13l2b = belt ? belt.color2 : "";
    beltProps.s13l3 = belt ? belt.color1 : "";
  }

  getBelt(name: string, stripeCount: number): BeltProps {
    const belt = this.belts.find((belt) => belt.name === name);
    const beltProps: BeltProps = shared.getBelt("jkh Title", "jkh Description");
    beltProps.transitionCSS = this.transitionCSS;
    beltProps.refreshInterval = this.refreshInterval;

    if (belt) {
      beltProps.border = belt.borderColor;
      beltProps.patchBorder = belt.borderColor;
      beltProps.professorBorder = belt.borderColor;
      switch (belt.types[0]) {
        case "Solid":
          this.setSolidBelt(belt, beltProps);
          break;
        case "Striped":
          this.setStripedBelt(belt, beltProps);
          break;
      }
    }

    this.setPatchProperties(
      beltProps,
      belt ? belt.hasPatch : false,
      belt ? belt.patchColor : "",
      belt ? belt.patchBorderColor : "",
      belt ? belt.professorPatchColor : "",
      belt ? belt.professorBorderColor : "",
      belt ? belt.hasProfessorPatch : false,
      belt ? belt.stripeColor : "",
      stripeCount
    );

    return beltProps;
  }
}
