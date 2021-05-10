[estacion](../README.md) / [event-bus](../modules/event_bus.md) / EventBus

# Class: EventBus

[event-bus](../modules/event_bus.md).EventBus

Class representing the EventBus.
Main purpose is creating and removing channels

## Table of contents

### Constructors

- [constructor](event_bus.eventbus.md#constructor)

### Methods

- [allChannels](event_bus.eventbus.md#allchannels)
- [channel](event_bus.eventbus.md#channel)
- [destroy](event_bus.eventbus.md#destroy)
- [getAllChannels](event_bus.eventbus.md#getallchannels)
- [hasChannel](event_bus.eventbus.md#haschannel)
- [mainChannel](event_bus.eventbus.md#mainchannel)
- [removeChannel](event_bus.eventbus.md#removechannel)

## Constructors

### constructor

\+ **new EventBus**(`config?`: [*EventBusConfig*](../interfaces/event_bus.eventbusconfig.md)): [*EventBus*](event_bus.eventbus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [*EventBusConfig*](../interfaces/event_bus.eventbusconfig.md) |

**Returns:** [*EventBus*](event_bus.eventbus.md)

Defined in: [event-bus.ts:14](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L14)

## Methods

### allChannels

▸ **allChannels**(): [*Channel*](channel.channel-1.md)

Alias for [EventBus.mainChannel](event_bus.eventbus.md#mainchannel)

**Returns:** [*Channel*](channel.channel-1.md)

Defined in: [event-bus.ts:47](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L47)

___

### channel

▸ **channel**(`name`: *string*): [*Channel*](channel.channel-1.md)

Create and return the channel with the specified name.
If the channel does not exist it will be created.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | channel name |

**Returns:** [*Channel*](channel.channel-1.md)

Defined in: [event-bus.ts:57](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L57)

___

### destroy

▸ **destroy**(): *void*

Destroy the instance.
All channels and all topics are automatically destroyed.
All listeners from channels and topics are removed.

**Returns:** *void*

Defined in: [event-bus.ts:140](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L140)

___

### getAllChannels

▸ **getAllChannels**(): [*Channel*](channel.channel-1.md)[]

Gets all channels

**Returns:** [*Channel*](channel.channel-1.md)[]

all channels

Defined in: [event-bus.ts:131](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L131)

___

### hasChannel

▸ **hasChannel**(`name`: *string*): *boolean*

Check if the channel exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | channel name |

**Returns:** *boolean*

Defined in: [event-bus.ts:74](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L74)

___

### mainChannel

▸ **mainChannel**(): [*Channel*](channel.channel-1.md)

Return main (default channel) for the  EventBus instance.
On main channel are able to listen to
events emitted from all other channels and topics.

**Returns:** [*Channel*](channel.channel-1.md)

Defined in: [event-bus.ts:40](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L40)

___

### removeChannel

▸ **removeChannel**(`name`: *string*): *boolean*

Remove the channel.
All listeners for the channel on all topics emitted from the channel
are automatically removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | channel name |

**Returns:** *boolean*

true if the channel has been removed successfully

Defined in: [event-bus.ts:86](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L86)
