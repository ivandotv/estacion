**[estacion](../README.md)**

[Globals](../README.md) › [&quot;broadcaster&quot;](../modules/_broadcaster_.md) › [Broadcaster](_broadcaster_.broadcaster.md)

# Class: Broadcaster

Class that represents the parent class for `Channel` and `Topic` classes
It wrapps Node EventEmitter instance and exposes some of it's methods with
modified signatures.
[ EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)

## Hierarchy

* **Broadcaster**

  * [Topic](_topic_.topic.md)

  * [Channel](_channel_.channel.md)

## Index

### Constructors

* [constructor](_broadcaster_.broadcaster.md#constructor)

### Properties

* [emitter](_broadcaster_.broadcaster.md#emitter)

### Accessors

* [name](_broadcaster_.broadcaster.md#name)

### Methods

* [addListener](_broadcaster_.broadcaster.md#addlistener)
* [destroy](_broadcaster_.broadcaster.md#destroy)
* [emit](_broadcaster_.broadcaster.md#emit)
* [getEventEmitter](_broadcaster_.broadcaster.md#geteventemitter)
* [getMaxListeners](_broadcaster_.broadcaster.md#getmaxlisteners)
* [listenerCount](_broadcaster_.broadcaster.md#listenercount)
* [listeners](_broadcaster_.broadcaster.md#listeners)
* [off](_broadcaster_.broadcaster.md#off)
* [on](_broadcaster_.broadcaster.md#on)
* [once](_broadcaster_.broadcaster.md#once)
* [prependListener](_broadcaster_.broadcaster.md#prependlistener)
* [prependOnceListener](_broadcaster_.broadcaster.md#prependoncelistener)
* [rawListeners](_broadcaster_.broadcaster.md#rawlisteners)
* [removeAllListeners](_broadcaster_.broadcaster.md#removealllisteners)
* [removeListener](_broadcaster_.broadcaster.md#removelistener)
* [setMaxListeners](_broadcaster_.broadcaster.md#setmaxlisteners)

## Constructors

###  constructor

\+ **new Broadcaster**(`name`: string, `maxListeners`: number): *[Broadcaster](_broadcaster_.broadcaster.md)*

*Defined in [broadcaster.ts:12](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L12)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | default event name |
`maxListeners` | number | 0 | maximum number of allowed listeners 0 means unlimited  |

**Returns:** *[Broadcaster](_broadcaster_.broadcaster.md)*

## Properties

###  emitter

• **emitter**: *EventEmitter*

*Defined in [broadcaster.ts:10](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L10)*

## Accessors

###  name

• **get name**(): *string*

*Defined in [broadcaster.ts:27](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L27)*

**Returns:** *string*

## Methods

###  addListener

▸ **addListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

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

*Defined in [broadcaster.ts:175](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L175)*

Destroy the instance and remove all listeners.

**Returns:** *void*

___

###  emit

▸ **emit**(`payload`: [EventPayload](../interfaces/_broadcaster_.eventpayload.md)): *void*

*Defined in [broadcaster.ts:35](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L35)*

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [EventPayload](../interfaces/_broadcaster_.eventpayload.md) | data to be passed to the listeners  |

**Returns:** *void*

___

###  getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

*Defined in [broadcaster.ts:129](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L129)*

Get the underlying [ EventEmitter instance.](https://nodejs.org/api/events.html#events_class_eventemitter )

**Returns:** *EventEmitter*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Defined in [broadcaster.ts:112](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L112)*

Get maximum number of listeners that can be registered.
[https://nodejs.org/api/events.html#events_emitter_getmaxlisteners](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners)

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(): *number*

*Defined in [broadcaster.ts:153](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L153)*

Get total number of listeners that are registered.

**Returns:** *number*

___

###  listeners

▸ **listeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Defined in [broadcaster.ts:136](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L136)*

Returna a copy of the array of listeners.

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  off

▸ **off**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

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

*Defined in [broadcaster.ts:145](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L145)*

Returns a copy of the array of listeners,
including any wrappers (such as those created by .once()).
[https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname](https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname)

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(): *void*

*Defined in [broadcaster.ts:104](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L104)*

Remove all listeners.

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

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

*Defined in [broadcaster.ts:121](https://github.com/ivandotv/estacion/blob/ab7d58b/src/broadcaster.ts#L121)*

Set maximum number of listernes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | maximum number - 0 means unlimited  |

**Returns:** *void*