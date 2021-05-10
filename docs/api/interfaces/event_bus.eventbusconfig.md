[estacion](../README.md) / [event-bus](../modules/event_bus.md) / EventBusConfig

# Interface: EventBusConfig

[event-bus](../modules/event_bus.md).EventBusConfig

Configuration for EventBus instance.

## Table of contents

### Properties

- [maxListeners](event_bus.eventbusconfig.md#maxlisteners)

## Properties

### maxListeners

• `Optional` **maxListeners**: *number*

Default number of listeners allowed for all channels and topics.
Zero(0) represents unlimited.
You can change this value for every channel and topic separately via channel/topic methods.

Defined in: [event-bus.ts:157](https://github.com/ivandotv/estacion/blob/cb4a385/src/event-bus.ts#L157)
