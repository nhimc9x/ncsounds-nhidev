import { useEffect } from 'react'
function TitleManager({ title }) {
  useEffect(() => { document.title = title }, [title])
  return null
}
export default TitleManager
