@vanih/cerebro-contracts

# @vanih/cerebro-contracts

## Table of contents

### Type Aliases

- [BaseItem](README.md#baseitem)
- [FrontItem](README.md#frontitem)
- [ImageData](README.md#imagedata)
- [ImageItem](README.md#imageitem)
- [VideoData](README.md#videodata)
- [VideoItem](README.md#videoitem)

### Variables

- [ItemType](README.md#itemtype)

## Type Aliases

### BaseItem

Ƭ **BaseItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt` | `string` |
| `gridSpan` | ``"wide"`` \| ``"tall"`` \| ``null`` |
| `icon` | `string` \| ``null`` |
| `id` | `number` |
| `isMine` | `boolean` |
| `private` | `boolean` |
| `size` | `number` |
| `thumbnail` | `string` \| ``null`` |

#### Defined in

[types.ts:22](https://github.com/Angael/cerebro-contracts/blob/28ded69/src/types.ts#L22)

___

### FrontItem

Ƭ **FrontItem**: [`ImageItem`](README.md#imageitem) \| [`VideoItem`](README.md#videoitem)

#### Defined in

[types.ts:44](https://github.com/Angael/cerebro-contracts/blob/28ded69/src/types.ts#L44)

___

### ImageData

Ƭ **ImageData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `animated` | `boolean` |
| `height` | `number` |
| `src` | `string` |
| `width` | `number` |

#### Defined in

[types.ts:15](https://github.com/Angael/cerebro-contracts/blob/28ded69/src/types.ts#L15)

___

### ImageItem

Ƭ **ImageItem**: { `image?`: [`ImageData`](README.md#imagedata) ; `type`: typeof [`IMAGE`](README.md#image)  } & [`BaseItem`](README.md#baseitem)

#### Defined in

[types.ts:34](https://github.com/Angael/cerebro-contracts/blob/28ded69/src/types.ts#L34)

___

### VideoData

Ƭ **VideoData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bitrateKb` | `number` |
| `durationMs` | `number` |
| `height` | `number` |
| `src` | `string` |
| `width` | `number` |

#### Defined in

[types.ts:7](https://github.com/Angael/cerebro-contracts/blob/28ded69/src/types.ts#L7)

___

### VideoItem

Ƭ **VideoItem**: { `type`: typeof [`VIDEO`](README.md#video) ; `video?`: [`VideoData`](README.md#videodata)  } & [`BaseItem`](README.md#baseitem)

#### Defined in

[types.ts:39](https://github.com/Angael/cerebro-contracts/blob/28ded69/src/types.ts#L39)

## Variables

### ItemType

• `Const` **ItemType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IMAGE` | ``"IMAGE"`` |
| `VIDEO` | ``"VIDEO"`` |

#### Defined in

[types.ts:2](https://github.com/Angael/cerebro-contracts/blob/28ded69/src/types.ts#L2)
