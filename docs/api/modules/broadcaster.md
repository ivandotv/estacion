[estacion](../README.md) / broadcaster

# Module: broadcaster

## Table of contents

### Classes

- [Broadcaster](../classes/broadcaster.broadcaster-1.md)

### Interfaces

- [EventPayload](../interfaces/broadcaster.eventpayload.md)

### Type aliases

- [Listener](broadcaster.md#listener)
- [Subscription](broadcaster.md#subscription)

## Type aliases

### Listener

Ƭ **Listener**<T\>: (`event`: [*EventPayload*](../interfaces/broadcaster.eventpayload.md)<T\>) => *void*

Listener interface for adding to Broadcaster.

#### Type parameters

| Name | Default |
| :------ | :------ |
| `T` | *any* \| *undefined* |

#### Type declaration

▸ (`event`: [*EventPayload*](../interfaces/broadcaster.eventpayload.md)<T\>): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [*EventPayload*](../interfaces/broadcaster.eventpayload.md)<T\> |

**Returns:** *void*

Defined in: [broadcaster.ts:217](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L217)

___

### Subscription

Ƭ **Subscription**: () => *void*

Subscription interface that is used for unsubscribing the listener that was previously subscribed.

#### Type declaration

▸ (): *void*

**Returns:** *void*

Defined in: [broadcaster.ts:222](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L222)
