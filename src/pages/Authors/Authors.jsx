import Footer from '~/components/Footer/Footer'
import ListAuthors from './ListAuthors/ListAuthors'
import TitleManager from '~/components/TitleManager/TitleManager'
import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'

function Authors() {
  const { dataSongs } = useContext(NCSounds)
  return (
    <div>
      <TitleManager title="NCSounds - Authors" />
      <div className="mx-auto w-full max-w-screen-2xl">
        <ListAuthors dataSongs={dataSongs} />
      </div>
      <Footer />
    </div>

  )
}

export default Authors