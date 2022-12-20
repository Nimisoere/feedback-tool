export const fetcher = async (url: string, init: RequestInit) => {
  try {
    const res = await fetch(url, init)
    if (!res.ok) {
      const error: any = new Error('An error occurred')
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return await res.json()
  } catch (e: any) {
    throw new Error(e?.message)
  }
}