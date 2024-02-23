import { Base } from '@/services/Base'

export class TestAPI extends Base {
  static get entity() {
    return 'test'
  }

  static async getTest() {
    try {
      const { data } = await this.request().post(`/${this.entity}/get`)
      return data
    } catch (error) {
      console.error('Error in getTest:', error)
      return { status: 'error', data: null }
    }
  }

  static async postTest({ name, email, phone }) {
    const body = {
      name,
      email,
      phone,
    }
    try {
      const { data } = await this.request().post(`/${this.entity}/post`, body)
      return data
    } catch (error) {
      console.error('Error in postTest:', error)
      return { status: 'error', data: null }
    }
  }
}
