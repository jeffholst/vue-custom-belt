<script setup lang="ts">
import SVGBelt from "./components/IconBelt.vue";
import type { BeltProps } from "./types/BeltProps";
import { reactive } from "vue";
import { getRandomBelt, setBelt } from "./shared/shared";
import * as ibjjf from "./shared/ibjjf";

let randomBelt: BeltProps = reactive(getRandomBelt(true, false, 0));
const whiteBelt: BeltProps = ibjjf.getWhiteBelt(0);
const grayWhiteBelt: BeltProps = ibjjf.getGrayWhiteBelt(0);
const blueBelt: BeltProps = ibjjf.getBlueBelt(1);
const purpleBelt: BeltProps = ibjjf.getPurpleBelt(2);
const brownBelt: BeltProps = ibjjf.getBrownBelt(3);
const blackBelt: BeltProps = ibjjf.getBlackBelt(5);
const redBlackBelt: BeltProps = ibjjf.getRedBlackBelt(7);
const grayBelt: BeltProps = ibjjf.getGrayBelt(0);
const yellowBelt: BeltProps = ibjjf.getYellowBelt(0);
const orangeBelt: BeltProps = ibjjf.getOrangeBelt(0);
const greenBelt: BeltProps = ibjjf.getGreenBelt(0);
const grayBlackBelt: BeltProps = ibjjf.getGrayBlackBelt(0);
const yellowWhiteBelt: BeltProps = ibjjf.getYellowWhiteBelt(0);
const yellowBlackBelt: BeltProps = ibjjf.getYellowBlackBelt(0);
const orangeWhiteBelt: BeltProps = ibjjf.getOrangeWhiteBelt(0);
const orangeBlackBelt: BeltProps = ibjjf.getOrangeBlackBelt(0);
const greenWhiteBelt: BeltProps = ibjjf.getGreenWhiteBelt(0);
const greenBlackBelt: BeltProps = ibjjf.getGreenBlackBelt(0);
const redWhiteBelt: BeltProps = ibjjf.getRedWhiteBelt(8);
const redBelt: BeltProps = ibjjf.getRedBelt(9);

setInterval(function () {
  const newBelt = getRandomBelt(false, false, 0);
  newBelt.hasPatch = true;
  setBelt(randomBelt, newBelt);
}, 4000);
</script>

<template>
  <SVGBelt :belt-props="randomBelt" />
  <SVGBelt :belt-props="whiteBelt" />
  <SVGBelt :belt-props="grayWhiteBelt" />
  <SVGBelt :belt-props="grayBelt" />
  <SVGBelt :belt-props="grayBlackBelt" />
  <SVGBelt :belt-props="yellowWhiteBelt" />
  <SVGBelt :belt-props="yellowBelt" />
  <SVGBelt :belt-props="yellowBlackBelt" />
  <SVGBelt :belt-props="orangeWhiteBelt" />
  <SVGBelt :belt-props="orangeBelt" />
  <SVGBelt :belt-props="orangeBlackBelt" />
  <SVGBelt :belt-props="greenWhiteBelt" />
  <SVGBelt :belt-props="greenBelt" />
  <SVGBelt :belt-props="greenBlackBelt" />
  <SVGBelt :belt-props="blueBelt" />
  <SVGBelt :belt-props="purpleBelt" />
  <SVGBelt :belt-props="brownBelt" />
  <SVGBelt :belt-props="blackBelt" />
  <SVGBelt :belt-props="redBlackBelt" />
  <SVGBelt :belt-props="redWhiteBelt" />
  <SVGBelt :belt-props="redBelt" />
</template>

<style scoped></style>
