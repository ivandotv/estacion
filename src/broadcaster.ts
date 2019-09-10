import { EventEmitter } from 'events'

export class Broadcaster {
  emitter: EventEmitter

  private _name: string

  constructor(name: string, maxListeners = 0) {
    this.emitter = new EventEmitter()
    if (!name) {
      throw new Error('Broadcaster must have a name')
    }
    this._name = name
    this.emitter.setMaxListeners(maxListeners)
  }

  get name(): string {
    return this._name
  }

  emit(payload: EventPayload): void {
    this.emitter.emit(this._name, payload)
  }

  addListener(listener: Listener): Subscription {
    return this._addListener('addListener', listener)
  }

  on(listener: Listener): Subscription {
    return this.addListener(listener)
  }

  prependListener(listener: Listener): Subscription {
    return this._addListener('prependListener', listener)
  }

  once(listener: Listener): Subscription {
    return this._addListener('once', listener)
  }

  prependOnceListener(listener: Listener): Subscription {
    return this._addListener('prependOnceListener', listener)
  }

  removeListener(listener: Listener): void {
    this._proxyListener('removeListener', listener)
  }

  off(listener: Listener): void {
    this.removeListener(listener)
  }

  removeAllListeners(): void {
    this.emitter.removeAllListeners(this._name)
  }

  getMaxListeners(): number {
    return this.emitter.getMaxListeners()
  }

  setMaxListeners(n: number): void {
    this.emitter.setMaxListeners(n)
  }

  getEventEmitter(): EventEmitter {
    return this.emitter
  }

  listeners(): Listener[] {
    return this.emitter.listeners(this._name) as Listener[]
  }

  rawListeners(): Listener[] {
    return this.emitter.rawListeners(this._name) as Listener[]
  }

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

  destroy(): void {
    this.emitter.removeAllListeners()
    this.emitter = null
  }
}

/**
 * Payload interface that should be emitted.
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
  readonly payload: any
}

/**
 * Listener interface for adding to Broadcaster.
 */
export type Listener = (event: EventPayload) => void

/**
 * Subscription interface that is used for unsubscribing the listener that was previously subscribed.
 */
export type Subscription = () => void
