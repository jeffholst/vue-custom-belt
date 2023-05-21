<script setup lang="ts">
import { ref } from "vue";
import CustomBelt from "./components/CustomBelt.vue";
import { BeltSystem } from "./BeltSystem";
import {
  BeltProps,
  BeltType,
  StripePosition,
  getBeltPropsRandom,
  getBeltPropsStriped,
  combineBeltProps,
  BeltCallbackType,
} from "./Belt";
import BeltSystemJSON_IBJJF from "./belt-systems/IBJJF.json";

const ibjjfSystem: BeltSystem = new BeltSystem(BeltSystemJSON_IBJJF);

let randomCrazy: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Crazy],
  4000
);

let randomCheckered: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Checkered],
  4000
);

let randomSolid: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Solid],
  4000
);

let randomStriped: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Striped],
  4000
);

let randomCoral: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Coral],
  4000
);

let randomSplit: BeltProps[] = getBeltPropsRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Split],
  4000
);

const flagBeltsCallback = (
  event: Event,
  callbackType: BeltCallbackType,
  bp: BeltProps
) => {
  if (callbackType === BeltCallbackType.Refresh) {
    flagBeltName.value = `${bp.belt.name as string}`;
  }
};

const usaBelt: BeltProps[] = getBeltPropsStriped(
  "USA Belt",
  "#BF0A30",
  "#FFFFFF",
  "#002868",
  1,
  "Black",
  true,
  "White",
  "Black",
  false,
  "",
  "",
  "",
  0,
  StripePosition.Right,
  0,
  4,
  "transition: all 2.0s ease;",
  3000,
  flagBeltsCallback
);

const flagBeltName = ref(usaBelt[0].belt.name);

const MexicoBelt = getBeltPropsStriped(
  "Mexico Belt",
  "#006847",
  "#FFFFFF",
  "#ce1127",
  2,
  "Black",
  true,
  "White",
  "Black",
  false,
  "",
  "",
  "",
  0,
  StripePosition.Right,
  0,
  4,
  "transition: all 2.0s ease;",
  3000,
  flagBeltsCallback
);

const flagBelts = combineBeltProps([usaBelt, MexicoBelt]);

const IBBJFBeltsCallback = (
  event: Event,
  callbackType: BeltCallbackType,
  beltProps: BeltProps
) => {
  if (callbackType === BeltCallbackType.Refresh) {
    ibjjBeltName.value = beltProps.belt.name;
  }
};

const allIBJJBelts: BeltProps[] = ibjjfSystem.getBeltPropsAll(
  "transition: all 3.0s ease-in-out;",
  4000,
  IBBJFBeltsCallback
);

const ibjjBeltName = ref(allIBJJBelts[0].belt.name);
</script>

<template>
  <section class="bg-white dark:bg-slate-800">
    <main class="mx-40 pt-20">
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white pb-10">
        Flag Belts ({{ flagBeltName }})
      </h1>
      <CustomBelt :belt-props="flagBelts" />
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white pb-10">
        {{ ibjjfSystem.title }} Belts ({{ ibjjBeltName }})
      </h1>
      <CustomBelt :belt-props="allIBJJBelts" />
      <h1 class="pt-6 text-2xl font-bold text-slate-800 dark:text-white pb-10">
        {{ ibjjfSystem.title }} Belts
      </h1>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(belt, index) in ibjjfSystem.belts" :key="index">
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            {{ belt.name }}
          </h2>
          <CustomBelt :belt-props="ibjjfSystem.getBeltPropsByName(belt.name)" />
        </div>
      </div>
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white py-10">
        Random Belts
      </h1>
      <div class="columns-3">
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Solid
          </h2>
          <CustomBelt :belt-props="randomSolid" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Split
          </h2>
          <CustomBelt :belt-props="randomSplit" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Striped
          </h2>
          <CustomBelt :belt-props="randomStriped" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Checkered
          </h2>
          <CustomBelt :belt-props="randomCheckered" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Coral
          </h2>
          <CustomBelt :belt-props="randomCoral" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Crazy
          </h2>
          <CustomBelt :belt-props="randomCrazy" />
        </div>
      </div>
    </main>
  </section>
</template>

<style scoped></style>
