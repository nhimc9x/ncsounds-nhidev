import SideBar from '~/components/SideBar/SideBar'


function DefaultLayout({ children }) {
  return (
    <div className="h-screen overflow-y-auto">

      <SideBar />

      <div className="h-full overflow-y-auto bg-ncs-primary-color p-10">
        <div className="h-[1400px] bg-cyan-300"> {children} </div>
      </div>
    </div>
  )
}

export default DefaultLayout