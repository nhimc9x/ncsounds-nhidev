import { handleStopPropagation } from '~/utils/StopPropagation'
import { IoCloseOutline } from 'react-icons/io5'
import { useContext } from 'react'
import { HandleTookit } from '~/hocks/useContext'
import { NCSounds } from '~/hocks/useContext'


function ModalPlaylist() {
  const { setShowModal, idSong, setMessage } = useContext(HandleTookit)

  const { dataPlaylist } = useContext(NCSounds)

  const handleAddSongToPlaylist = (songs) => {
    if (songs.includes(idSong)) {
      setMessage('This song already exists in the playlist')
      setShowModal(false)
      return 0
    }
    songs.push(idSong)
    setMessage('Add to playlist successfully')
    setShowModal(false)
  }

  return (
    <div
      onClick={(e) => handleStopPropagation(e)}
      className="bg-black/60 fixed top-0 right-0 left-0 bottom-0 z-[1002] ">


      <div className="bg-ncs-primary-color xs:w-[380px] w-[320px] h-max py-1 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md">
        <div className="flex justify-between p-4">
          <div className="text-2xl text-white">My playlist</div>
          <div
            onClick={() => setShowModal(false)}
            className="text-3xl text-white w-10 h-10 grid place-content-center hover:bg-ncs-secondary-color rounded-full"
          >
            <IoCloseOutline />
          </div>
        </div>
        <div className="px-1 pb-4 mx-1">
          <div className="max-h-48 overflow-y-auto">
            <div className="w-full px-2 flex flex-col gap-2">
              {dataPlaylist?.map((data, index) => (
                <div
                  key={index}
                  onClick={() => handleAddSongToPlaylist(data?.songs)}
                  className="cursor-pointer select-none hover:bg-ncs-active-color hover:text-ncs-primary-color h-14 duration-150 bg-ncs-secondary-color rounded-[3px] flex items-center font-medium text-ncs-text-color p-1 gap-2"
                >
                  <div className="size-12">
                    <img className="w-full h-full object-cover object-center rounded-sm" src={data?.image} alt="" />
                  </div>
                  <div className="text-limit flex-1">{data?.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPlaylist
