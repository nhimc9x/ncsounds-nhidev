import { FaRegUserCircle } from 'react-icons/fa'
import SearchBar from './SearchBar/SearchBar'

function Header() {
  return (
    <div className="flex items-center justify-between">

      <SearchBar />

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