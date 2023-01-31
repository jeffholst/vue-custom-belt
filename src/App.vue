<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import SVGBelt from "./components/IconBelt.vue";
import type BeltProps from "./interfaces/BeltProps";

const beltProps: BeltProps = {
  level: "1",
  message: "Hello World",
  id: "1",
};

console.log(beltProps);
</script>

<template>
  <HelloWorld msg="You did it!" />
  <SVGBelt />
</template>

<style scoped></style>
