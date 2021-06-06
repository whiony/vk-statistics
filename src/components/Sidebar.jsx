import { NavLink } from "react-router-dom";
import s from "./../styles/Icons.module.css"
import { HomeIcon, PostsIcon, CommunityIcon, MessageIcon, MediaIcon, DashboardIcon, SettingsIcon, MoonIcon } from "./Icons";

const Sidebar = () => {
  return <aside className={s.sidebar}>
    <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="logo" className={s.logo} />
    <div>
      <NavLink to="#" activeClassName={s.active}><HomeIcon /></NavLink>
      <NavLink to="#" activeClassName={s.active}><PostsIcon /></NavLink>
      <NavLink to="#" activeClassName={s.active}><CommunityIcon /></NavLink>
      <NavLink to="#" activeClassName={s.active}><MessageIcon /></NavLink>
      <NavLink to="#" activeClassName={s.active}><MediaIcon /></NavLink>
      <NavLink to="/dashboard" activeClassName={s.active}><DashboardIcon selected /></NavLink>
      <NavLink to="#" activeClassName={s.active}><SettingsIcon /></NavLink>
    </div>
    <ThemeButton />
  </aside>
}

const ThemeButton = () => {
  return <div className={s.themeButton}>
    <div className={s.themeCircle}>
      <MoonIcon />
    </div>
  </div>
}

export default Sidebar;