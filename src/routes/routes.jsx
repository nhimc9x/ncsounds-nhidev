import routes from '~/config/routes'

import Discover from '~/pages/Discover/Discover'
import Songs from '~/pages/Songs/Songs'
import Author from '~/pages/Author/Author'
import Favourite from '~/pages/Favourite/Favourite'
import Album from '~/pages/Album/Album'

export const PUBLIC_ROUTES = [

  { path: routes.discover, component: Discover },
  { path: routes.songs, component: Songs },
  { path: routes.author, component: Author },
  { path: routes.favourite, component: Favourite, layout: null },
  { path: routes.album, component: Album }

]

const PRIVATE_ROUTES = []

