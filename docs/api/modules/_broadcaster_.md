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

*Defined in [broadcaster.ts:208](https://github.com/ivandotv/estacion/blob/f5bf4b9/src/broadcaster.ts#L208)*

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

*Defined in [broadcaster.ts:213](https://github.com/ivandotv/estacion/blob/f5bf4b9/src/broadcaster.ts#L213)*

Subscription interface that is used for unsubscribing the listener that was previously subscribed.

#### Type declaration:

▸ (): *void*