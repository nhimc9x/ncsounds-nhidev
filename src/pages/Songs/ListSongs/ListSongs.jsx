import { LuMusic } from 'react-icons/lu'
import { FaPlay } from 'react-icons/fa'
import { useEffect, useState, useContext } from 'react'
import ToolBar from '~/components/ToolBar/ToolBar'
import { NCSounds } from '~/hocks/useContext'
import Rhythm from '~/assets/aniongs.gif'
import './ListSongs.css'

function ListSongs({ dataSongs }) {
  const { handlePlay, idSong, setPlayList } = useContext(NCSounds)

  // Các lựa chọn sắp xếp
  const SORTED_BY = {
    NAME: 'name',
    VIEWS: 'views',
    LATEST: 'latest'
  }

  const [sortedSongs, setSortedSongs] = useState([...dataSongs])
  const [sortType, setSortType] = useState(null)

  // Sắp xếp danh sách
  useEffect(() => {
    const sorted = [...dataSongs]
    switch (sortType) {
    case SORTED_BY.NAME: {
      sorted.sort((a, b) => {
        if (a['name'] < b['name']) return -1
        if (a['name'] > b['name']) return 1
        return 0
      })
    } break

    case SORTED_BY.VIEWS: {
      sorted.sort((a, b) => {
        if (b['views'] < a['views']) return -1
        if (b['views'] > a['views']) return 1
        return 0
      })
    } break

    case SORTED_BY.LATEST: sorted.reverse()
      break
    }
    setSortedSongs(sorted)
  }, [sortType])

  // Active button
  const isActiveType = (type) => {
    return type === sortType
  }

  return (
    <div onClick={() => setPlayList(sortedSongs)} className="mt-4">

      <div id='textxx' className="text-xl font-semibold tracking-wide text-white">
        All songs
      </div>
      <div className="2xl:px-10 xl:px-4 mdl:px-0 mt-2">

        <div className="text-xs leading-[20px] text-white flex items-center gap-3 mb-2">
          <div onClick={() => setSortType(SORTED_BY.NAME)} className={`sort-menu-item ${isActiveType(SORTED_BY.NAME) && 'bg-ncs-active-color text-black'}`}>Name</div>
          <div onClick={() => setSortType(SORTED_BY.VIEWS)} className={`sort-menu-item ${isActiveType(SORTED_BY.VIEWS) && 'bg-ncs-active-color text-black'}`}>Most Views</div>
          <div onClick={() => setSortType(SORTED_BY.LATEST)} className={`sort-menu-item ${isActiveType(SORTED_BY.LATEST) && 'bg-ncs-active-color text-black'}`}>Latest</div>
        </div>

        {sortedSongs.map((data, index) => (
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
              <div className="">
                <ToolBar linkDownload={data?.url} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListSongs
