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
  <h1>{{ ibjjfSystem.title }}</h1>
  <div v-for="(belt, index) in ibjjfSystem.belts" :key="index">
    <h2>{{ belt.name }}</h2>
    <SVGBelt
      :belt-props="ibjjfSystem.getBeltProps(belt.name, belt.stripeCount)"
    />
  </div>
  <h1>Random Belts</h1>
  <div class="row">
    <div class="column">
      <div>
        <h2>Solid</h2>
        <SVGBelt :belt-props="randomSolid" />
      </div>
      <div>
        <h2>Split</h2>
        <SVGBelt :belt-props="randomSplit" />
      </div>
    </div>
    <div class="column">
      <div>
        <h2>Striped</h2>
        <SVGBelt :belt-props="randomStriped" />
      </div>
      <div>
        <h2>Checkered</h2>
        <SVGBelt :belt-props="randomCheckered" />
      </div>
    </div>
    <div class="column">
      <div>
        <h2>Coral</h2>
        <SVGBelt :belt-props="randomCoral" />
      </div>
      <div>
        <h2>Crazy</h2>
        <SVGBelt :belt-props="randomCrazy" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
