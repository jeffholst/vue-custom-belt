<script setup lang="ts">
import { ref } from "vue";
import CustomBelt from "./components/CustomBelt.vue";
import { BeltSystem } from "./BeltSystem";
import {
  BeltProps,
  BeltType,
  StripePosition,
  getBeltRandom,
  getBeltStriped,
  combineBeltProps,
  BeltCallbackType,
} from "./Belt";
import BeltSystemJSON_IBJJF from "./belt-systems/IBJJF.json";

const ibjjfSystem: BeltSystem = new BeltSystem(BeltSystemJSON_IBJJF);

const myCallback = (
  event: Event,
  callbackType: BeltCallbackType,
  beltProps: BeltProps,
  downloadCallback: Function
) => {
  if (callbackType === BeltCallbackType.DoubleClick) {
    if (downloadCallback && event) {
      downloadCallback(event);
    }
  } else if (callbackType === BeltCallbackType.Refresh) {
    flagBeltName.value = beltProps.belt.name;
  }
};

let randomCrazy: BeltProps[] = getBeltRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Crazy],
  4000
);

let randomCheckered: BeltProps[] = getBeltRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Checkered],
  4000
);

let randomSolid: BeltProps[] = getBeltRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Solid],
  4000
);

let randomStriped: BeltProps[] = getBeltRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Striped],
  4000
);

let randomCoral: BeltProps[] = getBeltRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Coral],
  4000
);

let randomSplit: BeltProps[] = getBeltRandom(
  true,
  false,
  0,
  undefined,
  "transition: all 3.0s ease-in-out;",
  [BeltType.Solid],
  4000
);

const usaBelt: BeltProps[] = getBeltStriped(
  1,
  "USA Belt",
  "#BF0A30",
  "#FFFFFF",
  "#002868",
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
  myCallback
);

const flagBeltName = ref(usaBelt[0].belt.name);

const MexicoBelt = getBeltStriped(
  2,
  "Mexico Belt",
  "#006847",
  "#FFFFFF",
  "#ce1127",
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
  myCallback
);

const flagBelts = combineBeltProps([usaBelt, MexicoBelt]);
</script>

<template>
  <section class="bg-white dark:bg-slate-800">
    <main class="mx-40 pt-20">
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white pb-10">
        Flag Belts ({{ flagBeltName }})
      </h1>
      <CustomBelt :belt-props="flagBelts" />
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white pb-10">
        All {{ ibjjfSystem.title }} belts (rotating)
      </h1>
      <CustomBelt
        :belt-props="
          ibjjfSystem.getBeltPropsAll('transition: all 3.0s ease-in-out;', 4000)
        "
      />
      <h1 class="pt-6 text-2xl font-bold text-slate-800 dark:text-white pb-10">
        All {{ ibjjfSystem.title }} belts
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
