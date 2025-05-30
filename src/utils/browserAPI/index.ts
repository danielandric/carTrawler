export const getSearchParams = () => window.location.search ?? []

export const getUrlSearchParams = (
  search: string | Record<string, string> | Record<string, string[]> = getSearchParams()
) => new URLSearchParams(search as string)

export const setUrlSearchParams = (search: string): void => {
  window.history.replaceState(null, '', search ? `${search}` : window.location.pathname)
}

export const addSearchParam = (name: string, value: string, search = window.location.search) => {
  const searchParams = getUrlSearchParams(search)
  searchParams.set(name, value)

  return `?${searchParams.toString()}`
}

export const removeSearchParam = (name: string, search = window.location.search) => {
  const searchParams = getUrlSearchParams(search)
  searchParams.delete(name)

  return `?${searchParams.toString()}`
}

export const updateSearchParam = (name: string, value?: string | null, search?: string) =>
  value ? addSearchParam(name, value, search) : removeSearchParam(name, search)
