import { FaCheck } from 'react-icons/fa'
import { FcMusic } from 'react-icons/fc'
import { BsChevronRight } from 'react-icons/bs'
import { useState } from 'react'
import SongsOfAuthor from './SongsOfAuthor/SongsOfAuthor'
import ActionsBar from './SongsOfAuthor/ActionsBar/ActionsBar'

function ListAuthors({ dataSongs }) {
  let uniqueAuthors = [...new Set(dataSongs.map(data => data?.author))]
  let dataAuthor = uniqueAuthors.map(author => {
    const dataForAuthor = dataSongs.find(data => data.author === author)
    return { author: author, imageUrl: dataForAuthor?.links?.images[0]?.url}
  })

  // Hàm lấy dữ liệu từ data theo tên tác giả
  const getSongsOfAuthor = (authorName) => dataSongs.filter(data => data.author === authorName).map(data => data)
  const totalViews = (authorName) => {
    return getSongsOfAuthor(authorName).reduce((totalViews, data) => totalViews + data.views, 0)
  }

  const [show, setShow] = useState(null)
  const handleShowSongsOfAuthor = (author) => {
    show === author ? setShow(null) : setShow(author)
  }
  const isShow = (author) => show === author

  return (
    <div className="">
      <div className="text-xl font-semibold tracking-wide text-white mb-2">All authors</div>
      {dataAuthor.map((data, index) => (
        <div key={index} className="mb-3 last:mb-0">
          <div
            onClick={() => handleShowSongsOfAuthor(data.author)}
            className="bg-ncs-secondary-color p-2 flex gap-2">
            <div className="w-20 h-20">
              <img className="w-full h-full rounded object-cover object-center" src={data.imageUrl} alt="" />
            </div>

            <div className="flex flex-col flex-1 text-limit">
              <div className="flex items-center gap-1">
                <div className="text-lg text-white font-medium tracking-wide xs:w-fit w-full overflow-hidden text-ellipsis">{data.author}</div>
                <div className="text-white w-max h-max rounded-full p-1 text-[8px] bg-[#3388dd] xs:block hidden">
                  <FaCheck />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="">
                  <FcMusic />
                </div>
                <div className="text-sm text-ncs-text-color">{`${getSongsOfAuthor(data.author).length} Songs`}</div>
                <div className="text-sm xs:block hidden text-ncs-text-color">{`- ${totalViews(data.author)} Views`}</div>
              </div>

              <ActionsBar dataSongsOfAuthor={getSongsOfAuthor(data.author)} />
            </div>

            <div className="text-xl ml-auto pr-1 sms:pr-4 text-ncs-text-color self-center">
              <BsChevronRight className={`transition-all duration-200 ease-in-out ${isShow(data.author) && 'rotate-90 '}`} />
            </div>

          </div>

          {isShow(data.author) && <SongsOfAuthor dataSongsOfAuthor={getSongsOfAuthor(data.author)}/>}

        </div>
      ))}
    </div>
  )
}

export default ListAuthors