[estacion](../README.md) / [broadcaster](../modules/broadcaster.md) / Broadcaster

# Class: Broadcaster

[broadcaster](../modules/broadcaster.md).Broadcaster

Class that represents the parent class for `Channel` and `Topic` classes
It wrapps Node EventEmitter instance and exposes some of it's methods with
modified signatures.
[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)

## Hierarchy

- **Broadcaster**

  ↳ [*Channel*](channel.channel-1.md)

  ↳ [*Topic*](topic.topic-1.md)

## Table of contents

### Constructors

- [constructor](broadcaster.broadcaster-1.md#constructor)

### Properties

- [emitter](broadcaster.broadcaster-1.md#emitter)

### Accessors

- [name](broadcaster.broadcaster-1.md#name)

### Methods

- [addListener](broadcaster.broadcaster-1.md#addlistener)
- [destroy](broadcaster.broadcaster-1.md#destroy)
- [emit](broadcaster.broadcaster-1.md#emit)
- [getEventEmitter](broadcaster.broadcaster-1.md#geteventemitter)
- [getMaxListeners](broadcaster.broadcaster-1.md#getmaxlisteners)
- [listenerCount](broadcaster.broadcaster-1.md#listenercount)
- [listeners](broadcaster.broadcaster-1.md#listeners)
- [off](broadcaster.broadcaster-1.md#off)
- [on](broadcaster.broadcaster-1.md#on)
- [once](broadcaster.broadcaster-1.md#once)
- [prependListener](broadcaster.broadcaster-1.md#prependlistener)
- [prependOnceListener](broadcaster.broadcaster-1.md#prependoncelistener)
- [rawListeners](broadcaster.broadcaster-1.md#rawlisteners)
- [removeAllListeners](broadcaster.broadcaster-1.md#removealllisteners)
- [removeListener](broadcaster.broadcaster-1.md#removelistener)
- [setMaxListeners](broadcaster.broadcaster-1.md#setmaxlisteners)

## Constructors

### constructor

\+ **new Broadcaster**(`name`: *string*, `maxListeners?`: *number*): [*Broadcaster*](broadcaster.broadcaster-1.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | *string* | - | default event name |
| `maxListeners` | *number* | 0 | maximum number of allowed listeners 0 means unlimited |

**Returns:** [*Broadcaster*](broadcaster.broadcaster-1.md)

Defined in: [broadcaster.ts:21](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L21)

## Properties

### emitter

• **emitter**: *EventEmitter*

Defined in: [broadcaster.ts:19](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L19)

## Accessors

### name

• get **name**(): *string*

**Returns:** *string*

Defined in: [broadcaster.ts:36](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L36)

## Methods

### addListener

▸ **addListener**<T\>(`listener`: [*Listener*](../modules/broadcaster.md#listener)<T\>): [*Subscription*](../modules/broadcaster.md#subscription)

Add listener to the broadcaster.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | [*Listener*](../modules/broadcaster.md#listener)<T\> | to be added |

**Returns:** [*Subscription*](../modules/broadcaster.md#subscription)

function to remove the added listener

Defined in: [broadcaster.ts:54](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L54)

___

### destroy

▸ **destroy**(): *void*

Destroy the instance and remove all listeners.

**Returns:** *void*

Defined in: [broadcaster.ts:189](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L189)

___

### emit

▸ **emit**(`payload?`: [*EventPayload*](../interfaces/broadcaster.eventpayload.md)<any\>): *void*

Synchronously calls each of the listeners registered for the event named eventName,
 in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload?` | [*EventPayload*](../interfaces/broadcaster.eventpayload.md)<any\> | data to be passed to the listeners |

**Returns:** *void*

Defined in: [broadcaster.ts:45](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L45)

___

### getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

Get the underlying [EventEmitter instance.](https://nodejs.org/api/events.html#events_class_eventemitter)

**Returns:** *EventEmitter*

Defined in: [broadcaster.ts:139](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L139)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

Get maximum number of listeners that can be registered.
[https://nodejs.org/api/events.html#events_emitter_getmaxlisteners](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners)

**Returns:** *number*

Defined in: [broadcaster.ts:122](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L122)

___

### listenerCount

▸ **listenerCount**(): *number*

Get total number of listeners that are registered.

**Returns:** *number*

Defined in: [broadcaster.ts:163](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L163)

___

### listeners

▸ **listeners**(): [*Listener*](../modules/broadcaster.md#listener)<any\>[]

Returna a copy of the array of listeners.

**Returns:** [*Listener*](../modules/broadcaster.md#listener)<any\>[]

Defined in: [broadcaster.ts:146](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L146)

___

### off

▸ **off**(`listener`: [*Listener*](../modules/broadcaster.md#listener)<any\>): *void*

Alias for [Broadcaster.removeListener](broadcaster.broadcaster-1.md#removelistener)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | [*Listener*](../modules/broadcaster.md#listener)<any\> | listener to be removed |

**Returns:** *void*

Defined in: [broadcaster.ts:106](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L106)

___

### on

▸ **on**<T\>(`listener`: [*Listener*](../modules/broadcaster.md#listener)<T\>): [*Subscription*](../modules/broadcaster.md#subscription)

Alias of [Broadcaster.addListener](broadcaster.broadcaster-1.md#addlistener)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | [*Listener*](../modules/broadcaster.md#listener)<T\> | to be subscribed |

**Returns:** [*Subscription*](../modules/broadcaster.md#subscription)

function to unsubscribe the listener

Defined in: [broadcaster.ts:63](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L63)

___

### once

▸ **once**<T\>(`listener`: [*Listener*](../modules/broadcaster.md#listener)<T\>): [*Subscription*](../modules/broadcaster.md#subscription)

Add listener to be called only once.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [*Listener*](../modules/broadcaster.md#listener)<T\> |

**Returns:** [*Subscription*](../modules/broadcaster.md#subscription)

function to unsubscribe the listener

Defined in: [broadcaster.ts:80](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L80)

___

### prependListener

▸ **prependListener**<T\>(`listener`: [*Listener*](../modules/broadcaster.md#listener)<T\>): [*Subscription*](../modules/broadcaster.md#subscription)

Add listener to the beginning of the listener array
to be invoked first.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [*Listener*](../modules/broadcaster.md#listener)<T\> |

**Returns:** [*Subscription*](../modules/broadcaster.md#subscription)

function to unsubscribe the listener

Defined in: [broadcaster.ts:72](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L72)

___

### prependOnceListener

▸ **prependOnceListener**<T\>(`listener`: [*Listener*](../modules/broadcaster.md#listener)<T\>): [*Subscription*](../modules/broadcaster.md#subscription)

Add listener to the beginning of the listener array.
To be invoked first but only once.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [*Listener*](../modules/broadcaster.md#listener)<T\> |

**Returns:** [*Subscription*](../modules/broadcaster.md#subscription)

function to unsubscribe the listener

Defined in: [broadcaster.ts:89](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L89)

___

### rawListeners

▸ **rawListeners**(): [*Listener*](../modules/broadcaster.md#listener)<any\>[]

Returns a copy of the array of listeners,
including any wrappers (such as those created by .once()).
[https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname](https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname)

**Returns:** [*Listener*](../modules/broadcaster.md#listener)<any\>[]

Defined in: [broadcaster.ts:155](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L155)

___

### removeAllListeners

▸ **removeAllListeners**(): *void*

Remove all listeners.

**Returns:** *void*

Defined in: [broadcaster.ts:114](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L114)

___

### removeListener

▸ **removeListener**(`listener`: [*Listener*](../modules/broadcaster.md#listener)<any\>): *void*

Remove listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | [*Listener*](../modules/broadcaster.md#listener)<any\> | listerner to be removed |

**Returns:** *void*

Defined in: [broadcaster.ts:98](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L98)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): *void*

Set maximum number of listernes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | *number* | maximum number - 0 means unlimited |

**Returns:** *void*

Defined in: [broadcaster.ts:131](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L131)
