**[estacion](../README.md)**

[Globals](../README.md) › [&quot;event-bus&quot;](../modules/_event_bus_.md) › [EventBus](_event_bus_.eventbus.md)

# Class: EventBus

Class representing the EventBus.
Main purpose is creating and removing channels

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

*Defined in [event-bus.ts:14](https://github.com/ivandotv/estacion/blob/ab7d58b/src/event-bus.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | [EventBusConfig](../interfaces/_event_bus_.eventbusconfig.md) &#124; undefined |

**Returns:** *[EventBus](_event_bus_.eventbus.md)*

## Methods

###  allChannels

▸ **allChannels**(): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:47](https://github.com/ivandotv/estacion/blob/ab7d58b/src/event-bus.ts#L47)*

Alias for [EventBus.mainChannel](_event_bus_.eventbus.md#mainchannel)

**Returns:** *[Channel](_channel_.channel.md)*

___

###  channel

▸ **channel**(`name`: string): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:57](https://github.com/ivandotv/estacion/blob/ab7d58b/src/event-bus.ts#L57)*

Create and return the channel with the specified name.
If the channel does not exist it will be created.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | channel name  |

**Returns:** *[Channel](_channel_.channel.md)*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [event-bus.ts:126](https://github.com/ivandotv/estacion/blob/ab7d58b/src/event-bus.ts#L126)*

Destroy the instance.
All channels and all topics are automatically destroyed.
All listeners from channels and topics are removed.

**Returns:** *void*

___

###  hasChannel

▸ **hasChannel**(`name`: string): *boolean*

*Defined in [event-bus.ts:73](https://github.com/ivandotv/estacion/blob/ab7d58b/src/event-bus.ts#L73)*

Check if the channel exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | channel name  |

**Returns:** *boolean*

___

###  mainChannel

▸ **mainChannel**(): *[Channel](_channel_.channel.md)*

*Defined in [event-bus.ts:40](https://github.com/ivandotv/estacion/blob/ab7d58b/src/event-bus.ts#L40)*

Return main (default channel) for the  EventBus instance.
On main channel are able to listen to
events emitted from all other channels and topics.

**Returns:** *[Channel](_channel_.channel.md)*

___

###  removeChannel

▸ **removeChannel**(`name`: string): *void*

*Defined in [event-bus.ts:84](https://github.com/ivandotv/estacion/blob/ab7d58b/src/event-bus.ts#L84)*

Remove channel.
All listeners for the channel on all topics emitted from the channel
are automatically removed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | channel name  |

**Returns:** *void*