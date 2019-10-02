import { Channel, EventPayload, Topic } from '../src/index'
let channel: Channel, channelName: string, payload: EventPayload

beforeEach(() => {
  channelName = 'dancer'
  payload = {
    channel: channelName,
    topic: 'test_topic',
    payload: {
      propOne: 'one',
    },
  }
  channel = new Channel(channelName)
})

describe('Channel', () => {
  test('emit from channel', () => {
    const expectedPayload = {
      channel: channel.name,
      topic: '*',
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

  test('create new topic', () => {
    const topicName = 'tEsT'

    const channel = new Channel('test')
    channel.topic(topicName)

    expect(channel.hasTopic(topicName)).toBe(true)
  })

  test('check if topic whith the name already exists', () => {
    const topicName = 'test'

    const topic = channel.topic(topicName)

    expect(topic).toBeInstanceOf(Topic)
    expect(channel.hasTopic(topicName)).toBe(true)
    expect(channel.hasTopic('fake')).toBe(false)
  })

  test('destroy the topic', () => {
    const channel = new Channel('test')
    const topic = channel.topic('test')
    const spy = jest.spyOn(topic, 'destroy')

    const r = channel.removeTopic(topic.name)

    expect(spy).toBeCalled()
    expect(r).toBe(true)
    expect(channel.hasTopic(topic.name)).toBe(false)
  })
  test('list all topics', () => {
    channel = new Channel('test')
    channel.topic('1')
    channel.topic('2')
    channel.topic('3')

    const allTopics = channel.getAllTopics()

    expect(allTopics.length).toBe(3)
  })
  test("if the topic to destroy doesn't exist, return false ", () => {
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
