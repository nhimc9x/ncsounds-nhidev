import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

function SearchBar({ searched }) {

  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState(searched || '')

  const handleSearch = () => {
    if (searchTerm.trim() === '' || searchTerm === searched) return 0
    console.log(searchTerm)
    navigate(`/search?q=${searchTerm}`)
  }

  const handleKeyPress = (e) => {
    e.key === 'Enter' && handleSearch()
  }

  return (
    <div className="flex items-center bg-transparent w-[300px] group rounded-full border border-ncs-text-color overflow-hidden">
      <input
        className='w-full text-sm text-ncs-active-color placeholder:font-light px-4 bg-transparent outline-none'
        type="text"
        placeholder='Search Songs & Authors'
        spellCheck='false'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div
        onClick={handleSearch}
        className="text-lg p-2 text-ncs-text-color cursor-pointer hover:text-ncs-active-color group-focus-within:text-ncs-active-color"
      >
        <FiSearch />
      </div>
    </div>
  )
}

export default SearchBar