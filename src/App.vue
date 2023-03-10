<script setup lang="ts">
import SVGBelt from "./components/SVGBelt.vue";
import { BeltProps, BeltSystem } from "./types/BeltProps";
import { getRandomBelt } from "./shared/shared";
import ibjjfJSON from "./shared/ibjjf.json";

const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);

let randomCrazy: BeltProps = getRandomBelt(
  true,
  false,
  0,
  "transition: all 3.0s ease-in-out;",
  ["Crazy"],
  4000
);
let randomCheckered: BeltProps = getRandomBelt(
  true,
  false,
  0,
  "transition: all 3.0s ease-in-out;",
  ["Checkered"],
  4000
);

let randomSolid: BeltProps = getRandomBelt(
  true,
  false,
  0,
  "transition: all 3.0s ease-in-out;",
  ["Solid"],
  4000
);

let randomStriped: BeltProps = getRandomBelt(
  true,
  false,
  0,
  "transition: all 3.0s ease-in-out;",
  ["Striped"],
  4000
);

let randomCoral: BeltProps = getRandomBelt(
  true,
  false,
  0,
  "transition: all 3.0s ease-in-out;",
  ["Coral"],
  4000
);

let randomSplit: BeltProps = getRandomBelt(
  true,
  false,
  0,
  "transition: all 3.0s ease-in-out;",
  ["Split"],
  4000
);
</script>

<template>
  <section class="bg-white dark:bg-slate-800">
    <main class="mx-40 pt-20">
      <h1 class="text-2xl font-bold text-slate-800 dark:text-white pb-10">
        {{ ibjjfSystem.title }}
      </h1>
      <div class="columns-2">
        <div v-for="(belt, index) in ibjjfSystem.belts" :key="index">
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            {{ belt.name }}
          </h2>
          <SVGBelt
            :belt-props="ibjjfSystem.getBeltProps(belt.name, belt.stripeCount)"
          />
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
          <SVGBelt :belt-props="randomSolid" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Split
          </h2>
          <SVGBelt :belt-props="randomSplit" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Striped
          </h2>
          <SVGBelt :belt-props="randomStriped" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Checkered
          </h2>
          <SVGBelt :belt-props="randomCheckered" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Coral
          </h2>
          <SVGBelt :belt-props="randomCoral" />
        </div>
        <div>
          <h2 class="text-lg font-bold text-slate-800 dark:text-white py-5">
            Crazy
          </h2>
          <SVGBelt :belt-props="randomCrazy" />
        </div>
      </div>
    </main>
  </section>
</template>

<style scoped></style>
