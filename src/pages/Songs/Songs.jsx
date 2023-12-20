import Footer from '~/components/Footer/Footer'
import ListSongs from './ListSongs/ListSongs'
import dataSongs from '~/apis/mock_data.json'
import About from './About/About'
import TopSongs from './TopSongs/TopSongs'

function Songs() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <About dataApis={dataSongs} />

      <TopSongs dataApis={dataSongs} />

      <ListSongs dataApis={dataSongs} />

      <Footer />
    </div>
  )
}

export default Songs