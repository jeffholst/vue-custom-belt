[vue-custom-belt](../README.md) / [Modules](../modules.md) / Belt

# Module: Belt

## Table of contents

### Enumerations

- [BeltCallbackType](../enums/Belt.BeltCallbackType.md)
- [BeltType](../enums/Belt.BeltType.md)
- [BeltTypeStandard](../enums/Belt.BeltTypeStandard.md)
- [StripePosition](../enums/Belt.StripePosition.md)

### Interfaces

- [Belt](../interfaces/Belt.Belt.md)
- [BeltColor](../interfaces/Belt.BeltColor.md)
- [BeltProps](../interfaces/Belt.BeltProps.md)
- [BeltRDF](../interfaces/Belt.BeltRDF.md)
- [RandomSettings](../interfaces/Belt.RandomSettings.md)

### Variables

- [DefaultColor](Belt.md#defaultcolor)
- [MaximumStripeCount](Belt.md#maximumstripecount)
- [MinimumStripeCount](Belt.md#minimumstripecount)
- [StripePositionDefault](Belt.md#stripepositiondefault)

### Functions

- [combineBeltProps](Belt.md#combinebeltprops)
- [getBelt](Belt.md#getbelt)
- [getBeltColorCount](Belt.md#getbeltcolorcount)
- [getBeltProps](Belt.md#getbeltprops)
- [getBeltPropsCheckered](Belt.md#getbeltpropscheckered)
- [getBeltPropsCoral](Belt.md#getbeltpropscoral)
- [getBeltPropsFromBelt](Belt.md#getbeltpropsfrombelt)
- [getBeltPropsRandom](Belt.md#getbeltpropsrandom)
- [getBeltPropsSolid](Belt.md#getbeltpropssolid)
- [getBeltPropsSplit](Belt.md#getbeltpropssplit)
- [getBeltPropsStriped](Belt.md#getbeltpropsstriped)
- [getBeltRDF](Belt.md#getbeltrdf)
- [isValidHexCode](Belt.md#isvalidhexcode)
- [mapBeltColor](Belt.md#mapbeltcolor)
- [mapBeltColors](Belt.md#mapbeltcolors)

## Variables

### DefaultColor

• `Const` **DefaultColor**: ``"#FF0000"``

Default color when no color provided

#### Defined in

[Belt.ts:225](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L225)

___

### MaximumStripeCount

• `Const` **MaximumStripeCount**: ``10``

maximum number of stripes a belt may have

#### Defined in

[Belt.ts:227](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L227)

___

### MinimumStripeCount

• `Const` **MinimumStripeCount**: ``0``

minimum number of stripes

#### Defined in

[Belt.ts:229](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L229)

___

### StripePositionDefault

• `Const` **StripePositionDefault**: [`Right`](../enums/Belt.StripePosition.md#right) = `StripePosition.Right`

default stripe position

#### Defined in

[Belt.ts:231](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L231)

## Functions

### combineBeltProps

▸ **combineBeltProps**(`beltProps`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Combine multiple BropProps arrays into a single array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beltProps` | [`BeltProps`](../interfaces/Belt.BeltProps.md)[][] | array of BeltProp arrays |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

combined array of BeltProps

#### Defined in

[Belt.ts:246](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L246)

___

### getBelt

▸ **getBelt**(`id?`, `name?`, `type?`, `sortOrder?`, `color1?`, `color2?`, `color3?`, `borderColor?`, `hasPatch?`, `patchColor?`, `patchBorderColor?`, `hasProfessorPatch?`, `professorPatchColor?`, `professorBorderColor?`, `stripeColor?`, `stripeCount?`, `stripePosition?`, `minStripes?`, `maxStripes?`): [`Belt`](../interfaces/Belt.Belt.md)

Create new Belt object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `0` | unique identifier for belt |
| `name` | `string` | `""` | name of belt |
| `type` | [`BeltType`](../enums/Belt.BeltType.md) | `BeltType.Solid` | type of belt |
| `sortOrder` | `number` | `0` | used for sorting belts for display |
| `color1` | `string` | `""` | hex value for belt color 1 |
| `color2` | `string` | `""` | hex value for belt color 2 |
| `color3` | `string` | `""` | hex value for belt color 3 |
| `borderColor` | `string` | `""` | hex value for belt border color |
| `hasPatch` | `boolean` | `false` | whether belt has patch or not |
| `patchColor` | `string` | `""` | hex value for patch color |
| `patchBorderColor` | `string` | `""` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `false` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `""` | hex value for professor patch color |
| `professorBorderColor` | `string` | `""` | hex value for professor patch border color |
| `stripeColor` | `string` | `""` | hex value for stripe color |
| `stripeCount` | `number` | `0` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `StripePositionDefault` | starting position of stripes on belt |
| `minStripes` | `number` | `MinimumStripeCount` | minimum number of stripes for belt |
| `maxStripes` | `number` | `MaximumStripeCount` | maximum number of stripes for belt |

#### Returns

[`Belt`](../interfaces/Belt.Belt.md)

Belt object

#### Defined in

[Belt.ts:277](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L277)

___

### getBeltColorCount

▸ **getBeltColorCount**(`bType`): `number`

Get number of colors in BeltType [1-3]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bType` | [`BeltType`](../enums/Belt.BeltType.md) | BeltType |

#### Returns

`number`

number of colors in BeltType

#### Defined in

[Belt.ts:332](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L332)

___

### getBeltProps

▸ **getBeltProps**(`id`, `name`, `beltType`, `color1`, `color2`, `color3`, `borderColor`, `hasPatch`, `patchColor`, `patchBorderColor`, `hasProfessorPatch`, `professorPatchColor`, `professorBorderColor`, `stripeColor`, `stripeCount`, `stripePosition`, `minStripes`, `maxStripes`, `transitionCSS`, `refreshInterval`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | unique identifier for belt |
| `name` | `string` | `undefined` | name of belt |
| `beltType` | [`BeltType`](../enums/Belt.BeltType.md) | `undefined` | - |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 2 |
| `color3` | `string` | `undefined` | - |
| `borderColor` | `string` | `undefined` | hex value for belt border color |
| `hasPatch` | `boolean` | `undefined` | whether belt has patch or not |
| `patchColor` | `string` | `undefined` | hex value for patch color |
| `patchBorderColor` | `string` | `undefined` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `undefined` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `undefined` | hex value for professor patch color |
| `professorBorderColor` | `string` | `undefined` | hex value for professor patch border color |
| `stripeColor` | `string` | `undefined` | hex value for stripe color |
| `stripeCount` | `number` | `undefined` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | starting position of stripes on belt |
| `minStripes` | `number` | `undefined` | minimum number of stripes for belt |
| `maxStripes` | `number` | `undefined` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `undefined` | CSS for transition animation |
| `refreshInterval` | `number` | `undefined` | interval for refreshing belt in milliseconds |
| `callback` | `Function` | `null` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:377](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L377)

___

### getBeltPropsCheckered

▸ **getBeltPropsCheckered**(`id`, `name`, `color1`, `color2`, `borderColor`, `hasPatch`, `patchColor`, `patchBorderColor`, `hasProfessorPatch`, `professorPatchColor`, `professorBorderColor`, `stripeColor`, `stripeCount`, `stripePosition`, `minStripes`, `maxStripes`, `transitionCSS`, `refreshInterval`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Checkered BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | unique identifier for belt |
| `name` | `string` | `undefined` | name of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 2 |
| `borderColor` | `string` | `undefined` | hex value for belt border color |
| `hasPatch` | `boolean` | `undefined` | whether belt has patch or not |
| `patchColor` | `string` | `undefined` | hex value for patch color |
| `patchBorderColor` | `string` | `undefined` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `undefined` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `undefined` | hex value for professor patch color |
| `professorBorderColor` | `string` | `undefined` | hex value for professor patch border color |
| `stripeColor` | `string` | `undefined` | hex value for stripe color |
| `stripeCount` | `number` | `undefined` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | starting position of stripes on belt |
| `minStripes` | `number` | `undefined` | minimum number of stripes for belt |
| `maxStripes` | `number` | `undefined` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `undefined` | CSS for transition animation |
| `refreshInterval` | `number` | `undefined` | interval for refreshing belt in milliseconds |
| `callback` | `Function` | `null` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:460](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L460)

___

### getBeltPropsCoral

▸ **getBeltPropsCoral**(`id`, `name`, `color1`, `color2`, `borderColor`, `hasPatch`, `patchColor`, `patchBorderColor`, `hasProfessorPatch`, `professorPatchColor`, `professorBorderColor`, `stripeColor`, `stripeCount`, `stripePosition`, `minStripes`, `maxStripes`, `transitionCSS`, `refreshInterval`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Coral BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | unique identifier for belt |
| `name` | `string` | `undefined` | name of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 2 |
| `borderColor` | `string` | `undefined` | hex value for belt border color |
| `hasPatch` | `boolean` | `undefined` | whether belt has patch or not |
| `patchColor` | `string` | `undefined` | hex value for patch color |
| `patchBorderColor` | `string` | `undefined` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `undefined` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `undefined` | hex value for professor patch color |
| `professorBorderColor` | `string` | `undefined` | hex value for professor patch border color |
| `stripeColor` | `string` | `undefined` | hex value for stripe color |
| `stripeCount` | `number` | `undefined` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | starting position of stripes on belt |
| `minStripes` | `number` | `undefined` | minimum number of stripes for belt |
| `maxStripes` | `number` | `undefined` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `undefined` | CSS for transition animation |
| `refreshInterval` | `number` | `undefined` | interval for refreshing belt in milliseconds |
| `callback` | `Function` | `null` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:529](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L529)

___

### getBeltPropsFromBelt

▸ **getBeltPropsFromBelt**(`belt`, `stripeCount`, `stripePosition`, `transitionCSS`, `refreshInterval`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)

Create new BeltProps[] array deom Belt object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `belt` | [`Belt`](../interfaces/Belt.Belt.md) | `undefined` | Belt object to create BeltProps[] array from |
| `stripeCount` | `number` | `undefined` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | starting position of stripes on belt patch |
| `transitionCSS` | `string` | `undefined` | CSS for transition animation |
| `refreshInterval` | `number` | `undefined` | interval in milliseconds before displaying next belt |
| `callback` | `Function` | `null` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)

BeltProps[] array

#### Defined in

[Belt.ts:585](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L585)

___

### getBeltPropsRandom

▸ **getBeltPropsRandom**(`hasPatch?`, `hasProfessorPatch?`, `stripeCount?`, `stripePosition?`, `transitionCSS?`, `includeBelts?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new random BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `hasPatch` | `boolean` | `undefined` | whether belt has a patch |
| `hasProfessorPatch` | `boolean` | `undefined` | whether belt has a professor patch |
| `stripeCount` | `number` | `undefined` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | starting position of streips on belt patch |
| `transitionCSS` | `string` | `""` | CSS for transition animation |
| `includeBelts` | [`BeltType`](../enums/Belt.BeltType.md)[] | `[]` | array of BeltTyps to include in random selection |
| `refreshInterval` | `number` | `0` | interval in milliseconds before displaying next belt |
| `callback` | `Function` | `null` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Belt object

#### Defined in

[Belt.ts:735](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L735)

___

### getBeltPropsSolid

▸ **getBeltPropsSolid**(`id`, `name`, `color`, `borderColor`, `hasPatch`, `patchColor`, `patchBorderColor`, `hasProfessorPatch`, `professorPatchColor`, `professorBorderColor`, `stripeColor`, `stripeCount`, `stripePosition`, `minStripes`, `maxStripes`, `transitionCSS`, `refreshInterval`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Solid BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | unique identifier for belt |
| `name` | `string` | `undefined` | name of belt |
| `color` | `string` | `undefined` | hex value for belt color 1 |
| `borderColor` | `string` | `undefined` | hex value for belt border color |
| `hasPatch` | `boolean` | `undefined` | whether belt has patch or not |
| `patchColor` | `string` | `undefined` | hex value for patch color |
| `patchBorderColor` | `string` | `undefined` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `undefined` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `undefined` | hex value for professor patch color |
| `professorBorderColor` | `string` | `undefined` | hex value for professor patch border color |
| `stripeColor` | `string` | `undefined` | hex value for stripe color |
| `stripeCount` | `number` | `undefined` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | starting position of stripes on belt |
| `minStripes` | `number` | `undefined` | minimum number of stripes for belt |
| `maxStripes` | `number` | `undefined` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `undefined` | CSS for transition animation |
| `refreshInterval` | `number` | `undefined` | interval for refreshing belt in milliseconds |
| `callback` | `Function` | `null` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:870](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L870)

___

### getBeltPropsSplit

▸ **getBeltPropsSplit**(`id`, `name`, `color1`, `color2`, `borderColor`, `hasPatch`, `patchColor`, `patchBorderColor`, `hasProfessorPatch`, `professorPatchColor`, `professorBorderColor`, `stripeColor`, `stripeCount`, `stripePosition`, `minStripes`, `maxStripes`, `transitionCSS`, `refreshInterval`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Split BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | unique identifier for belt |
| `name` | `string` | `undefined` | name of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 1 |
| `borderColor` | `string` | `undefined` | hex value for belt border color |
| `hasPatch` | `boolean` | `undefined` | whether belt has patch or not |
| `patchColor` | `string` | `undefined` | hex value for patch color |
| `patchBorderColor` | `string` | `undefined` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `undefined` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `undefined` | hex value for professor patch color |
| `professorBorderColor` | `string` | `undefined` | hex value for professor patch border color |
| `stripeColor` | `string` | `undefined` | hex value for stripe color |
| `stripeCount` | `number` | `undefined` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | starting position of stripes on belt |
| `minStripes` | `number` | `undefined` | minimum number of stripes for belt |
| `maxStripes` | `number` | `undefined` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `undefined` | CSS for transition animation |
| `refreshInterval` | `number` | `undefined` | interval for refreshing belt in milliseconds |
| `callback` | `Function` | `null` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:938](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L938)

___

### getBeltPropsStriped

▸ **getBeltPropsStriped**(`id`, `name`, `color1`, `color2`, `color3`, `borderColor`, `hasPatch`, `patchColor`, `patchBorderColor`, `hasProfessorPatch`, `professorPatchColor`, `professorBorderColor`, `stripeColor`, `stripeCount`, `stripePosition`, `minStripes`, `maxStripes`, `transitionCSS`, `refreshInterval`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Create new Striped BeltProps[] array

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | unique identifier for belt |
| `name` | `string` | `undefined` | name of belt |
| `color1` | `string` | `undefined` | hex value for belt color 1 |
| `color2` | `string` | `undefined` | hex value for belt color 1 |
| `color3` | `string` | `undefined` | hex value for belt color 1 |
| `borderColor` | `string` | `undefined` | hex value for belt border color |
| `hasPatch` | `boolean` | `undefined` | whether belt has patch or not |
| `patchColor` | `string` | `undefined` | hex value for patch color |
| `patchBorderColor` | `string` | `undefined` | hex value for patch border color |
| `hasProfessorPatch` | `boolean` | `undefined` | whether belt has professor patch or not |
| `professorPatchColor` | `string` | `undefined` | hex value for professor patch color |
| `professorBorderColor` | `string` | `undefined` | hex value for professor patch border color |
| `stripeColor` | `string` | `undefined` | hex value for stripe color |
| `stripeCount` | `number` | `undefined` | number of stripes for belt [0-10] |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | starting position of stripes on belt |
| `minStripes` | `number` | `undefined` | minimum number of stripes for belt |
| `maxStripes` | `number` | `undefined` | maximum number of stripes for belt |
| `transitionCSS` | `string` | `undefined` | CSS for transition animation |
| `refreshInterval` | `number` | `undefined` | interval for refreshing belt in milliseconds |
| `callback` | `Function` | `null` | callback function to call after belt actions |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] array

#### Defined in

[Belt.ts:1008](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L1008)

___

### getBeltRDF

▸ **getBeltRDF**(`belt`, `about?`): [`BeltRDF`](../interfaces/Belt.BeltRDF.md)

Create new BeltRDF object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `belt` | [`Belt`](../interfaces/Belt.Belt.md) | `undefined` | belt object |
| `about` | `string` | `undefined` | about URL value |

#### Returns

[`BeltRDF`](../interfaces/Belt.BeltRDF.md)

BeltRDF object

#### Defined in

[Belt.ts:1061](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L1061)

___

### isValidHexCode

▸ **isValidHexCode**(`str`): `boolean`

Check for valid hex code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | about URL value |

#### Returns

`boolean`

true if valid hex code, false otherwise

#### Defined in

[Belt.ts:1078](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L1078)

___

### mapBeltColor

▸ **mapBeltColor**(`color`, `colors`): `string`

Return hex code from BeltColor[] for color name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | color name to lookup |
| `colors` | [`BeltColor`](../interfaces/Belt.BeltColor.md)[] | BeltColor[] lookup array |

#### Returns

`string`

found hex code or original color name

#### Defined in

[Belt.ts:1101](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L1101)

___

### mapBeltColors

▸ **mapBeltColors**(`belts`, `colors`): `void`

Attempt to map all belt color names in all Belt array object to hex codes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `belts` | [`Belt`](../interfaces/Belt.Belt.md)[] | belt object |
| `colors` | [`BeltColor`](../interfaces/Belt.BeltColor.md)[] | BeltColor[] lookup array |

#### Returns

`void`

#### Defined in

[Belt.ts:1126](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/Belt.ts#L1126)
