**[estacion](../README.md)**

[Globals](../README.md) › [&quot;channel&quot;](../modules/_channel_.md) › [Channel](_channel_.channel.md)

# Class: Channel

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

* [_onTopicDestroyed](_channel_.channel.md#private-_ontopicdestroyed)
* [_onTopicEmit](_channel_.channel.md#private-_ontopicemit)
* [addListener](_channel_.channel.md#addlistener)
* [destroy](_channel_.channel.md#destroy)
* [emit](_channel_.channel.md#emit)
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

*Defined in [channel.ts:7](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L7)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`maxListeners` | number | 0 |

**Returns:** *[Channel](_channel_.channel.md)*

## Properties

###  emitter

• **emitter**: *EventEmitter*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[emitter](_broadcaster_.broadcaster.md#emitter)*

*Defined in [broadcaster.ts:4](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L4)*

___

###  topics

• **topics**: *object*

*Defined in [channel.ts:5](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L5)*

#### Type declaration:

* \[ **key**: *string*\]: [Topic](_topic_.topic.md) | undefined

## Accessors

###  name

• **get name**(): *string*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[name](_broadcaster_.broadcaster.md#name)*

*Defined in [broadcaster.ts:17](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L17)*

**Returns:** *string*

## Methods

### `Private` _onTopicDestroyed

▸ **_onTopicDestroyed**(`name`: string): *void*

*Defined in [channel.ts:61](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

### `Private` _onTopicEmit

▸ **_onTopicEmit**(`payload`: [EventPayload](../interfaces/_broadcaster_.eventpayload.md)): *void*

*Defined in [channel.ts:56](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [EventPayload](../interfaces/_broadcaster_.eventpayload.md) |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[addListener](_broadcaster_.broadcaster.md#addlistener)*

*Defined in [broadcaster.ts:25](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  destroy

▸ **destroy**(): *void*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[destroy](_broadcaster_.broadcaster.md#destroy)*

*Defined in [channel.ts:65](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L65)*

**Returns:** *void*

___

###  emit

▸ **emit**(`payload`: any | undefined): *void*

*Overrides [Broadcaster](_broadcaster_.broadcaster.md).[emit](_broadcaster_.broadcaster.md#emit)*

*Defined in [channel.ts:15](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any &#124; undefined |

**Returns:** *void*

___

###  getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[getEventEmitter](_broadcaster_.broadcaster.md#geteventemitter)*

*Defined in [broadcaster.ts:65](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L65)*

**Returns:** *EventEmitter*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[getMaxListeners](_broadcaster_.broadcaster.md#getmaxlisteners)*

*Defined in [broadcaster.ts:57](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L57)*

**Returns:** *number*

___

###  hasTopic

▸ **hasTopic**(`name`: string): *boolean*

*Defined in [channel.ts:40](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(): *number*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[listenerCount](_broadcaster_.broadcaster.md#listenercount)*

*Defined in [broadcaster.ts:77](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L77)*

**Returns:** *number*

___

###  listeners

▸ **listeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[listeners](_broadcaster_.broadcaster.md#listeners)*

*Defined in [broadcaster.ts:69](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L69)*

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  off

▸ **off**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[off](_broadcaster_.broadcaster.md#off)*

*Defined in [broadcaster.ts:49](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *void*

___

###  on

▸ **on**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[on](_broadcaster_.broadcaster.md#on)*

*Defined in [broadcaster.ts:29](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  once

▸ **once**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[once](_broadcaster_.broadcaster.md#once)*

*Defined in [broadcaster.ts:37](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  prependListener

▸ **prependListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[prependListener](_broadcaster_.broadcaster.md#prependlistener)*

*Defined in [broadcaster.ts:33](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  prependOnceListener

▸ **prependOnceListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[prependOnceListener](_broadcaster_.broadcaster.md#prependoncelistener)*

*Defined in [broadcaster.ts:41](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  rawListeners

▸ **rawListeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[rawListeners](_broadcaster_.broadcaster.md#rawlisteners)*

*Defined in [broadcaster.ts:73](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L73)*

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[removeAllListeners](_broadcaster_.broadcaster.md#removealllisteners)*

*Defined in [broadcaster.ts:53](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L53)*

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[removeListener](_broadcaster_.broadcaster.md#removelistener)*

*Defined in [broadcaster.ts:45](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *void*

___

###  removeTopic

▸ **removeTopic**(`name`: string): *boolean*

*Defined in [channel.ts:44](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *void*

*Inherited from [Broadcaster](_broadcaster_.broadcaster.md).[setMaxListeners](_broadcaster_.broadcaster.md#setmaxlisteners)*

*Defined in [broadcaster.ts:61](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *void*

___

###  topic

▸ **topic**(`name`: string): *[Topic](_topic_.topic.md)*

*Defined in [channel.ts:25](https://github.com/ivandotv/estacion/blob/db9e870/src/channel.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Topic](_topic_.topic.md)*