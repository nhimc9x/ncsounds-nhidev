export const generateShortId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let shortId = ''
  for (let i = 0; i < 11; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    shortId += characters[randomIndex]
  }
  return shortId
}
