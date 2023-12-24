import { FaPlay } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

function PopularSongs({ dataSongs }) {
  let clonedSongs = [...dataSongs]
  // Lấy 5 bài hát có số views cao nhất
  let dataPupolarSongs = [...clonedSongs.sort((a, b) => b.views - a.views)].splice(0, 5)

  return (
    <div className="h-32p col-span-5 xl:col-span-3">
      <div className="text-xl font-semibold tracking-wide text-white">
        Popular songs
      </div>

      <div className="p-2 xl:px-4 2xl:px-8">
        {dataPupolarSongs.map((data, index) => (
          <div key={index} className="my-2 flex h-12 items-center rounded-lg bg-ncs-secondary-color px-4">
            <div className="hidden text-[#e84393]">
              <FaPlay />
            </div>
            <div className="">
              <img
                className="h-[40px] w-[40px] rounded-full object-cover object-center"
                src={data?.links?.images[1]?.url}
                alt=""
              />
            </div>
            <div className="ml-2 text-ncs-text-color">{data.name}</div>
            <div className="ml-auto mr-3 hidden text-ncs-text-color sm:block">
              {data.author}
            </div>
            <div className="ml-auto cursor-pointer rounded-full p-1 text-xl text-ncs-text-color transition-all duration-300 hover:bg-ncs-primary-color hover:text-ncs-active-color sm:ml-0">
              <BsThreeDotsVertical />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PopularSongs