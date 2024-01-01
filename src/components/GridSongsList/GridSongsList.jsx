import { useContext, useState } from 'react'
import { NCSounds } from '~/hocks/useContext'
import ToolBoxCustom from '../ToolBoxCustom/ToolBoxCustom'

function GridSongsList({ dataSongs }) {
  const { handlePlay } = useContext(NCSounds)

  return (
    <div className="my-3 grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 sms:grid-cols-3 grid-cols-2 gap-3 px-0 2xl:gap-4 2xl:px-8">
      {dataSongs?.map((data, index) => (
        <div
          onClick={() => handlePlay(data.id)}
          key={index}
          className="h-max mb-1 cursor-pointer relative group bg-ncs-secondary-color rounded-md p-1.5"
        >
          <div className="h-[120px] overflow-hidden rounded-md">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" src={data?.links?.images[1]?.url} alt="thumbnail" />
          </div>
          <div className="flex justify-between items-center p-1">
            <div className="text-limit">
              <div className="text-white text-sm group-hover:text-ncs-active-color transition-all duration-300 text-limit">{data?.name}</div>
              <div className="text-xs text-ncs-text-color group-hover:text-white transition-all duration-300 text-limit">{data?.author}</div>
            </div>
            <div className="">
              <ToolBoxCustom linkDownload={data?.url} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridSongsList