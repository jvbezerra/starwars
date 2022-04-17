export function useQuery() {
  const getParam = (name: string) => {
    const url = new URL(window.location as any)
    return url.searchParams.get(name)
  }

  const setParam = (name: string, value: string) => {
    const url = new URL(window.location as any)
    url.searchParams.set(name, value)
    window.history.pushState({}, '', url)
  }

  return { getParam, setParam }
}