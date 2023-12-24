import { LuMusic } from 'react-icons/lu'
import { FaPlay } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import './ListSongs.css'
import ToolBar from '~/components/ToolBar/ToolBar'

function ListSongs({ dataApis }) {

  // Các lựa chọn sắp xếp
  const SORTED_BY = {
    NAME: 'name',
    VIEWS: 'views',
    LATEST: 'latest'
  }

  const [sortedSongs, setSortedSongs] = useState([...dataApis])
  const [sortType, setSortType] = useState(null)

  // Sắp xếp danh sách
  useEffect(() => {
    const sorted = [...dataApis]
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
    <div className="mt-4">

      <div className="text-xl font-semibold tracking-wide text-white">
        All songs
      </div>
      <div className="2xl:px-10 xl:px-4 mdl:px-0 mt-2">

        <div className="text-xs leading-[20px] text-white flex items-center gap-3 mb-2">
          <div onClick={() => setSortType(SORTED_BY.NAME)} className={`sort-menu-item ${isActiveType(SORTED_BY.NAME) && 'bg-ncs-active-color text-black'}`}>Name</div>
          <div onClick={() => setSortType(SORTED_BY.VIEWS)} className={`sort-menu-item ${isActiveType(SORTED_BY.VIEWS) && 'bg-ncs-active-color text-black'}`}>Most Views</div>
          <div onClick={() => setSortType(SORTED_BY.LATEST)} className={`sort-menu-item ${isActiveType(SORTED_BY.LATEST) && 'bg-ncs-active-color text-black'}`}>Latest</div>
        </div>

        {sortedSongs.map((data, index) => (
          <div key={index} className="h-[52px] py-1 px-3 border-ncs-secondary-color border-t last:border-b hover:bg-ncs-secondary-color flex justify-between items-center group">
            <div className="text-ncs-text-color flex items-center gap-3">
              <div className="">
                <LuMusic />
              </div>
              <div className="w-9 h-9 relative">
                <img className="w-full h-full rounded-sm object-cover group-hover:brightness-50" src={data?.links?.images[1]?.url} alt="" />
                <div className="hidden group-hover:block text-sm absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                  <FaPlay />
                </div>
              </div>
              <div className="">
                <div className="text-sm text-white">{data.name}</div>
                <div className="text-xs">{data.author}</div>
              </div>
            </div>

            <ToolBar linkDownload={data.url} />

          </div>
        ))}
      </div>
    </div>
  )
}

export default ListSongs