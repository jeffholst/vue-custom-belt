[vue-custom-belt](../README.md) / [Modules](../modules.md) / [BeltSystem](../modules/BeltSystem.md) / BeltSystem

# Class: BeltSystem

[BeltSystem](../modules/BeltSystem.md).BeltSystem

Class used to represent predefined belt systems

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

Instantiate a new BeltSystem object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `system` | `any` | belt system object to use |

#### Defined in

[BeltSystem.ts:31](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L31)

## Properties

### belts

• **belts**: [`Belt`](../interfaces/Belt.Belt.md)[]

belts in the system

#### Defined in

[BeltSystem.ts:25](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L25)

___

### colors

• **colors**: [`BeltColor`](../interfaces/Belt.BeltColor.md)[]

lookup table of friendly color names to hex codes

#### Defined in

[BeltSystem.ts:23](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L23)

___

### name

• **name**: `string`

name of belt system

#### Defined in

[BeltSystem.ts:15](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L15)

___

### refreshInterval

• **refreshInterval**: `number`

refresh interval in milliseconds

#### Defined in

[BeltSystem.ts:21](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L21)

___

### title

• **title**: `string`

title of belt system

#### Defined in

[BeltSystem.ts:17](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L17)

___

### transitionCSS

• **transitionCSS**: `string`

transition CSS

#### Defined in

[BeltSystem.ts:19](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L19)

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

[BeltSystem.ts:48](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L48)

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

[BeltSystem.ts:57](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L57)

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

[BeltSystem.ts:70](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L70)

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

[BeltSystem.ts:95](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L95)

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

[BeltSystem.ts:127](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L127)

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

[BeltSystem.ts:159](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L159)

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

[BeltSystem.ts:194](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L194)

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

[BeltSystem.ts:226](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L226)

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

[BeltSystem.ts:259](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L259)

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

[BeltSystem.ts:276](https://github.com/jeffholst/vue-custom-belt/blob/98d6c2b/src/BeltSystem.ts#L276)
