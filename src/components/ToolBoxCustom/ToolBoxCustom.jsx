import { MdCloudDownload } from 'react-icons/md'
import { GoHeartFill } from 'react-icons/go'
import { IoAlbums } from 'react-icons/io5'
import { useState, useRef, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import TooltipCustom from '../TooltipCustom/TooltipCustom'
import { handleStopPropagation } from '~/utils/StopPropagation'

function ToolBoxCustom({ sx, linkDownload }) {

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

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

  return (
    <div onClick={handleStopPropagation} ref={dropdownRef} className={`relative z-[998] ${sx}`}>

      <TooltipCustom decription={'More'}>
        <div
          onClick={toggleDropdown}
          className="cursor-pointer rounded-full p-1 text-ncs-text-color transition-all duration-300 hover:bg-ncs-primary-color hover:text-ncs-active-color"
        >
          <BsThreeDotsVertical />
        </div>
      </TooltipCustom>

      {isOpen && (<div className="absolute right-8 -top-2 bg-zinc-800 text-ncs-text-color drop-shadow-sm py-2 rounded-md after:border-t-[10px] after:border-b-[10px] after:border-l-[10px] after:border-t-transparent after:border-b-transparent after:border-l-zinc-800 after:absolute after:-right-[10px] after:top-[10px]">
        <div className="flex items-center gap-2 px-2 py-[2px] hover:bg-zinc-700 cursor-pointer">
          <div className="text-sm">
            <GoHeartFill />
          </div>
          <div className="text-xs whitespace-nowrap">Add to favourite</div>
        </div>
        <div className="flex items-center gap-2 px-2 py-[2px] hover:bg-zinc-700 cursor-pointer">
          <div className="text-sm">
            <IoAlbums />
          </div>
          <div className="text-xs whitespace-nowrap">Add to album</div>
        </div>
        <a href={linkDownload} className="flex items-center gap-2 px-2 py-[2px] hover:bg-zinc-700 cursor-pointer">
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