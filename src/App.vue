<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import SVGBelt from "./components/IconBelt.vue";
import type BeltProps from "./interfaces/BeltProps";
import { reactive } from "vue";

const beltProps: BeltProps = reactive({
  level: "1",
  message: "Hello Universe",
  id: "1",
});

const myClick = () => {
  beltProps.message = "Hello Galaxy";
};
</script>

<template>
  <HelloWorld :belt-props="beltProps" />
  <SVGBelt />
  <button @click="myClick">Click Me</button>
</template>

<style scoped></style>
