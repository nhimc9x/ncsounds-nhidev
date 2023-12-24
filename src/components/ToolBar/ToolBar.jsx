import { MdCloudDownload } from 'react-icons/md'
import { GoHeartFill } from 'react-icons/go'
import { IoAlbums } from 'react-icons/io5'
import { BsThreeDotsVertical } from 'react-icons/bs'
import TooltipCustom from '~/components/TooltipCustom/TooltipCustom'

function ToolBar({ ...props }) {
  return (
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
        <a href={props.linkDownload} className="sms:flex hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
          <MdCloudDownload />
        </a>
      </TooltipCustom>

      <TooltipCustom decription="Show more">
        <div className="flex sms:hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
          <BsThreeDotsVertical />
        </div>
      </TooltipCustom>
    </div>
  )
}

export default ToolBar