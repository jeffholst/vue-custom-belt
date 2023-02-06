<script setup lang="ts">
import SVGBelt from "./components/IconBelt.vue";
import type BeltProps from "./types/BeltProps";
import { reactive } from "vue";
import * as shared from "./shared/shared";

//const beltProps: BeltProps = reactive(shared.getWhiteBelt(1));
const beltProps: BeltProps = reactive(shared.getBlueBelt(1));
//const beltProps: BeltProps = reactive(shared.getPurpleBelt(1));
//const beltProps: BeltProps = reactive(shared.getBrownBelt(1));
//const beltProps: BeltProps = reactive(shared.getBlackBelt(1));
</script>

<template>
  <SVGBelt :belt-props="beltProps" />
</template>

<style scoped></style>
