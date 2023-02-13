<script setup lang="ts">
import SVGBelt from "./components/IconBelt.vue";
import type BeltProps from "./types/BeltProps";
import { reactive } from "vue";
import * as shared from "./shared/shared";

const whiteBelt: BeltProps = reactive(shared.getWhiteBelt(0));
const grayWhiteBelt: BeltProps = reactive(shared.getGrayWhiteBelt(0));
const blueBelt: BeltProps = reactive(shared.getBlueBelt(1));
const purpleBelt: BeltProps = reactive(shared.getPurpleBelt(2));
const brownBelt: BeltProps = reactive(shared.getBrownBelt(3));
const blackBelt: BeltProps = reactive(shared.getBlackBelt(4));
const redBlackBelt: BeltProps = reactive(shared.getRedBlackBelt(7));
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
