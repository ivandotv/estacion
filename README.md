# Estacion

Your search for event bus implementation is over.

## Example

```js
// create event bus
const eventBus = new EventBus()

// create channel
const users = eventBus.channel('users')

// create topics for the channel (optional)
const userAdded = users.topic('user_added')
const userRemoved = users.topic('user_removed')

// create listener
const listener = event => {
  console.log(event.channel)
  console.log(event.topic)
  console.log(event.payload) // custom payload from the event
}

// add listener to the channel
users.addListener(listener)

// or add listener to the topic
userAdded.addListener(listener)

// emit event on the channel
const customPayload = {} // whatever you like
users.emit(customPayload)

// or emit event on the topic
userAdded.emit({ name: 'Sam', lastName: 'Fisher' })
```

## Channels and topics concepts explained

`EventBus` holds `channels`, channel holds `topics`
