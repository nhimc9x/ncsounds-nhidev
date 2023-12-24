import Footer from '~/components/Footer/Footer'
import ListAuthors from './ListAuthors/ListAuthors'
import dataSongs from '~/apis/mock_data.json'

function Authors() {
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-2xl">
        <ListAuthors dataApis={dataSongs} />
      </div>
      <Footer />
    </div>

  )
}

export default Authors