type Handler = (data?: any, event?: string) => void

export default class Listener {
  private eventHandlers: {
    [key: string]: Handler[]
  } = {}

  on(event: string, handler: Handler) {
    if (!(event in this.eventHandlers)) {
      this.eventHandlers[event] = []
    }

    this.eventHandlers[event].push(handler)

    return () => {
      this.off(event, handler)
    }
  }

  off(event: string, handler: Handler) {
    if (!(event in this.eventHandlers)) {
      return
    }

    this.eventHandlers[event] = this.eventHandlers[event].filter(
      (x) => x !== handler
    )
  }

  trigger(event: string, data?: unknown) {
    if ('@' in this.eventHandlers) {
      this.eventHandlers['@'].forEach((handler) => handler(data, event))
    }

    if (!(event in this.eventHandlers)) {
      return
    }
    this.eventHandlers[event].forEach((handler) => handler(data, event))
  }
}
