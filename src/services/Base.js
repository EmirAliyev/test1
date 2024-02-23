import { HttpService } from '@/services/HttpService'

export class Base {
  static get entity() {
    throw new Error('"entity" getter not defined')
  }

  static request() {
    const httpInstance = new HttpService({
      baseURL: `${import.meta.env.VITE_API_URL}/api`,
    })

    return httpInstance
  }
}
