import { MdCloudDownload } from 'react-icons/md'
import { useState, useRef, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import TooltipCustom from '../TooltipCustom/TooltipCustom'
import { handleStopPropagation } from '~/utils/StopPropagation'
import AddToPlaylist from './AddToPlaylist/AddToPlaylist'
import AddToFavourite from './AddToFavourite/AddToFavourite'

function ToolBoxCustom({ sx, linkDownload, IDSong }) {

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  let setTimeoutID

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Đóng menu khi click ra ngoài
  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  // // Tự động đóng menu khi, kéo chuột ra ngoài (Fix bug mở nhiều menu cùng lúc)
  const autoHideDropDown = () => {
    setTimeoutID = setTimeout(() => {
      setIsOpen(false)
    }, 1800)
  }

  const clearAutoHide = () => {
    clearTimeout(setTimeoutID)
  }

  useEffect(() => {
    return () => {
      clearTimeout(setTimeoutID)
    }
  }, [isOpen])

  return (
    <div
      onClick={(e) => handleStopPropagation(e)}
      onMouseLeave={autoHideDropDown}
      onMouseEnter={clearAutoHide}
      ref={dropdownRef}
      className={`relative z-[998] ${sx}`}
    >

      <TooltipCustom decription={'More'}>
        <div
          onClick={toggleDropdown}
          className="cursor-pointer rounded-full p-1 text-ncs-text-color transition-all duration-300 hover:bg-ncs-primary-color hover:text-ncs-active-color"
        >
          <BsThreeDotsVertical />
        </div>
      </TooltipCustom>

      {isOpen && (<div className="absolute right-8 -top-2 bg-zinc-800 text-ncs-text-color drop-shadow-sm py-2 rounded-md after:border-t-[10px] after:border-b-[10px] after:border-l-[10px] after:border-t-transparent after:border-b-transparent after:border-l-zinc-800 after:absolute after:-right-[10px] after:top-[10px]">

        <AddToFavourite IDSong={IDSong} />

        <AddToPlaylist IDSong={IDSong} />

        <a href={linkDownload} target="_blank" className="flex items-center gap-2 px-2 py-[2px] hover:bg-zinc-700 cursor-pointer" rel="noreferrer">
          <div className="text-sm">
            <MdCloudDownload />
          </div>
          <div className="text-xs whitespace-nowrap">Dowmload</div>
        </a>
      </div>)}
    </div>
  )
}

export default ToolBoxCustom