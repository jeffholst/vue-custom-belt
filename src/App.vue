<script setup lang="ts">
import SVGBelt from "./components/IconBelt.vue";
import type BeltProps from "./interfaces/BeltProps";
import { reactive } from "vue";

const beltProps: BeltProps = reactive({
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
});
</script>

<template>
  <SVGBelt :belt-props="beltProps" />
</template>

<style scoped></style>
