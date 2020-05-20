import { Broadcaster } from './broadcaster'

/**
 * Class that reperesents topic for the channel.
 */
export class Topic extends Broadcaster {
  readonly channel: string

  /**
   * @param  name topic name
   * @param channel channel this topic belongs to
   * @param maxListeners maximum number of listeners allowed
   */
  constructor(name: string, channel: string, maxListeners: number = 0) {
    super(name, maxListeners)
    this.channel = channel
  }

  emit(payload?: any | undefined): void {
    const payloadData = {
      channel: this.channel,
      topic: this.name,
      payload: payload
    }
    super.emit(payloadData)
  }

  /**
   * Destroy the instance
   *
   */
  destroy(): void {
    this.emitter.emit('topic_destroyed', this.name)
    super.destroy()
  }
}
