import { FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
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
      <div className="my-3 grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 sms:grid-cols-3 grid-cols-2 gap-3 px-0 2xl:gap-4 2xl:px-8">
        {dataNewSongs.map((data, index) => (
          <div key={index} className="h-40 mb-1 cursor-pointer">
            <div className="h-[120px] overflow-hidden rounded-md group">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" src={data?.links?.images[1]?.url} alt="thumbnail" />
            </div>
            <div className="pl-1 mt-1 group">
              <div className="text-white text-sm group-hover:text-ncs-active-color">{data?.name}</div>
              <div className="text-xs text-ncs-text-color group-hover:text-white">{data?.author}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default NewSongs