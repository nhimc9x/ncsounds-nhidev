import Footer from '~/components/Footer/Footer'
import ListAuthors from './ListAuthors/ListAuthors'
import { useContext } from 'react'
import { NCSounds } from '~/utils/Context'

function Authors() {
  const { mockData } = useContext(NCSounds)
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-2xl">
        <ListAuthors dataApis={mockData} />
      </div>
      <Footer />
    </div>

  )
}

export default Authors