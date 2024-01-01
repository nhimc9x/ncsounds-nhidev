import { FaPlay } from 'react-icons/fa'
import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'

function TopSongs({ dataSongs }) {
  const { handlePlay } = useContext(NCSounds)


  // Lấy 10 bài hát có số views cao nhất
  const clonedataSongs = [...dataSongs]
  const top10Songs = [...clonedataSongs.sort((a, b) => b.views - a.views)].splice(0, 10)
  let numberColor = {
    no1color: '#4a90e2',
    no2color: '#50e3c2',
    no3color: '#e35050',
    othercolor: '#a3a1be'
  }
  //Hàm set màu các số top 1,2,3...
  const setNumColor = (index) => {
    switch (index) {
    case 0: return numberColor.no1color
    case 1: return numberColor.no2color
    case 2: return numberColor.no3color
    default: return numberColor.othercolor
    }
  }
  return (
    <div className="mt-4">
      <div className="text-xl font-semibold tracking-wide text-white">
        Top 10
      </div>
      <div className="my-3 grid grid-cols-2 gap-3 px-0 sms:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 2xl:gap-4 2xl:px-8">
        {top10Songs.map((data, index) => (
          <div key={index} className="mb-1 h-40 cursor-pointer">
            <div className="group relative h-[120px] overflow-hidden rounded-md">
              <img
                className="h-full w-full object-cover group-hover:brightness-50 transition-all duration-200"
                src={data?.links?.images[1]?.url}
                alt="thumbnail"
              />
              <div
                style={{
                  WebkitTextStrokeWidth: '1.4px',
                  WebkitTextStrokeColor: setNumColor(index)
                }}
                className="absolute left-0 select-none top-0 w-10 rounded-ee-md drop-shadow bg-black/50 backdrop-blur-sm text-center text-4xl font-bold tracking-wider text-transparent"
              >
                {index + 1}
              </div>
              <div
                onClick={() => handlePlay(data?.id)}
                className="absolute bottom-2 right-2 grid h-8 w-8 translate-y-6 place-items-center rounded-full bg-ncs-active-color pl-[2px] text-sm text-ncs-primary-color
                opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <FaPlay />
              </div>

            </div>
            <div className="group mt-1 px-1">
              <div className="text-limit text-sm text-white group-hover:text-ncs-active-color">
                {data?.name}
              </div>
              <div className="text-xs text-ncs-text-color group-hover:text-white">
                {data?.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSongs