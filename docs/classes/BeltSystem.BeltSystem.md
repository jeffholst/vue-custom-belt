[vue-custom-belt](../README.md) / [Modules](../modules.md) / [BeltSystem](../modules/BeltSystem.md) / BeltSystem

# Class: BeltSystem

[BeltSystem](../modules/BeltSystem.md).BeltSystem

Class used to represent predefined belt systems

**`Param`**

name to give belt system

**`Param`**

title used for display purposes

**`Param`**

default transition css to use between belt changes

**`Param`**

default milliseconds to wait before changing belt

**`Param`**

array of BeltColor objects used to lookup hex colors by friendly name

**`Param`**

array of Belt objects contained in this belt system

## Table of contents

### Constructors

- [constructor](BeltSystem.BeltSystem.md#constructor)

### Properties

- [belts](BeltSystem.BeltSystem.md#belts)
- [colors](BeltSystem.BeltSystem.md#colors)
- [name](BeltSystem.BeltSystem.md#name)
- [refreshInterval](BeltSystem.BeltSystem.md#refreshinterval)
- [title](BeltSystem.BeltSystem.md#title)
- [transitionCSS](BeltSystem.BeltSystem.md#transitioncss)

### Methods

- [getBeltById](BeltSystem.BeltSystem.md#getbeltbyid)
- [getBeltByName](BeltSystem.BeltSystem.md#getbeltbyname)
- [getBeltProps](BeltSystem.BeltSystem.md#getbeltprops)
- [getBeltPropsAll](BeltSystem.BeltSystem.md#getbeltpropsall)
- [getBeltPropsById](BeltSystem.BeltSystem.md#getbeltpropsbyid)
- [getBeltPropsByIds](BeltSystem.BeltSystem.md#getbeltpropsbyids)
- [getBeltPropsByName](BeltSystem.BeltSystem.md#getbeltpropsbyname)
- [getBeltPropsByNames](BeltSystem.BeltSystem.md#getbeltpropsbynames)
- [getBeltsByIds](BeltSystem.BeltSystem.md#getbeltsbyids)
- [getBeltsByNames](BeltSystem.BeltSystem.md#getbeltsbynames)

## Constructors

### constructor

• **new BeltSystem**(`system`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `system` | `any` |

#### Defined in

[BeltSystem.ts:27](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L27)

## Properties

### belts

• **belts**: [`Belt`](../interfaces/Belt.Belt.md)[]

#### Defined in

[BeltSystem.ts:25](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L25)

___

### colors

• **colors**: [`BeltColor`](../interfaces/Belt.BeltColor.md)[]

#### Defined in

[BeltSystem.ts:24](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L24)

___

### name

• **name**: `string`

#### Defined in

[BeltSystem.ts:20](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L20)

___

### refreshInterval

• **refreshInterval**: `number`

#### Defined in

[BeltSystem.ts:23](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L23)

___

### title

• **title**: `string`

#### Defined in

[BeltSystem.ts:21](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L21)

___

### transitionCSS

• **transitionCSS**: `string`

#### Defined in

[BeltSystem.ts:22](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L22)

## Methods

### getBeltById

▸ **getBeltById**(`id`): [`Belt`](../interfaces/Belt.Belt.md)

Get a Belt by Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | belt id to find |

#### Returns

[`Belt`](../interfaces/Belt.Belt.md)

matching Belt or undefined

#### Defined in

[BeltSystem.ts:44](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L44)

___

### getBeltByName

▸ **getBeltByName**(`name`): [`Belt`](../interfaces/Belt.Belt.md)

Get a Belt by Name (case insensitive search)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | belt name to find |

#### Returns

[`Belt`](../interfaces/Belt.Belt.md)

matching Belt or undefined

#### Defined in

[BeltSystem.ts:53](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L53)

___

### getBeltProps

▸ **getBeltProps**(`belt`, `stripeCount`, `stripePosition?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)

Get BeltpProps for provided Belt object and stripe info

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `belt` | [`Belt`](../interfaces/Belt.Belt.md) | `undefined` | belt object to use |
| `stripeCount` | `number` | `undefined` | number of stripes to use (0-10) |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | stripe placement |
| `callback` | `Function` | `null` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)

BeltProps for provided Belt object and stripe info

#### Defined in

[BeltSystem.ts:66](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L66)

___

### getBeltPropsAll

▸ **getBeltPropsAll**(`transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get all BeltProps from the belt system

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transitionCSS` | `string` | `""` | transition css to use between belt changes. Empty for no effect |
| `refreshInterval` | `number` | `0` | milliseconds to wait before changing belt. 0 for no rotate |
| `callback` | `Function` | `null` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

all belts in the belt system

#### Defined in

[BeltSystem.ts:91](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L91)

___

### getBeltPropsById

▸ **getBeltPropsById**(`id`, `stripeCount?`, `stripePosition?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get BeltProps for matching belt id

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | belt id to find |
| `stripeCount` | `number` | `undefined` | number of stripes to use (0-10) |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | stripe placement (Right or Left) |
| `callback` | `Function` | `null` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps for matching belt name

#### Defined in

[BeltSystem.ts:123](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L123)

___

### getBeltPropsByIds

▸ **getBeltPropsByIds**(`ids`, `stripeCount?`, `stripePosition?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get BeltProps for matching belt ids

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ids` | `number`[] | `undefined` | ids of belts to return |
| `stripeCount` | `number` | `undefined` | the number of stripes to use |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | the stripe position to use |
| `transitionCSS` | `string` | `""` | transition css to use between belt changes |
| `refreshInterval` | `number` | `0` | milliseconds to wait before changing belt |
| `callback` | `Function` | `null` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] of matching belts

#### Defined in

[BeltSystem.ts:155](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L155)

___

### getBeltPropsByName

▸ **getBeltPropsByName**(`name`, `stripeCount?`, `stripePosition?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get BeltProps for matching belt name

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | belt name to find |
| `stripeCount` | `number` | `undefined` | number of stripes to use (0-10) |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | stripe placement (Right or Left) |
| `callback` | `Function` | `null` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps for matching belt name

#### Defined in

[BeltSystem.ts:190](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L190)

___

### getBeltPropsByNames

▸ **getBeltPropsByNames**(`names`, `stripeCount?`, `stripePosition?`, `transitionCSS?`, `refreshInterval?`, `callback?`): [`BeltProps`](../interfaces/Belt.BeltProps.md)[]

Get BeltProps for matching belt names

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `names` | `string`[] | `undefined` | names of belts to return |
| `stripeCount` | `number` | `undefined` | the number of stripes to use |
| `stripePosition` | [`StripePosition`](../enums/Belt.StripePosition.md) | `undefined` | the stripe position to use |
| `transitionCSS` | `string` | `""` | transition css to use between belt changes |
| `refreshInterval` | `number` | `0` | milliseconds to wait before changing belt |
| `callback` | `Function` | `null` | - |

#### Returns

[`BeltProps`](../interfaces/Belt.BeltProps.md)[]

BeltProps[] of matching belts

#### Defined in

[BeltSystem.ts:222](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L222)

___

### getBeltsByIds

▸ **getBeltsByIds**(`ids`): [`Belt`](../interfaces/Belt.Belt.md)[]

Get matching belts by ids

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `number`[] | ids of belts to return |

#### Returns

[`Belt`](../interfaces/Belt.Belt.md)[]

Belt[] of matching belts

#### Defined in

[BeltSystem.ts:255](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L255)

___

### getBeltsByNames

▸ **getBeltsByNames**(`names`): [`Belt`](../interfaces/Belt.Belt.md)[]

Get matching belts by names

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names` | `string`[] | names of belts to return |

#### Returns

[`Belt`](../interfaces/Belt.Belt.md)[]

Belt[] of matching belts

#### Defined in

[BeltSystem.ts:272](https://github.com/jeffholst/vue-custom-belt/blob/2e88ea1/src/BeltSystem.ts#L272)
