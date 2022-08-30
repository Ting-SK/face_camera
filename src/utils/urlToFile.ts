export const urlToFile = async (
  url: string,
  filename: string,
  mimeType: string
): Promise<File> => {
  const res = await fetch(url)
  const buf = await res.arrayBuffer()
  return new File([buf], filename, { type: mimeType })
}
