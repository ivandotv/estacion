// var Broadcaster = require("./broadcaster")
// var Topic = require("./topic")
import { Broadcaster, EventPayload } from './broadcaster'
import { Topic } from './topic'

export class Channel extends Broadcaster {
  topics: {
    [key: string]: Topic | undefined
  } = {}

  constructor(name: string, maxListeners: number = 0) {
    super(name, maxListeners)
    this._onTopicDestroyed = this._onTopicDestroyed.bind(this)
    this._onTopicEmit = this._onTopicEmit.bind(this)
  }

  emit(payload: EventPayload): void {
    var payloadData = {
      channel: this.name,
      topic: '',
      payload: payload,
    }

    super.emit(payloadData)
  }

  topic(name: string): Topic {
    var topic = this.topics[name]
    if (!topic) {
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

  hasTopic(name: string): boolean {
    return Boolean(this.topics[name])
  }

  removeTopic(name: string): boolean {
    const topic = this.topics[name]
    /* istanbul ignore else */
    if (topic) {
      this.topics[name] = null
      topic.destroy()
      return true
    }
    return false
  }

  /* reemit when channel topic emits */
  private _onTopicEmit(payload: EventPayload): void {
    super.emit(payload)
  }

  /* remove topic from the pool */
  private _onTopicDestroyed(name: string): void {
    this.topics[name] = null
  }

  destroy(): void {
    for (var topic in this.topics) {
      this.removeTopic(topic)
    }
    this.topics = null
    this.emitter.emit('channel_destroyed', this.name)
    super.destroy()
  }
}
