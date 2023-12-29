import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.getElementById('ncs_content')?.scrollTo(0, 0)
  }, [pathname])
}
