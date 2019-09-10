**[estacion](../README.md)**

[Globals](../README.md) › [&quot;event-bus&quot;](../modules/_event_bus_.md) › [EventBus](_event_bus_.eventbus.md)

# Class: EventBus

## Hierarchy

* **EventBus**

## Index

### Constructors

* [constructor](_event_bus_.eventbus.md#constructor)

### Methods

* [allChannels](_event_bus_.eventbus.md#allchannels)
* [channel](_event_bus_.eventbus.md#channel)
* [destroy](_event_bus_.eventbus.md#destroy)
* [hasChannel](_event_bus_.eventbus.md#haschannel)
* [mainChannel](_event_bus_.eventbus.md#mainchannel)
* [removeChannel](_event_bus_.eventbus.md#removechannel)

## Constructors

###  constructor

\+ **new EventBus**(`config?`: [EventBusConfig](../interfaces/_event_bus_.eventbusconfig.md) | undefined): *[EventBus](_event_bus_.eventbus.md)*

*Defined in [event-bus.ts:10](https://github.com/ivandotv/estacion/blob/718c68a/src/event-bus.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [EventBusConfig](../interfaces/_event_bus_.eventbusconfig.md) &#124; undefined |

**Returns:** *[EventBus](_event_bus_.eventbus.md)*

## Methods

###  allChannels

▸ **allChannels**(): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:36](https://github.com/ivandotv/estacion/blob/718c68a/src/event-bus.ts#L36)*

**Returns:** *[Channel](_channel_.channel.md)*

___

###  channel

▸ **channel**(`name`: string): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:40](https://github.com/ivandotv/estacion/blob/718c68a/src/event-bus.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Channel](_channel_.channel.md)*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [event-bus.ts:92](https://github.com/ivandotv/estacion/blob/718c68a/src/event-bus.ts#L92)*

**Returns:** *void*

___

###  hasChannel

▸ **hasChannel**(`name`: string): *boolean*

*Defined in [event-bus.ts:51](https://github.com/ivandotv/estacion/blob/718c68a/src/event-bus.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  mainChannel

▸ **mainChannel**(): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:31](https://github.com/ivandotv/estacion/blob/718c68a/src/event-bus.ts#L31)*

**Returns:** *[Channel](_channel_.channel.md)*

___

###  removeChannel

▸ **removeChannel**(`name`: string): *void*

*Defined in [event-bus.ts:55](https://github.com/ivandotv/estacion/blob/718c68a/src/event-bus.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*