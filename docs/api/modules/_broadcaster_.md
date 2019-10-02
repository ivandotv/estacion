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

*Defined in [broadcaster.ts:215](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L215)*

Listener interface for adding to Broadcaster.

#### Type declaration:

▸ (`event`: [EventPayload](../interfaces/_broadcaster_.eventpayload.md)‹T›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [EventPayload](../interfaces/_broadcaster_.eventpayload.md)‹T› |

___

###  Subscription

Ƭ **Subscription**: *function*

*Defined in [broadcaster.ts:220](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L220)*

Subscription interface that is used for unsubscribing the listener that was previously subscribed.

#### Type declaration:

▸ (): *void*