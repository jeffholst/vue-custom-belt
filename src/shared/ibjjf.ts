import type { BeltProps } from "../types/BeltProps";
import * as shared from "./shared";

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

export const getGrayWhiteBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getStrippedBelt(
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

export const getGrayBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getStrippedBelt(
    Color.gray,
    Color.black,
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

export const getYellowWhiteBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getStrippedBelt(
    Color.yellow,
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

export const getYellowBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getStrippedBelt(
    Color.yellow,
    Color.black,
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

export const getOrangeWhiteBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getStrippedBelt(
    Color.orange,
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

export const getOrangeBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getStrippedBelt(
    Color.orange,
    Color.black,
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

export const getGreenWhiteBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getStrippedBelt(
    Color.green,
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

export const getGreenBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getStrippedBelt(
    Color.green,
    Color.black,
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

export const getGrayBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getSolidBelt(
    Color.gray,
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

export const getYellowBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getSolidBelt(
    Color.yellow,
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

export const getOrangeBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getSolidBelt(
    Color.orange,
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

export const getGreenBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getSolidBelt(
    Color.green,
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
  const beltProps: BeltProps = shared.getSolidBelt(
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
  const beltProps: BeltProps = shared.getSolidBelt(
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
  const beltProps: BeltProps = shared.getSolidBelt(
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
  const beltProps: BeltProps = shared.getSolidBelt(
    Color.brown,
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

export const getBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getSolidBelt(
    Color.black,
    Color.lightBorder,
    true,
    Color.red,
    Color.lightBorder,
    Color.white,
    Color.lightBorder,
    true,
    Color.white,
    stripeCount
  );
  return beltProps;
};

export const getRedBlackBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getCoralBelt(
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

export const getRedWhiteBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getCoralBelt(
    Color.white,
    Color.red,
    Color.darkBorder,
    true,
    Color.white,
    Color.darkBorder,
    Color.gray,
    Color.darkBorder,
    true,
    Color.red,
    stripeCount
  );
  return beltProps;
};

export const getRedBelt = (stripeCount: number): BeltProps => {
  const beltProps: BeltProps = shared.getSolidBelt(
    Color.red,
    Color.darkBorder,
    true,
    Color.white,
    Color.darkBorder,
    Color.gold,
    Color.darkBorder,
    true,
    Color.red,
    stripeCount
  );
  return beltProps;
};
