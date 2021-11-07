import { Broadcaster, EventPayload, Listener } from '../src/index'

let broadcaster: Broadcaster, listener: Listener, payload: EventPayload

beforeEach(() => {
  payload = {
    channel: 'test_channel',
    topic: 'test_topic',
    payload: {
      propOne: 'one'
    }
  }
  listener = jest.fn()
  broadcaster = new Broadcaster('test')
})

describe('Broadcaster', () => {
  describe('Initialize', () => {
    test('with paramters', () => {
      const name = 'test'
      broadcaster = new Broadcaster(name)
      expect(broadcaster.name).toBe(name)
      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(0)
    })
    test('if the name is not provided, throw error', () => {
      expect(() => {
        broadcaster = new Broadcaster(undefined as unknown as string)
      }).toThrow('')
    })
  })

  describe('Add listeners', () => {
    test('addListener method', () => {
      broadcaster.addListener(listener)

      broadcaster.emit(payload)

      expect(listener).toBeCalledWith(payload)
    })

    test('on method', () => {
      broadcaster.on(listener)

      broadcaster.emit(payload)

      expect(listener).toBeCalledWith(payload)
    })

    test('once method', () => {
      broadcaster.once(listener)

      broadcaster.emit(payload)
      broadcaster.emit(payload)

      expect(listener).toBeCalledTimes(1)
    })

    test('prependListener method', () => {
      const firstListener = jest.fn(() => {
        throw new Error()
      })
      // add first listener (should throw if called first)
      broadcaster.addListener(firstListener)
      broadcaster.prependListener(() => {
        // @ts-expect-error switch firstListener mock not to throw
        firstListener.mockImplementation(() => true)
      })

      expect(() => {
        broadcaster.emit(payload)
      }).not.toThrow()
      expect(firstListener).toBeCalled()
    })

    describe('PrependOnceListener', () => {
      test('whenever added listener should be called first', () => {
        const firstListener = jest.fn(() => {
          throw new Error()
        })
        // add first listener (should throw if called first)
        broadcaster.addListener(firstListener)
        broadcaster.prependOnceListener(() => {
          // @ts-expect-error switch firstListener mock not to throw
          firstListener.mockImplementation((): boolean => true)
        })

        expect(() => {
          broadcaster.emit(payload)
        }).not.toThrow()
        expect(firstListener).toBeCalled()
      })

      test('listener is called only once', () => {
        const listenerTwo = jest.fn()
        broadcaster.addListener(jest.fn())
        broadcaster.prependOnceListener(listenerTwo)

        broadcaster.emit(payload)
        broadcaster.emit(payload)

        expect(listenerTwo).toBeCalledTimes(1)
      })
    })

    describe('Remove listeners', () => {
      test('removeListener method', () => {
        broadcaster.addListener(listener)

        broadcaster.removeListener(listener)

        broadcaster.emit(payload)

        expect(listener).not.toBeCalled()
      })

      test('remove listener via off method', () => {
        broadcaster.addListener(listener)

        broadcaster.off(listener)
        broadcaster.emit(payload)

        expect(listener).not.toBeCalled()
      })

      test('remove listener via removeAllListeners method', () => {
        const listenerTwo = jest.fn()
        broadcaster.addListener(listener)
        broadcaster.addListener(listenerTwo)
        broadcaster.removeAllListeners()

        broadcaster.emit(payload)

        expect(listener).not.toBeCalled()
        expect(listenerTwo).not.toBeCalled()
      })

      test('unsubscribe listener via returned function', () => {
        const subOne = broadcaster.addListener(listener)

        subOne()
        broadcaster.emit(payload)

        expect(listener).not.toBeCalled()
      })
    })
  })

  describe('Get and set number of listeners', () => {
    test('initialize with the default number (0) unlimited', () => {
      const broadcaster = new Broadcaster('test')

      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(0)
    })

    test('initialize with custom number', () => {
      const max = 4

      const broadcaster = new Broadcaster('_', max)

      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(max)
    })

    test('set maximum number of listeners listeners', () => {
      const max = 11

      broadcaster.setMaxListeners(max)

      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(max)
    })

    test('get maximum number listeners', () => {
      const max = broadcaster.getMaxListeners()

      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(max)
    })
  })
  describe('Query listeners', () => {
    test('get all listeners', () => {
      const listeners = [jest.fn(), jest.fn(), jest.fn()]

      broadcaster.addListener(listeners[0])
      broadcaster.once(listeners[1])
      broadcaster.addListener(listeners[2])

      expect(broadcaster.listeners()).toEqual(expect.arrayContaining(listeners))
    })

    test('call raw listeners method', () => {
      const listeners = [jest.fn(), jest.fn(), jest.fn()]

      broadcaster.addListener(listeners[0])
      broadcaster.addListener(listeners[1])
      broadcaster.once(listeners[2])

      listeners.splice(2)

      expect(broadcaster.rawListeners()).toEqual(
        expect.arrayContaining(listeners)
      )
    })

    test('get listener count', () => {
      broadcaster.addListener(jest.fn())
      broadcaster.once(jest.fn())
      broadcaster.prependListener(jest.fn())
      broadcaster.prependOnceListener(jest.fn())

      expect(broadcaster.listenerCount()).toBe(4)
    })
  })

  describe('Destroy', () => {
    test('release references', () => {
      const internalEmitter = jest.spyOn(
        broadcaster.emitter,
        'removeAllListeners'
      )

      broadcaster.destroy()

      expect(internalEmitter).toBeCalled()
    })
  })
})
