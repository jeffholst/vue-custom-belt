<script setup lang="ts">
import SVGBelt from "./components/SVGBelt.vue";
import type { BeltProps } from "./types/BeltProps";
import { reactive } from "vue";
import { getRandomBelt } from "./shared/shared";
import * as ibjjf from "./shared/ibjjf";

let randomCrazy: BeltProps = reactive(
  getRandomBelt(
    true,
    false,
    0,
    "transition: all 3.0s ease-in-out;",
    ["Crazy"],
    4000
  )
);

let randomCheckered: BeltProps = reactive(
  getRandomBelt(
    true,
    false,
    0,
    "transition: all 3.0s ease-in-out;",
    ["Checkered"],
    4000
  )
);

let randomSolid: BeltProps = reactive(
  getRandomBelt(
    true,
    false,
    0,
    "transition: all 3.0s ease-in-out;",
    ["Solid"],
    4000
  )
);

let randomStriped: BeltProps = reactive(
  getRandomBelt(
    true,
    false,
    0,
    "transition: all 3.0s ease-in-out;",
    ["Striped"],
    4000
  )
);

let randomCoral: BeltProps = reactive(
  getRandomBelt(
    true,
    false,
    0,
    "transition: all 3.0s ease-in-out;",
    ["Coral"],
    4000
  )
);

let randomSplit: BeltProps = reactive(
  getRandomBelt(
    true,
    false,
    0,
    "transition: all 3.0s ease-in-out;",
    ["Split"],
    4000
  )
);
const whiteBelt: BeltProps = ibjjf.getWhiteBelt(0);
const grayWhiteBelt: BeltProps = ibjjf.getGrayWhiteBelt(0);
const blueBelt: BeltProps = ibjjf.getBlueBelt(1);
const purpleBelt: BeltProps = ibjjf.getPurpleBelt(2);
const brownBelt: BeltProps = ibjjf.getBrownBelt(3);
const blackBelt: BeltProps = ibjjf.getBlackBelt(5);
const redBlackBelt: BeltProps = ibjjf.getRedBlackBelt(7);
const grayBelt: BeltProps = ibjjf.getGrayBelt(0);
const yellowBelt: BeltProps = ibjjf.getYellowBelt(0);
const orangeBelt: BeltProps = ibjjf.getOrangeBelt(0);
const greenBelt: BeltProps = ibjjf.getGreenBelt(0);
const grayBlackBelt: BeltProps = ibjjf.getGrayBlackBelt(0);
const yellowWhiteBelt: BeltProps = ibjjf.getYellowWhiteBelt(0);
const yellowBlackBelt: BeltProps = ibjjf.getYellowBlackBelt(0);
const orangeWhiteBelt: BeltProps = ibjjf.getOrangeWhiteBelt(0);
const orangeBlackBelt: BeltProps = ibjjf.getOrangeBlackBelt(0);
const greenWhiteBelt: BeltProps = ibjjf.getGreenWhiteBelt(0);
const greenBlackBelt: BeltProps = ibjjf.getGreenBlackBelt(0);
const redWhiteBelt: BeltProps = ibjjf.getRedWhiteBelt(8);
const redBelt: BeltProps = ibjjf.getRedBelt(9);
</script>

<template>
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
  <div>
    <h1>IBJJF Belts</h1>
    <h2>White</h2>
    <SVGBelt :belt-props="whiteBelt" />
    <h2>Gray/White</h2>
    <SVGBelt :belt-props="grayWhiteBelt" />
    <h2>Gray</h2>
    <SVGBelt :belt-props="grayBelt" />
    <h2>Gray/Black</h2>
    <SVGBelt :belt-props="grayBlackBelt" />
    <h2>Yellow/White</h2>
    <SVGBelt :belt-props="yellowWhiteBelt" />
    <h2>Yellow</h2>
    <SVGBelt :belt-props="yellowBelt" />
    <h2>Yellow/Black</h2>
    <SVGBelt :belt-props="yellowBlackBelt" />
    <h2>Orange/White</h2>
    <SVGBelt :belt-props="orangeWhiteBelt" />
    <h2>Orange</h2>
    <SVGBelt :belt-props="orangeBelt" />
    <h2>Orange/Black</h2>
    <SVGBelt :belt-props="orangeBlackBelt" />
    <h2>Green/White</h2>
    <SVGBelt :belt-props="greenWhiteBelt" />
    <h2>Green</h2>
    <SVGBelt :belt-props="greenBelt" />
    <h2>Green/Black</h2>
    <SVGBelt :belt-props="greenBlackBelt" />
    <h2>Blue (1 stripe)</h2>
    <SVGBelt :belt-props="blueBelt" />
    <h2>Purple (2 stripes)</h2>
    <SVGBelt :belt-props="purpleBelt" />
    <h2>Brown (3 stripes)</h2>
    <SVGBelt :belt-props="brownBelt" />
    <h2>Black (5 stripes)</h2>
    <SVGBelt :belt-props="blackBelt" />
    <h2>Red/Black (7 stripes)</h2>
    <SVGBelt :belt-props="redBlackBelt" />
    <h2>Red/White (8 stripes)</h2>
    <SVGBelt :belt-props="redWhiteBelt" />
    <h2>Red (9 stripes)</h2>
    <SVGBelt :belt-props="redBelt" />
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
