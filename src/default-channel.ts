import { Channel } from './channel'

export class DefaultChannel extends Channel {
  destroy(): void {
    throw new Error(`Default channel cant't be destroyed`)
  }
}
