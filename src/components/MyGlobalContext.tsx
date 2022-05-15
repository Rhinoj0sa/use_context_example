import { createContext, useContext } from "react"
export type GlobalContent = {
  copy: string
  risk: string
  setCopy:(c: string) => void
  setRisk:(r: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
copy: 'Hello World', // set a default value
setCopy: () => {},
risk: 'default risk',
setRisk: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)