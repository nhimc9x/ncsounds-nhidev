import { IoCaretBackCircleOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import { TbMusicHeart } from 'react-icons/tb'
import { BsPersonHeart } from 'react-icons/bs'
import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'
import './PersonalSideBar.css'

function PersonalSideBar() {

  const { DTUser, dataPlaylist, dataFavourite } = useContext(NCSounds)

  let totalFollowing = 0
  if (dataFavourite) {
    totalFollowing = dataFavourite?.songs?.length + dataFavourite?.authors?.length
  }

  return (
    <div className="mdl:w-[300px] w-[80px] transition-all duration-300 flex flex-col overflow-y-auto">
      <div className="bg-black/25 mdl:min-h-[260px] min-h-[80px] mb-2">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="bg-white/10 w-max rounded-full p-1">
            <img className="mdl:size-16 size-14 rounded-full object-cover object-top" src={DTUser?.avatar} alt="" />
          </div>
          <div className="mdl:block hidden text-gray-300 mt-1 mb-2">{DTUser?.username}</div>
          <div className="mdl:flex hidden gap-4 text-gray-300">
            <div className="text-center">
              <div className="text-xl text-white">{dataPlaylist?.length}</div>
              <div className="font-thin">Playlist</div>
            </div>
            <div className="text-center">
              <div className="text-xl text-white">{totalFollowing}</div>
              <div className="font-thin">Following</div>
            </div>
            <div className="text-center">
              <div className="text-xl text-white">0</div>
              <div className="font-thin">Follower</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/25 flex-1 p-2 ">
        <NavLink to={'/'}>
          <div className="flex items-center mdl:border-none border-2 border-white hover:border-ncs-primary-color duration-200 mdl:my-0 my-3 justify-center mdl:size-max size-11 rounded-md text-white gap-1 px-2 mdl:mx-0 mx-auto text-lg hover:text-ncs-primary-color mdl:bg-transparent bg-emerald-400">
            <IoCaretBackCircleOutline className="mdl:block hidden" />
            <IoHome className="mdl:hidden block text-2xl" />
            <div className="mdl:block hidden">Back</div>
          </div>
        </NavLink>

        <div className="h-[1px] mdl:hidden block bg-gray-300 my-4"></div>

        <div className="mt-3">
          <NavLink to={'/favourite'} className="ct-navlink">
            <div className="link-item mdl:block hidden text-lg font-extralight text-white ml-10 p-1 relative after:size-2">
              Favorite songs
            </div>
            <div className="link-icon mdl:hidden border-2 border-white hover:border-ncs-primary-color duration-200 flex items-center justify-center size-11 text-white rounded-md bg-pink-400 mx-auto hover:text-ncs-primary-color mb-3">
              <TbMusicHeart className="text-2xl" />
            </div>
          </NavLink>
        </div>

      </div>

    </div>
  )
}

export default PersonalSideBar