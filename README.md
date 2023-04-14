<h1 align="center">
	<br>
	<br>
  <img src="https://jeffholst.github.io/svg-belt-demo/svg-belt-logo.svg" alt="svg-belt">
	<br>
	<br>
	<br>
</h1>

Vue 3 component to easily create any style martial arts belt in [SVG](https://en.wikipedia.org/wiki/SVG) format.

## Highlights

- Vite + Vue + TypeScript
- SVG vector images
- Predefine belts
- Random belt generator
- Clean and focused
- Actively maintained

## Install

```sh
npm install vue-custom-belt
```

## Usage

JavaScript

```js
// Get IBJJF White Belt
import { CustomBelt, BeltSystem, ibjjfJSON } from "vue-svg-belt";

const ibjjfSystem = new BeltSystem(ibjjfJSON);

const whiteBelt = ibjjfSystem.getBeltPropsByName("White", 0);
```

TypeScript

```ts
// Get IBJJF White Belt
import { CustomBelt, BeltProps, BeltSystem, ibjjfJSON } from "vue-svg-belt";

const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);

const whiteBelt: BeltProps[] = ibjjfSystem.getBeltPropsByName("White", 0);
```

Vue Component

```html
<template>
  <CustomBelt :beltProps="whiteBelt" />
</template>
```

## Predefined Belts

- [IBJJF Graduation System](https://ibjjf.com/graduation-system)
- more to come..
