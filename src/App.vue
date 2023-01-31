<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import SVGBelt from "./components/IconBelt.vue";
import type BeltProps from "./interfaces/BeltProps";
import { reactive, watch } from "vue";

const beltProps: BeltProps = reactive({
  level: "1",
  message: "Hello World",
  id: "1",
});

watch(beltProps, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

const myClick = () => {
  beltProps.message = "Hello World 2";
};
</script>

<template>
  <HelloWorld msg="You did it!" />
  <SVGBelt />
  <button @click="myClick">Click Me</button>
</template>

<style scoped></style>
