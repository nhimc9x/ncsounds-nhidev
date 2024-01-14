import { useEffect, useState } from 'react'

function Notication({ message, setMessage }) {
  const [showNoti, setShowNoti] = useState(false)

  useEffect(() => {
    let timeoutId
    if (!!message) {
      setShowNoti(true)
      timeoutId = setTimeout(() => {
        setShowNoti(false)
        setMessage(null)
      }, 3000)
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [message, setMessage])

  return (
    <>
      {showNoti && (
        <div className="animate-alert whitespace-nowrap px-3 py-1 font-light text-sm bg-cyan-200 text-emerald-600 border shadow-lg border-emerald-600 fixed z-[1010] top-[80%] left-1/2 -translate-x-1/2 rounded-sm">
          {message}
        </div>
      )}
    </>
  )
}

export default Notication