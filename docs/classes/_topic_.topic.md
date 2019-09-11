**[estacion](../README.md)**

[Globals](../README.md) › [&quot;topic&quot;](../modules/_topic_.md) › [Topic](_topic_.topic.md)

# Class: Topic

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

*Defined in [topic.ts:4](https://github.com/ivandotv/estacion/blob/66215a0/src/topic.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`channel` | string | - |
`maxListeners` | number | 0 |

**Returns:** *[Topic](_topic_.topic.md)*

## Properties

###  channel

• **channel**: *string*

*Defined in [topic.ts:4](https://github.com/ivandotv/estacion/blob/66215a0/src/topic.ts#L4)*

___

###  emitter

• **emitter**: *EventEmitter*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[emitter](_broadcaster_.broadcaster.md#emitter)*

*Defined in [broadcaster.ts:4](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L4)*

## Accessors

###  name

• **get name**(): *string*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[name](_broadcaster_.broadcaster.md#name)*

*Defined in [broadcaster.ts:17](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L17)*

**Returns:** *string*

## Methods

###  addListener

▸ **addListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[addListener](_broadcaster_.broadcaster.md#addlistener)*

*Defined in [broadcaster.ts:25](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  destroy

▸ **destroy**(): *void*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[destroy](_broadcaster_.broadcaster.md#destroy)*

*Defined in [topic.ts:21](https://github.com/ivandotv/estacion/blob/66215a0/src/topic.ts#L21)*

**Returns:** *void*

___

###  emit

▸ **emit**(`payload`: any | undefined): *void*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[emit](_broadcaster_.broadcaster.md#emit)*

*Defined in [topic.ts:11](https://github.com/ivandotv/estacion/blob/66215a0/src/topic.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any &#124; undefined |

**Returns:** *void*

___

###  getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[getEventEmitter](_broadcaster_.broadcaster.md#geteventemitter)*

*Defined in [broadcaster.ts:65](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L65)*

**Returns:** *EventEmitter*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[getMaxListeners](_broadcaster_.broadcaster.md#getmaxlisteners)*

*Defined in [broadcaster.ts:57](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L57)*

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(): *number*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[listenerCount](_broadcaster_.broadcaster.md#listenercount)*

*Defined in [broadcaster.ts:77](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L77)*

**Returns:** *number*

___

###  listeners

▸ **listeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[listeners](_broadcaster_.broadcaster.md#listeners)*

*Defined in [broadcaster.ts:69](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L69)*

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  off

▸ **off**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[off](_broadcaster_.broadcaster.md#off)*

*Defined in [broadcaster.ts:49](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *void*

___

###  on

▸ **on**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[on](_broadcaster_.broadcaster.md#on)*

*Defined in [broadcaster.ts:29](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  once

▸ **once**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[once](_broadcaster_.broadcaster.md#once)*

*Defined in [broadcaster.ts:37](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  prependListener

▸ **prependListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[prependListener](_broadcaster_.broadcaster.md#prependlistener)*

*Defined in [broadcaster.ts:33](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  prependOnceListener

▸ **prependOnceListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[prependOnceListener](_broadcaster_.broadcaster.md#prependoncelistener)*

*Defined in [broadcaster.ts:41](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  rawListeners

▸ **rawListeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[rawListeners](_broadcaster_.broadcaster.md#rawlisteners)*

*Defined in [broadcaster.ts:73](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L73)*

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[removeAllListeners](_broadcaster_.broadcaster.md#removealllisteners)*

*Defined in [broadcaster.ts:53](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L53)*

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[removeListener](_broadcaster_.broadcaster.md#removelistener)*

*Defined in [broadcaster.ts:45](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[setMaxListeners](_broadcaster_.broadcaster.md#setmaxlisteners)*

*Defined in [broadcaster.ts:61](https://github.com/ivandotv/estacion/blob/66215a0/src/broadcaster.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *void*