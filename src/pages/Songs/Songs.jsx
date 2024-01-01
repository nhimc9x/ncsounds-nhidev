import Footer from '~/components/Footer/Footer'
import ListSongs from './ListSongs/ListSongs'
import About from './About/About'
import TopSongs from './TopSongs/TopSongs'

import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'

function Songs() {
  const { dataSongs } = useContext(NCSounds)

  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <About dataSongs={dataSongs} />

      <TopSongs dataSongs={dataSongs} />

      <ListSongs dataSongs={dataSongs} />

      <Footer />
    </div>
  )
}

export default Songs