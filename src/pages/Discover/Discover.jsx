import Header from '~/components/Header/Header'
import { IoPlayCircleOutline } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import SlideDiscover from './SlideDiscover/SlideDiscover'
import dataSongs from '~/apis/mock_data.json'
import walldis from '~/assets/walldis.png'
import headphoneimg from '~/assets/headphone.jpg'

function Discover() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-2xl mx-auto w-full h-[1000px]">
        <div className="grid grid-cols-5">
          <div className="sm:col-span-3 col-span-5 py-8">
            <div className="text-3xl font-semibold tracking-wide text-white mb-4">This week</div>
            <div className="text-ncs-text-color pr-4 mb-3">As I was walking down the road to Bethlehem one night and I looked up to the sky and there.</div>
            <div className="text-ncs-primary-color cursor-pointer tracking-wide text-sm flex items-center gap-1 bg-ncs-active-color w-max px-3 py-1 rounded-2xl hover:bg-gray-500 hover:text-ncs-active-color transition-all duration-300">
              <div className="uppercase font-medium">Play</div>
              <IoPlayCircleOutline />
            </div>
          </div>
          <div className="col-span-2 sm:block hidden relative">
            <div className="absolute top-0">
              <img className='object-cover w-full max-h-[340px]' src={walldis} alt="Wall Discover" />
            </div>
          </div>
        </div>

        <SlideDiscover dataApis={dataSongs} />

        <div className="grid grid-cols-5 gap-2 mt-2">
          <div className="xl:col-span-3 col-span-5 h-32p">
            <div className="text-xl font-semibold text-white tracking-wide">New songs</div>
            <div className="p-2">

              <div className="h-12 bg-ncs-secondary-color rounded-xl flex items-center px-4 my-2">
                <div className="text-[#e84393] hidden">
                  <FaPlay />
                </div>
                <div className="">
                  <img className='h-[40px] w-[40px] object-cover object-center rounded-full' src={headphoneimg} alt="" />
                </div>
                <div className="text-ncs-text-color ml-2">Shape of you</div>
                <div className="ml-auto mr-2 text-ncs-text-color">Alan Walker</div>
                <div className="text-xl text-ncs-text-color">
                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="h-12 bg-ncs-secondary-color rounded-xl flex items-center px-4 my-2">
                <div className="text-[#e84393] hidden">
                  <FaPlay />
                </div>
                <div className="">
                  <img className='h-[40px] w-[40px] object-cover object-center rounded-full' src={headphoneimg} alt="" />
                </div>
                <div className="text-ncs-text-color ml-2">Shape of you</div>
                <div className="ml-auto mr-2 text-ncs-text-color">Alan Walker</div>
                <div className="text-xl text-ncs-text-color">
                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="h-12 bg-ncs-secondary-color rounded-xl flex items-center px-4 my-2">
                <div className="text-[#e84393] hidden">
                  <FaPlay />
                </div>
                <div className="">
                  <img className='h-[40px] w-[40px] object-cover object-center rounded-full' src={headphoneimg} alt="" />
                </div>
                <div className="text-ncs-text-color ml-2">As Long As You Love Me</div>
                <div className="ml-auto mr-2 text-ncs-text-color">Alan Walker</div>
                <div className="text-xl text-ncs-text-color">
                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="h-12 bg-ncs-secondary-color rounded-xl flex items-center px-4 my-2">
                <div className="text-[#e84393] hidden">
                  <FaPlay />
                </div>
                <div className="">
                  <img className='h-[40px] w-[40px] object-cover object-center rounded-full' src={headphoneimg} alt="" />
                </div>
                <div className="text-ncs-text-color ml-2">Shape of you</div>
                <div className="ml-auto mr-2 text-ncs-text-color">Justin Bieber ft. Chance The Rapper</div>
                <div className="text-xl text-ncs-text-color">
                  <BsThreeDotsVertical />
                </div>
              </div>

            </div>
          </div>
          <div className="xl:col-span-2 col-span-5 max-h-[320px]">
            <img className='h-full w-full object-cover object-center rounded-3xl' src={headphoneimg} alt="Headphone Image" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Discover