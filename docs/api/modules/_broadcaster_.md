**[estacion](../README.md)**

[Globals](../README.md) › [&quot;broadcaster&quot;](_broadcaster_.md)

# External module: "broadcaster"

## Index

### Classes

* [Broadcaster](../classes/_broadcaster_.broadcaster.md)

### Interfaces

* [EventPayload](../interfaces/_broadcaster_.eventpayload.md)

### Type aliases

* [Listener](_broadcaster_.md#listener)
* [Subscription](_broadcaster_.md#subscription)

## Type aliases

###  Listener

Ƭ **Listener**: *function*

*Defined in [broadcaster.ts:129](https://github.com/ivandotv/estacion/blob/718c68a/src/broadcaster.ts#L129)*

Listener interface for adding to Broadcaster.

#### Type declaration:

▸ (`event`: [EventPayload](../interfaces/_broadcaster_.eventpayload.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [EventPayload](../interfaces/_broadcaster_.eventpayload.md) |

___

###  Subscription

Ƭ **Subscription**: *function*

*Defined in [broadcaster.ts:134](https://github.com/ivandotv/estacion/blob/718c68a/src/broadcaster.ts#L134)*

Subscription interface that is used for unsubscribing the listener that was previously subscribed.

#### Type declaration:

▸ (): *void*