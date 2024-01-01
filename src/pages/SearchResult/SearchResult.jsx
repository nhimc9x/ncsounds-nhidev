import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '~/components/Footer/Footer'
import GridSongsList from '~/components/GridSongsList/GridSongsList'
import SearchBar from '~/components/Header/SearchBar/SearchBar'
import { NCSounds } from '~/hocks/useContext'
import NoResultImg from '~/assets/no_result.png'
import { LuSearchX } from 'react-icons/lu'

function SearchResult() {
  const { dataSongs } = useContext(NCSounds)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('q')

  const resultSongs = dataSongs.filter(data =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const resultAuthors = dataSongs.filter(data =>
    data.author.toLowerCase().includes(searchTerm.toLowerCase())
  )
  console.log('Kết quả tác giả: ', resultAuthors)
  console.log('Kết quả bái hát: ', resultSongs)

  return (
    <div>
      <SearchBar searched={searchTerm} />
      <div className="mt-6 mb-3 text-sm text-ncs-text-color">
        The search results for &apos;<span className="text-ncs-active-color">{searchTerm}</span>&apos; :
      </div>
      <div className="mx-auto w-full max-w-screen-2xl">
        {!!resultSongs.length && (
          <div className="mb-5">
            <div className="text-xl font-semibold tracking-wide text-white">Songs</div>
            <GridSongsList dataSongs={resultSongs} />
          </div>
        )}

        {!!resultAuthors.length && (
          <div className="mb-5">
            <div className="text-xl font-semibold tracking-wide text-white">Authors</div>
            <GridSongsList dataSongs={resultAuthors} />
          </div>
        )}

        {!resultSongs.length && !resultAuthors.length && (
          <div className="flex flex-col items-center justify-center font-light text-center px-10 h-[60vh]">
            <div className="text-4xl text-white"><LuSearchX /></div>
            <div className="text-white mt-1 mb-4">No results found</div>
            <div className="text-ncs-text-color text-sm">Please make sure you have spelled it correctly, use fewer keywords, or try different keywords</div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default SearchResult