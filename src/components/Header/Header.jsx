import { FiSearch } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'

function Header() {
  return (
    <div className="flex items-center justify-between pr-4">
      <div className="flex items-center bg-transparent w-[300px] rounded-full border border-ncs-text-color overflow-hidden">
        <input className='w-full text-sm text-ncs-active-color placeholder:font-light px-4 bg-transparent outline-none' type="text" placeholder='Search Tracks & Artist' />
        <div className="text-lg p-2 text-ncs-active-color cursor-pointer">
          <FiSearch />
        </div>
      </div>
      <div className="flex items-center text-ncs-active-color ml-2 gap-2">
        <div className="sms:block hidden">vuvannhi7703</div>
        <div className="text-2xl">
          <FaRegUserCircle />
        </div>
      </div>
    </div>
  )
}

export default Header