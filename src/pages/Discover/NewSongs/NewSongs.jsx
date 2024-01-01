import { FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import GridSongsList from '~/components/GridSongsList/GridSongsList'
import routes from '~/config/routes'

function NewSongs({ dataSongs }) {


  // Lấy 20 bài hát mới nhất
  let dataNewSongs = dataSongs.slice(-15)

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center pr-8 2xl:pr-14">
        <div className="text-xl font-semibold tracking-wide text-white">
          New songs
        </div>
        <NavLink to={routes.songs} className="text-ncs-text-color text-sm flex items-center hover:text-ncs-active-color">
          <div className="">Show more</div>
          <div className="mt-[2px]">
            <FaAngleRight />
          </div>
        </NavLink>
      </div>
      <GridSongsList dataSongs={dataNewSongs} />
    </div>
  )
}

export default NewSongs