import { useCallback, useEffect, useState } from 'react'

type useURLStateReturn<T> = [state: T, setState: (newValue: T) => void]

export function useURLState<T>(stateName: string, initialValue: T): useURLStateReturn<T> {
  const [state, setState] = useState<T>(initialValue)

  const getURLState = (name: string) => {
    const url = new URL(window.location as any)
    return url.searchParams.get(name)
  }

  const setURLState = useCallback((value: T) => {
    const url = new URL(window.location as any)
    url.searchParams.set(stateName, String(value))
    window.history.pushState({}, '', url)
    setState(value)
  }, [stateName])

  useEffect(() => {
    const urlState = getURLState(stateName) as unknown as T
    if (urlState) setState(urlState)
  }, [stateName])

  return [state, setURLState]
}