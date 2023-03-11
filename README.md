<h1 align="center">
	<br>
	<br>
	<img width="320" src="src/assets/svg-belt-logo.svg" alt="SVG-BELT">
	<br>
	<br>
	<br>
</h1>

Vue 3 component to easily create any style martial arts belt in [SVG](https://en.wikipedia.org/wiki/SVG) format.

## Highlights

- Expressive API
- Highly performant
- No dependencies
- Ability to nest styles
- [256/Truecolor color support](#256-and-truecolor-color-support)
- Auto-detects color support
- Doesn't extend `String.prototype`
- Clean and focused
- Actively maintained
- [Used by ~86,000 packages](https://www.npmjs.com/browse/depended/chalk) as of October 4, 2022

## Install

```sh
npm install svg-belt
```

**IMPORTANT:** Chalk 5 is ESM. If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now. [Read more.](https://github.com/chalk/chalk/releases/tag/v5.0.0)

## Usage

```js
<script setup lang="ts">
   import {SVGBelt, BeltProps, BeltSystem, ibjjfJSON} from 'svg-belt'

   const ibjjfSystem: BeltSystem = new BeltSystem(ibjjfJSON);

   const whiteBelt: BeltProps[] = ibjjfSystem.getBeltPropsByName("White", 0);
</script>

<template>
   <SVGBelt :beltProps="whiteBelt" />
</template>
```

Chalk comes with an easy to use composable API where you just chain and nest the styles you want.

```js
import chalk from "chalk";

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// ES2015 template literal
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold("Bold gray!"));
```

Easily define your own themes:

```js
import chalk from "chalk";

const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); // Orange color

console.log(error("Error!"));
console.log(warning("Warning!"));
```

Take advantage of console.log [string substitution](https://nodejs.org/docs/latest/api/console.html#console_console_log_data_args):

```js
import chalk from "chalk";

const name = "Sindre";
console.log(chalk.green("Hello %s"), name);
//=> 'Hello Sindre'
```
