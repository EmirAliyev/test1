import axios from 'axios'
export class HttpService {
  constructor(params = {}) {
    const controller = new AbortController()
    this.instance = axios.create({ baseURL: params.baseURL, signal: controller.signal })
    return this.instance
  }
}
