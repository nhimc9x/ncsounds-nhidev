import React from 'react'
import { BsSearchHeartFill } from 'react-icons/bs'
import { FaHeadphones } from 'react-icons/fa'
import { ImUser } from 'react-icons/im'
import { IoHeartCircleSharp } from 'react-icons/io5'
import { MdAlbum } from 'react-icons/md'

function DefaultLayout({ children }) {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="float-left h-full w-[300px] bg-ncs-secondary-color px-8 py-2">
        <div className="text-center text-2xl font-semibold uppercase tracking-wide text-ncs-active-color">
          NCSounds
        </div>
        <div className="mt-10">
          <div className="font-medium text-xl text-ncs-text-color">Browse</div>
          <div className="mt-4 ml-4 flex items-center gap-4 font-medium text-ncs-text-color text-lg">
            <BsSearchHeartFill fontSize={'1.2rem'} />
            <div className="">Discover</div>
          </div>
          <div className="mt-4 ml-4 flex items-center gap-4 font-medium text-ncs-text-color text-lg">
            <FaHeadphones fontSize={'1.2rem'} />
            <div className="">Songs</div>
          </div>
          <div className="mt-4 ml-4 flex items-center gap-4 font-medium text-ncs-text-color text-lg">
            <ImUser fontSize={'1.2rem'}/>
            <div className="">Author</div>
          </div>

          <div className="mt-8 font-medium text-xl text-ncs-text-color">Playlist</div>
          <div className="mt-4 ml-4 flex items-center gap-4 font-medium text-ncs-text-color text-lg">
            <IoHeartCircleSharp fontSize={'1.2rem'}/>
            <div className="">Favourite</div>
          </div>
          <div className="mt-4 ml-4 flex items-center gap-4 font-medium text-ncs-text-color text-lg">
            <MdAlbum fontSize={'1.2rem'}/>
            <div className="">Album</div>
          </div>

        </div>
      </div>

      <div className="h-full overflow-y-auto bg-ncs-primary-color p-10">
        <div className="h-[1400px] bg-cyan-300"> {children} </div>
      </div>
    </div>
  )
}

export default DefaultLayout