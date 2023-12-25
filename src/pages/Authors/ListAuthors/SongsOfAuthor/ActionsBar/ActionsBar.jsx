import { FaPlay } from 'react-icons/fa'
import { GoHeartFill } from 'react-icons/go'

function ActionsBar() {
  return (
    <div className="mt-2 flex gap-1">
      <div className="group relative h-6 w-6 cursor-pointer overflow-hidden rounded-full transition-all duration-[450ms] hover:w-20">
        <div className="-translate-x-full rounded-full bg-ncs-primary-color py-[2px] pl-8 pr-3 text-sm text-transparent transition-transform duration-[450ms] group-hover:translate-x-0 group-hover:text-ncs-text-color">
          Play
        </div>
        <div className="absolute left-0 top-0 grid h-6 w-6 place-content-center rounded-full bg-ncs-primary-color text-xs text-ncs-text-color group-hover:bg-ncs-active-color group-hover:text-ncs-primary-color">
          <FaPlay className="relative left-[1px]" />
        </div>
      </div>
      <div className="group relative h-6 w-6 cursor-pointer overflow-hidden rounded-full transition-all duration-[450ms] hover:w-[88px]">
        <div className="-translate-x-full rounded-full bg-ncs-primary-color py-[2px] pl-8 pr-3 text-sm text-transparent transition-transform duration-[450ms] group-hover:translate-x-0 group-hover:text-ncs-text-color">
          Follow
        </div>
        <div className="absolute left-0 top-0 grid h-6 w-6 place-content-center rounded-full bg-ncs-primary-color text-sm text-ncs-text-color group-hover:bg-ncs-active-color group-hover:text-ncs-primary-color">
          <GoHeartFill className="relative top-[1px]" />
        </div>
      </div>
    </div>
  );
}

export default ActionsBar
