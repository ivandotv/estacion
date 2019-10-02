import { EventPayload, Listener, Topic } from '../src/index'
let topic: Topic,
  listener: Listener,
  payload: EventPayload,
  topicName: string,
  channelName: string

beforeEach(() => {
  channelName = 'rocketLaunch'
  topicName = 'rocketLanded'
  payload = {
    channel: channelName,
    topic: topicName,
    payload: {
      propOne: 'one',
    },
  }
  listener = jest.fn()
  topic = new Topic(topicName, channelName)
})

describe('Topic', () => {
  test('emit payload with specific data', () => {
    const expectedPayload = {
      payload: payload,
      channel: channelName,
      topic: topicName,
    }
    topic.addListener(listener)

    topic.emit(payload)

    expect(listener).toBeCalledWith(expect.objectContaining(expectedPayload))
  })

  test('destroy the instance', () => {
    const emitterEmitSpy = jest.spyOn(topic.emitter, 'emit')

    topic.destroy()

    expect(emitterEmitSpy).toBeCalledWith('topic_destroyed', topic.name)
  })
})
