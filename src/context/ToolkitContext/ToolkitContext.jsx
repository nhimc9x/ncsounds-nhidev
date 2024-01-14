import { useState } from 'react'
import ModalPlaylist from './ModalPlaylist/ModalPlaylist'
import { HandleTookit } from '~/hocks/useContext'
import Notication from '~/components/Notication/Notication'

function ToolkitContext({ children }) {

  const [showModal, setShowModal] = useState(false)

  const [idSong, setIdSong] = useState()

  const [message, setMessage] = useState()

  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <HandleTookit.Provider value={{ handleShowModal, setShowModal, idSong, setIdSong, setMessage }} >
      {}
      <Notication message={message} setMessage={setMessage} />
      {showModal && (<ModalPlaylist />)}
      {children}
    </HandleTookit.Provider>
  )
}

export default ToolkitContext