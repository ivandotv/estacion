# Estacion

Your search for event bus implementation is over.

## Instalation

```js
npm install estacion
```

## Example

```js
const { EventBus } = require('estacion')

// or import { EventBus } from 'estacion'

// create event bus
const bus = new EventBus()

// create channels
const usersChannel = bus.channel('users')
const gamesChannel = bus.channel('games')

// create topics for the channel (optional)
const userAdded = usersChannel.topic('user_added')
const userRemoved = usersChannel.topic('user_removed')

// create topics for the channel (optional)
const gameStart = gamesChannel.topic('game_start')
const gameEnd = gamesChannel.topic('game_end')

// create listener
const listener = event => {
  console.log(event.channel)
  console.log(event.topic)
  console.log(event.payload) // custom payload from the event
}

// add listener to the channel
usersChannel.addListener(listener)

// or add listener to the channel topic
userAdded.addListener(listener)

// emit event on the channel
const customPayload = {} // whatever you like
usersChannel.emit(customPayload)

// or emit event on the topic
userAdded.emit({ name: 'Sam', lastName: 'Fisher' })

// advanced
// subscribe to all channels and topics (more in the docs)
bus.mainChannel().addListener(event)

// advanced
// subscribe to all channels but only for a particular topic
// now you will listen to 'game_end' on any channel
bus
  .mainChannel()
  .topic('game_end')
  .addListener(event)
```

> skip to [`mainChannel`](#Eventbus-main-channel) explanation

Setup is really simple:

1. EventBus holds channels.
2. Channels hold topics.
3. Add listeners to channels or topics.

## EventBus

`EventBus` is used for creating and removing channels. You can create
any number of channels.

`EventBus` is not a singleton, you can create any number of `EventBus` instances.

```js
const eventBus = new EventBus()

// create new channel or return existing channel with that name
const channel = eventBus.channel('nbc')

// remove channel
// all listeners will be automatically unsubscribed
const eventBus.removeChannel('nbc')
```

## Channel

`Channel` can create and remove `topics`. You can add listeners directly to the `channel` or you can add listeners to the particular `topic`.
When you add a listener to the channel directly, you will be notified for all events that are dispatched via `topics` for that channel, and also when the `channel` itself emits ( `event.topic` will be set to `'*'` ).

```js
// create event bus
const eventBus = new EventBus()

// create new channel or return existing channel with that name
const channel = eventBus.channel('nbc')

// create topics on the channel
const economyTopic = channel.topic('economy')
const sportsTopic = channel.topic('sports')

// listen to all topics ( addListener directly to the channel)
const listener = event => {
  console.log(event.channel) // 'nbc'
  console.log(event.topic) // 'economy' or 'sports' or '*'
  console.log(event.payload) // custom data from the topics
}

channel.addListener(listener)

economyTopic.addListener(event => {
  console.log(event.channel) // 'nbc'
  console.log(event.topic) // 'economy'
  console.log(event.payload) // custom data from 'economy' topic
})

//remove all listeners from the channel ( including listeners on all topics)
channel.removeAllListeners()
// or particular listener
channel.removeListener(listener)
```

## Topic

`Topic` is the smallest building block of the event bus system. You can only create topics via channels.

```js
// create event bus
const eventBus = new EventBus()

// create new channel or return existing channel with that name
const channel = eventBus.channel('nbc')

// create topics on the channel
const ecologyTopic = channel.topic('ecology')

const listener = event => {
  console.log(event.channel) // 'nbc'
  console.log(event.topic) // 'ecology'
  console.log(event.payload.title) // 'Climate change is real'
  console.log(event.payload.content) // 'Lorem ipsum'
}

// listen to 'ecology' topic
ecologyTopic.addListener(listener)

// emit data
ecologyTopic.emit({ title: 'Climate change is real.', content: 'Lorem ipsum' })

channel.removeTopic('ecology') //all listeners will be automatically removed

// or remove listener directly from the topic
ecologyTopic.removeListener(listener)
```

## Subscribe

`Channel` and `Topic` classes both inherit from the `Broadcaster` class, which wraps the native `EventEmitter` and exposes some of its methods.
You can subscribe to the `channel` or `topic` via these methods:

```js
const listener = event => {}
channelOrTopic.addListener(listener)
channelOrTopic.on(listener) // alias for addListener
channelOrTopic.prependListener(listener) // be first to be notified
channelOrTopic.once(listener) // fire only once
channelOrTopic.prependOnceListener(listener) // be first to be notified only once
```

Listener function accepts one parameter`EventPayload` .

```js
type Listener = (event: EventPayload) => void
```

```js
/**
 * Payload interface that is emited from the events
 */
interface EventPayload {
  /**
   * Channel name.
   *
   * @type {string}
   */
  channel: string
  /**
   * Topic name.
   *
   * @type {string}
   */
  topic: string
  /**
   * Payload - custom data to pass to the listeners
   *
   * @type {*}
   */
  readonly payload?: any | undefined
}
```

## Unsubscribe

Every one of the subscribe function variations returns a function to unsubscribe from the `channel` or `topic`

```js
const listener = event => {}
const unsubscribe = channelOrTopic.addListener(listener)
unsubscribe() // unsubscribe from the channel or topic
```

Or you can use one of the methods on `channel` or `topic`

```js
const listener = event => {}
channelOrTopic.removeListener(listener)
channelOrTopic.off(listener) // alias for removeListener
```

Remove all listeners from the `channel` or `topic`:

```js
channelOrTopic.removeAllListeners()
```

Also by destroying `channel` or `topic`, all listeners will be automatically unsubscribed.
When destroying `channel` all topics in that channel will also be destroyed.

```js
const eventBus = new EventBus()

// create new channel or return existing channel with that name
const channel = eventBus.channel('nbc')

// create topics on the channel
const ecologyTopic = channel.topic('ecology')

channel.addListener(event => {})
ecologyTopic.addListener(event => {})

// all listeners will be removed
channel.destroy()

// no need to call for this
ecologyTopic.destory()
```

## EventBus main channel

There is a special channel on the `EventBus` that is created automatically with every `EventBus` instance. This special channel is used for listening to all other **channels** via just one subscribe call.

```js
const eventBus = new EventBus()

const channelOne = eventBus.channel('one')
const channelTwo = eventBus.channel('two')

channelOne.emit({ name: 'Sam' })
channelTwo.emit({ name: 'Jack' })

const mainChannel = eventBus().mainChannel()

//subcribe to all channels and all topics
mainChannel.addListener(event => {
  console.log(event.channel) // 'one' or 'two'
  console.log(event.topic) // any topic from  channels 'one' or 'two'
  console.log(event.payload) // {name: 'Sam'} or {name: 'Jack'}
})
```

You can also subscribe to the particular `topics` that are emitted
from any channel. In the next example, you will subscribe to the 'economy' topic on any channel and nothing else.

```js
const eventBus = new EventBus()

const channelOne = eventBus.channel('cnn')
const channelTwo = eventBus.channel('nbc')

channelOne.topic('economy').emit()
channelTwo.topic('economy').emit()

const mainChannel = eventBus().mainChannel()

//subcribe to all channels but only 'economy` topic
mainChannel.topic('economy').addListener(event => {
  console.log(event.channel) // 'one' or 'two
  console.log(event.topic) // 'economy' from both channels
})
```

`Estacion` is written in TypeScript take a look at
[Auto Generated API Docs](https://github.com/ivandotv/estacion/blob/master/docs/README.md)
