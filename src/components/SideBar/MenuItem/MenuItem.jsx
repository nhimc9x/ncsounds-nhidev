import { NavLink } from 'react-router-dom'
import './MenuItem.css'

function MenuItem( { to, icon, title } ) {
  return (
    <NavLink to={to} className='ncs-menu-item'>
      {icon}
      <div className="">{title}</div>
    </NavLink>
  )
}

export default MenuItem