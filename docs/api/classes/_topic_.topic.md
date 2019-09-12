**[estacion](../README.md)**

[Globals](../README.md) › [&quot;topic&quot;](../modules/_topic_.md) › [Topic](_topic_.topic.md)

# Class: Topic

Class that reperesents topic for the channel.

## Hierarchy

* [Broadcaster](_broadcaster_.broadcaster.md)

  * **Topic**

## Index

### Constructors

* [constructor](_topic_.topic.md#constructor)

### Properties

* [channel](_topic_.topic.md#channel)
* [emitter](_topic_.topic.md#emitter)

### Accessors

* [name](_topic_.topic.md#name)

### Methods

* [addListener](_topic_.topic.md#addlistener)
* [destroy](_topic_.topic.md#destroy)
* [emit](_topic_.topic.md#emit)
* [getEventEmitter](_topic_.topic.md#geteventemitter)
* [getMaxListeners](_topic_.topic.md#getmaxlisteners)
* [listenerCount](_topic_.topic.md#listenercount)
* [listeners](_topic_.topic.md#listeners)
* [off](_topic_.topic.md#off)
* [on](_topic_.topic.md#on)
* [once](_topic_.topic.md#once)
* [prependListener](_topic_.topic.md#prependlistener)
* [prependOnceListener](_topic_.topic.md#prependoncelistener)
* [rawListeners](_topic_.topic.md#rawlisteners)
* [removeAllListeners](_topic_.topic.md#removealllisteners)
* [removeListener](_topic_.topic.md#removelistener)
* [setMaxListeners](_topic_.topic.md#setmaxlisteners)

## Constructors

###  constructor

\+ **new Topic**(`name`: string, `channel`: string, `maxListeners`: number): *[Topic](_topic_.topic.md)*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[constructor](_broadcaster_.broadcaster.md#constructor)*

*Defined in [topic.ts:7](https://github.com/ivandotv/estacion/blob/ab7d58b/src/topic.ts#L7)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | topic name |
`channel` | string | - | channel this topic belongs to |
`maxListeners` | number | 0 | maximum number of listeners allowed  |

**Returns:** *[Topic](_topic_.topic.md)*

## Properties

###  channel

• **channel**: *string*

*Defined in [topic.ts:7](https://github.com/ivandotv/estacion/blob/ab7d58b/src/topic.ts#L7)*

___

###  emitter

• **emitter**: *EventEmitter*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[emitter](_broadcaster_.broadcaster.md#emitter)*

*Defined in [broadcaster.ts:10](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L10)*

## Accessors

###  name

• **get name**(): *string*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[name](_broadcaster_.broadcaster.md#name)*

*Defined in [broadcaster.ts:27](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L27)*

**Returns:** *string*

## Methods

###  addListener

▸ **addListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[addListener](_broadcaster_.broadcaster.md#addlistener)*

*Defined in [broadcaster.ts:44](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L44)*

Add listener to the broadcaster.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) | to be added |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to remove the added listener

___

###  destroy

▸ **destroy**(): *void*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[destroy](_broadcaster_.broadcaster.md#destroy)*

*Defined in [topic.ts:32](https://github.com/ivandotv/estacion/blob/ab7d58b/src/topic.ts#L32)*

Destroy the instance

**Returns:** *void*

___

###  emit

▸ **emit**(`payload`: any | undefined): *void*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[emit](_broadcaster_.broadcaster.md#emit)*

*Defined in [topic.ts:19](https://github.com/ivandotv/estacion/blob/ab7d58b/src/topic.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any &#124; undefined |

**Returns:** *void*

___

###  getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[getEventEmitter](_broadcaster_.broadcaster.md#geteventemitter)*

*Defined in [broadcaster.ts:129](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L129)*

Get the underlying [ EventEmitter instance.](https://nodejs.org/api/events.html#events_class_eventemitter )

**Returns:** *EventEmitter*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[getMaxListeners](_broadcaster_.broadcaster.md#getmaxlisteners)*

*Defined in [broadcaster.ts:112](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L112)*

Get maximum number of listeners that can be registered.
[https://nodejs.org/api/events.html#events_emitter_getmaxlisteners](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners)

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(): *number*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[listenerCount](_broadcaster_.broadcaster.md#listenercount)*

*Defined in [broadcaster.ts:153](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L153)*

Get total number of listeners that are registered.

**Returns:** *number*

___

###  listeners

▸ **listeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[listeners](_broadcaster_.broadcaster.md#listeners)*

*Defined in [broadcaster.ts:136](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L136)*

Returna a copy of the array of listeners.

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  off

▸ **off**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[off](_broadcaster_.broadcaster.md#off)*

*Defined in [broadcaster.ts:96](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L96)*

Alias for [Broadcaster.removeListener](_broadcaster_.broadcaster.md#removelistener)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) | listener to be removed  |

**Returns:** *void*

___

###  on

▸ **on**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[on](_broadcaster_.broadcaster.md#on)*

*Defined in [broadcaster.ts:53](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L53)*

Alias of [Broadcaster.addListener](_broadcaster_.broadcaster.md#addlistener)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) | to be subscribed |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to unsubscribe the listener

___

###  once

▸ **once**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[once](_broadcaster_.broadcaster.md#once)*

*Defined in [broadcaster.ts:70](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L70)*

Add listener to be called only once.

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to unsubscribe the listener

___

###  prependListener

▸ **prependListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[prependListener](_broadcaster_.broadcaster.md#prependlistener)*

*Defined in [broadcaster.ts:62](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L62)*

Add listener to the beginning of the listener array
to be invoked first.

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to unsubscribe the listener

___

###  prependOnceListener

▸ **prependOnceListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[prependOnceListener](_broadcaster_.broadcaster.md#prependoncelistener)*

*Defined in [broadcaster.ts:79](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L79)*

Add listener to the beginning of the listener array.
To be invoked first but only once.

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

function to unsubscribe the listener

___

###  rawListeners

▸ **rawListeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[rawListeners](_broadcaster_.broadcaster.md#rawlisteners)*

*Defined in [broadcaster.ts:145](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L145)*

Returns a copy of the array of listeners,
including any wrappers (such as those created by .once()).
[https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname](https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname)

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[removeAllListeners](_broadcaster_.broadcaster.md#removealllisteners)*

*Defined in [broadcaster.ts:104](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L104)*

Remove all listeners.

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[removeListener](_broadcaster_.broadcaster.md#removelistener)*

*Defined in [broadcaster.ts:88](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L88)*

Remove listener.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) | listerner to be removed  |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[setMaxListeners](_broadcaster_.broadcaster.md#setmaxlisteners)*

*Defined in [broadcaster.ts:121](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L121)*

Set maximum number of listernes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | maximum number - 0 means unlimited  |

**Returns:** *void*