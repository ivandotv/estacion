import { Channel } from './channel'
import { EventPayload } from './broadcaster'
/**
 * Class representing the EventBus.
 * Main purpose is creating and removing channels
 */
export class EventBus {
  private readonly _maxListeners: number

  private defaultChannel!: Channel

  private channels: {
    [key: string]: Channel
  } = {}

  constructor(config?: EventBusConfig | undefined) {
    config = typeof config === 'undefined' ? {} : config
    this._maxListeners =
      config.maxListeners === undefined ? 0 : config.maxListeners
    this.onChannelDestroyed = this.onChannelDestroyed.bind(this)
    this.createMainChannel()
    this.onChannelEmit = this.onChannelEmit.bind(this)
  }

  private createMainChannel(): void {
    this.defaultChannel = new Channel('*', this._maxListeners)
    this.channels['*'] = this.defaultChannel
    this.defaultChannel.getEventEmitter().on('channel_destroyed', () => {
      this.createMainChannel()
    })
  }

  /**
   * Return main (default channel) for the  EventBus instance.
   * by subscribing to the main channel you can listen to
   * events emitted from all other channels and topics.
   */
  mainChannel(): Channel {
    return this.defaultChannel
  }

  /**
   * Alias for {@link EventBus.mainChannel}
   */
  allChannels(): Channel {
    return this.mainChannel()
  }
  /**
   * Create and return the channel with the specified name.
   * If the channel does not exist it will be created.
   *
   * @param name - channel name
   */

  channel(name: string): Channel {
    let channel = this.channels[name]
    if (typeof channel === 'undefined') {
      // create new channel
      channel = this.channels[name] = new Channel(name, this._maxListeners)
      channel.on(this.onChannelEmit)
      channel.getEventEmitter().on('channel_destroyed', this.onChannelDestroyed)
    }

    return channel
  }

  /**
   * Check if the channel exists.
   *
   * @param name - channel name
   */
  hasChannel(name: string): boolean {
    return Boolean(this.channels[name])
  }

  /**
   * Remove the channel.
   * All listeners for the channel on all topics emitted from the channel
   * are automatically removed.
   *
   * @param  name - channel name
   * @returns true if the channel has been removed successfully
   */
  removeChannel(name: string): boolean {
    if (name === '*') {
      throw new Error("Can't remove default channel")
    }
    const channel = this.channels[name]
    /* istanbul ignore else */
    if (typeof channel !== 'undefined') {
      channel.destroy()

      return true
    }

    return false
  }

  /* when any channel emits, reemit on default channel  */
  private onChannelEmit(payload: EventPayload): void {
    const topicName = payload.topic
    if (this.defaultChannel.hasTopic(topicName)) {
      // subscribers for topic on all available channels
      const topicPayload = {
        topic: payload.topic,
        channel: payload.channel,
        payload: payload.payload
      }

      this.defaultChannel
        .topic(topicName)
        .getEventEmitter()
        .emit(topicName, topicPayload)
    }
    this.defaultChannel
      .getEventEmitter()
      .emit(this.defaultChannel.name, payload) // for all subscribers
  }

  /* Channel destroyed event: Remove destroyed channel from the pool  */
  private onChannelDestroyed(name: string): void {
    delete this.channels[name]
  }

  /**
   * Gets all channels
   * @returns all channels
   */
  getAllChannels(): Channel[] {
    return Object.values(this.channels)
  }

  /**
   * Destroy the instance.
   * All channels and all topics are automatically destroyed.
   * All listeners from channels and topics are removed.
   */
  destroy(): void {
    for (const channel in this.channels) {
      this.channels[channel].destroy()
    }
  }
}

/**
 * Configuration for EventBus instance.
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
