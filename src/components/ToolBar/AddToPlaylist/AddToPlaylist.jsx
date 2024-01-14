import TooltipCustom from '~/components/TooltipCustom/TooltipCustom'
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
    <TooltipCustom decription="Add to playlist">
      <div onClick={handleShowModal} className="sms:flex hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
        <IoAlbums />
      </div>
    </TooltipCustom>
  )
}

export default AddToPlaylist