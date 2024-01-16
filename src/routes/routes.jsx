import routes from '~/config/routes'

import Discover from '~/pages/Discover/Discover'
import Songs from '~/pages/Songs/Songs'
import Authors from '~/pages/Authors/Authors'
import Favourite from '~/pages/Favourite/Favourite'
import Playlist from '~/pages/Playlist/Playlist'
import SearchResult from '~/pages/SearchResult/SearchResult'
import PlayListDetails from '~/pages/PlaylistDetails/PlayListDetails'
import PersonalLayout from '~/layout/PersonalLayout/PersonalLayout'

export const PUBLIC_ROUTES = [

  { path: routes.discover, component: Discover },
  { path: routes.songs, component: Songs },
  { path: routes.authors, component: Authors },
  { path: routes.playlist, component: Playlist },
  { path: routes.playlist_details, component: PlayListDetails },
  { path: routes.search, component: SearchResult },
  { path: routes.favourite, component: Favourite, layout: PersonalLayout }

]

const PRIVATE_ROUTES = []

