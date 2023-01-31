<script setup lang="ts">
import type BeltProps from "../interfaces/BeltProps";
const props = defineProps<{
  beltProps: BeltProps;
}>()
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ props.beltProps.message }}</h1>
</template>

<style scoped></style>
