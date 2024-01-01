import Footer from '~/components/Footer/Footer'
import ListAuthors from './ListAuthors/ListAuthors'
import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'

function Authors() {
  const { dataSongs } = useContext(NCSounds)
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-2xl">
        <ListAuthors dataSongs={dataSongs} />
      </div>
      <Footer />
    </div>

  )
}

export default Authors