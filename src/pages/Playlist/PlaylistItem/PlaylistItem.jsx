import { IoPlayCircleOutline } from 'react-icons/io5'
import AddPlaylist from './AddPLaylist/AddPlaylist'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { NCSounds } from '~/hocks/useContext'

function PlaylistItem() {
  const { dataPlaylist } = useContext(NCSounds)
  const [dataMyPlaylist, setDataMyPlaylist] = useState()
  useEffect(() => {
    // setDataMyPlaylist([])
    // setTimeout(() => {
    // }, 2000)
    setDataMyPlaylist(dataPlaylist)
  }, [dataPlaylist])

  return (
    <div className=" my-3 grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 sms:grid-cols-3 sxs:grid-cols-2 grid-cols-1 gap-3 sxs:px-0 px-6 2xl:gap-4 2xl:px-8 ">

      {dataMyPlaylist?.map((data, index) => (
        <div key={index} className="h-44 bg-ncs-secondary-color relative rounded-md overflow-hidden group hover:rounded-none duration-300">
          <img className="w-full h-full object-cover object-center group-hover:brightness-[.3] duration-300" src={data?.image} alt="" />
          <div className="absolute bg-black/80 tracking-wider font-light text-white bottom-0 w-full leading-9 px-1 text-limit group-hover:-bottom-9 duration-300">{data?.title}</div>
          <NavLink to={data?.id} className="hidden group-hover:block cursor-pointer absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl text-ncs-active-color">
            <IoPlayCircleOutline />
          </NavLink>
        </div>
      ))}

      <AddPlaylist />

    </div>
  )
}

export default PlaylistItem