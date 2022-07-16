import { createContext, Dispatch, SetStateAction, useState,useContext } from 'react'

type GlobalValue = {
  z: any
  setz: Dispatch<SetStateAction<any>>
  t: any
  sett: Dispatch<SetStateAction<any>>

} | null

export const GlobalContext = createContext<GlobalValue>(null)

export function GlobalProvider(props: any) {
  const [z, setz] = useState("")
  const [t, sett] = useState(0)

  const value: GlobalValue = {
    z,setz,t,sett,

  }
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  )
}
export function useGlobalContext() {
  return useContext(GlobalContext)
}