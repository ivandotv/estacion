import { Broadcaster } from '../src/broadcaster'

let broadcaster, listener, payload

beforeEach(() => {
  payload = {
    propOne: 'one',
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
    test('throw if name not provided', () => {
      expect(() => {
        broadcaster = new Broadcaster(undefined)
      }).toThrow('')
    })
  })

  describe('Add listeners', () => {
    test('addListener', () => {
      broadcaster.addListener(listener)

      broadcaster.emit(payload)

      expect(listener).toBeCalledWith(payload)
    })

    test('on', () => {
      broadcaster.on(listener)

      broadcaster.emit(payload)

      expect(listener).toBeCalledWith(payload)
    })

    test('once', () => {
      broadcaster.once(listener)

      broadcaster.emit(payload)
      broadcaster.emit(payload)

      expect(listener).toBeCalledTimes(1)
    })

    test('prependListener', () => {
      const firstListener = jest.fn(() => {
        throw new Error()
      })
      // add first listener (should throw if called first)
      broadcaster.addListener(firstListener)
      broadcaster.prependListener(() => {
        // switch firstListener mock not to throw
        // @ts-ignore
        firstListener.mockImplementation(() => true)
      })

      expect(() => {
        broadcaster.emit(payload)
      }).not.toThrow()
      expect(firstListener).toBeCalled()
    })

    describe('PrependOnceListener', () => {
      test('is called first', () => {
        const firstListener = jest.fn(() => {
          throw new Error()
        })
        // add first listener (should throw if called first)
        broadcaster.addListener(firstListener)
        broadcaster.prependOnceListener(() => {
          // switch firstListener mock not to throw
          // @ts-ignore
          firstListener.mockImplementation((): boolean => true)
        })

        expect(() => {
          broadcaster.emit(payload)
        }).not.toThrow()
        expect(firstListener).toBeCalled()
      })

      test('is called only one time', () => {
        const listenerTwo = jest.fn()
        broadcaster.addListener(jest.fn())
        broadcaster.prependOnceListener(listenerTwo)

        broadcaster.emit(payload)
        broadcaster.emit(payload)

        expect(listenerTwo).toBeCalledTimes(1)
      })
    })

    describe('Remove listeners', () => {
      test('removeListener', () => {
        broadcaster.addListener(listener)

        broadcaster.removeListener(listener)

        broadcaster.emit(payload)

        expect(listener).not.toBeCalled()
      })

      test('off', () => {
        broadcaster.addListener(listener)

        broadcaster.off(listener)
        broadcaster.emit(payload)

        expect(listener).not.toBeCalled()
      })

      test('removeAllListeners', () => {
        const listenerTwo = jest.fn()
        broadcaster.addListener(listener)
        broadcaster.addListener(listenerTwo)
        broadcaster.removeAllListeners()

        broadcaster.emit(payload)

        expect(listener).not.toBeCalled()
        expect(listenerTwo).not.toBeCalled()
      })

      test('unsubscribe via returned function ', () => {
        const subOne = broadcaster.addListener(listener)

        subOne()
        broadcaster.emit(payload)

        expect(listener).not.toBeCalled()
      })
    })
  })

  describe('Get and set number of listeners', () => {
    test('init with default number (0) unlimited', () => {
      const broadcaster = new Broadcaster('test')

      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(0)
    })

    test('init with custom number', () => {
      const max = 4

      const broadcaster = new Broadcaster('_', max)

      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(max)
    })

    test('set max listeners', () => {
      const max = 11

      broadcaster.setMaxListeners(max)

      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(max)
    })

    test('get max listeners', () => {
      const max = broadcaster.getMaxListeners()

      expect(broadcaster.getEventEmitter().getMaxListeners()).toBe(max)
    })
  })
  describe('Query listeners', () => {
    test('get listeners', () => {
      const listeners = [jest.fn(), jest.fn(), jest.fn()]

      broadcaster.addListener(listeners[0])
      broadcaster.once(listeners[1])
      broadcaster.addListener(listeners[2])

      expect(broadcaster.listeners()).toEqual(expect.arrayContaining(listeners))
    })

    test('get raw listeners', () => {
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
