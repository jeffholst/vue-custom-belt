<script setup lang="ts">
import SVGBelt from "./components/IconBelt.vue";
import type { BeltProps } from "./types/BeltProps";
import { reactive } from "vue";
import { getRandomBelt, setBelt } from "./shared/shared";
import * as ibjjf from "./shared/ibjjf";

let randomBelt: BeltProps = reactive(getRandomBelt(false, false, 0));
const whiteBelt: BeltProps = reactive(ibjjf.getWhiteBelt(0));
const grayWhiteBelt: BeltProps = reactive(ibjjf.getGrayWhiteBelt(0));
const blueBelt: BeltProps = reactive(ibjjf.getBlueBelt(1));
const purpleBelt: BeltProps = reactive(ibjjf.getPurpleBelt(2));
const brownBelt: BeltProps = reactive(ibjjf.getBrownBelt(3));
const blackBelt: BeltProps = reactive(ibjjf.getBlackBelt(5));
const redBlackBelt: BeltProps = reactive(ibjjf.getRedBlackBelt(7));
const grayBelt: BeltProps = reactive(ibjjf.getGrayBelt(0));
const yellowBelt: BeltProps = reactive(ibjjf.getYellowBelt(0));
const orangeBelt: BeltProps = reactive(ibjjf.getOrangeBelt(0));
const greenBelt: BeltProps = reactive(ibjjf.getGreenBelt(0));
const grayBlackBelt: BeltProps = reactive(ibjjf.getGrayBlackBelt(0));
const yellowWhiteBelt: BeltProps = reactive(ibjjf.getYellowWhiteBelt(0));
const yellowBlackBelt: BeltProps = reactive(ibjjf.getYellowBlackBelt(0));
const orangeWhiteBelt: BeltProps = reactive(ibjjf.getOrangeWhiteBelt(0));
const orangeBlackBelt: BeltProps = reactive(ibjjf.getOrangeBlackBelt(0));
const greenWhiteBelt: BeltProps = reactive(ibjjf.getGreenWhiteBelt(0));
const greenBlackBelt: BeltProps = reactive(ibjjf.getGreenBlackBelt(0));
const redWhiteBelt: BeltProps = reactive(ibjjf.getRedWhiteBelt(8));
const redBelt: BeltProps = reactive(ibjjf.getRedBelt(0));

setInterval(function () {
  const newBelt = getRandomBelt(false, false, 0);
  newBelt.hasPatch = true;
  newBelt.patch = "#000000";
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
