**[estacion](../README.md)**

[Globals](../README.md) › [&quot;channel&quot;](../modules/_channel_.md) › [Channel](_channel_.channel.md)

# Class: Channel

Class that represents a channel for broadcasting via EventBus.

## Hierarchy

* [Broadcaster](_broadcaster_.broadcaster.md)

  * **Channel**

## Index

### Constructors

* [constructor](_channel_.channel.md#constructor)

### Properties

* [emitter](_channel_.channel.md#emitter)
* [topics](_channel_.channel.md#topics)

### Accessors

* [name](_channel_.channel.md#name)

### Methods

* [addListener](_channel_.channel.md#addlistener)
* [destroy](_channel_.channel.md#destroy)
* [emit](_channel_.channel.md#emit)
* [getAllTopics](_channel_.channel.md#getalltopics)
* [getEventEmitter](_channel_.channel.md#geteventemitter)
* [getMaxListeners](_channel_.channel.md#getmaxlisteners)
* [hasTopic](_channel_.channel.md#hastopic)
* [listenerCount](_channel_.channel.md#listenercount)
* [listeners](_channel_.channel.md#listeners)
* [off](_channel_.channel.md#off)
* [on](_channel_.channel.md#on)
* [once](_channel_.channel.md#once)
* [prependListener](_channel_.channel.md#prependlistener)
* [prependOnceListener](_channel_.channel.md#prependoncelistener)
* [rawListeners](_channel_.channel.md#rawlisteners)
* [removeAllListeners](_channel_.channel.md#removealllisteners)
* [removeListener](_channel_.channel.md#removelistener)
* [removeTopic](_channel_.channel.md#removetopic)
* [setMaxListeners](_channel_.channel.md#setmaxlisteners)
* [topic](_channel_.channel.md#topic)

## Constructors

###  constructor

\+ **new Channel**(`name`: string, `maxListeners`: number): *[Channel](_channel_.channel.md)*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[constructor](_broadcaster_.broadcaster.md#constructor)*

*Defined in [channel.ts:11](https://github.com/ivandotv/estacion/blob/d75ef20/src/channel.ts#L11)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | channel name |
`maxListeners` | number | 0 | Maximum number of listeners allowd default value zero(0) - unlimited  |

**Returns:** *[Channel](_channel_.channel.md)*

## Properties

###  emitter

• **emitter**: *EventEmitter*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[emitter](_broadcaster_.broadcaster.md#emitter)*

*Defined in [broadcaster.ts:19](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L19)*

___

###  topics

• **topics**: *object*

*Defined in [channel.ts:9](https://github.com/ivandotv/estacion/blob/d75ef20/src/channel.ts#L9)*

#### Type declaration:

* \[ **key**: *string*\]: [Topic](_topic_.topic.md)

## Accessors

###  name

• **get name**(): *string*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[name](_broadcaster_.broadcaster.md#name)*

*Defined in [broadcaster.ts:36](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L36)*

**Returns:** *string*

## Methods

###  addListener

▸ **addListener**<**T**>(`listener`: [Listener](../modules/_broadcaster_.md#listener)‹T›): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[addListener](_broadcaster_.broadcaster.md#addlistener)*

*Defined in [broadcaster.ts:53](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L53)*

Add listener to the broadcaster.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener)‹T› | to be added |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to remove the added listener

___

###  destroy

▸ **destroy**(): *void*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[destroy](_broadcaster_.broadcaster.md#destroy)*

*Defined in [channel.ts:103](https://github.com/ivandotv/estacion/blob/d75ef20/src/channel.ts#L103)*

Destroy the instance

**Returns:** *void*

___

###  emit

▸ **emit**(`payload?`: any | undefined): *void*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[emit](_broadcaster_.broadcaster.md#emit)*

*Defined in [channel.ts:23](https://github.com/ivandotv/estacion/blob/d75ef20/src/channel.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`payload?` | any &#124; undefined |

**Returns:** *void*

___

###  getAllTopics

▸ **getAllTopics**(): *[Topic](_topic_.topic.md)[]*

*Defined in [channel.ts:85](https://github.com/ivandotv/estacion/blob/d75ef20/src/channel.ts#L85)*

Gets all topics

**Returns:** *[Topic](_topic_.topic.md)[]*

all topics

___

###  getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[getEventEmitter](_broadcaster_.broadcaster.md#geteventemitter)*

*Defined in [broadcaster.ts:138](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L138)*

Get the underlying [ EventEmitter instance.](https://nodejs.org/api/events.html#events_class_eventemitter )

**Returns:** *EventEmitter*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[getMaxListeners](_broadcaster_.broadcaster.md#getmaxlisteners)*

*Defined in [broadcaster.ts:121](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L121)*

Get maximum number of listeners that can be registered.
[https://nodejs.org/api/events.html#events_emitter_getmaxlisteners](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners)

**Returns:** *number*

___

###  hasTopic

▸ **hasTopic**(`name`: string): *boolean*

*Defined in [channel.ts:59](https://github.com/ivandotv/estacion/blob/d75ef20/src/channel.ts#L59)*

Check if topic exists.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

true if topic is found

___

###  listenerCount

▸ **listenerCount**(): *number*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[listenerCount](_broadcaster_.broadcaster.md#listenercount)*

*Defined in [broadcaster.ts:162](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L162)*

Get total number of listeners that are registered.

**Returns:** *number*

___

###  listeners

▸ **listeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[listeners](_broadcaster_.broadcaster.md#listeners)*

*Defined in [broadcaster.ts:145](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L145)*

Returna a copy of the array of listeners.

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  off

▸ **off**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[off](_broadcaster_.broadcaster.md#off)*

*Defined in [broadcaster.ts:105](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L105)*

Alias for [Broadcaster.removeListener](_broadcaster_.broadcaster.md#removelistener)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) | listener to be removed  |

**Returns:** *void*

___

###  on

▸ **on**<**T**>(`listener`: [Listener](../modules/_broadcaster_.md#listener)‹T›): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[on](_broadcaster_.broadcaster.md#on)*

*Defined in [broadcaster.ts:62](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L62)*

Alias of [Broadcaster.addListener](_broadcaster_.broadcaster.md#addlistener)

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener)‹T› | to be subscribed |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to unsubscribe the listener

___

###  once

▸ **once**<**T**>(`listener`: [Listener](../modules/_broadcaster_.md#listener)‹T›): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[once](_broadcaster_.broadcaster.md#once)*

*Defined in [broadcaster.ts:79](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L79)*

Add listener to be called only once.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener)‹T› |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to unsubscribe the listener

___

###  prependListener

▸ **prependListener**<**T**>(`listener`: [Listener](../modules/_broadcaster_.md#listener)‹T›): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[prependListener](_broadcaster_.broadcaster.md#prependlistener)*

*Defined in [broadcaster.ts:71](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L71)*

Add listener to the beginning of the listener array
to be invoked first.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener)‹T› |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to unsubscribe the listener

___

###  prependOnceListener

▸ **prependOnceListener**<**T**>(`listener`: [Listener](../modules/_broadcaster_.md#listener)‹T›): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[prependOnceListener](_broadcaster_.broadcaster.md#prependoncelistener)*

*Defined in [broadcaster.ts:88](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L88)*

Add listener to the beginning of the listener array.
To be invoked first but only once.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener)‹T› |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to unsubscribe the listener

___

###  rawListeners

▸ **rawListeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[rawListeners](_broadcaster_.broadcaster.md#rawlisteners)*

*Defined in [broadcaster.ts:154](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L154)*

Returns a copy of the array of listeners,
including any wrappers (such as those created by .once()).
[https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname](https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname)

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[removeAllListeners](_broadcaster_.broadcaster.md#removealllisteners)*

*Defined in [broadcaster.ts:113](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L113)*

Remove all listeners.

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[removeListener](_broadcaster_.broadcaster.md#removelistener)*

*Defined in [broadcaster.ts:97](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L97)*

Remove listener.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) | listerner to be removed  |

**Returns:** *void*

___

###  removeTopic

▸ **removeTopic**(`name`: string): *boolean*

*Defined in [channel.ts:70](https://github.com/ivandotv/estacion/blob/d75ef20/src/channel.ts#L70)*

Remove topic from the channel.
All listeners for the topic are automatically removed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | topic name |

**Returns:** *boolean*

true if the topic has been successfully removed

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[setMaxListeners](_broadcaster_.broadcaster.md#setmaxlisteners)*

*Defined in [broadcaster.ts:130](https://github.com/ivandotv/estacion/blob/d75ef20/src/broadcaster.ts#L130)*

Set maximum number of listernes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | maximum number - 0 means unlimited  |

**Returns:** *void*

___

###  topic

▸ **topic**(`name`: string): *[Topic](_topic_.topic.md)*

*Defined in [channel.ts:38](https://github.com/ivandotv/estacion/blob/d75ef20/src/channel.ts#L38)*

Create or return existing topic for the channel.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | topic name  |

**Returns:** *[Topic](_topic_.topic.md)*