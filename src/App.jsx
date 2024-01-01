import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PUBLIC_ROUTES } from './routes/routes'
import DefaultLayout from './layout/DefaultLayout/Defaultlayout'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import NCSContext from './context/NCSContext/NCSContext'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NCSContext>
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
      </NCSContext>
    </Router>
  )
}

export default App
