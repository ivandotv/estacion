[estacion](../README.md) / [broadcaster](../modules/broadcaster.md) / EventPayload

# Interface: EventPayload<T\>

[broadcaster](../modules/broadcaster.md).EventPayload

Payload interface that is emitter from the events

## Type parameters

| Name | Default |
| :------ | :------ |
| `T` | *any* |

## Table of contents

### Properties

- [channel](broadcaster.eventpayload.md#channel)
- [payload](broadcaster.eventpayload.md#payload)
- [topic](broadcaster.eventpayload.md#topic)

## Properties

### channel

• **channel**: *string*

Channel name.

Defined in: [broadcaster.ts:201](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L201)

___

### payload

• `Optional` `Readonly` **payload**: T

Payload - custom data to pass to the listeners

Defined in: [broadcaster.ts:211](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L211)

___

### topic

• **topic**: *string*

Topic name.

Defined in: [broadcaster.ts:206](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L206)
