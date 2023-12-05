import Header from '~/components/Header/Header'
import { IoPlayCircleOutline } from 'react-icons/io5'

function Discover() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-2xl mx-auto w-full h-[1000px]">
        <div className="grid grid-cols-5">
          <div className="col-span-3 py-8">
            <div className="text-3xl font-semibold tracking-wide text-white mb-4">This week</div>
            <div className="text-ncs-text-color pr-4 mb-3">As I was walking down the road to Bethlehem one night and I looked up to the sky and there.</div>
            <div className="text-ncs-primary-color cursor-pointer tracking-wide text-sm flex items-center gap-1 bg-ncs-active-color w-max px-3 py-1 rounded-2xl hover:bg-gray-500 hover:text-ncs-active-color transition-all duration-300">
              <div className="uppercase font-medium">Play</div>
              <IoPlayCircleOutline />
            </div>
          </div>
          <div className="bg-green-300 col-span-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Discover