import routes from '~/config/routes'

import Discover from '~/pages/Discover/Discover'
import Songs from '~/pages/Songs/Songs'
import Authors from '~/pages/Authors/Authors'
import Favourite from '~/pages/Favourite/Favourite'
import Album from '~/pages/Album/Album'
import SearchResult from '~/pages/SearchResult/SearchResult'

export const PUBLIC_ROUTES = [

  { path: routes.discover, component: Discover },
  { path: routes.songs, component: Songs },
  { path: routes.authors, component: Authors },
  { path: routes.favourite, component: Favourite, layout: null },
  { path: routes.album, component: Album },
  { path: routes.search, component: SearchResult }

]

const PRIVATE_ROUTES = []

