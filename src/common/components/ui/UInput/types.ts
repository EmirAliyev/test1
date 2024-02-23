import { Ref } from 'vue'

export interface IProps {
  type?: 'text' | 'password' | 'number' | 'email'
  disabled?: boolean
  placeholder?: string
  errorMessage?: string | Ref<string>
  clearable?: boolean
}

export interface IRules {
  name: string
  email: string
  phone: string
}
