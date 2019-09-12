import { EventEmitter } from 'events'

/**
 * Class that represents the parent class for `Channel` and `Topic` classes
 * It wrapps Node EventEmitter instance and exposes some of it's methods with
 * modified signatures.
 * {@link https://nodejs.org/api/events.html#events_class_eventemitter| EventEmitter}
 */
export class Broadcaster {
  emitter: EventEmitter

  private readonly _name: string

  /**
   * @param name default event name
   * @param maxListeners maximum number of allowed listeners 0 means unlimited
   */
  constructor(name: string, maxListeners = 0) {
    this.emitter = new EventEmitter()
    if (typeof name === 'undefined' || name.length === 0) {
      throw new Error('Broadcaster must have a name')
    }
    this._name = name
    this.emitter.setMaxListeners(maxListeners)
  }

  get name(): string {
    return this._name
  }

  /**
   * Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.
   * @param payload data to be passed to the listeners
   */
  emit(payload: EventPayload): void {
    this.emitter.emit(this._name, payload)
  }

  /**
   * Add listener to the broadcaster.
   * @param  listener to be added
   * @returns  function to remove the added listener
   */
  addListener(listener: Listener): Subscription {
    return this._addListener('addListener', listener)
  }

  /**
   * Alias of {@link Broadcaster.addListener}
   * @param  listener to be subscribed
   * @returns  function to unsubscribe the listener
   */
  on(listener: Listener): Subscription {
    return this.addListener(listener)
  }

  /**
   * Add listener to the beginning of the listener array
   * to be invoked first.
   * @returns  function to unsubscribe the listener
   */
  prependListener(listener: Listener): Subscription {
    return this._addListener('prependListener', listener)
  }

  /**
   * Add listener to be called only once.
   * @returns  function to unsubscribe the listener
   */
  once(listener: Listener): Subscription {
    return this._addListener('once', listener)
  }

  /**
   * Add listener to the beginning of the listener array.
   * To be invoked first but only once.
   * @returns  function to unsubscribe the listener
   */
  prependOnceListener(listener: Listener): Subscription {
    return this._addListener('prependOnceListener', listener)
  }

  /**
   * Remove listener.
   *
   * @param listener - listerner to be removed
   */
  removeListener(listener: Listener): void {
    this._proxyListener('removeListener', listener)
  }

  /**
   * Alias for {@link Broadcaster.removeListener}
   * @param listener listener to be removed
   */
  off(listener: Listener): void {
    this.removeListener(listener)
  }

  /**
   * Remove all listeners.
   *
   */
  removeAllListeners(): void {
    this.emitter.removeAllListeners(this._name)
  }

  /**
   * Get maximum number of listeners that can be registered.
   * {@link https://nodejs.org/api/events.html#events_emitter_getmaxlisteners}
   */
  getMaxListeners(): number {
    return this.emitter.getMaxListeners()
  }

  /**
   * Set maximum number of listernes.
   *
   * @param  n - maximum number - 0 means unlimited
   */
  setMaxListeners(n: number): void {
    this.emitter.setMaxListeners(n)
  }

  /**
   * Get the underlying {@link https://nodejs.org/api/events.html#events_class_eventemitter | EventEmitter instance.}
   *
   */
  getEventEmitter(): EventEmitter {
    return this.emitter
  }

  /**
   * Returna a copy of the array of listeners.
   */
  listeners(): Listener[] {
    return this.emitter.listeners(this._name) as Listener[]
  }

  /**
   * Returns a copy of the array of listeners,
   * including any wrappers (such as those created by .once()).
   * {@link https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname}
   */
  rawListeners(): Listener[] {
    return this.emitter.rawListeners(this._name) as Listener[]
  }

  /**
   * Get total number of listeners that are registered.
   *
   */
  listenerCount(): number {
    return this.emitter.listenerCount(this._name)
  }

  private _proxyListener(method: string, listener: Listener): void {
    this.emitter[method](this._name, listener)
  }

  private _createUnsubscribe(listener: Listener): Subscription {
    return (): void => {
      this.emitter.removeListener(this._name, listener)
    }
  }

  private _addListener(method: string, listener: Listener): Subscription {
    this._proxyListener(method, listener)
    return this._createUnsubscribe(listener)
  }

  /**
   * Destroy the instance and remove all listeners.
   */
  destroy(): void {
    this.emitter.removeAllListeners()
    this.emitter = null
  }
}

/**
 * Payload interface that is emitter from the events
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
  readonly payload?: any | undefined
}

/**
 * Listener interface for adding to Broadcaster.
 */
export type Listener = (event: EventPayload) => void

/**
 * Subscription interface that is used for unsubscribing the listener that was previously subscribed.
 */
export type Subscription = () => void
