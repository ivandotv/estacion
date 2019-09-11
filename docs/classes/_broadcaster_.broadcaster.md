**[estacion](../README.md)**

[Globals](../README.md) › [&quot;broadcaster&quot;](../modules/_broadcaster_.md) › [Broadcaster](_broadcaster_.broadcaster.md)

# Class: Broadcaster

## Hierarchy

* **Broadcaster**

  * [Topic](_topic_.topic.md)

  * [Channel](_channel_.channel.md)

## Index

### Constructors

* [constructor](_broadcaster_.broadcaster.md#constructor)

### Properties

* [_name](_broadcaster_.broadcaster.md#private-_name)
* [emitter](_broadcaster_.broadcaster.md#emitter)

### Accessors

* [name](_broadcaster_.broadcaster.md#name)

### Methods

* [_addListener](_broadcaster_.broadcaster.md#private-_addlistener)
* [_createUnsubscribe](_broadcaster_.broadcaster.md#private-_createunsubscribe)
* [_proxyListener](_broadcaster_.broadcaster.md#private-_proxylistener)
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

*Defined in [broadcaster.ts:6](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`maxListeners` | number | 0 |

**Returns:** *[Broadcaster](_broadcaster_.broadcaster.md)*

## Properties

### `Private` _name

• **_name**: *string*

*Defined in [broadcaster.ts:6](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L6)*

___

###  emitter

• **emitter**: *EventEmitter*

*Defined in [broadcaster.ts:4](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L4)*

## Accessors

###  name

• **get name**(): *string*

*Defined in [broadcaster.ts:17](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L17)*

**Returns:** *string*

## Methods

### `Private` _addListener

▸ **_addListener**(`method`: string, `listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Defined in [broadcaster.ts:91](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

### `Private` _createUnsubscribe

▸ **_createUnsubscribe**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Defined in [broadcaster.ts:85](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

### `Private` _proxyListener

▸ **_proxyListener**(`method`: string, `listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Defined in [broadcaster.ts:81](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Defined in [broadcaster.ts:25](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [broadcaster.ts:96](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L96)*

**Returns:** *void*

___

###  emit

▸ **emit**(`payload`: [EventPayload](../interfaces/_broadcaster_.eventpayload.md)): *void*

*Defined in [broadcaster.ts:21](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [EventPayload](../interfaces/_broadcaster_.eventpayload.md) |

**Returns:** *void*

___

###  getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

*Defined in [broadcaster.ts:65](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L65)*

**Returns:** *EventEmitter*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Defined in [broadcaster.ts:57](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L57)*

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(): *number*

*Defined in [broadcaster.ts:77](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L77)*

**Returns:** *number*

___

###  listeners

▸ **listeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Defined in [broadcaster.ts:69](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L69)*

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  off

▸ **off**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Defined in [broadcaster.ts:49](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *void*

___

###  on

▸ **on**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Defined in [broadcaster.ts:29](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  once

▸ **once**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Defined in [broadcaster.ts:37](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  prependListener

▸ **prependListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Defined in [broadcaster.ts:33](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  prependOnceListener

▸ **prependOnceListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *[Subscription](../modules/_broadcaster_.md#subscription)*

*Defined in [broadcaster.ts:41](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *[Subscription](../modules/_broadcaster_.md#subscription)*

___

###  rawListeners

▸ **rawListeners**(): *[Listener](../modules/_broadcaster_.md#listener)[]*

*Defined in [broadcaster.ts:73](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L73)*

**Returns:** *[Listener](../modules/_broadcaster_.md#listener)[]*

___

###  removeAllListeners

▸ **removeAllListeners**(): *void*

*Defined in [broadcaster.ts:53](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L53)*

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`listener`: [Listener](../modules/_broadcaster_.md#listener)): *void*

*Defined in [broadcaster.ts:45](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [Listener](../modules/_broadcaster_.md#listener) |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *void*

*Defined in [broadcaster.ts:61](https://github.com/ivandotv/estacion/blob/db9e870/src/broadcaster.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *void*