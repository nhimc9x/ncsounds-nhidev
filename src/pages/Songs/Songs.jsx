import Footer from '~/components/Footer/Footer'
import ListSongs from './ListSongs/ListSongs'
import About from './About/About'
import TopSongs from './TopSongs/TopSongs'

import { useContext } from 'react'
import { NCSounds } from '~/utils/Context'

function Songs() {
  const { mockData } = useContext(NCSounds)

  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <About dataApis={mockData} />

      <TopSongs dataApis={mockData} />

      <ListSongs dataApis={mockData} />

      <Footer />
    </div>
  )
}

export default Songs