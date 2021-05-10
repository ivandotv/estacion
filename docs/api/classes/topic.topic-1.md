[estacion](../README.md) / [topic](../modules/topic.md) / Topic

# Class: Topic

[topic](../modules/topic.md).Topic

Class that reperesents topic for the channel.

## Hierarchy

- [*Broadcaster*](broadcaster.broadcaster-1.md)

  ↳ **Topic**

## Table of contents

### Constructors

- [constructor](topic.topic-1.md#constructor)

### Properties

- [channel](topic.topic-1.md#channel)
- [emitter](topic.topic-1.md#emitter)

### Accessors

- [name](topic.topic-1.md#name)

### Methods

- [addListener](topic.topic-1.md#addlistener)
- [destroy](topic.topic-1.md#destroy)
- [emit](topic.topic-1.md#emit)
- [getEventEmitter](topic.topic-1.md#geteventemitter)
- [getMaxListeners](topic.topic-1.md#getmaxlisteners)
- [listenerCount](topic.topic-1.md#listenercount)
- [listeners](topic.topic-1.md#listeners)
- [off](topic.topic-1.md#off)
- [on](topic.topic-1.md#on)
- [once](topic.topic-1.md#once)
- [prependListener](topic.topic-1.md#prependlistener)
- [prependOnceListener](topic.topic-1.md#prependoncelistener)
- [rawListeners](topic.topic-1.md#rawlisteners)
- [removeAllListeners](topic.topic-1.md#removealllisteners)
- [removeListener](topic.topic-1.md#removelistener)
- [setMaxListeners](topic.topic-1.md#setmaxlisteners)

## Constructors

### constructor

\+ **new Topic**(`name`: *string*, `channel`: *string*, `maxListeners?`: *number*): [*Topic*](topic.topic-1.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | *string* | - | topic name |
| `channel` | *string* | - | channel this topic belongs to |
| `maxListeners` | *number* | 0 | maximum number of listeners allowed |

**Returns:** [*Topic*](topic.topic-1.md)

Overrides: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [topic.ts:7](https://github.com/ivandotv/estacion/blob/cb4a385/src/topic.ts#L7)

## Properties

### channel

• `Readonly` **channel**: *string*

Defined in: [topic.ts:7](https://github.com/ivandotv/estacion/blob/cb4a385/src/topic.ts#L7)

___

### emitter

• **emitter**: *EventEmitter*

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md).[emitter](broadcaster.broadcaster-1.md#emitter)

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

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [broadcaster.ts:54](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L54)

___

### destroy

▸ **destroy**(): *void*

Destroy the instance

**Returns:** *void*

Overrides: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [topic.ts:32](https://github.com/ivandotv/estacion/blob/cb4a385/src/topic.ts#L32)

___

### emit

▸ **emit**(`payload?`: *any*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | *any* |

**Returns:** *void*

Overrides: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [topic.ts:19](https://github.com/ivandotv/estacion/blob/cb4a385/src/topic.ts#L19)

___

### getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

Get the underlying [EventEmitter instance.](https://nodejs.org/api/events.html#events_class_eventemitter)

**Returns:** *EventEmitter*

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [broadcaster.ts:139](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L139)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

Get maximum number of listeners that can be registered.
[https://nodejs.org/api/events.html#events_emitter_getmaxlisteners](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners)

**Returns:** *number*

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [broadcaster.ts:122](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L122)

___

### listenerCount

▸ **listenerCount**(): *number*

Get total number of listeners that are registered.

**Returns:** *number*

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [broadcaster.ts:163](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L163)

___

### listeners

▸ **listeners**(): [*Listener*](../modules/broadcaster.md#listener)<any\>[]

Returna a copy of the array of listeners.

**Returns:** [*Listener*](../modules/broadcaster.md#listener)<any\>[]

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

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

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

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

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

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

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

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

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

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

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [broadcaster.ts:89](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L89)

___

### rawListeners

▸ **rawListeners**(): [*Listener*](../modules/broadcaster.md#listener)<any\>[]

Returns a copy of the array of listeners,
including any wrappers (such as those created by .once()).
[https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname](https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname)

**Returns:** [*Listener*](../modules/broadcaster.md#listener)<any\>[]

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [broadcaster.ts:155](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L155)

___

### removeAllListeners

▸ **removeAllListeners**(): *void*

Remove all listeners.

**Returns:** *void*

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

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

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

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

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [broadcaster.ts:131](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L131)
