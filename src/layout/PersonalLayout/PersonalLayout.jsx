import PersonalHeader from './components/PersonalHeader/PersonalHeader'
import PersonalSideBar from './components/PersonalSideBar/PersonalSideBar'

function PersonalLayout({ children }) {
  return (
    <div className="h-screen overflow-y-auto">

      <PersonalHeader />
      <div className="fixed z-0 top-0 right-0 left-0 bottom-0 bg-[url('https://www.wallpaperflare.com/static/881/933/146/space-universe-tylercreatesworlds-green-wallpaper.jpg')] bg-right bg-cover"></div>
      <div id='ncs_content' className="relative z-10 pt-16 gap-2 flex h-screen overflow-y-auto bg-gradient-to-r from-cyan-600/70 to-emerald-800/70">
        <PersonalSideBar />
        <div className="bg-black/25 flex-1 h-full overflow-y-auto p-4"> {children} </div>
      </div>

    </div>
  )
}

export default PersonalLayout