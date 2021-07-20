import { NavLink } from "react-router-dom";
import s from "./../styles/Icons.module.css"
import { HomeIcon, PostsIcon, CommunityIcon, MessageIcon, MediaIcon, DashboardIcon, SettingsIcon, MoonIcon } from "./Icons";
import Toggle from "./Theme/Toggle";
import { useDarkMode } from "./Theme/useDarkMode";
import { lightTheme, darkTheme } from "./Theme/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Theme/GlobalStyles";

const Sidebar = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return <aside className={`${s.sidebar} sidebar`}>
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className={s.fixed}>
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
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
      </>
    </ThemeProvider>
  </aside>
}

export default Sidebar;