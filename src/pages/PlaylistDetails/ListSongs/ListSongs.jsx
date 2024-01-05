import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'
import Rhythm from '~/assets/aniongs.gif'
import { LuMusic } from 'react-icons/lu'
import { CiSquareMinus } from 'react-icons/ci'
import { FaPlay } from 'react-icons/fa'

function ListSongs({ songsInMyPlaylist, handleDelSongFromPlaylist }) {

  const { handlePlay, idSong } = useContext(NCSounds)

  return (
    <div className="pb-8 px-2">
      {songsInMyPlaylist?.map((data, index) => (
        <div
          onClick={() => handlePlay(data?.id)}
          key={index}
          className={`songs-item ${idSong === data?.id ? 'is-playing' : ''}`}
        >
          <div className="text-ncs-text-color flex items-center gap-3 w-full">
            <div className="">
              <LuMusic />
            </div>
            <div className="w-9 h-9 relative">
              <img className="songs-item-img" src={data?.links?.images[1]?.url} alt="" />
              <div className="songs-icon-play">
                {idSong === data?.id ? <img src={Rhythm} alt="Rhythm" /> : <FaPlay />}
              </div>
            </div>
            <div className="text-limit flex-1">
              <div className="text-sm text-white text-limit">{data?.name}</div>
              <div className="text-xs text-limit">{data?.author}</div>
            </div>

            <div
              onClick={e => handleDelSongFromPlaylist(e, data?.id)}
              className="text-xl text-ncs-text-color w-8 h-8 grid place-content-center hover:text-red-500"
            >
              <CiSquareMinus />
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default ListSongs