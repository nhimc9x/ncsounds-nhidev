import { IoAlbums } from 'react-icons/io5'
import { useContext } from 'react'
import { HandleTookit } from '~/hocks/useContext'

function AddToPlaylist({ IDSong }) {
  const { setShowModal, setIdSong } = useContext(HandleTookit)
  const handleShowModal = () => {
    setShowModal(true)
    setIdSong(IDSong)
  }
  return (
    <div onClick={handleShowModal} className="flex items-center gap-2 px-2 py-[2px] hover:bg-zinc-700 cursor-pointer">
      <div className="text-sm">
        <IoAlbums />
      </div>
      <div className="text-xs whitespace-nowrap">Add to playlist</div>
    </div>
  )
}

export default AddToPlaylist