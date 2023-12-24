import { LuMusic } from 'react-icons/lu'
import ToolBar from '~/components/ToolBar/ToolBar'

function SongsOfAuthor({ dataSong }) {

  return (
    <div className=" bg-ncs-secondary-color border-t-2 border-ncs-primary-color p-4">

      {dataSong.map((data, index) => (
        <div key={index} className="flex justify-between items-center bg-ncs-primary-color px-3 mb-[6px] last:mb-0 hover:bg-gray-700 cursor-pointer">
          <div className="h-12 flex items-center gap-3">
            <div className="text-ncs-text-color">
              <LuMusic />
            </div>
            <div className="w-10 h-10">
              <img className="h-full w-full object-cover object-center rounded-full" src={data?.links?.images[1]?.url} alt="" />
            </div>
            <div className="text-ncs-text-color">{data?.name}</div>
          </div>
          <ToolBar linkDownload={data?.url}/>
        </div>
      ))}

    </div>
  )
}

export default SongsOfAuthor