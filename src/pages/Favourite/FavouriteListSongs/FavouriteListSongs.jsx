import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'
import { FaPlay } from 'react-icons/fa'
import Rhythm from '~/assets/aniongs.gif'
import { LuMusic } from 'react-icons/lu'
import { GoHeartFill } from 'react-icons/go'
import { MdCloudDownload } from 'react-icons/md'
import { handleStopPropagation } from '~/utils/StopPropagation'
import '../Favourite.css'

function FavouriteListSongs({ myFavoriteSongs, handleDelSongFromFavourite }) {

  const { handlePlay, idSong } = useContext(NCSounds)

  return (
    <div className="2xl:px-8 px-4 py-4">
      {myFavoriteSongs?.map((data, index) => (
        <div
          onClick={() => handlePlay(data?.id)}
          key={index}
          className={`fav-songs-item ${idSong === data?.id ? 'is-playing' : ''}`}
        >
          <div className="text-ncs-text-color flex items-center gap-3 w-full">
            <div className="">
              <LuMusic />
            </div>
            <div className="w-9 h-9 relative">
              <img className="fav-songs-item-img" src={data?.links?.images[1]?.url} alt="" />
              <div className="fav-songs-icon-play">
                {idSong === data?.id ? <img src={Rhythm} alt="Rhythm" /> : <FaPlay />}
              </div>
            </div>
            <div className="text-limit flex-1">
              <div className="text-sm text-white text-limit">{data?.name}</div>
              <div className="text-xs text-limit">{data?.author}</div>
            </div>

            <div
              className="text-lg text-ncs-text-color flex items-center"
            >
              <div
                onClick={e => handleDelSongFromFavourite(e, data?.id)}
                className="px-2 grid place-content-center text-pink-400 hover:text-blue-400"
              >
                <GoHeartFill className="" />
              </div>
              <a

                href={data?.url}
                onClick={handleStopPropagation}
                className="px-2 grid place-content-center hover:text-emerald-400"
              >
                <MdCloudDownload />
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default FavouriteListSongs