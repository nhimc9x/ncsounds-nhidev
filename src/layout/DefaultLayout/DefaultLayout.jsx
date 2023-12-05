import SideBar from '~/components/SideBar/SideBar'


function DefaultLayout({ children }) {
  return (
    <div className="h-screen overflow-y-auto">

      <SideBar />

      <div className="h-full overflow-y-auto bg-ncs-primary-color py-4 mdl:px-8 px-4">
        <div className="h-[1400px]"> {children} </div>
      </div>
    </div>
  )
}

export default DefaultLayout