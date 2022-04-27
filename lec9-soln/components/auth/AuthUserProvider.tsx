import { createContext, useContext, ReactNode } from "react"
import { WrappedComponentProps } from "react-with-firebase-auth"
import { AuthData } from "../../types"
import { createComponentWithAuth } from "../../util/firebase"

type Props = WrappedComponentProps & {
  children?: ReactNode
}

const AuthUserContext = createContext<AuthData>({
  signInWithGoogle: () => {},
  signOut: () => {},
  user: null,
  loading: true,
})

const AuthUserProvider = ({ children, ...auth }: Props) => {
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  )
}

export default createComponentWithAuth(AuthUserProvider)

export const useAuth = () => useContext(AuthUserContext)
