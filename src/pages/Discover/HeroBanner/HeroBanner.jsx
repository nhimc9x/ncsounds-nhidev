import wallpp from '~/assets/wallpp.png'
import { IoPlayCircleOutline } from 'react-icons/io5'

function HeroBanner() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5 py-8 sm:col-span-3">
        <div className="mb-4 text-3xl font-semibold tracking-wide text-white">
          This week
        </div>
        <div className="mb-3 pr-4 text-ncs-text-color">
          As I was walking down the road to Bethlehem one night and I looked
          up to the sky and there.
        </div>
        <div className="flex w-max cursor-pointer items-center gap-1 rounded-2xl bg-ncs-active-color px-3 py-1 text-sm tracking-wide text-ncs-primary-color transition-all duration-300 hover:bg-gray-500 hover:text-ncs-active-color">
          <div className="font-medium uppercase">Play</div>
          <IoPlayCircleOutline />
        </div>
      </div>
      <div className="relative col-span-2 hidden sm:block">
        <div className="absolute top-0">
          <img
            className="w-full max-h-[335px] object-cover"
            src={wallpp}
            alt="Wall Discover"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner