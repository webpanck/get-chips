import create from 'zustand'
import type { FormError } from '../lib/validate'

type Data = {
  email: string
  code: string
}
interface SignIn {
  data: Data
  error: FormError<Data>
  setData: (data: Partial<Data>) => void
  setError: (error: Partial<FormError<Data>>) => void
}

export const useSignInStore = create<SignIn>((set, get) => (
  {
    data: {
      // TODO: 删掉这个邮箱地址
      email: '18008514399@163.com',
      code: ''
    },
    error: {
      email: [],
      code: []
    },
    setData: (data: Partial<Data>) => {
      set(state => ({
        ...state,
        data: {
          ...state.data,
          ...data
        }
      }))
    },
    setError: (error: Partial<FormError<Data>>) => {
      set(state => ({
        ...state,
        error: {
          ...error
        }
      }))
    }
  }
))
