import { EventEmitter } from "events"

/**
 * Class representing the EventBus.
 *
 * @export
 * @class EventBus
 */
export class EventBus {
  /**
   * @param {EventBusConfig} config
   */
  constructor(config: EventBusConfig)
  /**
   * Create and return the channel with the specified name.
   * If channel desn't exist it will be created
   *
   * @param {string} name channel name
   * @returns {Channel}
   */
  channel(name: string): Channel
  /**
   * Check if channel exists.
   *
   * @param {string} name channel name
   * @returns {Channel}
   */
  hasChannel(name: string): Channel
  /**
   * Return main (default channel) for the  EventBus instance.
   * On main channel are able to listen to
   * events emitted from all other channels and all topics.
   *
   * @returns {Channel}
   */
  mainChannel(): Channel
  /**
   * Remove channel.
   * All listeners for the channel on all topics emitted from the channel
   * are automatically removed.
   *
   * @param {string} name channel name
   * @returns {boolean} `false` if channel is not removed (desn't exists)
   */
  removeChannel(name: string): boolean
  /**
   * Destroy the instance.
   * All channels and all topics are automatically destroyed.
   * All listeners from channels and topics are removed.
   */
  destroy(): void
}

/**
 * Class that represents a channel for broadcasting via EventBus.
 *
 * @export
 * @class Channel
 * @extends {Broadcaster}
 */
export class Channel extends Broadcaster {
  /**
   * @param {string} name channel name
   * @param {number} [maxListeners] Maximum number of listeners allowd default value zero(0) - unlimited
   */
  constructor(name: string, maxListeners?: number)

  /**
   * Check if topic exists.
   *
   * @param {string} name topic name
   * @returns {boolean} `true` if topic is found
   */
  hasTopic(name: string): boolean

  /**
   * Remove topic from the channel.
   * All listeners for the topic are automatically removed.
   *
   * @param {string} name topic name
   * @returns {boolean} `true` if topic is successifully removed
   */
  removeTopic(name: string): boolean

  /**
   * Create or return existing topic for the channel.
   *
   * @param {string} name topic name
   * @returns {Topic}
   */
  topic(name: string): Topic
}

/**
 * Class that reperesents topic for the channel.
 *
 * @export
 * @class Topic
 * @extends {Broadcaster}
 */
export class Topic extends Broadcaster {
  /**
   * @param {string} name topic name
   * @param {string} channel channel this topic belongs to
   * @param {number} [maxListeners] maximum number of listeners allowed
   */
  constructor(name: string, channel: string, maxListeners?: number)
}

/**
 * Class that represents the parent class for `Channel` and `Topic` classes
 * It wrapps Node EventEmitter instance and exposes some of it's methods with
 * modified signatures.
 *
 * @class Broadcaster
 */
declare class Broadcaster {
  /**
   *Creates an instance of Broadcaster.
   * @param {string} [name] default event name
   * @param {number} [maxListeners] maximum number of allowed listeners
   */
  constructor(name?: string, maxListeners?: number)

  /**
   * Add listener to the broadcaster.
   *
   * @param {Listener} listener listener to be added
   * @returns {Subscription} function to remove the added listener
   */
  addListener(listener: Listener): Subscription

  /**
   * Destroy the instance and remove all listeners.
   */
  destroy(): void

  /**
   * Call all listeners.
   *
   * @param {*} payload data to be passed to the listeners
   */
  emit(payload: any): void

  /**
   * Get the underlying emitter instance.
   *
   * @returns {EventEmitter}
   */
  getEventEmitter(): EventEmitter

  /**
   * Get maximum number of listeners that can be registered.
   *
   * @returns {number}
   */
  getMaxListeners(): number

  /**
   * Get total number of listeners that are registered.
   *
   * @returns {number}
   * @memberof Broadcaster
   */
  listenerCount(): number

  /**
   * Returna a copy of the array of listeners.
   * @returns {Listener[]}
   * @memberof Broadcaster
   */
  listeners(): Listener[]

  /**
   * Returns a copy of the array of listeners,
   * including any wrappers (such as those created by .once()).
   * {@link https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname}
   * @returns {Listener[]}
   */
  rawListeners(): Listener[]

  /**
   * Alias of 'removeListener'.
   * @param {Listener} listener listener to be removed
   */
  off(listener: Listener): void

  /**
   * Alias of `addListener`
   * @param {Listener} listener
   * @returns {Subscription} function to unsubscribe the listener
   */
  on(listener: Listener): Subscription

  /**
   * Add listern to be called only once.
   *
   * @param {Listener} listener
   * @returns {Subscription} function to unsubscribe the listener
   */
  once(listener: Listener): Subscription

  /**
   * Add listener to the beginning of the listener array
   * to be invoked first.
   *
   * @param {Listener} listener
   * @returns {Subscription} function to unsubscribe the listener
   */
  prependListener(listener: Listener): Subscription

  /**
   * Add listener to the beginning of the listener array.
   * To be invoked first but only once.
   * @param {Listener} listener
   * @returns {Subscription} function to unsubscribe the listener
   */
  prependOnceListener(listener: Listener): Subscription

  /**
   * Remove all listeners.
   *
   * @memberof Broadcaster
   */
  removeAllListeners(): void

  /**
   * Remove listener.
   *
   * @param {Listener} listener - listerner to be removed
   */
  removeListener(listener: Listener): void

  /**
   * Set maximum number of listernes.
   *
   * @param {number} n - maximum number
   * @memberof Broadcaster
   */
  setMaxListeners(n: number): void
}

/**
 * Payload interface that should be emitted.
 *
 * @export
 * @interface EventPayload
 */
export interface EventPayload {
  /**
   * Channel name.
   *
   * @type {string}
   */
  channel: string
  /**
   * Topic name.
   *
   * @type {string}
   */
  topic: string
  /**
   * Payload - custom data to pass to the listeners
   *
   * @type {*}
   */
  payload: any
}
/**
 * Subscription interface that is used for unsubscribing the listener that was previously subscribed.
 *
 * @export
 * @interface Subscription
 */
export interface Subscription {
  (): void
}

/**
 *
 * Listener interface for adding to Broadcaster.
 * @export
 * @interface Listener
 */
export interface Listener {
  (event: EventPayload): void
}

/**
 * Configuration interface for EventBus instance.
 *
 * @export
 * @interface EventBusConfig
 */
export declare interface EventBusConfig {
  /**
   * Default number of listeners allowed for all channels and topics.
   * Zero(0) represents unlimited.
   * You can change this value for every channel and topic separately via channel/topic methods.
   * @type {number} maxListeners=0
   */
  maxListeners?: number
}
