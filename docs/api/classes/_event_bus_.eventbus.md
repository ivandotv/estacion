**[estacion](../README.md)**

[Globals](../README.md) › [&quot;event-bus&quot;](../modules/_event_bus_.md) › [EventBus](_event_bus_.eventbus.md)

# Class: EventBus

## Hierarchy

* **EventBus**

## Index

### Constructors

* [constructor](_event_bus_.eventbus.md#constructor)

### Properties

* [_maxListeners](_event_bus_.eventbus.md#private-_maxlisteners)
* [channels](_event_bus_.eventbus.md#private-channels)
* [defaultChannel](_event_bus_.eventbus.md#private-defaultchannel)

### Methods

* [allChannels](_event_bus_.eventbus.md#allchannels)
* [channel](_event_bus_.eventbus.md#channel)
* [createMainChannel](_event_bus_.eventbus.md#private-createmainchannel)
* [destroy](_event_bus_.eventbus.md#destroy)
* [hasChannel](_event_bus_.eventbus.md#haschannel)
* [mainChannel](_event_bus_.eventbus.md#mainchannel)
* [onChannelDestroyed](_event_bus_.eventbus.md#private-onchanneldestroyed)
* [onChannelEmit](_event_bus_.eventbus.md#private-onchannelemit)
* [removeChannel](_event_bus_.eventbus.md#removechannel)

## Constructors

###  constructor

\+ **new EventBus**(`config?`: [EventBusConfig](../interfaces/_event_bus_.eventbusconfig.md) | undefined): *[EventBus](_event_bus_.eventbus.md)*

*Defined in [event-bus.ts:10](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [EventBusConfig](../interfaces/_event_bus_.eventbusconfig.md) &#124; undefined |

**Returns:** *[EventBus](_event_bus_.eventbus.md)*

## Properties

### `Private` _maxListeners

• **_maxListeners**: *number*

*Defined in [event-bus.ts:4](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L4)*

___

### `Private` channels

• **channels**: *object*

*Defined in [event-bus.ts:8](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L8)*

#### Type declaration:

* \[ **key**: *string*\]: [Channel](_channel_.channel.md) | undefined

___

### `Private` defaultChannel

• **defaultChannel**: *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:6](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L6)*

## Methods

###  allChannels

▸ **allChannels**(): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:36](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L36)*

**Returns:** *[Channel](_channel_.channel.md)*

___

###  channel

▸ **channel**(`name`: string): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:40](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Channel](_channel_.channel.md)*

___

### `Private` createMainChannel

▸ **createMainChannel**(): *void*

*Defined in [event-bus.ts:21](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L21)*

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [event-bus.ts:92](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L92)*

**Returns:** *void*

___

###  hasChannel

▸ **hasChannel**(`name`: string): *boolean*

*Defined in [event-bus.ts:51](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  mainChannel

▸ **mainChannel**(): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:31](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L31)*

**Returns:** *[Channel](_channel_.channel.md)*

___

### `Private` onChannelDestroyed

▸ **onChannelDestroyed**(`name`: string): *void*

*Defined in [event-bus.ts:88](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

### `Private` onChannelEmit

▸ **onChannelEmit**(`payload`: [EventPayload](../interfaces/_broadcaster_.eventpayload.md)): *void*

*Defined in [event-bus.ts:67](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [EventPayload](../interfaces/_broadcaster_.eventpayload.md) |

**Returns:** *void*

___

###  removeChannel

▸ **removeChannel**(`name`: string): *void*

*Defined in [event-bus.ts:55](https://github.com/ivandotv/estacion/blob/380efed/src/event-bus.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*