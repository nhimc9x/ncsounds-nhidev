import { LuMusic } from 'react-icons/lu'
import { FaPlay } from 'react-icons/fa'
import { MdCloudDownload } from 'react-icons/md'
import { GoHeartFill } from 'react-icons/go'
import { IoAlbums } from 'react-icons/io5'
import { BsThreeDotsVertical } from 'react-icons/bs'
import TooltipCustom from '~/components/TooltipCustom/TooltipCustom'

function ListSongs({ dataApis }) {
  let listSongs = [...dataApis]
  return (
    <div className="2xl:px-10 xl:px-4 mdl:px-0 mt-4">
      {listSongs.map((data, index) => (
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

          <div className="flex items-center text-base text-ncs-text-color gap-1">

            <TooltipCustom decription="Add to favourite">
              <div className="sms:flex hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
                <GoHeartFill />
              </div>
            </TooltipCustom>
            <TooltipCustom decription="Add to album">
              <div className="sms:flex hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
                <IoAlbums />
              </div>
            </TooltipCustom>
            <TooltipCustom decription="Download">
              <a href={data.url} className="sms:flex hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
                <MdCloudDownload />
              </a>
            </TooltipCustom>

            <TooltipCustom decription="Show more">
              <div className="flex sms:hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
                <BsThreeDotsVertical />
              </div>
            </TooltipCustom>

          </div>
        </div>
      ))}


    </div>
  )
}

export default ListSongs