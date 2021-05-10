[estacion](../README.md) / [channel](../modules/channel.md) / Channel

# Class: Channel

[channel](../modules/channel.md).Channel

Class that represents a channel for broadcasting via EventBus.

## Hierarchy

- [*Broadcaster*](broadcaster.broadcaster-1.md)

  ↳ **Channel**

## Table of contents

### Constructors

- [constructor](channel.channel-1.md#constructor)

### Properties

- [emitter](channel.channel-1.md#emitter)
- [topics](channel.channel-1.md#topics)

### Accessors

- [name](channel.channel-1.md#name)

### Methods

- [addListener](channel.channel-1.md#addlistener)
- [destroy](channel.channel-1.md#destroy)
- [emit](channel.channel-1.md#emit)
- [getAllTopics](channel.channel-1.md#getalltopics)
- [getEventEmitter](channel.channel-1.md#geteventemitter)
- [getMaxListeners](channel.channel-1.md#getmaxlisteners)
- [hasTopic](channel.channel-1.md#hastopic)
- [listenerCount](channel.channel-1.md#listenercount)
- [listeners](channel.channel-1.md#listeners)
- [off](channel.channel-1.md#off)
- [on](channel.channel-1.md#on)
- [once](channel.channel-1.md#once)
- [prependListener](channel.channel-1.md#prependlistener)
- [prependOnceListener](channel.channel-1.md#prependoncelistener)
- [rawListeners](channel.channel-1.md#rawlisteners)
- [removeAllListeners](channel.channel-1.md#removealllisteners)
- [removeListener](channel.channel-1.md#removelistener)
- [removeTopic](channel.channel-1.md#removetopic)
- [setMaxListeners](channel.channel-1.md#setmaxlisteners)
- [topic](channel.channel-1.md#topic)

## Constructors

### constructor

\+ **new Channel**(`name`: *string*, `maxListeners?`: *number*): [*Channel*](channel.channel-1.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | *string* | - | channel name |
| `maxListeners` | *number* | 0 | maximum number of listeners allowd default value zero(0) - unlimited |

**Returns:** [*Channel*](channel.channel-1.md)

Overrides: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [channel.ts:11](https://github.com/ivandotv/estacion/blob/cb4a385/src/channel.ts#L11)

## Properties

### emitter

• **emitter**: *EventEmitter*

Inherited from: [Broadcaster](broadcaster.broadcaster-1.md).[emitter](broadcaster.broadcaster-1.md#emitter)

Defined in: [broadcaster.ts:19](https://github.com/ivandotv/estacion/blob/cb4a385/src/broadcaster.ts#L19)

___

### topics

• **topics**: *object*= {}

#### Type declaration

Defined in: [channel.ts:9](https://github.com/ivandotv/estacion/blob/cb4a385/src/channel.ts#L9)

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

Defined in: [channel.ts:110](https://github.com/ivandotv/estacion/blob/cb4a385/src/channel.ts#L110)

___

### emit

▸ **emit**(`payload?`: *any*): *void*

Emit payload

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | *any* |

**Returns:** *void*

Overrides: [Broadcaster](broadcaster.broadcaster-1.md)

Defined in: [channel.ts:27](https://github.com/ivandotv/estacion/blob/cb4a385/src/channel.ts#L27)

___

### getAllTopics

▸ **getAllTopics**(): [*Topic*](topic.topic-1.md)[]

Gets all topics

**Returns:** [*Topic*](topic.topic-1.md)[]

all topics

Defined in: [channel.ts:92](https://github.com/ivandotv/estacion/blob/cb4a385/src/channel.ts#L92)

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

### hasTopic

▸ **hasTopic**(`name`: *string*): *boolean*

Check if topic exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | topic name to check |

**Returns:** *boolean*

true if topic is found

Defined in: [channel.ts:64](https://github.com/ivandotv/estacion/blob/cb4a385/src/channel.ts#L64)

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

### removeTopic

▸ **removeTopic**(`name`: *string*): *boolean*

Remove topic from the channel.
All listeners for the topic are automatically removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | topic name |

**Returns:** *boolean*

true if the topic has been successfully removed

Defined in: [channel.ts:75](https://github.com/ivandotv/estacion/blob/cb4a385/src/channel.ts#L75)

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

___

### topic

▸ **topic**(`name`: *string*): [*Topic*](topic.topic-1.md)

Create or return existing topic for the channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | topic name |

**Returns:** [*Topic*](topic.topic-1.md)

Defined in: [channel.ts:42](https://github.com/ivandotv/estacion/blob/cb4a385/src/channel.ts#L42)
