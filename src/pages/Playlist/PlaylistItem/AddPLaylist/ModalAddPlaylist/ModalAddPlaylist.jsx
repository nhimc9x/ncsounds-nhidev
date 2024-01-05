import { IoCloseOutline } from 'react-icons/io5'
import textIMg from '~/assets/headphone.jpg'
import { FiEdit } from 'react-icons/fi'

function ModalAddPlaylist({ setShowModal }) {
  const handleHideModal = () => {
    setShowModal(false)
  }
  return (
    <div className="bg-black/50 fixed top-0 right-0 left-0 bottom-0">
      <div className="bg-ncs-primary-color w-[500px] h-max absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md">
        <div className="flex justify-between p-4">
          <div className="text-3xl text-white">Create a new playlist</div>
          <div
            onClick={handleHideModal}
            className="text-3xl text-white w-10 h-10 grid place-content-center hover:bg-ncs-secondary-color rounded-full"
          >
            <IoCloseOutline />
          </div>
        </div>
        <div className="flex h-40 gap-4 px-8">
          <div className="bg-ncs-secondary-color w-40 rounded-md overflow-hidden relative group">
            <img className="w-full h-full object-cover object-center group-hover:hidden" src={textIMg} alt="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
              <div className="w-full h-full text-6xl grid place-content-center text-ncs-text-color">
                <FiEdit />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 flex-1">
            <div className="">
              <input className="w-full bg-ncs-secondary-color text-white outline-none font-light px-4 py-2" type="text" placeholder="PLaylist name" />
            </div>
            <div className="">
              <div className="text-ncs-text-color">Set color theme</div>
              <div className="flex justify-center gap-6 mt-2">
                <div className="w-10 h-10 rounded-full bg-green-500 border-[2px] border-white"></div>
                <div className="w-10 h-10 rounded-full bg-pink-500"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div className="select-none bg-ncs-active-color px-3 py-1 rounded-md cursor-pointer font-semibold duration-200 hover:bg-gray-500 hover:text-ncs-active-color">Create</div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddPlaylist