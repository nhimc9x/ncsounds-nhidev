import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { PUBLIC_ROUTES } from './routes/routes'
import DefaultLayout from './layout/DefaultLayout/Defaultlayout'
import routes from './config/routes'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="bg-slate-800 text-white">
          <NavLink to={routes.discover} > Discover</NavLink>
          <NavLink to={routes.songs} > Songs</NavLink>
          <NavLink to={routes.author} > Author</NavLink>
          <NavLink to={routes.favourite} > Favourite</NavLink>
          <NavLink to={routes.album} > Album</NavLink>
        </div> */}
        <Routes>
          {PUBLIC_ROUTES.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
