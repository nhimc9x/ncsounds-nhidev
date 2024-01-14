import { MdCloudDownload } from 'react-icons/md'
import { GoHeartFill } from 'react-icons/go'
import TooltipCustom from '~/components/TooltipCustom/TooltipCustom'
import ToolBoxCustom from '../ToolBoxCustom/ToolBoxCustom'
import { handleStopPropagation } from '~/utils/StopPropagation'
import AddToPlaylist from './AddToPlaylist/AddToPlaylist'


function ToolBar({ ...props }) {
  return (
    <div onClick={handleStopPropagation} className="flex items-center text-base text-ncs-text-color gap-1">
      <TooltipCustom decription="Add to favourite">
        <div className="sms:flex hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
          <GoHeartFill />
        </div>
      </TooltipCustom>

      <AddToPlaylist IDSong={props.IDSong}/>

      <TooltipCustom decription="Download">
        <a href={props.linkDownload} className="sms:flex hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center">
          <MdCloudDownload />
        </a>
      </TooltipCustom>

      <ToolBoxCustom sx="sms:hidden block" linkDownload={props.linkDownload} />
    </div>
  )
}

export default ToolBar