import { BiAddToQueue } from 'react-icons/bi'

function AddPlaylist() {
  return (
    <div className="h-44 bg-ncs-secondary-color relative rounded-md overflow-hidden group hover:rounded-none hover:bg-gray-700 duration-300">
      <div className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-6xl text-ncs-text-color group-hover:text-ncs-active-color">
        <BiAddToQueue />
      </div>
    </div>
  )
}

export default AddPlaylist