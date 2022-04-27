import { User } from "@firebase/auth"

export type Task = {
  text: string
  checked: boolean
  owner: string
}

export type TaskWithId = Task & {
  id: string
}

export type AuthData = {
  signInWithGoogle: () => void
  signOut: () => void
  user?: User | null
  loading: boolean
}
