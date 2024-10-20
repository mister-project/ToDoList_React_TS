import { RootState } from "../store"
export const saveToLocalStorage = (state: RootState) => {
    const appState = JSON.stringify(state)
    localStorage.setItem('appState', appState)
  }
  
export const loadFromLocalStorage = () => {
    const appState = localStorage.getItem('appState')
    if (!appState) return undefined
    return JSON.parse(appState)
  }