<script setup lang="ts">
import SVGBelt from "./components/IconBelt.vue";
import type BeltProps from "./types/BeltProps";
import { reactive } from "vue";
import * as ibjjf from "./shared/ibjjf";

const whiteBelt: BeltProps = reactive(ibjjf.getWhiteBelt(0));
const grayWhiteBelt: BeltProps = reactive(ibjjf.getGrayWhiteBelt(0));
const blueBelt: BeltProps = reactive(ibjjf.getBlueBelt(1));
const purpleBelt: BeltProps = reactive(ibjjf.getPurpleBelt(2));
const brownBelt: BeltProps = reactive(ibjjf.getBrownBelt(3));
const blackBelt: BeltProps = reactive(ibjjf.getBlackBelt(4));
const redBlackBelt: BeltProps = reactive(ibjjf.getRedBlackBelt(7));
</script>

<template>
  <SVGBelt :belt-props="redBlackBelt" />
  <SVGBelt :belt-props="grayWhiteBelt" />
  <SVGBelt :belt-props="whiteBelt" />
  <SVGBelt :belt-props="blueBelt" />
  <SVGBelt :belt-props="purpleBelt" />
  <SVGBelt :belt-props="brownBelt" />
  <SVGBelt :belt-props="blackBelt" />
</template>

<style scoped></style>
