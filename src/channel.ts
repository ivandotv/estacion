import { Broadcaster, EventPayload } from './broadcaster'
import { Topic } from './topic'

/**
 * Class that represents a channel for broadcasting via EventBus.
 *
 */
export class Channel extends Broadcaster {
  topics: {
    [key: string]: Topic
  } = {}

  /**
   * @param  name - channel name
   * @param  maxListeners - maximum number of listeners allowd default value zero(0) - unlimited
   */
  constructor(name: string, maxListeners: number = 0) {
    super(name, maxListeners)
    this._onTopicDestroyed = this._onTopicDestroyed.bind(this)
    this._onTopicEmit = this._onTopicEmit.bind(this)
  }

  /**
   * Emit payload
   * @param [payload] - payload to emit
   */
  emit(payload?: any | undefined): void {
    var payloadData = {
      channel: this.name,
      topic: '*',
      payload: payload
    }

    super.emit(payloadData)
  }

  /**
   * Create or return existing topic for the channel.
   *
   * @param name - topic name
   */
  topic(name: string): Topic {
    var topic = this.topics[name]
    if (typeof topic === 'undefined') {
      // create new topic
      topic = this.topics[name] = new Topic(
        name,
        this.name,
        this.getMaxListeners()
      )
      topic.getEventEmitter().on('topic_destroyed', this._onTopicDestroyed)
      topic.on(this._onTopicEmit)
    }

    return topic
  }

  /**
   * Check if topic exists.
   *
   * @param  name - topic name to check
   * @returns  true if topic is found
   */
  hasTopic(name: string): boolean {
    return Boolean(this.topics[name])
  }

  /**
   * Remove topic from the channel.
   * All listeners for the topic are automatically removed.
   *
   * @param  name - topic name
   * @returns true if the topic has been successfully removed
   */
  removeTopic(name: string): boolean {
    const topic = this.topics[name]
    /* istanbul ignore else */
    if (typeof topic !== 'undefined') {
      delete this.topics[name]
      topic.destroy()

      return true
    }

    return false
  }

  /**
   * Gets all topics
   * @returns all topics
   */
  getAllTopics(): Topic[] {
    return Object.values(this.topics)
  }

  /* reemit when channel topic emits */
  private _onTopicEmit(payload: EventPayload): void {
    super.emit(payload)
  }

  /* remove topic from the pool */
  private _onTopicDestroyed(name: string): void {
    delete this.topics[name]
  }

  /**
   * Destroy the instance
   *
   */
  destroy(): void {
    for (var topic in this.topics) {
      this.removeTopic(topic)
    }

    this.emitter.emit('channel_destroyed', this.name)
    super.destroy()
  }
}
