import { FaPlay } from 'react-icons/fa'

function TopSongs({ dataApis }) {
  // Lấy 10 bài hát có số views cao nhất
  let Top10Songs = [...dataApis.sort((a, b) => b.views - a.views)].splice(0, 10)
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
      <div className="mt-4">
        {Top10Songs.map((data, index) => (
          <div key={index} className="h-[52px] py-1 px-3 border-ncs-secondary-color border-t last:border-b hover:bg-ncs-secondary-color flex justify-between items-center group">
            <div className="text-ncs-text-color flex items-center gap-3">
              <div style={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: setNumColor(index) }} className="w-10 tracking-wider text-center text-transparent text-4xl font-bold">
                {index + 1}
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSongs