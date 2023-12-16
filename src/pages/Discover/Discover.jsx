import Header from '~/components/Header/Header'
import { IoPlayCircleOutline } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import SlideDiscover from './SlideDiscover/SlideDiscover'
import dataSongs from '~/apis/mock_data.json'
import wallpp from '~/assets/wallpp.png'
import headphoneimg from '~/assets/headphone.jpg'
import headphoneimg2 from '~/assets/hed.jpg'
import NewSongs from './NewSongs/NewSongs'

function Discover() {
  return (
    <div>
      <Header />
      <div className="mx-auto h-[1000px] w-full max-w-screen-2xl">
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
                className="w-full object-cover"
                src={wallpp}
                alt="Wall Discover"
              />
            </div>
          </div>
        </div>

        <SlideDiscover dataApis={dataSongs} />

        <div className="mt-2 grid grid-cols-5 gap-2">
          <div className="h-32p col-span-5 xl:col-span-3">
            <div className="text-xl font-semibold tracking-wide text-white">
              Popular songs
            </div>

            <div className="p-2 xl:px-4 2xl:px-8">
              <div className="my-2 flex h-12 items-center rounded-xl bg-ncs-secondary-color px-4">
                <div className="hidden text-[#e84393]">
                  <FaPlay />
                </div>
                <div className="">
                  <img
                    className="h-[40px] w-[40px] rounded-full object-cover object-center"
                    src={headphoneimg}
                    alt=""
                  />
                </div>
                <div className="ml-2 text-ncs-text-color">Shape of you</div>
                <div className="ml-auto mr-3 hidden text-ncs-text-color sm:block">
                  Alan Walker
                </div>
                <div className="ml-auto cursor-pointer rounded-full p-1 text-xl text-ncs-text-color transition-all duration-300 hover:bg-ncs-primary-color hover:text-ncs-active-color sm:ml-0">
                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="my-2 flex h-12 items-center rounded-xl bg-ncs-secondary-color px-4">
                <div className="hidden text-[#e84393]">
                  <FaPlay />
                </div>
                <div className="">
                  <img
                    className="h-[40px] w-[40px] rounded-full object-cover object-center"
                    src={headphoneimg}
                    alt=""
                  />
                </div>
                <div className="ml-2 text-ncs-text-color">Shape of you</div>
                <div className="ml-auto mr-3 hidden text-ncs-text-color sm:block">
                  Alan Walker
                </div>
                <div className="ml-auto cursor-pointer rounded-full p-1 text-xl text-ncs-text-color transition-all duration-300 hover:bg-ncs-primary-color hover:text-ncs-active-color sm:ml-0">
                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="my-2 flex h-12 items-center rounded-xl bg-ncs-secondary-color px-4">
                <div className="hidden text-[#e84393]">
                  <FaPlay />
                </div>
                <div className="">
                  <img
                    className="h-[40px] w-[40px] rounded-full object-cover object-center"
                    src={headphoneimg}
                    alt=""
                  />
                </div>
                <div className="ml-2 text-ncs-text-color">
                  As Long As You Love Me
                </div>
                <div className="ml-auto mr-3 hidden text-ncs-text-color sm:block">
                  Alan Walker
                </div>
                <div className="ml-auto cursor-pointer rounded-full p-1 text-xl text-ncs-text-color transition-all duration-300 hover:bg-ncs-primary-color hover:text-ncs-active-color sm:ml-0">
                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="my-2 flex h-12 items-center rounded-xl bg-ncs-secondary-color px-4">
                <div className="hidden text-[#e84393]">
                  <FaPlay />
                </div>
                <div className="">
                  <img
                    className="h-[40px] w-[40px] rounded-full object-cover object-center"
                    src={headphoneimg}
                    alt=""
                  />
                </div>
                <div className="ml-2 text-ncs-text-color">Shape of you</div>
                <div className="ml-auto mr-3 hidden text-ncs-text-color sm:block">
                  Justin Bieber ft. Chance The Rapper
                </div>
                <div className="ml-auto cursor-pointer rounded-full p-1 text-xl text-ncs-text-color transition-all duration-300 hover:bg-ncs-primary-color hover:text-ncs-active-color sm:ml-0">
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 max-h-[320px] xl:col-span-2">
            <img
              className="h-full w-full rounded-3xl object-cover object-center"
              src={headphoneimg2}
              alt="Headphone Image"
            />
          </div>
        </div>

        <NewSongs dataApis={dataSongs} />

      </div>
    </div>
  )
}

export default Discover