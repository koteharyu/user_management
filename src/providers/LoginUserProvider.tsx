import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/api/user";

// useStateの更新関数の型は`Dispatch, SetStateAction`を使うんだって

export type LoginUserContextType = {
  // loginUserの初期値はnull
  loginUser: User | null
  setLoginUser: Dispatch<SetStateAction<User | null>>
}

type Props = {
  children: ReactNode
}

//createContextが保持する型を宣言                                             初期値の型をasで指定
export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType )

export const LoginUserProvider = (props: Props) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<User | null>(null)
  return (
    <LoginUserContext.Provider value = {{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
