import { BsSearchHeartFill } from 'react-icons/bs'
import { FaHeadphones } from 'react-icons/fa'
import { ImUser } from 'react-icons/im'
import { GoHeartFill } from 'react-icons/go'
import { IoAlbums } from 'react-icons/io5'
import routes from '~/config/routes'
import MenuItem from './MenuItem/MenuItem'
import logo_gif from '../../assets/Yw76.gif'
function SideBar() {
  return (
    <div className="float-left h-full w-[300px] bg-ncs-secondary-color px-8 py-2">
      <div className="flex justify-center items-center gap-2">
        <img className='h-8' src={logo_gif} alt="logo_gif" />
        <div id='text-12' className="text-3xl font-semibold uppercase tracking-wider text-ncs-active-color">NCSounds</div>
      </div>
      <div className="mt-14">
        <div className="font-medium text-xl text-ncs-text-color">Browse</div>

        <MenuItem to={routes.discover} icon={<BsSearchHeartFill />} title={'Discover'} />
        <MenuItem to={routes.songs} icon={<FaHeadphones />} title={'Songs'} />
        <MenuItem to={routes.author} icon={<ImUser />} title={'Author'} />

        <div className="font-medium text-xl text-ncs-text-color mt-10">Playlist</div>

        <MenuItem to={routes.favourite} icon={<GoHeartFill />} title={'Favourite'} />
        <MenuItem to={routes.album} icon={<IoAlbums />} title={'Album'} />

      </div>
    </div>
  )
}

export default SideBar