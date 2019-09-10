import { Broadcaster, EventPayload } from './broadcaster'

export class Topic extends Broadcaster {
  channel: string

  constructor(name: string, channel: string, maxListeners: number = 0) {
    super(name, maxListeners)
    this.channel = channel
  }

  emit(payload: EventPayload): void {
    const payloadData = {
      channel: this.channel,
      topic: this.name,
      payload: payload,
    }
    // Broadcaster.prototype.emit.call(this, payloadData)
    super.emit(payloadData)
  }

  destroy(): void {
    this.emitter.emit('topic_destroyed', this.name)
    super.destroy()
  }
}
