import AudioPlayerCustom from '~/components/AudioPlayerCustom/AudioPlayerCustom'
import SideBar from '~/components/SideBar/SideBar'
import Notication from '~/components/Notication/Notication'

function DefaultLayout({ children }) {

  return (
    <div className="h-screen overflow-y-auto">
      {/* <Notication /> */}

      <SideBar />

      <div id='ncs_content' className="h-full overflow-y-auto bg-ncs-primary-color py-4 mdl:px-8 px-4">
        <div className=""> {children} </div>
      </div>

      <AudioPlayerCustom />
    </div>
  )
}
export default DefaultLayout