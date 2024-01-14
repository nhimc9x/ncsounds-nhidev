import Footer from '~/components/Footer/Footer'
import TitleManager from '~/components/TitleManager/TitleManager'
import PlaylistItem from './PlaylistItem/PlaylistItem'

function Playlist() {
  return (
    <div>
      <TitleManager title="NCSounds - Playlist" />
      <div className="mx-auto w-full max-w-screen-2xl min-h-[65vh]">
        <div className="text-xl font-semibold tracking-wide text-white">
          My playlist
        </div>
        <PlaylistItem />
      </div>
      <Footer />
    </div>
  )
}

export default Playlist