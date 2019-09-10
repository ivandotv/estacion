import { Channel } from '../src/channel'
import { Topic } from '../src/topic'

let channel, channelName, payload

beforeEach(() => {
  payload = {
    propOne: 'one',
  }
  channelName = 'Dancer'
  channel = new Channel(channelName)
})
describe('Channel', () => {
  test('emit', () => {
    const expectedPayload = {
      channel: channel.name,
      topic: '',
      payload: payload,
    }
    const listener = jest.fn()
    channel.addListener(listener)

    channel.emit(payload)

    expect(listener).toBeCalledWith(expect.objectContaining(expectedPayload))
  })

  test('reemit when topic emits', () => {
    const listener = jest.fn()
    const topicName = 'test'
    const topic = channel.topic(topicName)
    const expectedPayload = {
      channel: channel.name,
      topic: topicName,
      payload: payload,
    }
    // add listener to the channel
    channel.addListener(listener)

    topic.emit(payload)

    expect(listener).toBeCalledWith(expect.objectContaining(expectedPayload))
  })

  test('create topic', () => {
    const topicName = 'tEsT'

    const channel = new Channel('test')
    channel.topic(topicName)

    expect(channel.hasTopic(topicName)).toBe(true)
  })

  test('check if topic exists', () => {
    const topicName = 'test'

    const topic = channel.topic(topicName)

    expect(topic).toBeInstanceOf(Topic)
    expect(channel.hasTopic(topicName)).toBe(true)
    expect(channel.hasTopic('fake')).toBe(false)
  })

  test('destroy topic', () => {
    const channel = new Channel('test')
    const topic = channel.topic('test')
    const spy = jest.spyOn(topic, 'destroy')

    const r = channel.removeTopic(topic.name)

    expect(spy).toBeCalled()
    expect(r).toBe(true)
    expect(channel.hasTopic(topic.name)).toBe(false)
  })
  test("return false if topic to destroy doesn't exist", () => {
    const channel = new Channel('test')

    const result = channel.removeTopic('fake')

    expect(result).toBe(false)
  })

  test('destroy channel', () => {
    const topic = channel.topic('test')
    const emitterEmitSpy = jest.spyOn(channel.emitter, 'emit')
    const topicDestorySpy = jest.spyOn(topic, 'destroy')

    channel.destroy()

    expect(topicDestorySpy).toBeCalled()
    expect(emitterEmitSpy).toBeCalledWith('channel_destroyed', channel.name)
  })
})
