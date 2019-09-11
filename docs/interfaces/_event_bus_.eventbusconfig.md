**[estacion](../README.md)**

[Globals](../README.md) › [&quot;event-bus&quot;](../modules/_event_bus_.md) › [EventBusConfig](_event_bus_.eventbusconfig.md)

# Interface: EventBusConfig

Configuration interface for EventBus instance.

## Hierarchy

* **EventBusConfig**

## Index

### Properties

* [maxListeners](_event_bus_.eventbusconfig.md#optional-maxlisteners)

## Properties

### `Optional` maxListeners

• **maxListeners**? : *number*

*Defined in [event-bus.ts:110](https://github.com/ivandotv/estacion/blob/66215a0/src/event-bus.ts#L110)*

Default number of listeners allowed for all channels and topics.
Zero(0) represents unlimited.
You can change this value for every channel and topic separately via channel/topic methods.

**`type`** {number} maxListeners=0