import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'
import { LuMusic } from 'react-icons/lu'
import ToolBar from '~/components/ToolBar/ToolBar'
import Rhythm from '~/assets/aniongs.gif'

function SongsOfAuthor({ dataSongsOfAuthor }) {
  const { handlePlay, idSong } = useContext(NCSounds)

  return (
    <div className=" bg-ncs-secondary-color border-t-2 border-ncs-primary-color p-4 animate-show-in origin-top">

      {dataSongsOfAuthor.map((data, index) => (
        <div
          key={index}
          className="flex items-center bg-ncs-primary-color px-3 mb-[6px] last:mb-0 hover:bg-gray-700 cursor-pointer"
          onClick={() => handlePlay(data?.id)}
        >
          <div className="h-12 flex items-center gap-3 w-full">
            <div className="text-ncs-text-color">
              {idSong === data?.id ? <img className="w-4 h-4" src={Rhythm} alt="Rhythm" /> : <LuMusic />}
            </div>
            <div className="w-10 h-10 relative">
              <img className="h-full w-full object-cover object-center rounded-full" src={data?.links?.images[1]?.url} alt="" />
            </div>
            <div className="text-ncs-text-color flex-1 text-limit">{data?.name}</div>
            <div className="">
              <ToolBar linkDownload={data?.url} />
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default SongsOfAuthor